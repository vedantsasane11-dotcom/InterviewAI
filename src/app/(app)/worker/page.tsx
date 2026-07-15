import { requireRole } from "@/lib/auth/session";
export default async function WorkerPage(){await requireRole("worker");return <section className="dashboard stack"><span className="badge">Worker</span><h1>Grow your GharHelper business</h1><div className="card"><h2>Protected worker route</h2><p>Only signed-in users with the active Worker role can view this workspace.</p></div></section>}
