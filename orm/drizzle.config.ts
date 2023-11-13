import type { Config } from 'drizzle-kit';

export default {
  driver: 'pg',
  schema: './orm/schema.ts',
  out: './supabase/migrations',
} satisfies Config;
