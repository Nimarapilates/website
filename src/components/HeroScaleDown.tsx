"use client";

import { useEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface HeroScaleDownProps {
  children: ReactNode;
  className?: string;
}

/**
 * Wraps the hero section. On scroll, the hero scales down
 * and gains border-radius — like stepping back from the scene.
 */
export default function HeroScaleDown({
  children,
  className = "",
}: HeroScaleDownProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      // No-op: wrapper preserved for future use
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={ref}
      className={`will-change-transform origin-center ${className}`}
    >
      {children}
    </div>
  );
}
