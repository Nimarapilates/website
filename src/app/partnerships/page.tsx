"use client";

import { useState } from "react";
import { SectionLabel } from "@/components/ui";
import ScrollReveal from "@/components/ScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";

export default function PartnershipsPage() {
  const { t } = useLanguage();
  const p = t.partnerships;

  const [form, setForm] = useState({ name: "", business: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const { name, business, email, message } = form;
    const subject = encodeURIComponent(`Partnership enquiry — ${business}`);
    const body = encodeURIComponent(`Name: ${name}\nBusiness: ${business}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:info@nimarapilates.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  return (
    <>
      {/* Heading */}
      <section className="bg-sand pt-32 sm:pt-40 pb-16 sm:pb-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <ScrollReveal>
            <SectionLabel>{p.label}</SectionLabel>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-light text-charcoal leading-tight mb-4">
              {p.title}
            </h1>
            <p className="text-stone text-lg leading-relaxed max-w-xl">{p.intro}</p>
          </ScrollReveal>
        </div>
      </section>

      {/* Body + Form */}
      <section className="bg-cream py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Copy */}
            <ScrollReveal>
              <p className="text-stone leading-relaxed mb-6">{p.p1}</p>
              <p className="text-stone leading-relaxed">{p.p2}</p>
            </ScrollReveal>

            {/* Form */}
            <ScrollReveal>
              {submitted ? (
                <div className="pt-2">
                  <h2 className="font-heading text-2xl font-light text-charcoal mb-2">{p.successTitle}</h2>
                  <p className="text-stone">{p.successText}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <SectionLabel>{p.formLabel}</SectionLabel>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <input
                      required
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder={p.namePlaceholder}
                      className="w-full border-b border-charcoal/20 bg-transparent py-3 text-sm text-charcoal placeholder:text-stone/50 focus:outline-none focus:border-charcoal transition-colors"
                    />
                    <input
                      required
                      name="business"
                      value={form.business}
                      onChange={handleChange}
                      placeholder={p.businessPlaceholder}
                      className="w-full border-b border-charcoal/20 bg-transparent py-3 text-sm text-charcoal placeholder:text-stone/50 focus:outline-none focus:border-charcoal transition-colors"
                    />
                  </div>
                  <input
                    required
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder={p.emailPlaceholder}
                    className="w-full border-b border-charcoal/20 bg-transparent py-3 text-sm text-charcoal placeholder:text-stone/50 focus:outline-none focus:border-charcoal transition-colors"
                  />
                  <textarea
                    required
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder={p.messagePlaceholder}
                    rows={5}
                    className="w-full border-b border-charcoal/20 bg-transparent py-3 text-sm text-charcoal placeholder:text-stone/50 focus:outline-none focus:border-charcoal transition-colors resize-none"
                  />
                  <button
                    type="submit"
                    className="text-sm font-medium uppercase tracking-[0.1em] text-charcoal border border-charcoal/30 px-7 py-3.5 rounded-sm transition-all duration-500 hover:bg-charcoal hover:text-cream"
                  >
                    {p.submit}
                  </button>
                </form>
              )}
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-warm-black py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 text-center">
          <ScrollReveal>
            <h2 className="font-heading text-3xl sm:text-4xl font-light text-cream mb-4">{p.ctaTitle}</h2>
            <p className="text-cream/50">C/ Joan Crespi, 47 · 07014 Palma de Mallorca</p>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
