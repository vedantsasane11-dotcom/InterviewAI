import { requireRole } from "@/lib/auth/session";
export default async function CustomerPage(){await requireRole("customer");return <section className="dashboard stack"><span className="badge">Customer</span><h1>Find trusted home help</h1><div className="card"><h2>Protected customer route</h2><p>Only signed-in users with the active Customer role can view this workspace.</p></div></section>}
