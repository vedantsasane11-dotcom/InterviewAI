import { completeOnboarding } from "@/app/actions";
import { AppHeader } from "@/components/layout/AppHeader";
import { requireUser } from "@/lib/auth/session";

export default async function OnboardingPage(){await requireUser();return <main className="shell"><AppHeader/><section className="dashboard stack"><span className="badge">Account setup</span><h1>How will you use GharHelper?</h1><form action={completeOnboarding} className="card stack"><label><input name="roles" type="checkbox" value="customer" defaultChecked /> I want to book home services</label><label><input name="roles" type="checkbox" value="worker" /> I want to offer services as a worker</label><button className="btn" type="submit">Finish setup</button></form></section></main>}
