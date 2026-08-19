-- ============================================================================= 
-- NorthStarWin — full CMS schema 
-- Everything editable from the admin panel lives here: colors, text blocks, 
-- benefits, products, gallery, dynamic order-form fields, media library, 
-- submitted orders (stored as flexible JSON since fields are admin-defined). 
-- ============================================================================= 
 
CREATE TABLE IF NOT EXISTS admins ( 
    id            INT UNSIGNED AUTO_INCREMENT PRIMARY KEY, 
    username      VARCHAR(64) NOT NULL UNIQUE, 
    password_hash VARCHAR(255) NOT NULL, 
    failed_logins INT UNSIGNED NOT NULL DEFAULT 0, 
    locked_until  DATETIME NULL, 
    created_at    DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP 
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci; 
 
-- Generic key/value store: colors, fonts, site name/phone/email/address, 
-- footer text, header top-bar text, hero copy, etc. The admin "Settings" 
-- page renders a form from these rows (grouped by `group_name`). 
CREATE TABLE IF NOT EXISTS settings ( 
    id          INT UNSIGNED AUTO_INCREMENT PRIMARY KEY, 
    setting_key VARCHAR(100) NOT NULL UNIQUE, 
    value       TEXT NULL, 
    type        ENUM('text','textarea','color','image','url','number') NOT NULL DEFAULT 'text', 
    group_name  VARCHAR(60) NOT NULL DEFAULT 'general', 
    label       VARCHAR(150) NOT NULL, 
    sort_order  INT NOT NULL DEFAULT 0 
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci; 
 
-- Repeatable "benefit" cards (icon + title + description) shown in the 
-- Benefits section. Fully add/remove/reorder-able. 
CREATE TABLE IF NOT EXISTS benefits ( 
    id          INT UNSIGNED AUTO_INCREMENT PRIMARY KEY, 
    title       VARCHAR(150) NOT NULL, 
    description VARCHAR(255) NOT NULL, 
    icon_name   VARCHAR(60)  NOT NULL DEFAULT 'star', -- Material Symbols icon name 
    sort_order  INT NOT NULL DEFAULT 0, 
    is_active   TINYINT(1) NOT NULL DEFAULT 1 
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci; 
 
-- Products grid (add / remove / reorder / activate-deactivate). 
CREATE TABLE IF NOT EXISTS products ( 
    id          INT UNSIGNED AUTO_INCREMENT PRIMARY KEY, 
    name        VARCHAR(150) NOT NULL, 
    description VARCHAR(500) NULL, 
    details     TEXT NULL,           -- long-form content for the product detail page 
    price_min   BIGINT UNSIGNED NULL, 
    image       VARCHAR(255) NULL,   -- filename in assets/media 
    slug        VARCHAR(150) NULL, 
    sort_order  INT NOT NULL DEFAULT 0, 
    is_active   TINYINT(1) NOT NULL DEFAULT 1, 
    created_at  DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP 
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci; 
 
CREATE TABLE IF NOT EXISTS gallery ( 
    id          INT UNSIGNED AUTO_INCREMENT PRIMARY KEY, 
    title       VARCHAR(150) NOT NULL, 
    description TEXT NULL, 
    image       VARCHAR(255) NOT NULL, 
    sort_order  INT NOT NULL DEFAULT 0, 
    is_active   TINYINT(1) NOT NULL DEFAULT 1, 
    created_at  DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP 
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci; 
 
-- The order form is a wizard of steps; each step is fully admin-editable. 
CREATE TABLE IF NOT EXISTS form_steps ( 
    id         INT UNSIGNED AUTO_INCREMENT PRIMARY KEY, 
    title      VARCHAR(150) NOT NULL, 
    subtitle   VARCHAR(255) NULL, 
    sort_order INT NOT NULL DEFAULT 0 
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci; 
 
-- Every field on every step: type, label, icon, options (for select / 
-- segmented cards), required flag. Admin can add/delete/reorder freely. 
CREATE TABLE IF NOT EXISTS form_fields ( 
    id          INT UNSIGNED AUTO_INCREMENT PRIMARY KEY, 
    step_id     INT UNSIGNED NOT NULL, 
    field_key   VARCHAR(80) NOT NULL,        -- machine name, used as JSON key on submit 
    label       VARCHAR(150) NOT NULL, 
    type        ENUM('text','tel','number','textarea','select','segmented','file') NOT NULL DEFAULT 'text', 
    icon_name   VARCHAR(60) NULL,             -- used by segmented/card style fields 
    options     JSON NULL,                    -- [{value,label,icon}] for select/segmented 
    placeholder VARCHAR(150) NULL, 
    is_required TINYINT(1) NOT NULL DEFAULT 0, 
    sort_order  INT NOT NULL DEFAULT 0, 
    is_active   TINYINT(1) NOT NULL DEFAULT 1, 
    depends_on  VARCHAR(80) NULL,             -- field_key this field depends on (trigger field) 
    depends_value VARCHAR(100) NULL,          -- value that triggers this field (comma-separated for multiple values) 
    FOREIGN KEY (step_id) REFERENCES form_steps(id) ON DELETE CASCADE, 
    UNIQUE KEY uniq_field_key (field_key) 
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci; 
 
-- Submissions store dynamic answers as JSON, keyed by field_key, since the 
-- field set itself is admin-editable and can change over time. 
CREATE TABLE IF NOT EXISTS orders ( 
    id            INT UNSIGNED AUTO_INCREMENT PRIMARY KEY, 
    form_data     JSON NOT NULL, 
    image         VARCHAR(255) NULL, 
    status        ENUM('new','in_progress','done','cancelled') NOT NULL DEFAULT 'new', 
    ip_address    VARCHAR(45) NULL, 
    tracking_code VARCHAR(20) NULL, 
    created_at    DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP, 
    INDEX idx_status (status), 
    INDEX idx_created (created_at), 
    INDEX idx_tracking (tracking_code) 
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci; 
 
-- Central media library (used by products, gallery, hero images, etc). 
CREATE TABLE IF NOT EXISTS media ( 
    id            INT UNSIGNED AUTO_INCREMENT PRIMARY KEY, 
    filename      VARCHAR(255) NOT NULL, 
    original_name VARCHAR(255) NULL, 
    alt_text      VARCHAR(255) NULL, 
    created_at    DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP 
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci; 
 
-- --------------------------------------------------------------------------- 
-- Seed data — safe defaults so the site renders correctly on first install. 
-- --------------------------------------------------------------------------- 
INSERT IGNORE INTO settings (setting_key, value, type, group_name, label, sort_order) VALUES 
('color_primary',        '#0275CA', 'color', 'colors', 'رنگ اصلی (روشن)', 1), 
('color_primary_dark',   '#338bff', 'color', 'colors', 'رنگ اصلی (تاریک)', 2), 
('color_on_primary',     '#ffffff', 'color', 'colors', 'رنگ متن روی رنگ اصلی (روشن)', 3), 
('color_on_primary_dark','#00325b', 'color', 'colors', 'رنگ متن روی رنگ اصلی (تاریک)', 4), 
('color_bg_light',       '#f5f7fa', 'color', 'colors', 'پس‌زمینه (روشن)', 5), 
('color_bg_dark',        '#131315', 'color', 'colors', 'پس‌زمینه (تاریک)', 6), 
('color_surface_light',  '#ffffff', 'color', 'colors', 'سطح کارت (روشن)', 7), 
('color_surface_dark',   '#1f1f21', 'color', 'colors', 'سطح کارت (تاریک)', 8), 
('color_text_light',     '#1e293b', 'color', 'colors', 'متن (روشن)', 9), 
('color_text_dark',      '#e4e2e4', 'color', 'colors', 'متن (تاریک)', 10), 
('color_surface2_light', '#eef1f5', 'color', 'colors', 'سطح فرعی / ورودی‌ها (روشن)', 11), 
('color_surface2_dark',  '#26262b', 'color', 'colors', 'سطح فرعی / ورودی‌ها (تاریک)', 12), 
('color_border_light',   '#e2e8f0', 'color', 'colors', 'حاشیه‌ها (روشن)', 13), 
('color_border_dark',    '#3d3e45', 'color', 'colors', 'حاشیه‌ها (تاریک)', 14), 
('color_footer_light',   '#0f172a', 'color', 'colors', 'پس‌زمینه فوتر (روشن)', 15), 
('color_footer_dark',    '#111113', 'color', 'colors', 'پس‌زمینه فوتر (تاریک)', 16), 
('color_footer_text_light','#cbd5e1', 'color', 'colors', 'متن فوتر (روشن)', 17), 
('color_footer_text_dark','#a3a3ab', 'color', 'colors', 'متن فوتر (تاریک)', 18), 
 
('site_title',       'NorthStarWin', 'text', 'general', 'نام سایت', 1), 
('site_phone',       '+98 922 002 3242', 'text', 'general', 'تلفن تماس', 2), 
('site_email',       'info@northstarwin.com', 'text', 'general', 'ایمیل', 3), 
('site_address',     'تهران، ایران', 'text', 'general', 'آدرس', 4), 
('site_description', 'تامین‌کننده برتر درب و پنجره UPVC در ایران با بالاترین استاندارد عایق‌بندی و امنیت.', 'textarea', 'general', 'توضیحات فوتر', 5), 
('topbar_message',   'فروش ویژه درب و پنجره UPVC با شرایط اقساطی', 'text', 'general', 'پیام نوار بالای هدر', 6), 
('topbar_hours',     'شنبه تا پنجشنبه: ۸ الی ۲۰', 'text', 'general', 'ساعات کاری', 7), 
 
('hero_security_title',       'امنیت و پایداری', 'text', 'hero', 'عنوان بخش امنیت', 1), 
('hero_security_description', 'امنیت خانواده شما، اولویت اصلی ماست. درب‌های UPVC به دلیل بهره‌گیری از هسته فولادی گالوانیزه و سیستم‌های قفل پیشرفته، سدی نفوذناپذیر ایجاد می‌کنند.', 'textarea', 'hero', 'توضیحات بخش امنیت', 2), 
('hero_security_image',       '', 'image', 'hero', 'تصویر بخش امنیت', 3), 
('hero_durability_title',       'دوام و طول عمر', 'text', 'hero', 'عنوان بخش دوام', 4), 
('hero_durability_description', 'دوام بی‌نظیر در برابر زمان و طبیعت، درب‌های UPVC با مقاومت بالا در برابر اشعه‌های خورشیدی بدون تغییر شکل یا رنگ، تا ۳۰ سال در کنار شما می‌مانند.', 'textarea', 'hero', 'توضیحات بخش دوام', 5), 
('hero_durability_image',       '', 'image', 'hero', 'تصویر بخش دوام', 6), 
 
('collab_title',       'دعوت به همکاری', 'text', 'collaboration', 'عنوان', 1), 
('collab_description', 'ما به دنبال برقراری همکاری‌های بلندمدت با سازندگان، پیمانکاران و نصابان حرفه‌ای صنعت ساختمان هستیم.', 'textarea', 'collaboration', 'توضیحات', 2), 
('collab_button_text', 'درخواست همکاری', 'text', 'collaboration', 'متن دکمه', 3); 
 
INSERT IGNORE INTO benefits (id, title, description, icon_name, sort_order) VALUES 
(1, 'امنیت حداکثری', 'هسته فولادی و قفل‌های چندنقطه‌ای', 'security', 1), 
(2, 'عایق انرژی', 'کاهش مصرف انرژی تا ۵۰٪', 'eco', 2), 
(3, 'ضدآب و رطوبت', 'مناسب آب و هوای مرطوب ایران', 'water_drop', 3), 
(4, 'عایق صوتی قدرتمند', 'کاهش آلودگی صوتی محیط تا ۸۰٪', 'volume_off', 4), 
(5, 'تنوع طرح و رنگ', 'متناسب با انواع نمای ساختمان و دکوراسیون', 'palette', 5), 
(6, 'ضمانت ۱۵ ساله', 'پشتیبانی و خدمات مادام‌العمر', 'calendar_today', 6); 
 
INSERT IGNORE INTO form_steps (id, title, subtitle, sort_order) VALUES 
(1, 'نوع درخواست', NULL, 1), 
(2, 'مشخصات فنی', NULL, 2), 
(3, 'اطلاعات تماس', NULL, 3); 
 
INSERT IGNORE INTO form_fields (step_id, field_key, label, type, icon_name, options, placeholder, is_required, sort_order) VALUES 
(1, 'request_type', 'نوع درخواست', 'segmented', NULL, JSON_ARRAY( 
    JSON_OBJECT('value','new_construction','label','ساخت و ساز جدید','icon','construction'), 
    JSON_OBJECT('value','renovation','label','نوسازی / تعویض','icon','home'), 
    JSON_OBJECT('value','repair','label','تعمیر و اورهال','icon','build') 
), NULL, 1, 1), 
 
(2, 'product_type', 'نوع محصول', 'select', NULL, JSON_ARRAY( 
    JSON_OBJECT('value','sliding','label','پنجره کشویی'), 
    JSON_OBJECT('value','casement','label','پنجره لولایی'), 
    JSON_OBJECT('value','tilt_turn','label','تیلت اند ترن (دو حالته)'), 
    JSON_OBJECT('value','door','label','درب لابی') 
), NULL, 1, 1), 
(2, 'material_type', 'جنس پروفیل', 'select', NULL, JSON_ARRAY( 
    JSON_OBJECT('value','upvc_60','label','یوپیویسی ۶۰ میلی‌متر'), 
    JSON_OBJECT('value','upvc_70','label','یوپیویسی ۷۰ میلی‌متر'), 
    JSON_OBJECT('value','aluminum','label','آلومینیوم ترمال‌بریک') 
), NULL, 1, 2), 
(2, 'leaf_count', 'تعداد لنگه', 'select', NULL, JSON_ARRAY( 
    JSON_OBJECT('value','1','label','یک لنگه'), 
    JSON_OBJECT('value','2','label','دو لنگه'), 
    JSON_OBJECT('value','3','label','سه لنگه') 
), NULL, 1, 3), 
(2, 'color', 'رنگ پروفیل', 'select', NULL, JSON_ARRAY( 
    JSON_OBJECT('value','white','label','سفید'), 
    JSON_OBJECT('value','wood','label','طرح چوب'), 
    JSON_OBJECT('value','custom','label','رنگ خاص / سفارشی'), 
    JSON_OBJECT('value','consult','label','نیازمند مشاوره') 
), NULL, 0, 4), 
(2, 'width', 'عرض تقریبی (سانتی‌متر)', 'number', NULL, NULL, 'مثلاً ۱۵۰', 0, 5), 
(2, 'height', 'ارتفاع تقریبی (سانتی‌متر)', 'number', NULL, NULL, 'مثلاً ۲۰۰', 0, 6), 
 
(3, 'name', 'نام و نام خانوادگی', 'text', NULL, NULL, 'مثلاً علی محمدی', 1, 1), 
(3, 'phone', 'شماره موبایل', 'tel', NULL, NULL, '۰۹۱۲۳۴۵۶۷۸۹', 1, 2), 
(3, 'city', 'شهر', 'text', NULL, NULL, 'مثلاً تهران', 1, 3), 
(3, 'district', 'منطقه / محله', 'text', NULL, NULL, 'مثلاً منطقه ۵', 1, 4), 
(3, 'description', 'توضیحات تکمیلی (اختیاری)', 'textarea', NULL, NULL, NULL, 0, 5), 
(3, 'image', 'آپلود عکس یا نقشه (اختیاری)', 'file', NULL, NULL, NULL, 0, 6); 
