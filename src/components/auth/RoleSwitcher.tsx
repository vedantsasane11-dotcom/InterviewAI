"use client";

import { useTransition } from "react";
import { switchRole } from "@/app/actions";
import type { UserRoleState } from "@/lib/auth/roles";

const labels = { customer: "Customer", worker: "Worker" } as const;

export function RoleSwitcher({ roleState }: { roleState: UserRoleState }) {
  const [pending, startTransition] = useTransition();
  return (
    <div className="role-switch" aria-label="Switch active role">
      {roleState.availableRoles.map((role) => (
        <button
          className={`btn ${roleState.activeRole === role ? "" : "secondary"}`}
          disabled={pending || roleState.activeRole === role}
          key={role}
          onClick={() => startTransition(() => void switchRole(role))}
          type="button"
        >
          {labels[role]}
        </button>
      ))}
    </div>
  );
}
