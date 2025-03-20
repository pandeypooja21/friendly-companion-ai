
// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://wyfckvrngzyhkaywofeq.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind5ZmNrdnJuZ3p5aGtheXdvZmVxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI0MDE5MjEsImV4cCI6MjA1Nzk3NzkyMX0.6xbYYcE2G_qA3u1hJ9HuJEf7lHiDNrbRmJeVwJrjE7Y";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: {
    storage: localStorage,
    persistSession: true,
    autoRefreshToken: true,
  }
});
