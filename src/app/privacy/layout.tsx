import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Nimara Reformer Pilates in Palma de Mallorca. Learn how we collect, use, and protect your personal data in compliance with GDPR and Spanish law (LSSI).",
  robots: { index: true, follow: true },
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
