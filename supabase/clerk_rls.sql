-- GharHelper Clerk + Supabase RLS starter schema.
-- Configure Clerk's Supabase JWT template so auth.jwt()->>'sub' is the Clerk user id.

create table if not exists public.profiles (
  clerk_user_id text primary key,
  display_name text,
  roles text[] not null default array['customer'],
  active_role text not null default 'customer',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint roles_allowed check (roles <@ array['customer','worker']),
  constraint active_role_allowed check (active_role = any(roles))
);

alter table public.profiles enable row level security;

create policy "profiles_select_own" on public.profiles
  for select using (clerk_user_id = auth.jwt()->>'sub');

create policy "profiles_insert_own" on public.profiles
  for insert with check (clerk_user_id = auth.jwt()->>'sub');

create policy "profiles_update_own" on public.profiles
  for update using (clerk_user_id = auth.jwt()->>'sub')
  with check (clerk_user_id = auth.jwt()->>'sub');
