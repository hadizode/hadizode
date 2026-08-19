-- Blog Posts Table 
CREATE TABLE IF NOT EXISTS blog_posts ( 
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY, 
    title VARCHAR(255) NOT NULL, 
    slug VARCHAR(255) UNIQUE, 
    excerpt TEXT, 
    content LONGTEXT, 
    image VARCHAR(255), 
    category VARCHAR(100), 
    author_id INT UNSIGNED NULL, 
    view_count INT DEFAULT 0, 
    is_published TINYINT(1) DEFAULT 0, 
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP, 
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    FOREIGN KEY (author_id) REFERENCES admins(id) ON DELETE SET NULL, 
    INDEX idx_published (is_published), 
    INDEX idx_created (created_at DESC), 
    INDEX idx_category (category) 
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci; 
 
-- Blog Comments Table 
CREATE TABLE IF NOT EXISTS blog_comments ( 
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY, 
    post_id INT UNSIGNED NOT NULL, 
    parent_id INT UNSIGNED NULL, 
    author_name VARCHAR(100), 
    author_email VARCHAR(255), 
    content TEXT NOT NULL, 
    is_approved TINYINT(1) DEFAULT 0, 
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP, 
    FOREIGN KEY (post_id) REFERENCES blog_posts(id) ON DELETE CASCADE, 
    FOREIGN KEY (parent_id) REFERENCES blog_comments(id) ON DELETE CASCADE, 
    INDEX idx_post (post_id), 
    INDEX idx_approved (is_approved), 
    INDEX idx_parent (parent_id) 
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci; 
