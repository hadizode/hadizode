-- =============================================================================
-- Migration 002 — complete + extend the color settings.
--
-- 1. Adds color_on_primary_dark, which the public site already applies in
--    dark mode but which never existed in the settings table (dark-mode
--    primary text color was therefore never customizable and drifted from
--    the light-mode value).
-- 2. Adds settings for borders, secondary surfaces (inputs, placeholders)
--    and the footer — previously hardcoded slate/hex values in components —
--    so every color on the public site is admin-customizable.
--
-- Additive only (INSERT IGNORE). Applied by backend/database/migrate.php.
-- =============================================================================

INSERT IGNORE INTO settings (setting_key, value, type, group_name, label, sort_order) VALUES
('color_on_primary_dark',  '#00325b', 'color', 'colors', 'رنگ متن روی رنگ اصلی (تاریک)', 3),
('color_bg_dark',          '#131315', 'color', 'colors', 'پس‌زمینه (تاریک)', 5),
('color_surface_light',    '#ffffff', 'color', 'colors', 'سطح کارت (روشن)', 6),
('color_surface_dark',     '#1f1f21', 'color', 'colors', 'سطح کارت (تاریک)', 7),
('color_text_light',       '#1e293b', 'color', 'colors', 'متن (روشن)', 8),
('color_text_dark',        '#e4e2e4', 'color', 'colors', 'متن (تاریک)', 9),
('color_surface2_light',   '#eef1f5', 'color', 'colors', 'سطح فرعی / ورودی‌ها (روشن)', 10),
('color_surface2_dark',    '#26262b', 'color', 'colors', 'سطح فرعی / ورودی‌ها (تاریک)', 11),
('color_border_light',     '#e2e8f0', 'color', 'colors', 'حاشیه‌ها (روشن)', 12),
('color_border_dark',      '#3d3e45', 'color', 'colors', 'حاشیه‌ها (تاریک)', 13),
('color_footer_light',     '#0f172a', 'color', 'colors', 'پس‌زمینه فوتر (روشن)', 14),
('color_footer_dark',      '#111113', 'color', 'colors', 'پس‌زمینه فوتر (تاریک)', 15),
('color_footer_text_light','#cbd5e1', 'color', 'colors', 'متن فوتر (روشن)', 16),
('color_footer_text_dark', '#a3a3ab', 'color', 'colors', 'متن فوتر (تاریک)', 17);
