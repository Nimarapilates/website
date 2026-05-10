"use client";

import { SectionLabel, ButtonPrimary } from "@/components/ui";
import ScrollReveal from "@/components/ScrollReveal";

const groups = [
  {
    days: "Mon · Wed · Fri",
    morning: ["07:30", "08:45", "10:00", "11:15"],
    evening: ["17:30", "18:45"],
  },
  {
    days: "Tue · Thu",
    morning: ["09:15", "10:30", "11:45", "15:30"],
    evening: ["17:30", "18:45"],
  },
  {
    days: "Saturday",
    morning: ["09:00", "10:15", "11:30"],
    evening: [],
  },
];

export default function ClassSchedule() {
  return (
    <section className="bg-cream py-16 sm:py-24 lg:py-32">
      <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12">
        <ScrollReveal>
          <SectionLabel>Timetable</SectionLabel>
          <h2 className="font-heading text-3xl sm:text-4xl font-light text-charcoal mb-12">
            Weekly Schedule
          </h2>
        </ScrollReveal>

        <ScrollReveal>
          <div className="divide-y divide-charcoal/8">
            {groups.map((g) => (
              <div
                key={g.days}
                className="py-6 sm:py-7 flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-0"
              >
                {/* Day label */}
                <div className="sm:w-48 flex-shrink-0">
                  <p className="text-sm font-medium text-charcoal tracking-wide">
                    {g.days}
                  </p>
                </div>

                {/* Times */}
                <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                  {/* Morning block */}
                  <div className="flex flex-wrap gap-x-4 gap-y-2">
                    {g.morning.map((t) => (
                      <span key={t} className="text-sm text-charcoal tabular-nums">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Divider between morning and evening */}
                  {g.evening.length > 0 && (
                    <>
                      <span className="hidden sm:block w-px h-4 bg-charcoal/20" />
                      <div className="flex flex-wrap gap-x-4 gap-y-2">
                        {g.evening.map((t) => (
                          <span key={t} className="text-sm text-charcoal tabular-nums">
                            {t}
                          </span>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <p className="text-stone text-xs mt-8 mb-8">
            All classes 60 min · Foundation, Current &amp; Depth levels available every day · Sunday closed
          </p>
          <ButtonPrimary href="/contact">
            Book a Class
          </ButtonPrimary>
        </ScrollReveal>
      </div>
    </section>
  );
}
