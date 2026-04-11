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
    // German
    "Reformer Pilates Palma de Mallorca",
    "Pilates Studio Mallorca",
    "Reformer Pilates Kurse Palma",
    "Pilates Unterricht Mallorca",
    "Pilates Kurs Palma de Mallorca",
    // Spanish — additional
    "Pilates en Palma de Mallorca",
    "clases de pilates reformer Palma",
    "studio de pilates Palma",
    "pilates reformer clases Mallorca",
    // French
    "Pilates Reformer Palma de Majorque",
    "cours de pilates Palma",
    "studio pilates Majorque",
    // Local / expat
    "pilates Palma expats",
    "English pilates Palma",
    "Nimara Pilates",
    "Nimara studio",
  ],
  alternates: {
    canonical: "https://nimarapilates.com",
    languages: {
      en: "https://nimarapilates.com",
      es: "https://nimarapilates.com",
      de: "https://nimarapilates.com",
      fr: "https://nimarapilates.com",
    },
  },
  openGraph: {
    title: "Nimara — Reformer Pilates in Palma de Mallorca",
    description:
      "Premium Reformer Pilates studio in Santa Catalina, Palma de Mallorca. Small classes of 8, expert instruction, Balanced Body equipment.",
    url: "https://nimarapilates.com",
    siteName: "Nimara Pilates",
    locale: "en_GB",
    alternateLocale: ["es_ES", "de_DE", "fr_FR"],
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

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "ExerciseGym",
    name: "Nimara Pilates",
    "@id": "https://nimarapilates.com/#exercisegym",
    description:
      "Premium Reformer Pilates studio in Santa Catalina, Palma de Mallorca. Small classes of 8, expert instruction, Balanced Body Allegro 2 Reformers.",
    url: "https://nimarapilates.com",
    telephone: "+34689582692",
    email: "info@nimarapilates.com",
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
    areaServed: {
      "@type": "City",
      name: "Palma de Mallorca",
      sameAs: "https://en.wikipedia.org/wiki/Palma_de_Mallorca",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Reformer Pilates Classes",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Fundamentals",
            description:
              "Foundation Reformer Pilates class for beginners and those refining technique.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Flow",
            description:
              "Dynamic Reformer Pilates class with flowing sequences for intermediate practitioners.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Sculpt",
            description:
              "Strength-focused Reformer Pilates class for toning and muscle definition.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Restore",
            description:
              "Gentle Reformer Pilates class focused on recovery, flexibility, and mindful movement.",
          },
        },
      ],
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "1",
      bestRating: "5",
      worstRating: "1",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Nimara Reformer Pilates",
    "@id": "https://nimarapilates.com",
    url: "https://nimarapilates.com",
    priceRange: "€€",
    telephone: "+34689582692",
    email: "info@nimarapilates.com",
    hasMap: "https://maps.google.com/?q=Nimara+Pilates+Palma",
    address: {
      "@type": "PostalAddress",
      streetAddress: "C/ Joan Crespí, 47",
      addressLocality: "Palma de Mallorca",
      addressRegion: "Illes Balears",
      postalCode: "07014",
      addressCountry: "ES",
    },
    image: "https://nimarapilates.com/images/studio/reformers.png",
    sameAs: [
      "https://www.instagram.com/nimarastudio",
    ],
  },
];

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
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-green focus:text-cream focus:px-4 focus:py-2 focus:rounded"
        >
          Skip to main content
        </a>
        <Providers>
          <Nav />
          <main id="main-content" className="flex-1">{children}</main>
          <Footer />
          <WhatsAppButton />
        </Providers>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
