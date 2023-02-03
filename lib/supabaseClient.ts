import { createClient } from "@supabase/supabase-js";

const supabaseUrl: string = "https://pdopydbsuirzjqmpjkck.supabase.co";
const supabaseKey: string = process.env.SUPABASE_KEY!;

export const supabase = createClient(supabaseUrl, supabaseKey);
