<?php
/**
 * form_builder.php — order-form wizard designer (steps + dynamic fields).
 *
 * Steps:
 *   GET    form_builder.php                     → full tree (form_builder.read)
 *   POST   form_builder.php?step=1              → create step { title }
 *   PUT    form_builder.php?step_id=<n>         → rename step { title }
 *   DELETE form_builder.php?step_id=<n>         → delete step + its fields
 *   PUT    form_builder.php?reorder_steps=1     → { order: [id, ...] }
 *
 * Fields:
 *   POST   form_builder.php?step_id=<n>&field=1 → create field (form_builder.write)
 *   PUT    form_builder.php?field_id=<n>        → update field
 *   DELETE form_builder.php?field_id=<n>        → delete field
 *   PUT    form_builder.php?reorder_fields=1    → { order: [id, ...] }
 *
 * Field body fields: field_key (sanitized to [a-z0-9_], globally unique),
 * label, type (text|tel|number|textarea|select|segmented|file), icon_name,
 * placeholder, is_required, options [{value,label,icon?}], depends_on
 * (must be an existing field_key in the same step), depends_value.
 *
 * Improvements over legacy form_builder.php:
 *   - options are structured JSON (no more "value|label|icon" line parsing)
 *   - depends_on is validated against real fields (legacy accepted anything)
 *   - step rename + step reorder (legacy had neither)
 *   - every change is audit-logged
 */

require_once __DIR__ . '/_lib.php';

$method = $_SERVER['REQUEST_METHOD'];
const FB_FIELD_TYPES = ['text', 'tel', 'number', 'textarea', 'select', 'segmented', 'file'];

function step_row(array $row): array
{
    return [
        'id'         => (int) $row['id'],
        'title'      => $row['title'],
        'sort_order' => (int) $row['sort_order'],
        'fields'     => [],
    ];
}

function field_row(array $row): array
{
    $options = $row['options'] === null ? null : json_decode((string) $row['options'], true);
    return [
        'id'            => (int) $row['id'],
        'step_id'       => (int) $row['step_id'],
        'field_key'     => $row['field_key'],
        'label'         => $row['label'],
        'type'          => $row['type'],
        'icon_name'     => $row['icon_name'],
        'options'       => is_array($options) ? $options : null,
        'placeholder'   => $row['placeholder'],
        'is_required'   => (bool) $row['is_required'],
        'sort_order'    => (int) $row['sort_order'],
        'is_active'     => (bool) $row['is_active'],
        'depends_on'    => $row['depends_on'],
        'depends_value' => $row['depends_value'],
    ];
}

/** Full tree: steps ordered, each with its ordered fields. */
function form_tree(): array
{
    $pdo = db();
    $steps = [];
    foreach ($pdo->query('SELECT * FROM form_steps ORDER BY sort_order, id')->fetchAll(PDO::FETCH_ASSOC) as $s) {
        $step = step_row($s);
        $step['fields'] = [];
        $steps[$step['id']] = $step;
    }
    foreach ($pdo->query('SELECT * FROM form_fields ORDER BY step_id, sort_order, id')->fetchAll(PDO::FETCH_ASSOC) as $f) {
        if (isset($steps[(int) $f['step_id']])) {
            $steps[(int) $f['step_id']]['fields'][] = field_row($f);
        }
    }
    return array_values($steps);
}

function fetch_step(int $id): ?array
{
    $stmt = db()->prepare('SELECT * FROM form_steps WHERE id = :id');
    $stmt->execute(['id' => $id]);
    $row = $stmt->fetch();
    return $row ?: null;
}

function fetch_field(int $id): ?array
{
    $stmt = db()->prepare('SELECT * FROM form_fields WHERE id = :id');
    $stmt->execute(['id' => $id]);
    $row = $stmt->fetch();
    return $row ?: null;
}

/** Normalized field payload from JSON/multipart body. */
function field_payload(?int $currentFieldId, int $targetStepId): array
{
    $body = array_merge($_POST, request_json());

    $key = preg_replace('/[^a-zA-Z0-9_]/', '_', clean_str($body['field_key'] ?? ''));

    // Options: structured array of {value,label,icon?}.
    $options = $body['options'] ?? null;
    if (is_string($options)) {
        $options = json_decode($options, true);
    }
    $optionsJson = null;
    if (is_array($options)) {
        $clean = [];
        foreach ($options as $opt) {
            if (!is_array($opt)) continue;
            $value = clean_str((string) ($opt['value'] ?? ''));
            $label = clean_str((string) ($opt['label'] ?? ''));
            if ($value === '' || $label === '') continue;
            $item = ['value' => $value, 'label' => $label];
            if (!empty($opt['icon'])) {
                $item['icon'] = clean_str((string) $opt['icon']);
            }
            $clean[] = $item;
        }
        $optionsJson = $clean ? json_encode($clean, JSON_UNESCAPED_UNICODE) : null;
    }

    // depends_on must exist among the OTHER fields of the same step.
    $dependsOn = clean_str($body['depends_on'] ?? '');
    if ($dependsOn !== '') {
        $stmt = db()->prepare(
            'SELECT COUNT(*) FROM form_fields
              WHERE step_id = :s AND field_key = :k AND id <> :self'
        );
        $stmt->execute(['s' => $targetStepId, 'k' => $dependsOn, 'self' => $currentFieldId ?? 0]);
        if ((int) $stmt->fetchColumn() === 0) {
            json_response(['error' => 'فیلد وابستگی «' . $dependsOn . '» در این گام وجود ندارد.'], 422);
        }
    }

    $type = clean_str($body['type'] ?? 'text');
    if (!in_array($type, FB_FIELD_TYPES, true)) {
        json_response(['error' => 'نوع فیلد نامعتبر است.'], 422);
    }

    return [
        'field_key'     => $key,
        'label'         => clean_str($body['label'] ?? ''),
        'type'          => $type,
        'icon_name'     => clean_str($body['icon_name'] ?? ''),
        'placeholder'   => clean_str($body['placeholder'] ?? ''),
        'is_required'   => (int) (bool) ($body['is_required'] ?? false),
        'options'       => $optionsJson,
        'depends_on'    => $dependsOn,
        'depends_value' => clean_str($body['depends_value'] ?? ''),
    ];
}

/** Duplicate field_key → friendly Persian error, mirroring legacy behavior. */
function fb_key_conflict(Throwable $ex): void
{
    if (str_contains($ex->getMessage(), 'uniq_field_key')) {
        json_response(['error' => 'این کلید فیلد قبلا استفاده شده؛ کلید دیگری انتخاب کنید.'], 409);
    }
}

switch ($method) {
    /* --------------------------------------------------------------------
     * GET — full tree
     * ------------------------------------------------------------------ */
    case 'GET':
        require_admin('form_builder.read');
        json_response(['data' => ['steps' => form_tree()]]);

    /* --------------------------------------------------------------------
     * POST — create step or field
     * ------------------------------------------------------------------ */
    case 'POST':
        require_admin('form_builder.write');

        // Create step.
        if (isset($_GET['step'])) {
            $title = clean_str(request_json()['title'] ?? $_POST['title'] ?? '');
            if ($title === '') json_response(['error' => 'عنوان گام الزامی است.'], 422);
            $sort = next_sort_order('form_steps');
            db()->prepare('INSERT INTO form_steps (title, sort_order) VALUES (:t,:s)')
                ->execute(['t' => $title, 's' => $sort]);
            $id = (int) db()->lastInsertId();
            audit_write('form_builder.step_create', 'form_step', $id, null, ['title' => $title]);
            json_response(['data' => step_row(fetch_step($id))], 201);
        }

        // Create field.
        if (isset($_GET['field'])) {
            $stepId = (int) ($_GET['step_id'] ?? 0);
            if (!fetch_step($stepId)) json_response(['error' => 'گام یافت نشد.'], 404);
            $p = field_payload(null, $stepId);
            if ($p['field_key'] === '' || $p['label'] === '') {
                json_response(['error' => 'کلید و برچسب فیلد الزامی است.'], 422);
            }
            // select/segmented need options
            if (in_array($p['type'], ['select', 'segmented'], true) && $p['options'] === null) {
                json_response(['error' => 'فیلد لیست کشویی / کارت انتخابی به گزینه نیاز دارد.'], 422);
            }
            $sort = next_sort_order('form_fields', 'step_id', $stepId);
            try {
                db()->prepare(
                    'INSERT INTO form_fields
                        (step_id, field_key, label, type, icon_name, options, placeholder,
                         is_required, sort_order, depends_on, depends_value)
                     VALUES (:step,:key,:label,:type,:icon,:opts,:ph,:req,:sort,:dep,:depv)'
                )->execute([
                    'step' => $stepId, 'key' => $p['field_key'], 'label' => $p['label'],
                    'type' => $p['type'], 'icon' => $p['icon_name'] ?: null,
                    'opts' => $p['options'], 'ph' => $p['placeholder'] ?: null,
                    'req' => $p['is_required'], 'sort' => $sort,
                    'dep' => $p['depends_on'] ?: null, 'depv' => $p['depends_value'] ?: null,
                ]);
            } catch (PDOException $ex) {
                fb_key_conflict($ex);
                throw $ex;
            }
            $id = (int) db()->lastInsertId();
            audit_write('form_builder.field_create', 'form_field', $id, null, field_row(fetch_field($id)));
            json_response(['data' => field_row(fetch_field($id))], 201);
        }

        json_response(['error' => 'Use ?step=1 to add a step or ?field=1&step_id=N to add a field'], 422);

    /* --------------------------------------------------------------------
     * PUT — update step/field or reorder
     * ------------------------------------------------------------------ */
    case 'PUT':
        require_admin('form_builder.write');

        if (isset($_GET['reorder_steps'])) {
            $ids = request_json()['order'] ?? [];
            if (!is_array($ids)) json_response(['error' => 'order must be an array'], 422);
            apply_reorder(array_map('intval', $ids), 'form_steps');
            audit_write('form_builder.reorder_steps', 'form_step', null, null, ['order' => $ids]);
            json_response(['data' => ['ok' => true]]);
        }

        if (isset($_GET['reorder_fields'])) {
            $ids = request_json()['order'] ?? [];
            if (!is_array($ids)) json_response(['error' => 'order must be an array'], 422);
            apply_reorder(array_map('intval', $ids), 'form_fields');
            audit_write('form_builder.reorder_fields', 'form_field', null, null, ['order' => $ids]);
            json_response(['data' => ['ok' => true]]);
        }

        // Rename step.
        if (isset($_GET['step_id'])) {
            $id = (int) $_GET['step_id'];
            $before = fetch_step($id);
            if (!$before) json_response(['error' => 'گام یافت نشد.'], 404);
            $title = clean_str(request_json()['title'] ?? $_POST['title'] ?? '');
            if ($title === '') json_response(['error' => 'عنوان گام الزامی است.'], 422);
            db()->prepare('UPDATE form_steps SET title = :t WHERE id = :id')
                ->execute(['t' => $title, 'id' => $id]);
            audit_write('form_builder.step_update', 'form_step', $id,
                ['title' => $before['title']], ['title' => $title]);
            json_response(['data' => step_row(fetch_step($id))]);
        }

        // Update field.
        if (isset($_GET['field_id'])) {
            $id = (int) $_GET['field_id'];
            $before = fetch_field($id);
            if (!$before) json_response(['error' => 'فیلد یافت نشد.'], 404);

            $body = array_merge($_POST, request_json());
            // Step can move between wizards via step_id — moving re-appends
            // the field at the end of the target step so ordering stays sane.
            $targetStep = isset($body['step_id']) ? (int) $body['step_id'] : (int) $before['step_id'];
            if (!fetch_step($targetStep)) json_response(['error' => 'گام مقصد یافت نشد.'], 404);
            $newSort = (int) $before['sort_order'];
            if ($targetStep !== (int) $before['step_id']) {
                $newSort = next_sort_order('form_fields', 'step_id', $targetStep);
            }

            $p = field_payload($id, $targetStep);
            if ($p['field_key'] === '' || $p['label'] === '') {
                json_response(['error' => 'کلید و برچسب فیلد الزامی است.'], 422);
            }
            if (in_array($p['type'], ['select', 'segmented'], true) && $p['options'] === null) {
                json_response(['error' => 'فیلد لیست کشویی / کارت انتخابی به گزینه نیاز دارد.'], 422);
            }

            try {
                db()->prepare(
                    'UPDATE form_fields
                        SET step_id=:step, field_key=:key, label=:label, type=:type,
                            icon_name=:icon, options=:opts, placeholder=:ph, is_required=:req,
                            depends_on=:dep, depends_value=:depv, sort_order=:sort
                      WHERE id=:id'
                )->execute([
                    'step' => $targetStep, 'key' => $p['field_key'], 'label' => $p['label'],
                    'type' => $p['type'], 'icon' => $p['icon_name'] ?: null,
                    'opts' => $p['options'], 'ph' => $p['placeholder'] ?: null,
                    'req' => $p['is_required'],
                    'dep' => $p['depends_on'] ?: null, 'depv' => $p['depends_value'] ?: null,
                    'sort' => $newSort,
                    'id' => $id,
                ]);
            } catch (PDOException $ex) {
                fb_key_conflict($ex);
                throw $ex;
            }
            $after = fetch_field($id);
            audit_write('form_builder.field_update', 'form_field', $id, field_row($before), field_row($after));
            json_response(['data' => field_row($after)]);
        }

        // Toggle field active flag.
        if (isset($_GET['toggle_field_id'])) {
            $id = (int) $_GET['toggle_field_id'];
            $before = fetch_field($id);
            if (!$before) json_response(['error' => 'فیلد یافت نشد.'], 404);
            db()->prepare('UPDATE form_fields SET is_active = 1 - is_active WHERE id = :id')
                ->execute(['id' => $id]);
            $after = fetch_field($id);
            audit_write('form_builder.field_toggle', 'form_field', $id,
                ['is_active' => (bool) $before['is_active']],
                ['is_active' => (bool) $after['is_active']]);
            json_response(['data' => field_row($after)]);
        }

        json_response(['error' => 'Unknown PUT target'], 422);

    /* --------------------------------------------------------------------
     * DELETE — step (cascades to fields) or field
     * ------------------------------------------------------------------ */
    case 'DELETE':
        require_admin('form_builder.write');

        if (isset($_GET['step_id'])) {
            $id = (int) $_GET['step_id'];
            $before = fetch_step($id);
            if (!$before) json_response(['error' => 'گام یافت نشد.'], 404);
            $fieldCount = (int) db()->query(
                'SELECT COUNT(*) FROM form_fields WHERE step_id = ' . $id
            )->fetchColumn();
            db()->prepare('DELETE FROM form_fields WHERE step_id = :id')->execute(['id' => $id]);
            db()->prepare('DELETE FROM form_steps WHERE id = :id')->execute(['id' => $id]);
            audit_write('form_builder.step_delete', 'form_step', $id,
                ['title' => $before['title'], 'fields_deleted' => $fieldCount], null);
            json_response(['data' => ['ok' => true]]);
        }

        if (isset($_GET['field_id'])) {
            $id = (int) $_GET['field_id'];
            $before = fetch_field($id);
            if (!$before) json_response(['error' => 'فیلد یافت نشد.'], 404);
            db()->prepare('DELETE FROM form_fields WHERE id = :id')->execute(['id' => $id]);
            audit_write('form_builder.field_delete', 'form_field', $id, field_row($before), null);
            json_response(['data' => ['ok' => true]]);
        }

        json_response(['error' => 'Unknown DELETE target'], 422);
}

json_response(['error' => 'Method not allowed'], 405);
