"use client";

import Image from "next/image";
import { SectionLabel, ButtonPrimary, Divider } from "@/components/ui";
import ScrollReveal from "@/components/ScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";

export default function StudioPage() {
  const { t } = useLanguage();
  const s = t.studio;

  const practical = [
    { title: s.p1Title, text: s.p1Text },
    { title: s.p2Title, text: s.p2Text },
    { title: s.p3Title, text: s.p3Text },
    { title: s.p4Title, text: s.p4Text },
    { title: s.p5Title, text: s.p5Text },
    { title: s.p6Title, text: s.p6Text },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative h-[55vh] sm:h-[70vh] min-h-[400px] sm:min-h-[500px] overflow-hidden">
        <Image
          src="/images/studio/reformers.png"
          alt="BE:LiVE Reformer Pilates studio"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 hero-video-overlay" />
        <div className="relative z-10 flex flex-col justify-end h-full max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 pb-16 sm:pb-24">
          <SectionLabel dark>{s.heroLabel}</SectionLabel>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-light text-cream mb-4 leading-tight max-w-2xl">
            {s.heroTitle}
          </h1>
          <p className="text-cream/60 text-lg leading-relaxed max-w-xl">{s.heroSubtitle}</p>
        </div>
      </section>

      {/* The arrival experience */}
      <section className="bg-cream py-16 sm:py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            <ScrollReveal>
              <div className="aspect-[4/3] rounded-sm overflow-hidden img-zoom">
                <Image
                  src="/images/studio/reception.png"
                  alt="BE:LiVE studio reception area"
                  width={960}
                  height={720}
                  className="w-full h-full object-cover"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={1}>
              <SectionLabel>{s.arrivalLabel}</SectionLabel>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-light text-charcoal mb-4 sm:mb-6 leading-tight">
                {s.arrivalTitle}
              </h2>
              <p className="text-stone leading-relaxed mb-3 sm:mb-4">{s.arrivalP1}</p>
              <p className="text-stone leading-relaxed">{s.arrivalP2}</p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* The studio floor */}
      <section className="bg-sand py-16 sm:py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            <ScrollReveal>
              <SectionLabel>{s.floorLabel}</SectionLabel>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-light text-charcoal mb-4 sm:mb-6 leading-tight">
                {s.floorTitle}
              </h2>
              <p className="text-stone leading-relaxed mb-3 sm:mb-4">{s.floorP1}</p>
              <p className="text-stone leading-relaxed">{s.floorP2}</p>
            </ScrollReveal>

            <ScrollReveal delay={1}>
              <div className="aspect-[4/3] rounded-sm overflow-hidden img-zoom">
                <Image
                  src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=960&h=720&fit=crop&q=80"
                  alt="Pilates reformer studio detail"
                  width={960}
                  height={720}
                  className="w-full h-full object-cover"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
        <Divider />
      </div>

      {/* Practical info */}
      <section className="bg-sand py-16 sm:py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
          <ScrollReveal>
            <SectionLabel>{s.practicalLabel}</SectionLabel>
            <h2 className="font-heading text-3xl sm:text-4xl font-light text-charcoal mb-14">
              {s.practicalTitle}
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10">
            {practical.map((item, i) => (
              <ScrollReveal key={item.title} delay={(i % 3) + 1}>
                <div className="flex gap-4">
                  <span className="font-heading text-2xl font-light text-green/50 shrink-0 mt-0.5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-heading text-lg font-light text-charcoal mb-1">
                      {item.title}
                    </h3>
                    <p className="text-stone text-sm leading-relaxed">{item.text}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* How to find us */}
      <section className="bg-cream py-16 sm:py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            <ScrollReveal>
              <SectionLabel>{s.locationLabel}</SectionLabel>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-light text-charcoal mb-6 leading-tight">
                {s.locationTitle}
              </h2>

              <div className="space-y-6 mb-8">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-green font-medium mb-1">
                    {s.addressLabel}
                  </p>
                  <p className="text-charcoal font-medium">C/ Joan Crespí, 47</p>
                  <p className="text-stone text-sm">07014 Palma de Mallorca</p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-green font-medium mb-1">
                    {s.parkingLabel}
                  </p>
                  <p className="text-stone text-sm leading-relaxed">{s.parkingText}</p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-green font-medium mb-1">
                    {s.neighbourhoodLabel}
                  </p>
                  <p className="text-stone text-sm leading-relaxed">{s.neighbourhoodText}</p>
                </div>
              </div>

              <ButtonPrimary href="/contact">{s.getInTouch}</ButtonPrimary>
            </ScrollReveal>

            <ScrollReveal delay={1}>
              <div className="aspect-[4/3] rounded-sm overflow-hidden img-zoom">
                <Image
                  src="/images/studio/storefront.png"
                  alt="BE:LiVE studio on C/ Joan Crespí, Santa Catalina"
                  width={960}
                  height={720}
                  className="w-full h-full object-cover"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-warm-black py-16 sm:py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
          <ScrollReveal>
            <SectionLabel dark>{s.ctaLabel}</SectionLabel>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-light text-cream mb-4 leading-tight max-w-2xl mx-auto">
              {s.ctaTitle}
            </h2>
            <p className="text-cream/40 text-lg max-w-lg mx-auto mb-10">{s.ctaSubtitle}</p>
            <ButtonPrimary href="/classes">{s.bookFirstClass}</ButtonPrimary>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
