"use client";

import Image from "next/image";
import { SectionLabel, ButtonPrimary, Divider } from "@/components/ui";
import ScrollReveal from "@/components/ScrollReveal";

const practical = [
  {
    title: "Grip socks",
    text: "Required for all classes. Bring your own or purchase a pair at the studio.",
  },
  {
    title: "What to wear",
    text: "Comfortable, fitted clothing — leggings and a fitted top work best on the Reformer.",
  },
  {
    title: "Water",
    text: "Complimentary water is available in the reception area before and after class.",
  },
  {
    title: "Changing area",
    text: "We have a changing room and lockers on site. You are welcome to arrive ready.",
  },
  {
    title: "Arrive early",
    text: "10 minutes before your first class. We will show you around and set up your Reformer.",
  },
  {
    title: "Booking",
    text: "All classes must be booked in advance via Bsport. Walk-ins cannot be guaranteed.",
  },
];

export default function StudioPage() {
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
          <SectionLabel dark>The studio</SectionLabel>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-light text-cream mb-4 leading-tight max-w-2xl">
            Step inside
          </h1>
          <p className="text-cream/60 text-lg leading-relaxed max-w-xl">
            A calm, considered space in the heart of Santa Catalina. Here is
            what to expect when you arrive.
          </p>
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
              <SectionLabel>When you arrive</SectionLabel>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-light text-charcoal mb-4 sm:mb-6 leading-tight">
                Quiet from the moment you walk in
              </h2>
              <p className="text-stone leading-relaxed mb-3 sm:mb-4">
                The reception area is where you drop your bag, put on your grip
                socks, and take a breath. Soft light, warm materials, and no
                rush — the studio opens 15 minutes before each class.
              </p>
              <p className="text-stone leading-relaxed">
                Your instructor will greet you, confirm any injuries or
                considerations, and guide you to your Reformer. First visit?
                We will walk you through everything.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* The studio floor */}
      <section className="bg-sand py-16 sm:py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            <ScrollReveal>
              <SectionLabel>The studio floor</SectionLabel>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-light text-charcoal mb-4 sm:mb-6 leading-tight">
                Eight Reformers. Room to breathe.
              </h2>
              <p className="text-stone leading-relaxed mb-3 sm:mb-4">
                The main studio has eight Balanced Body Allegro 2 Reformers —
                the same machines used in the world&apos;s best studios. Spaced
                generously so you are never on top of each other.
              </p>
              <p className="text-stone leading-relaxed">
                Natural light, warm oak floors, and soft ambient sound. It is
                designed to feel like a retreat, not a gym. You will notice the
                difference the moment you step in.
              </p>
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
            <SectionLabel>Before you come</SectionLabel>
            <h2 className="font-heading text-3xl sm:text-4xl font-light text-charcoal mb-14">
              Everything you need to know
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
                    <p className="text-stone text-sm leading-relaxed">
                      {item.text}
                    </p>
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
              <SectionLabel>How to find us</SectionLabel>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-light text-charcoal mb-6 leading-tight">
                Santa Catalina, Palma
              </h2>

              <div className="space-y-6 mb-8">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-green font-medium mb-1">
                    Address
                  </p>
                  <p className="text-charcoal font-medium">
                    C/ Joan Crespí, 47
                  </p>
                  <p className="text-stone text-sm">
                    07014 Palma de Mallorca
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-green font-medium mb-1">
                    Parking
                  </p>
                  <p className="text-stone text-sm leading-relaxed">
                    Street parking is available on C/ Joan Crespí and the
                    surrounding streets. We recommend arriving a few minutes
                    early to allow time.
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-green font-medium mb-1">
                    The neighbourhood
                  </p>
                  <p className="text-stone text-sm leading-relaxed">
                    Santa Catalina is one of Palma&apos;s most welcoming
                    neighbourhoods — independent cafés, bakeries, and quiet
                    streets. The perfect place to linger after class.
                  </p>
                </div>
              </div>

              <ButtonPrimary href="/contact">Get in touch</ButtonPrimary>
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
            <SectionLabel dark>Ready?</SectionLabel>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-light text-cream mb-4 leading-tight max-w-2xl mx-auto">
              Your first class is the best way to experience it.
            </h2>
            <p className="text-cream/40 text-lg max-w-lg mx-auto mb-10">
              No experience needed. Just come as you are.
            </p>
            <ButtonPrimary href="/classes">Book your first class</ButtonPrimary>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
