import Link from "next/link";
import { AppHeader } from "@/components/layout/AppHeader";

export default function HomePage() {
  return (
    <main className="shell">
      <AppHeader />
      <section className="hero">
        <div>
          <span className="badge">Clerk + Supabase secured</span>
          <h1>Home help that works for every role.</h1>
          <p>GharHelper gives customers a trusted booking flow and workers a focused earning dashboard, protected by Clerk authentication and Supabase row-level security.</p>
          <div className="nav"><Link className="btn" href="/dashboard">Open dashboard</Link><Link className="btn secondary" href="/sign-up">Join GharHelper</Link></div>
        </div>
        <div className="card stack"><h2>Production auth foundation</h2><p>Protected routes, role switching, Clerk user metadata, and Supabase clients that attach Clerk JWTs for RLS-aware data access.</p></div>
      </section>
    </main>
  );
}
