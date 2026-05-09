import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Partner with Us",
  description:
    "Collaborate with Nimara Pilates in Santa Catalina, Palma. We work with local businesses who share our values of wellness, quality, and care.",
  robots: { index: false, follow: false },
  alternates: { canonical: "https://nimarapilates.com/partnerships" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
