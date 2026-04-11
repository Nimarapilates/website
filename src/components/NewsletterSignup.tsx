"use client";

import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  }

  return (
    <section className="bg-green py-16 sm:py-24 lg:py-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
        <ScrollReveal>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-light text-cream mb-3 sm:mb-4">
            Stay Connected
          </h2>
          <p className="text-cream/70 text-sm sm:text-base max-w-md mx-auto mb-8 sm:mb-10 leading-relaxed">
            Get class updates, wellness tips, and exclusive offers delivered to
            your inbox.
          </p>

          {submitted ? (
            <div className="max-w-md mx-auto">
              <p className="text-cream font-medium text-sm">
                Thank you for subscribing. We will be in touch soon.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="max-w-md mx-auto flex flex-col sm:flex-row gap-3"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="flex-1 bg-cream/95 text-charcoal text-sm rounded-sm px-5 py-3.5 placeholder:text-stone/60 outline-none focus:ring-2 focus:ring-cream/40 transition-all"
              />
              <button
                type="submit"
                className="bg-charcoal text-cream font-medium text-sm px-7 py-3.5 rounded-sm transition-all duration-300 hover:bg-charcoal/85 hover:shadow-lg shrink-0"
              >
                Subscribe
              </button>
            </form>
          )}

          <p className="text-cream/40 text-xs mt-5">
            We respect your privacy. Unsubscribe anytime.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
