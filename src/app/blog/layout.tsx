import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Nimara Journal",
  description:
    "Wellness insights, Reformer Pilates tips, and studio updates from Nimara Pilates in Palma de Mallorca.",
  alternates: { canonical: "https://nimarapilates.com/blog" },
  openGraph: {
    title: "The Nimara Journal",
    description:
      "Wellness insights, Reformer Pilates tips, and studio updates from Nimara Pilates in Palma de Mallorca.",
    url: "https://nimarapilates.com/blog",
    siteName: "Nimara Pilates",
    locale: "en_GB",
    type: "website",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
