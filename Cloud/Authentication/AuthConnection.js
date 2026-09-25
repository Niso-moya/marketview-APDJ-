import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const supabaseUrl = "https://vithxvdlquwkzfqraiwn.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZpdGh4dmRscXV3a3pmcXJhaXduIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODgzMTk2OTMsImV4cCI6MjEwMzg5NTY5M30.4EDRm_jk4gHakFdvaLNHvp5CuPHh2VjSbXgZvs21Sww";

export const supabase = createClient(
    supabaseUrl,
    supabaseKey
);