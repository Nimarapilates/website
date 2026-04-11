"use client";

import Link from "next/link";
import { SectionLabel } from "@/components/ui";
import ScrollReveal from "@/components/ScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";
import { BOOKING_CONFIG } from "@/lib/config";

export default function PricingPage() {
  const { t } = useLanguage();
  const p = t.pricing;

  const bookingHref = BOOKING_CONFIG.bsport.widgetEnabled
    ? "/classes#book"
    : BOOKING_CONFIG.bsport.baseUrl;

  const packs = [
    { name: p.dropIn, price: 38, per: null, features: [p.singleClass, p.noCommitment, p.anyClassType] },
    { name: p.pack5, price: 165, per: p.perClass33, features: [p.fiveClasses, p.valid2months, p.anyClassType] },
    { name: p.pack10, price: 290, per: p.perClass29, features: [p.tenClasses, p.valid3months, p.anyClassType] },
  ];

  const memberships = [
    { name: p.monthly4, price: 135, per: p.perClass3375, features: [p.classes4month, p.commitment2m, p.notice30], featured: false },
    { name: p.monthly8, price: 245, per: p.perClass306, features: [p.classes8month, p.commitment2m, p.notice30], featured: true },
    { name: p.unlimited, price: 315, per: null, features: [p.unlimitedClasses, p.commitment3m, p.notice30, p.priorityBooking], featured: false },
  ];

  const faqs = [
    { q: p.faq1Q, a: p.faq1A },
    { q: p.faq2Q, a: `${p.faq2A} Arrive ten minutes early on your first visit — we will show you the studio and your Reformer.` },
    { q: p.faq3Q, a: p.faq3A },
    { q: p.faq4Q, a: p.faq4A },
    { q: p.faq7Q, a: p.faq7A },
  ];

  return (
    <>
      {/* Page heading + Discovery */}
      <section className="bg-sand pt-32 sm:pt-40 pb-20 sm:pb-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <ScrollReveal>
            <SectionLabel>{p.heroLabel}</SectionLabel>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-light text-charcoal leading-tight mb-4">
              {p.heroTitle}
            </h1>
            <p className="text-stone text-lg leading-relaxed max-w-xl mb-16 sm:mb-20">
              {p.heroSubtitle}
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <SectionLabel>{p.discoveryLabel}</SectionLabel>
            <div className="border-t border-charcoal/10 py-8 sm:py-10">
              <div className="flex flex-wrap items-baseline justify-between gap-4 mb-3">
                <h3 className="font-heading text-2xl sm:text-3xl font-light text-charcoal">
                  {p.discoveryName}
                </h3>
                <span className="text-charcoal text-2xl font-medium">&euro;29</span>
              </div>
              <p className="text-stone text-sm mb-4">{p.discoverySubtitle}</p>
              <p className="text-stone text-xs">{p.discoveryFeature3} · {p.discoveryFeature4}</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Class packs */}
      <section className="bg-cream py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <ScrollReveal>
            <SectionLabel>{p.packsLabel}</SectionLabel>
            <p className="text-stone text-xs mb-8">{p.packsCondition}</p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-0">
            {packs.map((pack, i) => (
              <ScrollReveal key={pack.name}>
                <div className={`border-t border-charcoal/10 py-8 sm:py-10 ${i > 0 ? "sm:pl-10 sm:border-l" : ""} ${i < packs.length - 1 ? "sm:pr-10" : ""}`}>
                  <h3 className="font-heading text-xl font-light text-charcoal mb-1">
                    {pack.name}
                  </h3>
                  {pack.per && <p className="text-stone text-xs mb-3">{pack.per}</p>}
                  <p className="text-charcoal text-2xl font-medium mb-4">&euro;{pack.price}</p>
                  <ul className="space-y-1.5">
                    {pack.features.map((f) => (
                      <li key={f} className="text-stone text-sm">{f}</li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Memberships */}
      <section className="bg-sand py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <ScrollReveal>
            <SectionLabel>{p.membershipsLabel}</SectionLabel>
            <p className="text-stone text-xs mb-8">{p.membershipsCondition}</p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-0">
            {memberships.map((m, i) => (
              <ScrollReveal key={m.name}>
                <div className={`border-t border-charcoal/10 py-8 sm:py-10 ${i > 0 ? "sm:pl-10 sm:border-l" : ""} ${i < memberships.length - 1 ? "sm:pr-10" : ""}`}>
                  {m.featured && (
                    <p className="text-xs uppercase tracking-[0.2em] font-medium text-green mb-2">
                      {p.mostPopular}
                    </p>
                  )}
                  <h3 className="font-heading text-xl font-light text-charcoal mb-1">
                    {m.name}
                  </h3>
                  {m.per && <p className="text-stone text-xs mb-3">{m.per}</p>}
                  <p className="text-charcoal text-2xl font-medium mb-4">
                    &euro;{m.price}<span className="text-sm font-normal text-stone">{p.perMonth}</span>
                  </p>
                  <ul className="space-y-1.5">
                    {m.features.map((f) => (
                      <li key={f} className="text-stone text-sm">{f}</li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-cream py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <ScrollReveal>
            <SectionLabel>{p.faqLabel}</SectionLabel>
          </ScrollReveal>

          <div className="max-w-3xl">
            {faqs.map((item, i) => (
              <ScrollReveal key={i}>
                <details className="group border-t border-charcoal/10 py-6 cursor-pointer">
                  <summary className="flex items-center justify-between gap-4 list-none">
                    <span className="font-heading text-lg font-light text-charcoal group-open:text-green transition-colors">
                      {item.q}
                    </span>
                    <span className="shrink-0 text-green transition-transform duration-300 group-open:rotate-45 text-2xl leading-none">
                      +
                    </span>
                  </summary>
                  <p className="mt-4 text-stone text-sm leading-relaxed max-w-2xl">{item.a}</p>
                </details>
              </ScrollReveal>
            ))}
            <div className="border-t border-charcoal/10" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-warm-black py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 text-center">
          <ScrollReveal>
            <h2 className="font-heading text-3xl sm:text-4xl font-light text-cream mb-8">
              {t.home.ctaTitle}
            </h2>
            <a
              href={bookingHref}
              className="inline-block bg-green text-cream font-medium text-sm px-8 py-4 rounded-sm transition-all duration-300 hover:bg-green-light"
            >
              {t.nav.book}
            </a>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
