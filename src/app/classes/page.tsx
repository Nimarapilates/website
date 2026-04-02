"use client";

import Image from "next/image";
import { SectionLabel, ButtonPrimary, BadgeDuration, Divider } from "@/components/ui";
import ScrollReveal from "@/components/ScrollReveal";

const groupClasses = [
  {
    name: "Reformer Fundamentals",
    slug: "fundamentals",
    duration: 50,
    level: "All levels",
    description:
      "A foundational class for those new to Reformer Pilates or returning after a break. We focus on alignment, breath, and the core principles of the method. If this is your first time, start here.",
    image: "https://images.unsplash.com/photo-1717500252709-05a73fc4f1da?w=800&h=500&fit=crop&q=80",
  },
  {
    name: "Reformer Flow",
    slug: "flow",
    duration: 50,
    level: "All levels",
    description:
      "A dynamic, flowing class connecting movements with breath. Builds strength, flexibility, and body awareness through continuous, intentional sequences. Expect to move, and to feel it the next day.",
    image: "https://images.unsplash.com/photo-1747240549807-fc3962949818?w=800&h=500&fit=crop&q=80",
  },
  {
    name: "Reformer Sculpt",
    slug: "sculpt",
    duration: 50,
    level: "Intermediate",
    description:
      "An athletic, strength-focused class using the full range of the Reformer. Targeted work for glutes, core, arms, and back. Controlled intensity — no rushing, no compromise on form.",
    image: "https://images.unsplash.com/photo-1754257320382-95b43e9f797c?w=800&h=500&fit=crop&q=80",
  },
  {
    name: "Reformer Restore",
    slug: "restore",
    duration: 50,
    level: "All levels",
    description:
      "A slower, deeper practice emphasising mobility, stretch, and release. Ideal for recovery days or as a complement to more intense training. Leave feeling longer, looser, and more aligned.",
    image: "https://images.unsplash.com/photo-1754257319747-df51c384c0fa?w=800&h=500&fit=crop&q=80",
  },
];

const privateClasses = [
  {
    name: "Private Session",
    duration: 55,
    price: 75,
    description:
      "One-to-one instruction tailored entirely to your goals, body, and experience level. The most personalised way to practise.",
  },
  {
    name: "Duet Session",
    duration: 55,
    price: 95,
    description:
      "Semi-private instruction for two. Share the session with a partner, friend, or colleague while receiving focused, personalised guidance.",
  },
];

export default function ClassesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] sm:h-[60vh] min-h-[380px] sm:min-h-[450px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1754257320374-cd5fb647cfea?w=1920&h=1080&fit=crop&q=80"
          alt="Reformer Pilates in practice"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 hero-video-overlay" />
        <div className="relative z-10 flex flex-col justify-end h-full max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 pb-16 sm:pb-24">
          <SectionLabel dark>Our classes</SectionLabel>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-light text-cream mb-4 leading-tight max-w-2xl">
            Find your practice
          </h1>
          <p className="text-cream/60 text-lg leading-relaxed max-w-xl">
            Every class is led by an experienced instructor, limited to eight
            clients, and designed to challenge you with precision and care.
          </p>
        </div>
      </section>

      {/* Group classes */}
      <section className="bg-sand py-16 sm:py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
          <ScrollReveal>
            <SectionLabel>Group classes</SectionLabel>
            <h2 className="font-heading text-3xl sm:text-4xl font-light text-charcoal mb-14">
              Reformer classes for every level
            </h2>
          </ScrollReveal>

          <div className="space-y-8">
            {groupClasses.map((c, i) => (
              <ScrollReveal key={c.slug}>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 bg-cream border border-charcoal/8 rounded-sm overflow-hidden card-hover">
                  <div className="aspect-[16/9] lg:aspect-auto overflow-hidden">
                    <Image
                      src={c.image}
                      alt={c.name}
                      width={800}
                      height={500}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="lg:col-span-2 p-8 sm:p-10 flex flex-col justify-center">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <h3 className="font-heading text-2xl font-light text-charcoal">
                        {c.name}
                      </h3>
                      <div className="flex gap-2">
                        <BadgeDuration minutes={c.duration} />
                        <span className="inline-block bg-sand text-stone text-xs rounded-full px-3 py-1">
                          {c.level}
                        </span>
                      </div>
                    </div>
                    <p className="text-stone leading-relaxed max-w-2xl">
                      {c.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
        <Divider />
      </div>

      {/* Private sessions */}
      <section className="bg-sand py-16 sm:py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
          <ScrollReveal>
            <SectionLabel>Private instruction</SectionLabel>
            <h2 className="font-heading text-3xl sm:text-4xl font-light text-charcoal mb-12">
              One-to-one and duet sessions
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {privateClasses.map((c, i) => (
              <ScrollReveal key={c.name} delay={i + 1}>
                <div className="bg-cream border border-charcoal/8 rounded-sm p-8 sm:p-10 card-hover h-full">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3 className="font-heading text-2xl font-light text-charcoal">
                      {c.name}
                    </h3>
                    <BadgeDuration minutes={c.duration} />
                  </div>
                  <p className="text-green font-medium text-lg mb-4">
                    &euro;{c.price}
                  </p>
                  <p className="text-stone text-sm leading-relaxed">
                    {c.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* What to expect */}
      <section className="bg-cream py-16 sm:py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
          <ScrollReveal>
            <div className="max-w-2xl mx-auto text-center mb-12">
              <SectionLabel>Your first visit</SectionLabel>
              <h2 className="font-heading text-3xl sm:text-4xl font-light text-charcoal">
                What to expect
              </h2>
            </div>
          </ScrollReveal>

          <div className="max-w-2xl mx-auto space-y-8">
            {[
              {
                step: "01",
                title: "Arrive early",
                text: "Come 10 minutes before your class. We will show you the studio, your Reformer, and answer any questions.",
              },
              {
                step: "02",
                title: "Dress comfortably",
                text: "Wear comfortable, fitted clothing and grip socks. We have socks available to purchase if you forget yours.",
              },
              {
                step: "03",
                title: "Follow your instructor",
                text: "Every movement will be demonstrated and cued. Your instructor is there for you — ask questions, take breaks, go at your own pace.",
              },
              {
                step: "04",
                title: "Stay afterwards",
                text: "Take a moment in the reception area. Water is on us. There is no rush.",
              },
            ].map((s, i) => (
              <ScrollReveal key={s.step} delay={i + 1}>
                <div className="flex gap-6">
                  <span className="text-green font-heading text-2xl font-light mt-0.5 shrink-0">
                    {s.step}
                  </span>
                  <div>
                    <h3 className="font-heading text-xl font-light text-charcoal mb-1">
                      {s.title}
                    </h3>
                    <p className="text-stone text-sm leading-relaxed">
                      {s.text}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-warm-black py-16 sm:py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
          <ScrollReveal>
            <SectionLabel dark>Ready to begin</SectionLabel>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-light text-cream mb-6 leading-tight max-w-2xl mx-auto">
              We recommend starting with Reformer Fundamentals.
            </h2>
            <p className="text-cream/50 text-lg max-w-lg mx-auto mb-10">
              No experience necessary. Just you, the Reformer, and an instructor
              who will guide every movement.
            </p>
            <ButtonPrimary href="/pricing">View pricing</ButtonPrimary>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
