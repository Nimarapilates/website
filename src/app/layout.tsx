import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Providers from "@/components/Providers";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nimarapilates.com"),
  title: {
    default: "Nimara — Reformer Pilates in Palma de Mallorca",
    template: "%s | Nimara Pilates",
  },
  description:
    "Nimara is a premium Reformer Pilates studio in Santa Catalina, Palma de Mallorca. Small classes of 8, expert instruction, Balanced Body Allegro 2 Reformers. Book your first class today.",
  keywords: [
    // English — pilates
    "Reformer Pilates Palma",
    "Reformer Pilates Mallorca",
    "Pilates studio Palma de Mallorca",
    "Pilates classes Palma",
    "Pilates Mallorca",
    "Balanced Body Reformer",
    "Pilates Santa Catalina Palma",
    "Pilates Spain",
    // English — yoga crossover
    "yoga and pilates Palma",
    "mind body studio Mallorca",
    "wellness studio Palma",
    "pilates yoga Mallorca",
    // Spanish — pilates
    "pilates reformer Palma",
    "clases pilates Palma de Mallorca",
    "estudio pilates Palma",
    "pilates Mallorca",
    "reformer pilates España",
    "pilates Santa Catalina",
    // Spanish — yoga crossover
    "yoga pilates Palma",
    "bienestar Palma Mallorca",
    "clases bienestar Palma",
    // Local / expat
    "pilates Palma expats",
    "English pilates Palma",
    "Nimara Pilates",
    "Nimara studio",
  ],
  alternates: {
    canonical: "https://nimarapilates.com",
  },
  openGraph: {
    title: "Nimara — Reformer Pilates in Palma de Mallorca",
    description:
      "Premium Reformer Pilates studio in Santa Catalina, Palma de Mallorca. Small classes of 8, expert instruction, Balanced Body equipment.",
    url: "https://nimarapilates.com",
    siteName: "Nimara Pilates",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nimara — Reformer Pilates in Palma de Mallorca",
    description:
      "Premium Reformer Pilates studio in Santa Catalina, Palma de Mallorca. Small classes, expert instruction.",
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ExerciseGym",
  name: "Nimara Pilates",
  description:
    "Premium Reformer Pilates studio in Santa Catalina, Palma de Mallorca. Small classes of 8, expert instruction, Balanced Body Allegro 2 Reformers.",
  url: "https://nimarapilates.com",
  telephone: "",
  email: "hello@nimarapilates.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "C/ Joan Crespí, 47",
    addressLocality: "Palma de Mallorca",
    addressRegion: "Illes Balears",
    postalCode: "07014",
    addressCountry: "ES",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 39.5696,
    longitude: 2.6502,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "20:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "14:00",
    },
  ],
  priceRange: "€€",
  currenciesAccepted: "EUR",
  paymentAccepted: "Credit Card, Cash",
  image: "https://nimarapilates.com/images/studio/reformers.png",
  sameAs: [
    "https://www.instagram.com/nimarastudio",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${dmSans.variable} h-full`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Providers>
          <Nav />
          <main className="flex-1">{children}</main>
          <Footer />
          <WhatsAppButton />
        </Providers>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
