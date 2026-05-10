"use client";

import { SectionLabel, ButtonPrimary } from "@/components/ui";
import ScrollReveal from "@/components/ScrollReveal";

const schedule: Record<string, { morning: string[]; evening: string[] }> = {
  Monday:    { morning: ["07:30", "08:45", "10:00", "11:15"], evening: ["17:30", "18:45"] },
  Tuesday:   { morning: ["09:15", "10:30", "11:45", "15:30"], evening: ["17:30", "18:45"] },
  Wednesday: { morning: ["07:30", "08:45", "10:00", "11:15"], evening: ["17:30", "18:45"] },
  Thursday:  { morning: ["09:15", "10:30", "11:45", "15:30"], evening: ["17:30", "18:45"] },
  Friday:    { morning: ["07:30", "08:45", "10:00", "11:15"], evening: ["17:30", "18:45"] },
  Saturday:  { morning: ["09:00", "10:15", "11:30"],          evening: [] },
};

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

export default function ClassSchedule() {
  return (
    <section className="bg-cream py-16 sm:py-24 lg:py-32">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-12">
        <ScrollReveal>
          <SectionLabel>Timetable</SectionLabel>
          <h2 className="font-heading text-3xl sm:text-4xl font-light text-charcoal mb-12">
            Weekly Schedule
          </h2>
        </ScrollReveal>

        <ScrollReveal>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-px bg-charcoal/8 rounded-sm overflow-hidden">
            {days.map((day) => {
              const { morning, evening } = schedule[day];
              return (
                <div key={day} className="bg-cream px-3 py-5 sm:px-4">
                  {/* Day name */}
                  <p className="text-[0.65rem] uppercase tracking-[0.18em] font-medium text-stone mb-4">
                    {day.slice(0, 3)}
                  </p>

                  {/* Morning times */}
                  <div className="space-y-2.5">
                    {morning.map((t) => (
                      <p key={t} className="text-sm text-charcoal tabular-nums">
                        {t}
                      </p>
                    ))}
                  </div>

                  {/* Evening times */}
                  {evening.length > 0 && (
                    <>
                      <div className="my-3 border-t border-charcoal/10" />
                      <div className="space-y-2.5">
                        {evening.map((t) => (
                          <p key={t} className="text-sm text-charcoal tabular-nums">
                            {t}
                          </p>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <p className="text-stone text-xs mt-8 mb-8">
            All classes 60 min · Foundation, Current &amp; Depth · Sunday closed
          </p>
          <ButtonPrimary href="/contact">
            Book a Class
          </ButtonPrimary>
        </ScrollReveal>
      </div>
    </section>
  );
}
