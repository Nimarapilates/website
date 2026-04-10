import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Reformer Pilates pricing in Palma de Mallorca. Single classes, class packs, and founding member rates at Nimara studio. Transparent, straightforward pricing with no hidden fees.",
  keywords: [
    "Pilates pricing Palma",
    "Reformer Pilates prices Mallorca",
    "Pilates class cost Palma",
    "Pilates membership Mallorca",
    "founding member Pilates Palma",
    "precio clases pilates Palma",
    "bono pilates Mallorca",
    "tarifa pilates Palma",
  ],
  alternates: { canonical: "https://nimarapilates.com/pricing" },
  openGraph: {
    title: "Pricing | Nimara Pilates",
    description:
      "Transparent Reformer Pilates pricing in Palma de Mallorca. Single classes, packs, and founding member rates.",
    url: "https://nimarapilates.com/pricing",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
