import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Instructors",
  description:
    "Meet the Nimara Pilates instructors in Palma de Mallorca. Certified Reformer Pilates teachers with international training, dedicated to small-group expert instruction.",
  keywords: [
    "Pilates instructor Palma",
    "Reformer Pilates teacher Mallorca",
    "certified Pilates instructor Spain",
    "Pilates teacher Palma de Mallorca",
    "instructor pilates Palma",
    "profesor pilates Mallorca",
    "pilates teacher Santa Catalina",
    "Nimara instructor",
  ],
  alternates: { canonical: "https://nimarastudio.es/instructors" },
  openGraph: {
    title: "Instructors | Nimara Pilates",
    description:
      "Certified Reformer Pilates instructors in Palma de Mallorca, dedicated to expert small-group teaching.",
    url: "https://nimarastudio.es/instructors",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
