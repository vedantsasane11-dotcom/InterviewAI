import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GharHelper",
  description: "Trusted home services with Customer and Worker experiences.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </ClerkProvider>
  );
}
