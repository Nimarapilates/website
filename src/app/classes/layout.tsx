import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reformer Pilates Classes in Palma de Mallorca",
  description:
    "Pilates classes in Palma — Fundamentals, Flow, Sculpt, and Restore. Small groups of 8, expert instruction, all levels welcome. Book at Nimara studio, Santa Catalina.",
  keywords: [
    "Reformer Pilates classes Palma",
    "Pilates Fundamentals Mallorca",
    "Pilates Flow Palma",
    "Pilates Sculpt Mallorca",
    "Pilates Restore Palma",
    "beginner Pilates Palma",
    "clases pilates reformer Palma",
    "tipos clases pilates Mallorca",
  ],
  alternates: { canonical: "https://nimarapilates.com/classes" },
  openGraph: {
    title: "Reformer Pilates Classes in Palma | Nimara",
    description:
      "Pilates classes in Palma — Fundamentals, Flow, Sculpt, and Restore. Small groups of 8, all levels welcome at Nimara studio.",
    url: "https://nimarapilates.com/classes",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
