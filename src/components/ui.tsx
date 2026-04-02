import Link from "next/link";

/* ── Section label ────────────────────────────────────── */
export function SectionLabel({
  children,
  dark = false,
}: {
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <p
      className={`text-xs uppercase tracking-[0.2em] font-medium mb-4 ${dark ? "text-sage" : "text-green"}`}
    >
      {children}
    </p>
  );
}

/* ── Primary button (green) ───────────────────────────── */
export function ButtonPrimary({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`inline-block bg-green text-cream font-medium text-sm px-7 py-3.5 rounded-sm transition-all duration-300 hover:bg-green-light hover:shadow-lg hover:shadow-green/20 ${className}`}
    >
      {children}
    </Link>
  );
}

/* ── Outline button ───────────────────────────────────── */
export function ButtonOutline({
  href,
  children,
  className = "",
  light = false,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  light?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`inline-block border font-medium text-sm px-7 py-3.5 rounded-sm transition-all duration-300 ${
        light
          ? "border-cream/40 text-cream hover:bg-cream/10"
          : "border-charcoal/30 text-charcoal hover:bg-charcoal/5 hover:border-charcoal/50"
      } ${className}`}
    >
      {children}
    </Link>
  );
}

/* ── Divider line ─────────────────────────────────────── */
export function Divider() {
  return <div className="w-full h-px bg-charcoal/10" />;
}

/* ── Duration badge ───────────────────────────────────── */
export function BadgeDuration({ minutes }: { minutes: number }) {
  return (
    <span className="inline-block bg-sand text-stone text-xs rounded-full px-3 py-1">
      {minutes} min
    </span>
  );
}

/* ── Green accent line (above headings) ───────────────── */
export function AccentLine() {
  return <div className="w-10 h-0.5 bg-green mb-6" />;
}
