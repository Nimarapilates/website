"use client";

import { SectionLabel, ButtonPrimary } from "@/components/ui";
import ScrollReveal from "@/components/ScrollReveal";

type Level = "F" | "C" | "D";
type Row = { time: string; cells: Partial<Record<string, Level>> };

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const morning: Row[] = [
  { time: "07:30", cells: { Mon: "F", Wed: "F", Fri: "F" } },
  { time: "08:45", cells: { Mon: "C", Wed: "C", Fri: "C" } },
  { time: "09:00", cells: { Sat: "F" } },
  { time: "09:15", cells: { Tue: "F", Thu: "F" } },
  { time: "10:00", cells: { Mon: "F", Wed: "F", Fri: "F" } },
  { time: "10:15", cells: { Sat: "D" } },
  { time: "10:30", cells: { Tue: "C", Thu: "C" } },
  { time: "11:15", cells: { Mon: "C", Wed: "C", Fri: "C" } },
  { time: "11:30", cells: { Sat: "C" } },
  { time: "11:45", cells: { Tue: "F", Thu: "F" } },
];

const evening: Row[] = [
  { time: "15:30", cells: { Tue: "C", Thu: "C" } },
  { time: "17:30", cells: { Mon: "C", Tue: "D", Wed: "C", Thu: "C", Fri: "D" } },
  { time: "18:45", cells: { Mon: "D", Tue: "C", Wed: "D", Thu: "D", Fri: "C" } },
];

const badge: Record<Level, { label: string; cls: string }> = {
  F: { label: "Foundation", cls: "bg-sage/15 text-sage" },
  C: { label: "Current",    cls: "bg-stone/15 text-stone" },
  D: { label: "Depth",      cls: "bg-charcoal/10 text-charcoal" },
};

function Cell({ level }: { level?: Level }) {
  if (!level) return <div />;
  const { label, cls } = badge[level];
  return (
    <div className={`rounded-sm px-1.5 py-1 text-center ${cls}`}>
      <span className="hidden sm:block text-[0.6rem] font-medium uppercase tracking-wide leading-none">{label}</span>
      <span className="sm:hidden text-[0.6rem] font-bold uppercase leading-none">{level}</span>
    </div>
  );
}

function SectionRow({ label }: { label: string }) {
  return (
    <div className="col-span-7 py-2 px-3 bg-charcoal/4">
      <p className="text-[0.6rem] uppercase tracking-[0.2em] font-medium text-charcoal/40">{label}</p>
    </div>
  );
}

function TimeRow({ row }: { row: Row }) {
  return (
    <>
      <div className="flex items-center px-3 py-2.5 border-t border-charcoal/6">
        <span className="text-xs tabular-nums text-stone font-medium">{row.time}</span>
      </div>
      {DAYS.map((d) => (
        <div key={d} className="flex items-center justify-center px-1 py-2.5 border-t border-charcoal/6">
          <Cell level={row.cells[d]} />
        </div>
      ))}
    </>
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
          <div className="flex flex-wrap gap-4 mb-10">
            {(["F", "C", "D"] as Level[]).map((l) => (
              <span key={l} className={`text-xs px-2.5 py-1 rounded-sm font-medium ${badge[l].cls}`}>
                {badge[l].label}
              </span>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="overflow-x-auto rounded-sm border border-charcoal/8">
            <div className="grid min-w-[420px]" style={{ gridTemplateColumns: "4rem repeat(6, 1fr)" }}>

              {/* Header */}
              <div className="bg-charcoal/4 px-3 py-3" />
              {DAYS.map((d) => (
                <div key={d} className="bg-charcoal/4 py-3 text-center">
                  <span className="text-[0.65rem] uppercase tracking-[0.18em] font-medium text-stone">{d}</span>
                </div>
              ))}

              {/* Morning */}
              <SectionRow label="Morning" />
              {morning.map((r) => <TimeRow key={r.time} row={r} />)}

              {/* Evening */}
              <SectionRow label="Evening" />
              {evening.map((r) => <TimeRow key={r.time} row={r} />)}

            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <p className="text-stone text-xs mt-6 mb-8">
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
