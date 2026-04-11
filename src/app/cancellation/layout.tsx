import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cancellation Policy",
  description:
    "Cancellation and refund policy for Nimara Reformer Pilates studio in Palma de Mallorca.",
  alternates: { canonical: "https://nimarapilates.com/cancellation" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
