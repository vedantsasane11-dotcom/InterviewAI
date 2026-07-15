import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { RoleSwitcher } from "@/components/auth/RoleSwitcher";
import type { UserRoleState } from "@/lib/auth/roles";

export function AppHeader({ roleState }: { roleState?: UserRoleState }) {
  return (
    <header className="topbar">
      <Link className="brand" href="/">GharHelper</Link>
      <nav className="nav">
        {roleState ? <RoleSwitcher roleState={roleState} /> : null}
        <SignedOut>
          <SignInButton><button className="btn ghost">Sign in</button></SignInButton>
          <SignUpButton><button className="btn">Get started</button></SignUpButton>
        </SignedOut>
        <SignedIn><UserButton afterSignOutUrl="/" /></SignedIn>
      </nav>
    </header>
  );
}
