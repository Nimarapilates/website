"use client";

import { SectionLabel } from "@/components/ui";
import ScrollReveal from "@/components/ScrollReveal";

const roles = [
  {
    title: "Reformer Pilates Instructor",
    type: "Part-time / Full-time",
    description:
      "We are looking for certified Reformer Pilates instructors who teach with care, precision, and genuine attention. Experience with Balanced Body equipment is a plus but not essential.",
    requirements: [
      "Recognised Pilates certification (Balanced Body, BASI, Stott, or equivalent)",
      "Experience teaching group Reformer classes",
      "Fluent in English or Spanish — additional languages welcome",
      "Right to work in Spain",
    ],
  },
  {
    title: "Studio Host",
    type: "Part-time",
    description:
      "The first person our clients see. You set the tone — calm, warm, organised. You manage bookings, greet clients, and keep the studio running smoothly.",
    requirements: [
      "Fluent in English and Spanish",
      "Experience in hospitality, wellness, or customer-facing roles",
      "Comfortable with booking platforms and basic admin",
      "Right to work in Spain",
    ],
  },
];

export default function CareersPage() {
  return (
    <>
      {/* Heading */}
      <section className="bg-sand pt-32 sm:pt-40 pb-16 sm:pb-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <ScrollReveal>
            <SectionLabel>Careers</SectionLabel>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-light text-charcoal leading-tight mb-4">
              Work with us
            </h1>
            <p className="text-stone text-lg leading-relaxed max-w-xl">
              We are building a small team of people who care deeply about movement, attention, and creating a space worth returning to.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Open roles */}
      <section className="bg-cream py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <ScrollReveal>
            <SectionLabel>Open roles</SectionLabel>
          </ScrollReveal>

          <div className="space-y-0">
            {roles.map((role) => (
              <ScrollReveal key={role.title}>
                <div className="border-t border-charcoal/10 py-10 sm:py-12">
                  <div className="flex flex-wrap items-baseline justify-between gap-3 mb-4">
                    <h3 className="font-heading text-2xl sm:text-3xl font-light text-charcoal">
                      {role.title}
                    </h3>
                    <span className="text-xs text-green font-medium uppercase tracking-wider">
                      {role.type}
                    </span>
                  </div>
                  <p className="text-stone leading-relaxed max-w-2xl mb-6">
                    {role.description}
                  </p>
                  <ul className="space-y-2">
                    {role.requirements.map((req) => (
                      <li key={req} className="text-stone text-sm flex items-start gap-2">
                        <span className="text-green mt-0.5 shrink-0">&ndash;</span>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
            <div className="border-t border-charcoal/10" />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-sand py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <ScrollReveal>
            <SectionLabel>What we value</SectionLabel>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-0">
            {[
              { title: "Attention", text: "We notice the details — in a client's posture, in a room's temperature, in the way someone feels when they walk in." },
              { title: "Calm", text: "No rush, no noise, no performance. We move with intention and speak with care." },
              { title: "Craft", text: "Teaching is a skill that deepens over time. We invest in our team's growth and trust their expertise." },
            ].map((item, i) => (
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

      {/* Apply CTA */}
      <section className="bg-warm-black py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 text-center">
          <ScrollReveal>
            <h2 className="font-heading text-3xl sm:text-4xl font-light text-cream mb-4">
              Interested?
            </h2>
            <p className="text-cream/50 mb-8 max-w-md mx-auto">
              Send your CV and a short note about yourself. We read every application.
            </p>
            <a
              href="mailto:careers@nimarapilates.com?subject=Application"
              className="inline-block bg-green text-cream font-medium text-sm px-8 py-4 rounded-sm transition-all duration-300 hover:bg-green-light"
            >
              careers@nimarapilates.com
            </a>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
