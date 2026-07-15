import "server-only";

import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { normalizeActiveRole, normalizeRoles, type Role, type UserRoleState } from "./roles";

export async function requireUser() {
  const { userId } = await auth.protect();
  const user = await currentUser();
  if (!user || user.id !== userId) redirect("/sign-in");
  return user;
}

export async function getRoleState(): Promise<UserRoleState> {
  const user = await requireUser();
  const availableRoles = normalizeRoles(user.publicMetadata.roles);
  const activeRole = normalizeActiveRole(user.publicMetadata.activeRole, availableRoles);
  return { availableRoles, activeRole };
}

export async function requireRole(role: Role) {
  const state = await getRoleState();
  if (state.activeRole !== role) redirect("/dashboard");
  return state;
}
