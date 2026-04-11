"use client";

const ITEMS = [
  "Eight clients, one instructor",
  "Santa Catalina, Palma",
  "Reformer Pilates",
  "Move. Breathe. Reconnect.",
  "Expert instruction",
  "Space to breathe",
];

interface TestimonialMarqueeProps {
  variant?: "light" | "dark";
  className?: string;
}

export default function TestimonialMarquee({
  variant = "dark",
  className = "",
}: TestimonialMarqueeProps) {
  const textColor =
    variant === "light" ? "text-cream/80" : "text-charcoal/60";

  const content = ITEMS.map((item, i) => (
    <span key={i} className="flex items-center gap-6 shrink-0">
      <span>{item}</span>
      <span className="text-[8px] opacity-50">&#9670;</span>
    </span>
  ));

  return (
    <div
      className={`w-full overflow-hidden select-none py-5 sm:py-6 ${className}`}
      aria-hidden="true"
    >
      <div className="marquee-track">
        <div
          className={`flex items-center gap-6 text-xs uppercase tracking-[0.3em] font-medium ${textColor}`}
        >
          {content}
        </div>
        <div
          className={`flex items-center gap-6 text-xs uppercase tracking-[0.3em] font-medium ${textColor}`}
        >
          {content}
        </div>
      </div>
    </div>
  );
}
