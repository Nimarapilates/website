"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface SplitTextProps {
  children: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  delay?: number;
  /** If true, animates on scroll instead of on mount */
  scroll?: boolean;
  /** Render part of the text in italic */
  italicFrom?: number;
}

export default function SplitText({
  children,
  className = "",
  as: Tag = "h1",
  delay = 0,
  scroll = false,
  italicFrom,
}: SplitTextProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const containerRef = useRef<any>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el || hasAnimated.current) return;

    const words = (el as HTMLElement).querySelectorAll<HTMLSpanElement>(".split-word");

    gsap.set(words, {
      opacity: 0,
      y: 40,
      rotateX: 40,
    });

    const animate = () => {
      if (hasAnimated.current) return;
      hasAnimated.current = true;
      gsap.to(words, {
        opacity: 1,
        y: 0,
        rotateX: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.08,
        delay,
      });
    };

    if (scroll) {
      ScrollTrigger.create({
        trigger: el,
        start: "top 80%",
        once: true,
        onEnter: animate,
      });
    } else {
      animate();
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        if (t.vars.trigger === el) t.kill();
      });
    };
  }, [delay, scroll]);

  const words = children.split(" ");

  return (
    <Tag
      ref={containerRef}
      className={`${className}`}
      style={{ perspective: "600px" }}
    >
      {words.map((word, i) => {
        const isItalic =
          italicFrom !== undefined && i >= italicFrom;
        return (
          <span
            key={i}
            className="split-word inline-block will-change-transform"
            style={{
              transformOrigin: "bottom center",
              fontStyle: isItalic ? "italic" : undefined,
            }}
          >
            {word}
            {i < words.length - 1 ? "\u00A0" : ""}
          </span>
        );
      })}
    </Tag>
  );
}
