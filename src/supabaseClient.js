import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://YOUR_PROJECT.supabase.co"; // رابط مشروعك
const supabaseKey = "YOUR_ANON_KEY"; // المفتاح من إعدادات Supabase
export const supabase = createClient(supabaseUrl, supabaseKey);