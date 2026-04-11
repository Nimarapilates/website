"use client";

import { useEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ImageRevealProps {
  children: ReactNode;
  className?: string;
  /** Direction the reveal wipes from */
  direction?: "up" | "down" | "left" | "right";
  /** Use organic curve instead of straight wipe */
  organic?: boolean;
  duration?: number;
}

const insetMap = {
  up: "inset(100% 0 0 0)",
  down: "inset(0 0 100% 0)",
  left: "inset(0 100% 0 0)",
  right: "inset(0 0 0 100%)",
};

export default function ImageReveal({
  children,
  className = "",
  direction = "up",
  organic = false,
  duration = 1.2,
}: ImageRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const startClip = organic
      ? "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)"
      : insetMap[direction];

    const endClip = organic
      ? "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
      : "inset(0 0 0 0)";

    gsap.set(el, { clipPath: startClip });

    const trigger = ScrollTrigger.create({
      trigger: el,
      start: "top 85%",
      once: true,
      onEnter: () => {
        gsap.to(el, {
          clipPath: endClip,
          duration,
          ease: "power3.inOut",
        });
      },
    });

    return () => trigger.kill();
  }, [direction, organic, duration]);

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      {children}
    </div>
  );
}
