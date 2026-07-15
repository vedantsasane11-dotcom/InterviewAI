import "server-only";

import { auth } from "@clerk/nextjs/server";
import { createClient } from "@supabase/supabase-js";

function requireEnv(name: string) {
  const value = process.env[name];
  if (!value) throw new Error(`Missing required environment variable: ${name}`);
  return value;
}

export async function createSupabaseServerClient() {
  const { getToken } = await auth();
  const token = await getToken({ template: process.env.NEXT_PUBLIC_CLERK_SUPABASE_JWT_TEMPLATE ?? "supabase" });

  return createClient(requireEnv("NEXT_PUBLIC_SUPABASE_URL"), requireEnv("NEXT_PUBLIC_SUPABASE_ANON_KEY"), {
    global: { headers: token ? { Authorization: `Bearer ${token}` } : {} },
    auth: { persistSession: false, autoRefreshToken: false },
  });
}
