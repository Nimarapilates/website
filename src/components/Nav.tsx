"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/contexts/LanguageContext";
import { Lang } from "@/lib/i18n";
import { BOOKING_CONFIG } from "@/lib/config";

const langs: Lang[] = ["en", "es", "fr", "de"];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { lang, setLang, t } = useLanguage();
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const bookingHref = BOOKING_CONFIG.bsport.widgetEnabled
    ? "/classes#book"
    : BOOKING_CONFIG.bsport.baseUrl;

  const links = [
    { label: t.nav.classes, href: "/classes" },
    { label: t.nav.pricing, href: "/pricing" },
    { label: t.nav.contact, href: "/contact" },
  ];

  // On content pages, always show solid nav background
  const showSolid = !isHome || scrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out ${
        showSolid
          ? "bg-sage/90 backdrop-blur-2xl border-b border-cream/6"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex items-center justify-between h-18 sm:h-22">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0 flex flex-col leading-tight group">
          <span className="font-heading text-4xl sm:text-[2.5rem] font-light tracking-[0.18em] text-cream uppercase transition-opacity duration-300 group-hover:opacity-80">
            Nimara
          </span>
          <span className="text-[0.65rem] sm:text-[0.7rem] uppercase tracking-[0.25em] text-cream font-medium">
            Reformer Pilates
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-10">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium uppercase tracking-[0.1em] text-cream transition-colors duration-300 hover:text-cream"
            >
              {l.label}
            </Link>
          ))}

          {/* Language dropdown */}
          <div className="relative group">
            <button className="text-xs font-medium uppercase tracking-wider text-cream flex items-center gap-1.5">
              {lang}
              <svg width="8" height="5" viewBox="0 0 8 5" fill="none" className="opacity-60">
                <path d="M1 1L4 4L7 1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <div className="absolute right-0 top-full mt-2 bg-sage/95 backdrop-blur-xl rounded-sm py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              {langs.map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`block w-full text-left px-5 py-1.5 text-xs font-medium uppercase tracking-wider transition-colors duration-200 ${
                    lang === l ? "text-cream" : "text-cream/60 hover:text-cream"
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>
          </div>

          <a
            href={bookingHref}
            className="text-sm font-medium uppercase tracking-[0.1em] text-cream border border-cream/40 px-6 py-2.5 rounded-full transition-all duration-500 hover:bg-cream hover:text-sage"
          >
            {t.nav.book}
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
        >
          <span
            className={`block w-5 h-px bg-cream transition-all duration-300 ${open ? "rotate-45 translate-y-[3.5px]" : ""}`}
          />
          <span
            className={`block w-5 h-px bg-cream transition-all duration-300 ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-5 h-px bg-cream transition-all duration-300 ${open ? "-rotate-45 -translate-y-[3.5px]" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-out ${
          open ? "max-h-[30rem] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="bg-warm-black/80 backdrop-blur-2xl border-t border-cream/6 px-6 pb-8 pt-6">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-sm font-light tracking-wide text-cream hover:text-cream transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <a
            href={bookingHref}
            onClick={() => setOpen(false)}
            className="inline-block mt-5 text-sm font-medium text-cream border border-cream/25 px-6 py-2.5 rounded-full transition-all duration-300 hover:bg-cream hover:text-charcoal"
          >
            {t.nav.book}
          </a>

          {/* Mobile language switcher */}
          <div className="flex items-center gap-3 mt-6 pt-5 border-t border-cream/6">
            {langs.map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`text-xs font-medium uppercase tracking-widest transition-colors ${
                  lang === l
                    ? "text-cream"
                    : "text-cream/50 hover:text-cream"
                }`}
              >
                {l}
              </button>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
