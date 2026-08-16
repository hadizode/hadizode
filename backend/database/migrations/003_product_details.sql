-- =============================================================================
-- Migration 003 — long-form product details for the per-product detail page.
--
-- `description` stays the short card summary (VARCHAR 500); `details` holds
-- the extended content rendered on /products/:id (specs, features, ...).
--
-- Additive only. Applied by backend/database/migrate.php; also run by
-- setup.php on fresh installs (schema.sql already ships the column, so the
-- IF NOT EXISTS guard keeps that a no-op).
-- =============================================================================

ALTER TABLE products
ADD COLUMN IF NOT EXISTS details TEXT NULL AFTER description;
