"use client";

import { BOOKING_CONFIG } from "@/lib/config";
import ScrollReveal from "@/components/ScrollReveal";

export default function ClassPassBadge() {
  const { classpass } = BOOKING_CONFIG;

  if (!classpass.enabled || !classpass.url) return null;

  return (
    <ScrollReveal>
      <section className="bg-cream py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-center">
            <p className="text-stone text-sm">
              Also available on{" "}
              <a
                href={classpass.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-charcoal font-medium underline underline-offset-4 hover:text-green transition-colors"
              >
                ClassPass
              </a>
            </p>
            <span className="hidden sm:block text-charcoal/20">|</span>
            <p className="text-stone text-xs leading-relaxed max-w-sm">
              Discover us through ClassPass and book available spots directly through the app.
            </p>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}
