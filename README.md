# GharHelper

Production-ready authentication starter for GharHelper using **Next.js App Router**, **Clerk**, and **Supabase**.

## What is included

- Clerk sign-in and sign-up routes.
- Middleware and server-side guards for protected routes.
- Customer ↔ Worker role switching with Clerk public metadata.
- Role-specific workspaces at `/customer` and `/worker`.
- Supabase server and browser clients that attach Clerk JWTs for RLS.
- Starter Supabase RLS schema in `supabase/clerk_rls.sql`.

## Setup

1. Install dependencies: `npm install`.
2. Copy `.env.example` to `.env.local` and fill in Clerk and Supabase values.
3. In Clerk, create a Supabase JWT template named `supabase` (or set `NEXT_PUBLIC_CLERK_SUPABASE_JWT_TEMPLATE`).
4. In Supabase, run `supabase/clerk_rls.sql` and enable the Clerk third-party auth integration.
5. Run `npm run dev` and visit `http://localhost:3000`.

## Role model

Roles are stored in Clerk `publicMetadata`:

```json
{
  "roles": ["customer", "worker"],
  "activeRole": "customer"
}
```

The app validates the active role on the server before rendering role-specific pages.
