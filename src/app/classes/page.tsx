"use client";

import Link from "next/link";
import { SectionLabel } from "@/components/ui";
import ScrollReveal from "@/components/ScrollReveal";
import BsportBookingWidget from "@/components/BsportBookingWidget";
import { useLanguage } from "@/contexts/LanguageContext";
import { BOOKING_CONFIG } from "@/lib/config";

export default function ClassesPage() {
  const { t } = useLanguage();
  const c = t.classes;

  const groupClasses = [
    { name: c.class1Name, level: c.allLevels, description: c.class1Desc },
    { name: c.class2Name, level: c.allLevels, description: c.class2Desc },
    { name: c.class3Name, level: c.intermediate, description: c.class3Desc },
    { name: c.class4Name, level: c.allLevels, description: c.class4Desc },
  ];

  return (
    <>
      {/* Page heading + Group classes */}
      <section className="bg-sand pt-32 sm:pt-40 pb-20 sm:pb-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <ScrollReveal>
            <SectionLabel>{c.heroLabel}</SectionLabel>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-light text-charcoal leading-tight mb-4">
              {c.heroTitle}
            </h1>
            <p className="text-stone text-lg leading-relaxed max-w-xl mb-16 sm:mb-20">
              {c.heroSubtitle}
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <SectionLabel>{c.groupLabel}</SectionLabel>
          </ScrollReveal>

          <div className="space-y-0">
            {groupClasses.map((cls) => (
              <ScrollReveal key={cls.name}>
                <div className="border-t border-charcoal/10 py-8 sm:py-10">
                  <div className="flex flex-wrap items-baseline justify-between gap-3 mb-3">
                    <h3 className="font-heading text-2xl sm:text-3xl font-light text-charcoal">
                      {cls.name}
                    </h3>
                    <span className="text-xs text-stone tracking-wider">
                      50 min · {cls.level}
                    </span>
                  </div>
                  <p className="text-stone leading-relaxed max-w-2xl">
                    {cls.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
            <div className="border-t border-charcoal/10" />
          </div>
        </div>
      </section>

      {/* Private sessions */}
      <section className="bg-cream py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <ScrollReveal>
            <SectionLabel>{c.privateLabel}</SectionLabel>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-0">
            <ScrollReveal>
              <div className="border-t border-charcoal/10 py-8 sm:py-10 sm:pr-12">
                <h3 className="font-heading text-2xl font-light text-charcoal mb-1">
                  {c.privateSession}
                </h3>
                <p className="text-xs text-stone tracking-wider mb-3">55 min · one-to-one</p>
                <p className="text-charcoal text-2xl font-medium mb-3">&euro;75</p>
                <p className="text-stone text-sm leading-relaxed">{c.privateDesc}</p>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div className="border-t border-charcoal/10 py-8 sm:py-10 sm:pl-12 sm:border-l">
                <h3 className="font-heading text-2xl font-light text-charcoal mb-1">
                  {c.duetSession}
                </h3>
                <p className="text-xs text-stone tracking-wider mb-3">55 min · for two</p>
                <p className="text-charcoal text-2xl font-medium mb-3">&euro;95 <span className="text-sm font-normal text-stone">{t.pricing.total}</span></p>
                <p className="text-stone text-sm leading-relaxed">{c.duetDesc}</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Booking */}
      <BsportBookingWidget />

      {/* ClassPass — only visible when enabled */}
      {BOOKING_CONFIG.classpass.enabled && BOOKING_CONFIG.classpass.url && (
        <div className="bg-cream pb-12">
          <p className="text-center text-stone text-sm">
            Also available on{" "}
            <a
              href={BOOKING_CONFIG.classpass.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-charcoal font-medium underline underline-offset-4 hover:text-green transition-colors"
            >
              ClassPass
            </a>
          </p>
        </div>
      )}

      {/* CTA */}
      <section className="bg-warm-black py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 text-center">
          <ScrollReveal>
            <h2 className="font-heading text-3xl sm:text-4xl font-light text-cream mb-4">
              {c.ctaTitle}
            </h2>
            <p className="text-cream/50 mb-8">{c.ctaSubtitle}</p>
            <Link
              href="/pricing"
              className="inline-block text-sm font-medium uppercase tracking-[0.1em] text-cream border border-cream/30 px-7 py-3.5 rounded-sm transition-all duration-500 hover:bg-cream hover:text-sage"
            >
              {c.viewPricing}
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
