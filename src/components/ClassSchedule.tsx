"use client";

import { SectionLabel, ButtonPrimary } from "@/components/ui";
import ScrollReveal from "@/components/ScrollReveal";

type Level = "F" | "C" | "D";
type Slot = { time: string; level: Level };

const levelLabel: Record<Level, string> = { F: "Foundation", C: "Current", D: "Depth" };
const levelColor: Record<Level, string> = { F: "text-sage", C: "text-stone", D: "text-charcoal/60" };

// offsetPx: visual top offset relative to 07:30 (each 15 min ≈ 8px)
const groups = [
  {
    days: "Mon · Wed · Fri",
    offsetPx: 0,
    morning: [
      { time: "07:30", level: "F" as Level },
      { time: "08:45", level: "C" as Level },
      { time: "10:00", level: "F" as Level },
      { time: "11:15", level: "C" as Level },
    ],
    evening: [
      { time: "17:30", level: "C" as Level },
      { time: "18:45", level: "D" as Level },
    ],
  },
  {
    days: "Tue · Thu",
    offsetPx: 56, // 09:15 = 105 min after 07:30 → 7 × 8px
    morning: [
      { time: "09:15", level: "F" as Level },
      { time: "10:30", level: "C" as Level },
      { time: "11:45", level: "F" as Level },
    ],
    evening: [
      { time: "15:30", level: "C" as Level },
      { time: "17:30", level: "D" as Level },
      { time: "18:45", level: "C" as Level },
    ],
  },
  {
    days: "Saturday",
    offsetPx: 48, // 09:00 = 90 min after 07:30 → 6 × 8px
    morning: [
      { time: "09:00", level: "F" as Level },
      { time: "10:15", level: "D" as Level },
      { time: "11:30", level: "C" as Level },
    ],
    evening: [],
  },
];

function SlotList({ slots }: { slots: Slot[] }) {
  return (
    <div className="space-y-3">
      {slots.map((s) => (
        <div key={s.time}>
          <p className="text-sm text-charcoal tabular-nums leading-none">{s.time}</p>
          <p className={`text-[0.6rem] uppercase tracking-[0.12em] mt-0.5 ${levelColor[s.level]}`}>
            {levelLabel[s.level]}
          </p>
        </div>
      ))}
    </div>
  );
}

export default function ClassSchedule() {
  return (
    <section className="bg-cream py-16 sm:py-24 lg:py-32">
      <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12">
        <ScrollReveal>
          <SectionLabel>Timetable</SectionLabel>
          <h2 className="font-heading text-3xl sm:text-4xl font-light text-charcoal mb-3">
            Weekly Schedule
          </h2>
          <p className="text-stone text-xs mb-10">
            Foundation · beginner &nbsp;·&nbsp; Current · intermediate &nbsp;·&nbsp; Depth · advanced
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-charcoal/8 rounded-sm overflow-hidden">
            {groups.map((g) => (
              <div key={g.days} className="bg-cream px-5 py-6 flex flex-col">
                <p className="text-[0.65rem] uppercase tracking-[0.18em] font-medium text-stone mb-5">
                  {g.days}
                </p>

                {/* Morning — offset simulates real clock position */}
                <div className="flex-1">
                  <p className="text-[0.6rem] uppercase tracking-[0.15em] text-charcoal/30 mb-3">Morning</p>
                  <div style={{ paddingTop: g.offsetPx }}>
                    <SlotList slots={g.morning} />
                  </div>
                </div>

                {/* Divider — always on the same horizontal line */}
                <div className="mt-5 border-t border-charcoal/10" />

                {/* Evening / Afternoon */}
                {g.evening.length > 0 ? (
                  <div className="mt-5">
                    <p className="text-[0.6rem] uppercase tracking-[0.15em] text-charcoal/30 mb-3">
                      {g.days === "Tue · Thu" ? "Afternoon & Evening" : "Evening"}
                    </p>
                    <SlotList slots={g.evening} />
                  </div>
                ) : (
                  <p className="mt-5 text-[0.6rem] uppercase tracking-[0.15em] text-charcoal/20">Sunday closed</p>
                )}
              </div>
            ))}
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
