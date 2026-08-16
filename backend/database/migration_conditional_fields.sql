-- ============================================================================= 
-- Migration: Add conditional field support to form_fields table 
-- Run this on existing databases to add depends_on and depends_value columns 
-- ============================================================================= 
 
ALTER TABLE form_fields  
ADD COLUMN IF NOT EXISTS depends_on VARCHAR(80) NULL AFTER is_active, 
ADD COLUMN IF NOT EXISTS depends_value VARCHAR(100) NULL AFTER depends_on; 
 
-- Example: Make "window_type" field appear only when "product_type" = "window" 
-- UPDATE form_fields SET depends_on = 'product_type', depends_value = 'window' WHERE field_key = 'window_type'; 
 
-- Example: Make "door_material" field appear when "product_type" is either "wood_door" or "metal_door" 
-- UPDATE form_fields SET depends_on = 'product_type', depends_value = 'wood_door,metal_door' WHERE field_key = 'door_material'; 
