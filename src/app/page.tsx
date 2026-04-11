"use client";

import Image from "next/image";
import Link from "next/link";
import { ButtonPrimary } from "@/components/ui";
import ScrollReveal from "@/components/ScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";
import { BOOKING_CONFIG } from "@/lib/config";

export default function Home() {
  const { t } = useLanguage();
  const h = t.home;

  const bookingHref = BOOKING_CONFIG.bsport.widgetEnabled
    ? "/classes#book"
    : BOOKING_CONFIG.bsport.baseUrl;

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative h-screen min-h-[600px] max-h-[1100px] overflow-hidden">
        <Image
          src="/images/studio/reformers.png"
          alt="Nimara Reformer Pilates studio"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 hero-video-overlay" />

        {/* Asymmetric content — pushed left, not centered */}
        <div className="relative z-10 flex flex-col justify-end h-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pb-20 sm:pb-32">
          <p className="text-[0.65rem] uppercase tracking-[0.35em] text-cream/40 mb-6">
            {h.location}
          </p>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-7xl font-light text-cream leading-[1.1] tracking-[-0.02em] max-w-lg mb-6">
            {h.heroTitle}
          </h1>
          <p className="text-cream/50 text-base sm:text-lg leading-relaxed max-w-md mb-10">
            {h.heroSubtitle}
          </p>
          <div className="flex items-center gap-6">
            <ButtonPrimary href={bookingHref}>{h.viewPricing}</ButtonPrimary>
            <Link
              href="/classes"
              className="text-cream/40 text-sm hover:text-cream/70 transition-colors duration-300 underline underline-offset-4"
            >
              {h.viewAllClasses}
            </Link>
          </div>
        </div>

        {/* Scroll line — minimal */}
        <div className="hidden sm:block absolute bottom-10 right-10 z-10">
          <div className="w-px h-16 bg-cream/20 animate-pulse" />
        </div>
      </section>

      {/* ── Philosophy — asymmetric two-column ───────────── */}
      <section className="bg-sand py-24 sm:py-32 lg:py-40">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
            {/* Left — narrow column with numbers */}
            <div className="lg:col-span-4">
              <ScrollReveal>
                <div className="space-y-12">
                  {[
                    { number: "08", label: h.v1Title },
                    { number: "50", label: h.v2Title },
                    { number: "01", label: h.v3Title },
                  ].map((v) => (
                    <div key={v.number}>
                      <span className="block font-heading text-6xl sm:text-7xl font-light text-charcoal/10 leading-none tracking-[-0.04em]">
                        {v.number}
                      </span>
                      <p className="text-charcoal text-sm mt-2 tracking-wide">
                        {v.label}
                      </p>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>

            {/* Right — large image, offset upward */}
            <div className="lg:col-span-8 lg:-mt-16">
              <ScrollReveal>
                <div className="aspect-[3/2] rounded-sm overflow-hidden">
                  <Image
                    src="/images/studio/reception.png"
                    alt="Nimara studio interior"
                    width={1200}
                    height={800}
                    className="w-full h-full object-cover"
                  />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── Studio — editorial, asymmetric ───────────────── */}
      <section className="bg-cream py-24 sm:py-32 lg:py-40">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            {/* Text — offset to left third */}
            <div className="lg:col-span-5 lg:pr-8">
              <ScrollReveal>
                <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-light text-charcoal leading-[1.1] tracking-[-0.02em] mb-6">
                  {h.floorTitle}
                </h2>
                <p className="text-stone leading-relaxed mb-4">{h.floorP1}</p>
                <p className="text-stone/70 leading-relaxed text-sm">{h.floorP2}</p>
              </ScrollReveal>
            </div>

            {/* Image — takes two-thirds */}
            <div className="lg:col-span-7">
              <ScrollReveal>
                <div className="aspect-[4/3] rounded-sm overflow-hidden img-zoom">
                  <Image
                    src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=1200&h=900&fit=crop&q=80"
                    alt="Reformer studio detail"
                    width={1200}
                    height={900}
                    className="w-full h-full object-cover"
                  />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── Full-bleed quote ─────────────────────────────── */}
      <section className="relative h-[35vh] sm:h-[45vh] min-h-[260px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1747239202356-764770773c9a?w=1920&h=800&fit=crop&q=80"
          alt="Pilates practice in motion"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-warm-black/50" />
        <div className="relative z-10 flex items-center h-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <ScrollReveal>
            <p className="font-heading text-3xl sm:text-5xl lg:text-6xl font-light text-cream leading-[1.15] tracking-[-0.02em] max-w-xl">
              {h.bannerQuote}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Classes — minimal cards ──────────────────────── */}
      <section className="bg-sand py-24 sm:py-32 lg:py-40">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <ScrollReveal>
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-light text-charcoal leading-[1.1] tracking-[-0.02em] mb-16 sm:mb-20 max-w-md">
              {h.classesTitle}
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-charcoal/8">
            {[
              { name: h.class1Name, desc: h.class1Desc },
              { name: h.class2Name, desc: h.class2Desc },
              { name: h.class3Name, desc: h.class3Desc },
              { name: h.class4Name, desc: h.class4Desc },
            ].map((c) => (
              <ScrollReveal key={c.name}>
                <div className="bg-sand p-8 sm:p-10 lg:p-12 group cursor-default">
                  <div className="flex items-baseline justify-between mb-3">
                    <h3 className="font-heading text-xl sm:text-2xl font-light text-charcoal group-hover:text-green transition-colors duration-500">
                      {c.name}
                    </h3>
                    <span className="text-xs text-stone/50">{h.classDuration}</span>
                  </div>
                  <p className="text-stone text-sm leading-relaxed">{c.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="mt-12">
              <ButtonPrimary href="/classes">{h.viewAllClasses}</ButtonPrimary>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Testimonial — single, cinematic ──────────────── */}
      <section className="bg-charcoal py-24 sm:py-32 lg:py-40">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8">
              <ScrollReveal>
                <p className="font-heading text-2xl sm:text-3xl lg:text-4xl font-light text-cream/90 leading-[1.4] tracking-[-0.01em]">
                  &ldquo;{h.t2Quote}&rdquo;
                </p>
              </ScrollReveal>
            </div>
            <div className="lg:col-span-4 lg:text-right">
              <ScrollReveal>
                <p className="text-cream/60 text-sm">{h.t2Name}</p>
                <p className="text-cream/30 text-xs">{h.t2Detail}</p>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── Location — clean, asymmetric ─────────────────── */}
      <section className="bg-cream py-24 sm:py-32 lg:py-40">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            <div className="lg:col-span-5">
              <ScrollReveal>
                <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-light text-charcoal leading-[1.1] tracking-[-0.02em] mb-8">
                  {h.locationTitle}
                </h2>

                <div className="space-y-5 mb-10">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-green font-medium mb-1">
                      {h.addressLabel}
                    </p>
                    <p className="text-charcoal">C/ Joan Crespí, 47</p>
                    <p className="text-stone text-sm">07014 Palma de Mallorca</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-green font-medium mb-1">
                      {h.neighbourhoodLabel}
                    </p>
                    <p className="text-stone text-sm leading-relaxed">{h.neighbourhoodText}</p>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="inline-block border border-charcoal/20 text-charcoal font-medium text-sm px-7 py-3.5 rounded-sm transition-all duration-300 hover:bg-charcoal hover:text-cream"
                >
                  {h.getInTouch}
                </Link>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-7">
              <ScrollReveal>
                <div className="aspect-[4/3] rounded-sm overflow-hidden img-zoom">
                  <Image
                    src="/images/studio/storefront.png"
                    alt="Nimara studio on C/ Joan Crespí, Santa Catalina"
                    width={1200}
                    height={900}
                    className="w-full h-full object-cover"
                  />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA — minimal, confident ─────────────────────── */}
      <section className="bg-warm-black py-24 sm:py-32 lg:py-40">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <ScrollReveal>
            <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-light text-cream leading-[1.1] tracking-[-0.02em] max-w-lg mb-8">
              {h.ctaTitle}
            </h2>
            <p className="text-cream/35 text-base max-w-md mb-10">
              {h.ctaSubtitle}
            </p>
            <div className="flex items-center gap-6">
              <ButtonPrimary href="/pricing">{h.viewPricing}</ButtonPrimary>
              <Link
                href="/pricing#founding"
                className="text-cream/30 text-sm hover:text-cream/60 transition-colors duration-300"
              >
                {h.foundingRates}
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
