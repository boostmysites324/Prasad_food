import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://gcoiyiwjbqaycsjdnvsv.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdjb2l5aXdqYnFheWNzamRudnN2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjMzNzEzNzksImV4cCI6MjA3ODk0NzM3OX0.hxyFypN8S8PG4ZHYMq8GjDVgsEM2YkisWHJclQkL_Jg";

let supabaseClient = null;

if (supabaseUrl && supabaseAnonKey) {
  supabaseClient = createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
      persistSession: false
    }
  });
} else {
  console.warn(
    "Supabase environment variables are missing. Please set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY."
  );
}

export const supabase = supabaseClient;
export const isSupabaseReady = Boolean(supabaseClient);

