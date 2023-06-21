import { createClient } from '@supabase/supabase-js';
import { env } from 'next.config';

const supabaseUrl = 'https://jlmlxvxpxhnabzpfwyqd.supabase.co';

const supabaseKey = env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey, {
  persistSession: false
});

export default supabase;
