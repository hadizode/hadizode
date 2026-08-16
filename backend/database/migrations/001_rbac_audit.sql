-- =============================================================================
-- Migration 001 — RBAC + audit log scaffolding for the new admin panel.
-- Additive only: creates new tables, assigns every existing admin the
-- super_admin role (1:1 with the legacy single-role model).
-- Applied by backend/database/migrate.php (idempotent, tracked in
-- schema_migrations).
-- =============================================================================

CREATE TABLE IF NOT EXISTS schema_migrations (
    version    VARCHAR(40) NOT NULL PRIMARY KEY,
    applied_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS roles (
    id          INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name        VARCHAR(60) NOT NULL UNIQUE,
    label       VARCHAR(150) NOT NULL,
    description VARCHAR(255) NULL,
    built_in    TINYINT(1) NOT NULL DEFAULT 0,
    created_at  DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Granularity: resource.action, e.g. 'orders.write', 'settings.read',
-- 'form_builder.write', 'audit.read'. The PHP middleware layer is the
-- only enforcement point; the client merely hides UI it lacks rights for.
CREATE TABLE IF NOT EXISTS role_permissions (
    id          INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    role_id     INT UNSIGNED NOT NULL,
    permission  VARCHAR(80) NOT NULL,
    UNIQUE KEY uniq_role_perm (role_id, permission),
    FOREIGN KEY (role_id) REFERENCES roles(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS admin_roles (
    admin_id INT UNSIGNED NOT NULL,
    role_id  INT UNSIGNED NOT NULL,
    assigned_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (admin_id, role_id),
    FOREIGN KEY (admin_id) REFERENCES admins(id) ON DELETE CASCADE,
    FOREIGN KEY (role_id) REFERENCES roles(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Append-only audit trail for every state-changing API request.
-- The application DB user should be granted no DELETE/UPDATE here.
CREATE TABLE IF NOT EXISTS audit_logs (
    id          BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    admin_id    INT UNSIGNED NULL,
    admin_user  VARCHAR(64) NULL,
    action      VARCHAR(80) NOT NULL,          -- e.g. 'orders.update'
    entity_type VARCHAR(60) NOT NULL,          -- e.g. 'order', 'product'
    entity_id   VARCHAR(64) NULL,
    old_value   JSON NULL,
    new_value   JSON NULL,
    ip_address  VARCHAR(45) NULL,
    user_agent  VARCHAR(255) NULL,
    created_at  DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_audit_admin (admin_id),
    INDEX idx_audit_entity (entity_type, entity_id),
    INDEX idx_audit_created (created_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ---------------------------------------------------------------------------
-- Seed roles + permissions
-- ---------------------------------------------------------------------------
INSERT IGNORE INTO roles (name, label, built_in) VALUES
('super_admin',   'مدیر کل',        1),
('editor',        'ویرایشگر محتوا', 1),
('orders_manager','مدیر سفارشات',   1);

INSERT IGNORE INTO role_permissions (role_id, permission)
SELECT r.id, p.perm
FROM (
    SELECT 'super_admin' AS role, 'dashboard.read'        AS perm UNION ALL
    SELECT 'super_admin', 'orders.read'      UNION ALL
    SELECT 'super_admin', 'orders.write'     UNION ALL
    SELECT 'super_admin', 'content.read'     UNION ALL
    SELECT 'super_admin', 'content.write'    UNION ALL
    SELECT 'super_admin', 'settings.read'    UNION ALL
    SELECT 'super_admin', 'settings.write'   UNION ALL
    SELECT 'super_admin', 'form_builder.read' UNION ALL
    SELECT 'super_admin', 'form_builder.write' UNION ALL
    SELECT 'super_admin', 'media.read'       UNION ALL
    SELECT 'super_admin', 'media.write'      UNION ALL
    SELECT 'super_admin', 'admins.read'      UNION ALL
    SELECT 'super_admin', 'admins.write'     UNION ALL
    SELECT 'super_admin', 'audit.read'       UNION ALL
    SELECT 'editor', 'dashboard.read'        UNION ALL
    SELECT 'editor', 'content.read'          UNION ALL
    SELECT 'editor', 'content.write'         UNION ALL
    SELECT 'editor', 'media.read'            UNION ALL
    SELECT 'editor', 'media.write'           UNION ALL
    SELECT 'editor', 'settings.read'         UNION ALL
    SELECT 'orders_manager', 'dashboard.read' UNION ALL
    SELECT 'orders_manager', 'orders.read'    UNION ALL
    SELECT 'orders_manager', 'orders.write'
) p
JOIN roles r ON r.name = p.role;

-- Every existing admin becomes super_admin (legacy equivalence).
INSERT IGNORE INTO admin_roles (admin_id, role_id)
SELECT a.id, r.id FROM admins a CROSS JOIN roles r WHERE r.name = 'super_admin';
