"use client";

import Image from "next/image";
import { SectionLabel } from "@/components/ui";
import ScrollReveal from "@/components/ScrollReveal";
import ImageReveal from "@/components/ImageReveal";
import { useLanguage } from "@/contexts/LanguageContext";

const studioImages = [
  { src: "/images/stock/matteo-vistocco-OdBzdc-2foE-unsplash.jpg", alt: "Studio interior — natural light and oak floors" },
  { src: "/images/stock/alina-rubo-TaxQjdfhGQM-unsplash.jpg", alt: "Reformer machines in the studio" },
  { src: "/images/stock/logan-weaver-lgnwvr-emku_T7SIeQ-unsplash.jpg", alt: "Instructor working with a client" },
  { src: "/images/stock/annie-spratt-Q6vClAWRqFY-unsplash.jpg", alt: "Studio reception area" },
  { src: "/images/stock/josh-duke-WHAdrtJcrWk-unsplash.jpg", alt: "Morning light in the studio" },
  { src: "/images/stock/roxana-popovici-cZOWYsBFHhs-unsplash.jpg", alt: "Detail of a Balanced Body Reformer" },
];

export default function StudioPage() {
  const { t } = useLanguage();
  const s = t.studio;

  const events = [
    { title: s.event1Title, desc: s.event1Desc },
    { title: s.event2Title, desc: s.event2Desc },
    { title: s.event3Title, desc: s.event3Desc },
  ];

  const equipment = [
    { title: s.eq1Title, text: s.eq1Text },
    { title: s.eq2Title, text: s.eq2Text },
    { title: s.eq3Title, text: s.eq3Text },
  ];

  return (
    <>
      {/* Heading */}
      <section className="bg-sand pt-32 sm:pt-40 pb-16 sm:pb-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <ScrollReveal>
            <SectionLabel>{s.label}</SectionLabel>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-light text-charcoal leading-tight mb-4">
              {s.title}
            </h1>
            <p className="text-stone text-lg leading-relaxed max-w-xl">
              {s.intro}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Studio gallery */}
      <section className="bg-sand pb-20 sm:pb-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {studioImages.map((img, i) => (
              <ImageReveal key={i} direction={i % 2 === 0 ? "up" : "left"}>
                <div className="aspect-[4/5] relative rounded-sm overflow-hidden">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              </ImageReveal>
            ))}
          </div>
        </div>
      </section>

      {/* The space */}
      <section className="bg-cream py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <ScrollReveal>
                <SectionLabel>{s.spaceLabel}</SectionLabel>
                <h2 className="font-heading text-3xl sm:text-4xl font-light text-charcoal mb-6">
                  {s.spaceTitle}
                </h2>
                <p className="text-stone leading-relaxed mb-4">{s.spaceP1}</p>
                <p className="text-stone leading-relaxed mb-4">{s.spaceP2}</p>
                <p className="text-stone leading-relaxed">{s.spaceP3}</p>
              </ScrollReveal>
            </div>

            <ImageReveal direction="right" className="rounded-sm">
              <div className="aspect-[4/5] relative rounded-sm overflow-hidden">
                <Image
                  src="/images/stock/pablo-merchan-montes-9dULRBdTsro-unsplash.jpg"
                  alt="Santa Catalina neighbourhood"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </ImageReveal>
          </div>
        </div>
      </section>

      {/* Equipment */}
      <section className="bg-sand py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <ScrollReveal>
            <SectionLabel>{s.equipmentLabel}</SectionLabel>
            <h2 className="font-heading text-3xl sm:text-4xl font-light text-charcoal mb-12">
              {s.equipmentTitle}
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-0">
            {equipment.map((item, i) => (
              <ScrollReveal key={item.title}>
                <div className={`border-t border-charcoal/10 py-8 sm:py-10 ${i > 0 ? "sm:pl-10 sm:border-l" : ""} ${i < 2 ? "sm:pr-10" : ""}`}>
                  <h3 className="font-heading text-xl font-light text-charcoal mb-2">
                    {item.title}
                  </h3>
                  <p className="text-stone text-sm leading-relaxed">{item.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Events */}
      <section className="bg-cream py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <ScrollReveal>
            <SectionLabel>{s.eventsLabel}</SectionLabel>
            <h2 className="font-heading text-3xl sm:text-4xl font-light text-charcoal mb-4">
              {s.eventsTitle}
            </h2>
            <p className="text-stone mb-12 max-w-xl">{s.eventsIntro}</p>
          </ScrollReveal>

          <div className="space-y-0">
            {events.map((event) => (
              <ScrollReveal key={event.title}>
                <div className="border-t border-charcoal/10 py-8 sm:py-10">
                  <div className="flex flex-wrap items-baseline justify-between gap-3 mb-3">
                    <h3 className="font-heading text-2xl sm:text-3xl font-light text-charcoal">
                      {event.title}
                    </h3>
                    <span className="text-xs text-green font-medium uppercase tracking-wider">
                      {s.comingSoon}
                    </span>
                  </div>
                  <p className="text-stone leading-relaxed max-w-2xl">{event.desc}</p>
                </div>
              </ScrollReveal>
            ))}
            <div className="border-t border-charcoal/10" />
          </div>
        </div>
      </section>

      {/* Visit */}
      <section className="bg-warm-black py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 text-center">
          <ScrollReveal>
            <h2 className="font-heading text-3xl sm:text-4xl font-light text-cream mb-4">
              {s.ctaTitle}
            </h2>
            <p className="text-cream/50 mb-8">C/ Joan Crespi, 47 · 07014 Palma de Mallorca</p>
            <a
              href="/contact"
              className="inline-block text-sm font-medium uppercase tracking-[0.1em] text-cream border border-cream/30 px-7 py-3.5 rounded-sm transition-all duration-500 hover:bg-cream hover:text-sage"
            >
              {s.ctaButton}
            </a>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
