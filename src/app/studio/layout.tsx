import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Studio",
  description:
    "Step inside Nimara — a Reformer Pilates studio in Santa Catalina, Palma de Mallorca. Eight Balanced Body Allegro 2 Reformers, oak floors, natural light. A room designed for focused practice.",
  keywords: [
    "Pilates studio Palma de Mallorca",
    "Balanced Body Allegro 2 Mallorca",
    "Reformer Pilates studio Spain",
    "Santa Catalina pilates studio",
    "pilates studio interior Palma",
    "estudio pilates Santa Catalina",
    "Balanced Body Palma",
    "estudio reformer Mallorca",
  ],
  alternates: { canonical: "https://nimarastudio.es/studio" },
  openGraph: {
    title: "Studio | Nimara Pilates",
    description:
      "Eight Balanced Body Allegro 2 Reformers in a carefully designed studio in Santa Catalina, Palma de Mallorca.",
    url: "https://nimarastudio.es/studio",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
