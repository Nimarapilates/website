"use client";

import { useState } from "react";
import { SectionLabel } from "@/components/ui";
import ScrollReveal from "@/components/ScrollReveal";
import { InstagramIcon, LinkedInIcon } from "@/components/SocialIcons";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ContactPage() {
  const { t } = useLanguage();
  const c = t.contact;

  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", foundUs: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("https://formspree.io/f/xgopgyra", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("sent");
        setForm({ firstName: "", lastName: "", email: "", foundUs: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="bg-sand pt-32 sm:pt-40 pb-24 sm:pb-32">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
      <ScrollReveal>
        <SectionLabel>{c.heroLabel}</SectionLabel>
        <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-light text-charcoal leading-tight mb-4">
          {c.heroTitle}
        </h1>
        <p className="text-stone text-lg leading-relaxed max-w-xl mb-16">
          {c.heroSubtitle}
        </p>
      </ScrollReveal>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        {/* Form */}
        <ScrollReveal>
          {status === "sent" ? (
            <div className="py-12" role="alert" aria-live="polite">
              <p className="font-heading text-2xl font-light text-charcoal mb-2">{c.sentTitle}</p>
              <p className="text-stone">{c.sentText}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex gap-3">
                <div className="flex-1">
                  <label htmlFor="firstName" className="block text-sm font-medium text-charcoal mb-2">
                    {c.firstName}
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    required
                    aria-required="true"
                    value={form.firstName}
                    onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                    className="w-full bg-transparent border-b border-charcoal/20 px-0 py-3 text-charcoal text-sm placeholder:text-stone/40 focus:outline-none focus:border-green transition-colors"
                    placeholder={c.firstName}
                  />
                </div>
                <div className="flex-1">
                  <label htmlFor="lastName" className="block text-sm font-medium text-charcoal mb-2">
                    {c.lastName}
                  </label>
                  <input
                    id="lastName"
                    type="text"
                    required
                    aria-required="true"
                    value={form.lastName}
                    onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                    className="w-full bg-transparent border-b border-charcoal/20 px-0 py-3 text-charcoal text-sm placeholder:text-stone/40 focus:outline-none focus:border-green transition-colors"
                    placeholder={c.lastName}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-2">
                  {c.email}
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  aria-required="true"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-transparent border-b border-charcoal/20 px-0 py-3 text-charcoal text-sm placeholder:text-stone/40 focus:outline-none focus:border-green transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="foundUs" className="block text-sm font-medium text-charcoal mb-2">
                  How did you find us?
                </label>
                <select
                  id="foundUs"
                  value={form.foundUs}
                  onChange={(e) => setForm({ ...form, foundUs: e.target.value })}
                  className="w-full bg-transparent border-b border-charcoal/20 px-0 py-3 text-charcoal text-sm focus:outline-none focus:border-green transition-colors appearance-none"
                >
                  <option value="" className="text-stone/40">Select an option</option>
                  <option value="instagram">Instagram</option>
                  <option value="google">Google search</option>
                  <option value="word-of-mouth">Word of mouth</option>
                  <option value="walked-past">Walked past the studio</option>
                  <option value="classpass">ClassPass</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-2">
                  {c.message}
                </label>
                <textarea
                  id="message"
                  required
                  aria-required="true"
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-transparent border-b border-charcoal/20 px-0 py-3 text-charcoal text-sm placeholder:text-stone/40 focus:outline-none focus:border-green transition-colors resize-none"
                  placeholder={c.messagePlaceholder}
                />
              </div>

              {status === "error" && (
                <p className="text-red-600 text-sm" role="alert" aria-live="polite">{c.error}</p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="bg-green text-cream font-medium text-sm px-7 py-3.5 rounded-sm transition-all duration-300 hover:bg-green-light disabled:opacity-60"
              >
                {status === "sending" ? c.sending : c.send}
              </button>
            </form>
          )}
        </ScrollReveal>

        {/* Info */}
        <ScrollReveal>
          <div className="space-y-10">
            <div>
              <h3 className="text-xs uppercase tracking-[0.2em] font-medium text-green mb-3">{c.visitUs}</h3>
              <p className="text-stone leading-relaxed">
                C/ Joan Crespi, 47<br />
                07014 Palma de Mallorca
              </p>
            </div>

            <div>
              <h3 className="text-xs uppercase tracking-[0.2em] font-medium text-green mb-3">{c.emailHeading}</h3>
              <a
                href="mailto:info@nimarapilates.com"
                className="text-charcoal hover:text-green transition-colors"
              >
                info@nimarapilates.com
              </a>
            </div>

            <div>
              <h3 className="text-xs uppercase tracking-[0.2em] font-medium text-green mb-3">{c.followUs}</h3>
              <div className="flex items-center gap-4">
                <a
                  href="https://instagram.com/nimarastudio"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="text-charcoal/60 hover:text-green transition-colors"
                >
                  <InstagramIcon className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com/company/nimarapilates"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-charcoal/60 hover:text-green transition-colors"
                >
                  <LinkedInIcon className="w-5 h-5" />
                </a>
              </div>
            </div>

          </div>
        </ScrollReveal>
      </div>
      </div>
    </section>
  );
}
