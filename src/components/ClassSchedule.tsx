"use client";

import { SectionLabel, ButtonPrimary } from "@/components/ui";
import ScrollReveal from "@/components/ScrollReveal";

type Level = "F" | "C" | "D";
type Slot = { time: string; level: Level };

const levelLabel: Record<Level, string> = { F: "Foundation", C: "Current", D: "Depth" };
const levelColor: Record<Level, string> = { F: "text-sage", C: "text-stone", D: "text-charcoal/60" };

// offsetPx: visual offset from 07:30 (each 15 min ≈ 8px)
const days: { label: string; offsetPx: number; morning: Slot[]; evening: Slot[] }[] = [
  {
    label: "Mon",
    offsetPx: 0,
    morning: [
      { time: "07:30", level: "F" },
      { time: "08:45", level: "C" },
      { time: "10:00", level: "F" },
      { time: "11:15", level: "C" },
    ],
    evening: [
      { time: "17:30", level: "C" },
      { time: "18:45", level: "D" },
    ],
  },
  {
    label: "Tue",
    offsetPx: 56,
    morning: [
      { time: "09:15", level: "F" },
      { time: "10:30", level: "C" },
      { time: "11:45", level: "F" },
    ],
    evening: [
      { time: "15:30", level: "C" },
      { time: "17:30", level: "D" },
      { time: "18:45", level: "C" },
    ],
  },
  {
    label: "Wed",
    offsetPx: 0,
    morning: [
      { time: "07:30", level: "F" },
      { time: "08:45", level: "C" },
      { time: "10:00", level: "F" },
      { time: "11:15", level: "C" },
    ],
    evening: [
      { time: "17:30", level: "C" },
      { time: "18:45", level: "D" },
    ],
  },
  {
    label: "Thu",
    offsetPx: 56,
    morning: [
      { time: "09:15", level: "F" },
      { time: "10:30", level: "C" },
      { time: "11:45", level: "F" },
    ],
    evening: [
      { time: "15:30", level: "C" },
      { time: "17:30", level: "D" },
      { time: "18:45", level: "C" },
    ],
  },
  {
    label: "Fri",
    offsetPx: 0,
    morning: [
      { time: "07:30", level: "F" },
      { time: "08:45", level: "C" },
      { time: "10:00", level: "F" },
      { time: "11:15", level: "C" },
    ],
    evening: [
      { time: "17:30", level: "D" },
      { time: "18:45", level: "C" },
    ],
  },
  {
    label: "Sat",
    offsetPx: 48,
    morning: [
      { time: "09:00", level: "F" },
      { time: "10:15", level: "D" },
      { time: "11:30", level: "C" },
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
      <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-12">
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
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-px bg-charcoal/8 rounded-sm overflow-hidden">
            {days.map((d) => (
              <div key={d.label} className="bg-cream px-3 py-5 sm:px-4 flex flex-col">
                <p className="text-[0.65rem] uppercase tracking-[0.18em] font-medium text-stone mb-4">
                  {d.label}
                </p>

                {/* Morning — offset simulates real clock position */}
                <div className="flex-1">
                  <div style={{ paddingTop: d.offsetPx }}>
                    <SlotList slots={d.morning} />
                  </div>
                </div>

                {/* Divider — aligned across all columns */}
                <div className="mt-4 border-t border-charcoal/10" />

                {/* Evening */}
                {d.evening.length > 0 ? (
                  <div className="mt-4 space-y-3">
                    {d.evening.map((s) => (
                      <div key={s.time}>
                        <p className="text-sm text-charcoal tabular-nums leading-none">{s.time}</p>
                        <p className={`text-[0.6rem] uppercase tracking-[0.12em] mt-0.5 ${levelColor[s.level]}`}>
                          {levelLabel[s.level]}
                        </p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="mt-4" />
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
