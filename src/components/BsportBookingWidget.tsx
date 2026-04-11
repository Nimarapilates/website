"use client";

import { useState } from "react";
import { BOOKING_CONFIG, getBookingUrl } from "@/lib/config";
import { SectionLabel } from "@/components/ui";
import ScrollReveal from "@/components/ScrollReveal";

interface BsportBookingWidgetProps {
  height?: number;
}

export default function BsportBookingWidget({
  height = 700,
}: BsportBookingWidgetProps) {
  const [loading, setLoading] = useState(true);
  const { bsport } = BOOKING_CONFIG;
  const widgetReady = bsport.widgetEnabled && bsport.id;

  if (!widgetReady) {
    return (
      <section id="book" className="bg-cream py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 text-center">
          <ScrollReveal>
            <SectionLabel>Book</SectionLabel>
            <h2 className="font-heading text-3xl sm:text-4xl font-light text-charcoal mb-4">
              Reserve your Reformer
            </h2>
            <p className="text-stone mb-8 max-w-md mx-auto">
              Spaces are limited to 8 per class. Book through our platform.
            </p>
            <a
              href={bsport.baseUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green text-cream font-medium text-sm px-8 py-4 rounded-sm transition-all duration-300 hover:bg-green-light"
            >
              Book on Bsport
            </a>
          </ScrollReveal>
        </div>
      </section>
    );
  }

  const iframeSrc = getBookingUrl();

  return (
    <section id="book" className="bg-cream py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <ScrollReveal>
          <SectionLabel>Book</SectionLabel>
          <h2 className="font-heading text-3xl sm:text-4xl font-light text-charcoal mb-8">
            Reserve your Reformer
          </h2>
        </ScrollReveal>

        <ScrollReveal>
          <div className="relative rounded-sm overflow-hidden">
            {loading && (
              <div className="absolute inset-0 flex items-center justify-center bg-cream z-10">
                <div className="flex flex-col items-center gap-3">
                  <div className="w-8 h-8 border-2 border-green/30 border-t-green rounded-full animate-spin" />
                  <p className="text-stone text-sm">Loading schedule&hellip;</p>
                </div>
              </div>
            )}
            <iframe
              src={iframeSrc}
              title="Nimara Pilates class booking"
              width="100%"
              height={height}
              style={{ border: "none", minHeight: `${height}px` }}
              onLoad={() => setLoading(false)}
              allow="payment"
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
