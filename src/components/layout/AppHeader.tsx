import Link from "next/link";
import { AuthControls } from "@/components/auth/AuthControls";
import { RoleSwitcher } from "@/components/auth/RoleSwitcher";
import type { UserRoleState } from "@/lib/auth/roles";

export function AppHeader({ roleState }: { roleState?: UserRoleState }) {
  return (
    <header className="topbar">
      <Link className="brand" href="/">
        GharHelper
      </Link>
      <nav className="nav" aria-label="Primary navigation">
        {roleState ? <RoleSwitcher roleState={roleState} /> : null}
        <AuthControls />
      </nav>
    </header>
  );
}
