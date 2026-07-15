"use client";

import { SignInButton, SignUpButton, UserButton, useUser } from "@clerk/nextjs";

export function AuthControls() {
  const { isLoaded, isSignedIn } = useUser();

  if (!isLoaded) {
    return <div aria-label="Loading account controls" className="auth-placeholder" />;
  }

  if (isSignedIn) {
    return <UserButton afterSignOutUrl="/" />;
  }

  return (
    <>
      <SignInButton>
        <button className="btn ghost" type="button">
          Sign in
        </button>
      </SignInButton>
      <SignUpButton>
        <button className="btn" type="button">
          Get started
        </button>
      </SignUpButton>
    </>
  );
}
