import { AppHeader } from "@/components/layout/AppHeader";
import { getRoleState } from "@/lib/auth/session";

export default async function AppLayout({ children }: { children: React.ReactNode }) {
  const roleState = await getRoleState();
  return <main className="shell"><AppHeader roleState={roleState} />{children}</main>;
}
