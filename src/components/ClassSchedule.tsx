"use client";

import { SectionLabel, ButtonPrimary } from "@/components/ui";
import ScrollReveal from "@/components/ScrollReveal";
import { BOOKING_CONFIG } from "@/lib/config";

/* ── Schedule data ───────────────────────────────────── */

type ClassType = "Foundation" | "Current" | "Depth";

interface ScheduleEntry {
  time: string;
  name: ClassType;
  duration: number;
}

const schedule: Record<string, ScheduleEntry[]> = {
  Monday: [
    { time: "07:30", name: "Depth", duration: 60 },
    { time: "08:45", name: "Foundation", duration: 60 },
    { time: "10:00", name: "Current", duration: 60 },
    { time: "11:15", name: "Depth", duration: 60 },
    { time: "17:30", name: "Foundation", duration: 60 },
    { time: "18:45", name: "Current", duration: 60 },
  ],
  Tuesday: [
    { time: "09:15", name: "Foundation", duration: 60 },
    { time: "10:30", name: "Current", duration: 60 },
    { time: "11:45", name: "Depth", duration: 60 },
    { time: "15:30", name: "Foundation", duration: 60 },
    { time: "17:30", name: "Current", duration: 60 },
    { time: "18:45", name: "Depth", duration: 60 },
  ],
  Wednesday: [
    { time: "07:30", name: "Current", duration: 60 },
    { time: "08:45", name: "Foundation", duration: 60 },
    { time: "10:00", name: "Depth", duration: 60 },
    { time: "11:15", name: "Current", duration: 60 },
    { time: "17:30", name: "Foundation", duration: 60 },
    { time: "18:45", name: "Depth", duration: 60 },
  ],
  Thursday: [
    { time: "09:15", name: "Current", duration: 60 },
    { time: "10:30", name: "Depth", duration: 60 },
    { time: "11:45", name: "Foundation", duration: 60 },
    { time: "15:30", name: "Depth", duration: 60 },
    { time: "17:30", name: "Foundation", duration: 60 },
    { time: "18:45", name: "Current", duration: 60 },
  ],
  Friday: [
    { time: "07:30", name: "Depth", duration: 60 },
    { time: "08:45", name: "Current", duration: 60 },
    { time: "10:00", name: "Foundation", duration: 60 },
    { time: "11:15", name: "Depth", duration: 60 },
    { time: "17:30", name: "Current", duration: 60 },
    { time: "18:45", name: "Foundation", duration: 60 },
  ],
  Saturday: [
    { time: "09:00", name: "Foundation", duration: 60 },
    { time: "10:15", name: "Current", duration: 60 },
    { time: "11:30", name: "Depth", duration: 60 },
  ],
};

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

/* ── Colour mapping per class type ───────────────────── */

const classStyles: Record<ClassType, string> = {
  Foundation: "bg-green/10 border-green/30 text-green",
  Current: "bg-oak/10 border-oak/30 text-oak",
  Depth: "bg-charcoal/10 border-charcoal/25 text-charcoal",
};

const legendDot: Record<ClassType, string> = {
  Foundation: "bg-green",
  Current: "bg-oak",
  Depth: "bg-charcoal",
};

/* ── Class card ──────────────────────────────────────── */

function ClassCard({ entry }: { entry: ScheduleEntry }) {
  return (
    <div className={`rounded-sm border px-3 py-2.5 ${classStyles[entry.name]}`}>
      <p className="text-sm font-medium leading-tight">{entry.name}</p>
      <p className="text-xs opacity-70 mt-0.5">
        {entry.time} &middot; {entry.duration} min
      </p>
    </div>
  );
}

/* ── Component ───────────────────────────────────────── */

export default function ClassSchedule() {
  return (
    <section className="bg-cream py-16 sm:py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
        <ScrollReveal>
          <SectionLabel>Timetable</SectionLabel>
          <h2 className="font-heading text-3xl sm:text-4xl font-light text-charcoal mb-12">
            Weekly Schedule
          </h2>
        </ScrollReveal>

        {/* ── Desktop grid ────────────────────────────── */}
        <ScrollReveal>
          <div className="hidden lg:grid grid-cols-6 gap-3">
            {days.map((day) => (
              <div key={day}>
                <p className="text-xs uppercase tracking-[0.15em] font-medium text-charcoal mb-3 text-center">
                  {day}
                </p>
                <div className="space-y-2">
                  {schedule[day].map((entry, i) => (
                    <ClassCard key={`${day}-${i}`} entry={entry} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* ── Mobile list ─────────────────────────────── */}
        <div className="lg:hidden space-y-8">
          {days.map((day, di) => (
            <ScrollReveal key={day} delay={di < 3 ? di + 1 : 0}>
              <div>
                <p className="text-xs uppercase tracking-[0.15em] font-medium text-charcoal mb-3">
                  {day}
                </p>
                <div className="space-y-2">
                  {schedule[day].map((entry, i) => (
                    <ClassCard key={`${day}-${i}`} entry={entry} />
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* ── Legend ──────────────────────────────────── */}
        <ScrollReveal>
          <div className="flex flex-wrap gap-x-6 gap-y-2 mt-10 mb-8">
            {(Object.keys(legendDot) as ClassType[]).map((type) => (
              <div key={type} className="flex items-center gap-2">
                <span className={`w-2.5 h-2.5 rounded-full ${legendDot[type]}`} />
                <span className="text-sm text-stone">{type}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* ── Note + CTA ─────────────────────────────── */}
        <ScrollReveal>
          <p className="text-stone text-sm mb-8">
            Schedule subject to change. Book via our app to secure your spot.
          </p>
          <ButtonPrimary href={BOOKING_CONFIG.bsport.widgetEnabled ? "#book" : BOOKING_CONFIG.bsport.baseUrl}>
            Book a Class
          </ButtonPrimary>
        </ScrollReveal>
      </div>
    </section>
  );
}
