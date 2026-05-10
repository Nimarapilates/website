"use client";

import { SectionLabel, ButtonPrimary } from "@/components/ui";
import ScrollReveal from "@/components/ScrollReveal";

type Level = "F" | "C" | "D";
type Slot = { time: string; level: Level };

const schedule: Record<string, { slots: Slot[] }> = {
  Monday:    { slots: [
    { time: "07:30", level: "F" },
    { time: "08:45", level: "C" },
    { time: "10:00", level: "F" },
    { time: "11:15", level: "C" },
    { time: "17:30", level: "C" },
    { time: "18:45", level: "D" },
  ]},
  Tuesday:   { slots: [
    { time: "09:15", level: "F" },
    { time: "10:30", level: "C" },
    { time: "11:45", level: "F" },
    { time: "15:30", level: "C" },
    { time: "17:30", level: "D" },
    { time: "18:45", level: "C" },
  ]},
  Wednesday: { slots: [
    { time: "07:30", level: "F" },
    { time: "08:45", level: "C" },
    { time: "10:00", level: "F" },
    { time: "11:15", level: "C" },
    { time: "17:30", level: "C" },
    { time: "18:45", level: "D" },
  ]},
  Thursday:  { slots: [
    { time: "09:15", level: "F" },
    { time: "10:30", level: "C" },
    { time: "11:45", level: "F" },
    { time: "15:30", level: "D" },
    { time: "17:30", level: "C" },
    { time: "18:45", level: "D" },
  ]},
  Friday:    { slots: [
    { time: "07:30", level: "F" },
    { time: "08:45", level: "C" },
    { time: "10:00", level: "F" },
    { time: "11:15", level: "C" },
    { time: "17:30", level: "D" },
    { time: "18:45", level: "C" },
  ]},
  Saturday:  { slots: [
    { time: "09:00", level: "F" },
    { time: "10:15", level: "D" },
    { time: "11:30", level: "C" },
  ]},
};

const levelLabel: Record<Level, string> = {
  F: "Foundation",
  C: "Current",
  D: "Depth",
};

const levelColor: Record<Level, string> = {
  F: "text-sage",
  C: "text-stone",
  D: "text-charcoal",
};

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

export default function ClassSchedule() {
  return (
    <section className="bg-cream py-16 sm:py-24 lg:py-32">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-12">
        <ScrollReveal>
          <SectionLabel>Timetable</SectionLabel>
          <h2 className="font-heading text-3xl sm:text-4xl font-light text-charcoal mb-4">
            Weekly Schedule
          </h2>
          <p className="text-stone text-xs mb-10">
            Foundation · beginner &nbsp;·&nbsp; Current · intermediate &nbsp;·&nbsp; Depth · advanced
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-px bg-charcoal/8 rounded-sm overflow-hidden">
            {days.map((day) => {
              const { slots } = schedule[day];
              const hasDivider = slots.some(s => parseInt(s.time) >= 15);
              const morning = slots.filter(s => parseInt(s.time) < 15);
              const afternoon = slots.filter(s => parseInt(s.time) >= 15);
              return (
                <div key={day} className="bg-cream px-3 py-5 sm:px-4">
                  <p className="text-[0.65rem] uppercase tracking-[0.18em] font-medium text-stone mb-4">
                    {day.slice(0, 3)}
                  </p>

                  <div className="space-y-3">
                    {morning.map((s) => (
                      <div key={s.time}>
                        <p className="text-sm text-charcoal tabular-nums">{s.time}</p>
                        <p className={`text-[0.6rem] uppercase tracking-[0.12em] ${levelColor[s.level]}`}>
                          {levelLabel[s.level]}
                        </p>
                      </div>
                    ))}
                  </div>

                  {hasDivider && afternoon.length > 0 && (
                    <>
                      <div className="my-3 border-t border-charcoal/10" />
                      <div className="space-y-3">
                        {afternoon.map((s) => (
                          <div key={s.time}>
                            <p className="text-sm text-charcoal tabular-nums">{s.time}</p>
                            <p className={`text-[0.6rem] uppercase tracking-[0.12em] ${levelColor[s.level]}`}>
                              {levelLabel[s.level]}
                            </p>
                          </div>
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
            All classes 60 min · Sunday closed
          </p>
          <ButtonPrimary href="/contact">
            Book a Class
          </ButtonPrimary>
        </ScrollReveal>
      </div>
    </section>
  );
}
