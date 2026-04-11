"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { BOOKING_CONFIG } from "@/lib/config";

export default function Home() {
  const { t } = useLanguage();
  const h = t.home;

  const bookingHref = BOOKING_CONFIG.bsport.widgetEnabled
    ? "/classes#book"
    : BOOKING_CONFIG.bsport.baseUrl;

  return (
    <section className="relative h-screen min-h-[600px] max-h-[1100px] overflow-hidden">
      <Image
        src="/images/hero.jpg"
        alt="Reformer Pilates in motion at Nimara studio"
        fill
        className="object-cover object-center"
        sizes="100vw"
        unoptimized
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-warm-black/70 via-warm-black/15 to-transparent" />

      {/* Location — top left */}
      <div className="absolute top-24 sm:top-28 left-0 right-0 z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <p className="text-[0.65rem] sm:text-[0.7rem] uppercase tracking-[0.25em] text-cream font-medium">
          {h.location}
        </p>
      </div>

      <div className="relative z-10 flex flex-col justify-end h-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pb-16 sm:pb-24 lg:pb-28">
        <h1 className="font-heading text-5xl sm:text-7xl lg:text-8xl font-light text-cream leading-[1.0] tracking-[-0.03em] mb-8 sm:mb-10">
          Reconnect<br />with <em className="italic">yourself.</em>
        </h1>
        <div className="flex items-center gap-6">
          <Link
            href={bookingHref}
            className="text-sm font-medium uppercase tracking-[0.1em] text-cream border border-cream/40 px-7 py-3 rounded-full transition-all duration-500 hover:bg-cream hover:text-sage"
          >
            {t.nav.book}
          </Link>
          <Link
            href="/classes"
            className="text-cream text-sm uppercase tracking-[0.1em] hover:text-cream transition-colors duration-300 underline underline-offset-4"
          >
            {h.viewAllClasses} →
          </Link>
        </div>
      </div>
    </section>
  );
}
