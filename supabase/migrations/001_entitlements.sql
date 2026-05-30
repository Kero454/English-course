-- ============================================================================
-- English Course — Entitlements / Paywall migration
-- ============================================================================
-- Run this once in your Supabase SQL Editor (Dashboard -> SQL Editor -> New query).
-- This creates the table that tracks which users have paid access (via a
-- LemonSqueezy license key) and the Row-Level Security (RLS) policies that
-- ensure users can only read/write their own entitlement row.
-- ============================================================================

create table if not exists public.entitlements (
  user_id              uuid          primary key references auth.users(id) on delete cascade,
  license_key          text          not null unique,
  license_instance_id  text          not null,
  product_variant      text,
  customer_email       text,
  status               text          not null default 'active',
  activated_at         timestamptz   not null default now(),
  validated_at         timestamptz   not null default now(),
  raw                  jsonb
);

-- Enable Row-Level Security
alter table public.entitlements enable row level security;

-- Drop existing policies if re-running this migration
drop policy if exists "Users can read own entitlement"   on public.entitlements;
drop policy if exists "Users can insert own entitlement" on public.entitlements;
drop policy if exists "Users can update own entitlement" on public.entitlements;
drop policy if exists "Users can delete own entitlement" on public.entitlements;

-- Each user can only see their own row
create policy "Users can read own entitlement"
  on public.entitlements for select
  using (auth.uid() = user_id);

-- Each user can only insert a row for themselves
create policy "Users can insert own entitlement"
  on public.entitlements for insert
  with check (auth.uid() = user_id);

-- Each user can only update their own row
create policy "Users can update own entitlement"
  on public.entitlements for update
  using (auth.uid() = user_id);

-- Each user can only delete their own row
create policy "Users can delete own entitlement"
  on public.entitlements for delete
  using (auth.uid() = user_id);

-- Helpful index for license-key lookups (e.g., admin queries)
create index if not exists entitlements_license_key_idx on public.entitlements (license_key);

-- ============================================================================
-- Data API exposure (required for Supabase projects created on/after May 2026)
-- ============================================================================
-- Since May 30 2026, new tables in the public schema are NOT automatically
-- exposed to PostgREST/the Data API. Without these grants, supabase-js calls
-- like supabase.from('entitlements')... will fail with a 404 / "relation does
-- not exist in api schema" on new projects.
--
-- These grants are safe and idempotent on older projects (they were already
-- there by default).
-- ============================================================================

grant usage on schema public to anon, authenticated;

grant select, insert, update, delete on public.entitlements to authenticated;
-- anon does NOT get write access; reads are blocked by RLS anyway.
grant select on public.entitlements to anon;

-- Make sure PostgREST notices the schema change immediately (no cache lag):
notify pgrst, 'reload schema';
