"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-warm-black text-cream/50">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-16 sm:py-20">
        {/* Brand */}
        <Link href="/" className="inline-flex flex-col leading-tight mb-10">
          <span className="font-heading text-3xl font-light tracking-[0.18em] text-cream uppercase">
            Nimara
          </span>
          <span className="text-[0.6rem] uppercase tracking-[0.25em] text-cream/60 font-medium">
            Reformer Pilates
          </span>
        </Link>

        <div className="space-y-1 text-sm mb-10">
          <p>C/ Joan Crespi, 47</p>
          <p>07014 Palma de Mallorca</p>
          <p className="pt-2">
            <a href="mailto:info@nimarapilates.com" className="transition-colors hover:text-cream">
              info@nimarapilates.com
            </a>
          </p>
          <p>
            <a
              href="https://instagram.com/nimarastudio"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-cream"
            >
              @nimarastudio
            </a>
          </p>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-cream/8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs text-cream/30">
          <p>&copy; {new Date().getFullYear()} Nimara Reformer Pilates S.L.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-cream/50">{t.footer.privacy}</Link>
            <Link href="/terms" className="hover:text-cream/50">{t.footer.terms}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
