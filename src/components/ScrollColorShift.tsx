"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Watches elements with data-bg attribute and smoothly
 * transitions the <body> background colour as they enter/leave.
 */
export default function ScrollColorShift() {
  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>("[data-bg]");
    const triggers: ScrollTrigger[] = [];

    sections.forEach((section) => {
      const bg = section.dataset.bg;
      if (!bg) return;

      const trigger = ScrollTrigger.create({
        trigger: section,
        start: "top 60%",
        end: "bottom 40%",
        onEnter: () => {
          gsap.to("body", {
            backgroundColor: bg,
            duration: 0.8,
            ease: "power2.inOut",
            overwrite: "auto",
          });
        },
        onEnterBack: () => {
          gsap.to("body", {
            backgroundColor: bg,
            duration: 0.8,
            ease: "power2.inOut",
            overwrite: "auto",
          });
        },
      });

      triggers.push(trigger);
    });

    return () => triggers.forEach((t) => t.kill());
  }, []);

  return null;
}
