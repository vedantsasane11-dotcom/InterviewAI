import Link from "next/link";
import { getRoleState } from "@/lib/auth/session";

export default async function DashboardPage() {
  const { activeRole, availableRoles } = await getRoleState();
  return <section className="dashboard stack"><span className="badge">Active role: {activeRole}</span><h1>Welcome to GharHelper</h1><p className="notice">Your account can access: {availableRoles.join(", ")}. Use the switcher in the header to change role contexts safely.</p><div className="grid"><Link className="card" href="/customer"><h2>Customer workspace</h2><p>Book, track, and manage home services.</p></Link><Link className="card" href="/worker"><h2>Worker workspace</h2><p>Manage jobs, availability, and earnings.</p></Link></div></section>;
}
