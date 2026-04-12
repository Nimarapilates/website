import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work With Us",
  description:
    "Join the Nimara Pilates team in Palma de Mallorca. Open roles for Reformer Pilates instructors and studio staff in Santa Catalina.",
  keywords: [
    "Pilates instructor jobs Palma",
    "Reformer Pilates jobs Mallorca",
    "fitness jobs Palma de Mallorca",
    "trabajo pilates Palma",
    "empleo instructor pilates Mallorca",
  ],
  alternates: { canonical: "https://nimarapilates.com/careers" },
  openGraph: {
    title: "Work With Us | Nimara Pilates",
    description:
      "Join the Nimara Pilates team in Palma de Mallorca. Open roles for instructors and studio staff.",
    url: "https://nimarapilates.com/careers",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
