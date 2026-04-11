interface CurvedDividerProps {
  /** Background color of the section ABOVE */
  from?: string;
  /** Background color of the section BELOW (fills the curve) */
  to?: string;
  /** Direct fill override — takes precedence over from/to */
  fill?: string;
  className?: string;
  flip?: boolean;
}

const colorMap: Record<string, string> = {
  sand: "var(--color-sand)",
  cream: "var(--color-cream)",
  charcoal: "var(--color-charcoal)",
  "warm-black": "var(--color-warm-black)",
  green: "var(--color-green)",
};

export default function CurvedDivider({
  from,
  to,
  fill,
  className = "",
  flip = false,
}: CurvedDividerProps) {
  const bgColor = from ? (colorMap[from] || from) : undefined;
  const curveColor = fill || (to ? (colorMap[to] || to) : "var(--color-cream)");

  return (
    <div
      className={`w-full leading-none ${className}`}
      style={{
        backgroundColor: bgColor,
        ...(flip ? { transform: "scaleY(-1)" } : {}),
      }}
    >
      <svg
        viewBox="0 0 1440 48"
        preserveAspectRatio="none"
        className="block w-full h-[32px] sm:h-[48px]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 48V8C240 40 480 48 720 48C960 48 1200 40 1440 8V48H0Z"
          fill={curveColor}
        />
      </svg>
    </div>
  );
}
