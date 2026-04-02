"use client";

import { useState, useEffect } from "react";

export default function ScrollHint() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY < 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 sm:hidden transition-opacity duration-500 ${
        visible ? "opacity-60" : "opacity-0 pointer-events-none"
      }`}
    >
      <span className="text-[11px] text-cream uppercase tracking-widest font-light">
        Scroll down
      </span>
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-cream animate-bounce"
      >
        <path d="M4 6l4 4 4-4" />
      </svg>
    </div>
  );
}
