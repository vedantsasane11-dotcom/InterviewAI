export const ROLES = ["customer", "worker"] as const;
export type Role = (typeof ROLES)[number];

export type UserRoleState = {
  availableRoles: Role[];
  activeRole: Role;
};

export function isRole(value: unknown): value is Role {
  return typeof value === "string" && ROLES.includes(value as Role);
}

export function normalizeRoles(value: unknown): Role[] {
  if (!Array.isArray(value)) return ["customer"];
  const roles = value.filter(isRole);
  return roles.length ? Array.from(new Set(roles)) : ["customer"];
}

export function normalizeActiveRole(value: unknown, availableRoles: Role[]): Role {
  return isRole(value) && availableRoles.includes(value) ? value : availableRoles[0] ?? "customer";
}
