"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Testimonial {
  quote: string;
  name: string;
  detail: string;
}

interface PinnedTestimonialsProps {
  testimonials: Testimonial[];
  label?: string;
}

export default function PinnedTestimonials({
  testimonials,
  label,
}: PinnedTestimonialsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const panelRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const panels = panelRefs.current.filter(Boolean) as HTMLDivElement[];

    const ctx = gsap.context(() => {
      // Pin the container for the full scroll distance
      const totalScroll = panels.length * window.innerHeight;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: `+=${totalScroll}`,
          pin: true,
          scrub: 0.5,
        },
      });

      panels.forEach((panel, i) => {
        if (i === 0) {
          // First panel starts visible
          gsap.set(panel, { opacity: 1, y: 0 });
        } else {
          gsap.set(panel, { opacity: 0, y: 30 });
        }

        if (i > 0) {
          // Fade out previous
          tl.to(
            panels[i - 1],
            { opacity: 0, y: -30, duration: 0.4 },
            i - 0.5,
          );
          // Fade in current
          tl.to(panel, { opacity: 1, y: 0, duration: 0.4 }, i - 0.3);
        }

        // Hold for reading time
        tl.to({}, { duration: 0.5 });
      });
    });

    return () => ctx.revert();
  }, [testimonials]);

  return (
    <section
      ref={containerRef}
      className="relative h-screen bg-warm-black overflow-hidden"
    >
      {/* Decorative quote mark */}
      <div className="absolute top-16 sm:top-24 left-1/2 -translate-x-1/2 font-heading text-[12rem] sm:text-[18rem] text-cream/[0.03] leading-none select-none pointer-events-none">
        &ldquo;
      </div>

      {label && (
        <div className="absolute top-10 sm:top-14 left-1/2 -translate-x-1/2 z-10">
          <p className="text-xs uppercase tracking-[0.25em] font-medium text-mist/60">
            {label}
          </p>
        </div>
      )}

      {testimonials.map((t, i) => (
        <div
          key={i}
          ref={(el) => {
            panelRefs.current[i] = el;
          }}
          className="absolute inset-0 flex items-center justify-center px-6 sm:px-12"
        >
          <div className="max-w-3xl mx-auto text-center">
            <blockquote className="font-heading text-2xl sm:text-3xl lg:text-4xl font-light text-cream leading-snug mb-8 sm:mb-10">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <div>
              <p className="text-cream/80 text-sm font-medium tracking-wide">
                {t.name}
              </p>
              <p className="text-cream/40 text-xs tracking-wider mt-1">
                {t.detail}
              </p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
