"use server";

import { auth, clerkClient } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { isRole, normalizeRoles, type Role } from "@/lib/auth/roles";

export async function switchRole(role: Role) {
  const { userId } = await auth.protect();
  if (!isRole(role)) throw new Error("Unsupported role");

  const client = await clerkClient();
  const user = await client.users.getUser(userId);
  const availableRoles = normalizeRoles(user.publicMetadata.roles);
  if (!availableRoles.includes(role)) throw new Error("Role is not enabled for this account");

  await client.users.updateUserMetadata(userId, {
    publicMetadata: { ...user.publicMetadata, activeRole: role },
  });

  revalidatePath("/", "layout");
  redirect(role === "worker" ? "/worker" : "/customer");
}

export async function completeOnboarding(formData: FormData) {
  const { userId } = await auth.protect();
  const roles = formData.getAll("roles").filter(isRole);
  const uniqueRoles = roles.length ? Array.from(new Set(roles)) : ["customer"];
  const activeRole = uniqueRoles[0];
  const client = await clerkClient();

  await client.users.updateUserMetadata(userId, {
    publicMetadata: { roles: uniqueRoles, activeRole },
  });

  redirect(activeRole === "worker" ? "/worker" : "/customer");
}
