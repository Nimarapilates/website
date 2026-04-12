import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pilates Prices in Palma de Mallorca",
  description:
    "Reformer Pilates pricing in Palma — single classes from €38, packs from €29/class, memberships from €135/month. Transparent pricing at Nimara studio, Santa Catalina.",
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

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do I need experience for Reformer Pilates?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not at all. Fundamentals is built around first-timers. Every movement is guided, and questions are part of the session.",
      },
    },
    {
      "@type": "Question",
      name: "What should I bring to a Pilates class in Palma?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Grip socks are essential — bring your own or buy a pair on arrival. Wear fitted, flexible clothing. Mats and water are provided. Arrive ten minutes early on your first visit — we will show you the studio and your Reformer.",
      },
    },
    {
      "@type": "Question",
      name: "What is the cancellation policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sessions can be cancelled up to 4 hours before the start time. After that, or in the event of a no-show, the credit is deducted. Private sessions require 24 hours' notice.",
      },
    },
    {
      "@type": "Question",
      name: "I have an injury — can I still do Reformer Pilates?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Please let us know when booking and mention it to your instructor before the session. The Reformer is well suited to rehabilitation, but your GP's guidance takes priority.",
      },
    },
    {
      "@type": "Question",
      name: "How many people are in a Reformer Pilates class at Nimara?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Eight — always. That number does not change. Every client receives attention, not just a place in the room.",
      },
    },
  ],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {children}
    </>
  );
}
