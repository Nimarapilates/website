import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Nimara Pilates in Santa Catalina, Palma de Mallorca. Book a class, ask a question, or find us at C/ Joan Crespí, 47, 07014 Palma.",
  keywords: [
    "contact Pilates studio Palma",
    "book Pilates class Mallorca",
    "Nimara Pilates contact",
    "Pilates Santa Catalina address",
    "Pilates studio Palma location",
    "reservar clase pilates Palma",
    "contacto pilates Mallorca",
    "dirección estudio pilates Palma",
  ],
  alternates: { canonical: "https://nimarapilates.com/contact" },
  openGraph: {
    title: "Contact | Nimara Pilates",
    description:
      "Find Nimara Pilates at C/ Joan Crespí, 47, Santa Catalina, Palma de Mallorca. Book a class or get in touch.",
    url: "https://nimarapilates.com/contact",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
