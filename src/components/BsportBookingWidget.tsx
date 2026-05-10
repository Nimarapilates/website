"use client";

import { SectionLabel } from "@/components/ui";
import ScrollReveal from "@/components/ScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";
import Link from "next/link";

export default function BsportBookingWidget() {
  const { t } = useLanguage();
  const b = t.booking;

  return (
    <section id="book" className="bg-cream py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 text-center">
        <ScrollReveal>
          <SectionLabel>{b.label}</SectionLabel>
          <h2 className="font-heading text-3xl sm:text-4xl font-light text-charcoal mb-4">
            {b.title}
          </h2>
          <p className="text-stone mb-8 max-w-md mx-auto">{b.subtitle}</p>
          <Link
            href="/contact"
            className="inline-block bg-green text-cream font-medium text-sm px-8 py-4 rounded-sm transition-all duration-300 hover:bg-green-light"
          >
            {b.bookCta}
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
