"use client";

import { useState } from "react";
import { BOOKING_CONFIG, getBookingUrl } from "@/lib/config";
import { ButtonPrimary } from "@/components/ui";
import ScrollReveal from "@/components/ScrollReveal";

interface BsportBookingWidgetProps {
  height?: number;
  className?: string;
}

export default function BsportBookingWidget({
  height = 700,
  className = "",
}: BsportBookingWidgetProps) {
  const [loading, setLoading] = useState(true);
  const { bsport } = BOOKING_CONFIG;
  const widgetReady = bsport.widgetEnabled && bsport.id;

  /* ── If widget is not configured, show a simple CTA ── */
  if (!widgetReady) {
    return (
      <section id="book" className={`bg-sand py-16 sm:py-24 lg:py-32 ${className}`}>
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
          <ScrollReveal>
            <h2 className="font-heading text-3xl sm:text-4xl font-light text-charcoal mb-4">
              Book Your Class
            </h2>
            <p className="text-stone text-lg mb-8 max-w-lg mx-auto">
              Reserve your reformer through our booking platform. Spaces are limited to 8 per class.
            </p>
            <ButtonPrimary href={bsport.baseUrl}>
              Book on Bsport
            </ButtonPrimary>
          </ScrollReveal>
        </div>
      </section>
    );
  }

  /* ── Embedded Bsport iframe ── */
  const iframeSrc = getBookingUrl();

  return (
    <section id="book" className={`bg-sand py-16 sm:py-24 lg:py-32 ${className}`}>
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
        <ScrollReveal>
          <h2 className="font-heading text-3xl sm:text-4xl font-light text-charcoal mb-8 text-center">
            Book Your Class
          </h2>
        </ScrollReveal>

        <ScrollReveal>
          <div className="relative bg-cream border border-charcoal/8 rounded-sm overflow-hidden">
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
