"use client";

import { useAuth } from "@clerk/nextjs";
import { createClient } from "@supabase/supabase-js";
import { useMemo } from "react";

export function useSupabaseClient() {
  const { getToken } = useAuth();

  return useMemo(
    () =>
      createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!, {
        accessToken: () => getToken({ template: process.env.NEXT_PUBLIC_CLERK_SUPABASE_JWT_TEMPLATE ?? "supabase" }),
      }),
    [getToken],
  );
}
