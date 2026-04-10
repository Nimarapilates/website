import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Classes",
  description:
    "Reformer Pilates classes in Palma de Mallorca: Fundamentals, Flow, Sculpt, and Restore. All levels welcome. Small groups of 8 with expert instruction at Nimara studio in Santa Catalina.",
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
    title: "Classes | Nimara Pilates",
    description:
      "Reformer Pilates classes for all levels in Santa Catalina, Palma de Mallorca. Fundamentals, Flow, Sculpt, and Restore.",
    url: "https://nimarapilates.com/classes",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
