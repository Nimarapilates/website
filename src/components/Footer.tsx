"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { InstagramIcon, LinkedInIcon } from "@/components/SocialIcons";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-warm-black text-cream/50">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-16 sm:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex flex-col leading-tight mb-6">
              <span className="font-heading text-3xl font-light tracking-[0.18em] text-cream uppercase">
                Nimara
              </span>
              <span className="text-[0.6rem] uppercase tracking-[0.25em] text-cream/60 font-medium">
                Reformer Pilates
              </span>
            </Link>
            <div className="space-y-1 text-sm">
              <p>C/ Joan Crespi, 47</p>
              <p>07014 Palma de Mallorca</p>
              <p className="pt-2">
                <a href="mailto:info@nimarapilates.com" className="transition-colors hover:text-cream">
                  info@nimarapilates.com
                </a>
              </p>
            </div>
          </div>

          {/* Classes & Pricing */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] font-medium text-cream/70 mb-4">
              {t.nav.classes}
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/classes" className="transition-colors hover:text-cream">{t.nav.classes}</Link></li>
              <li><Link href="/pricing" className="transition-colors hover:text-cream">{t.nav.pricing}</Link></li>
              <li><Link href="/studio" className="transition-colors hover:text-cream">{t.nav.studio}</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] font-medium text-cream/70 mb-4">
              {t.footer.company}
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/contact" className="transition-colors hover:text-cream">{t.nav.contact}</Link></li>
              <li><Link href="/careers" className="transition-colors hover:text-cream">{t.nav.workWithUs}</Link></li>
              <li><Link href="/blog" className="transition-colors hover:text-cream">{t.footer.journal}</Link></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] font-medium text-cream/70 mb-4">
              {t.footer.followHeading}
            </h3>
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com/nimarastudio"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-cream/50 hover:text-cream transition-colors"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/company/nimarapilates"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-cream/50 hover:text-cream transition-colors"
              >
                <LinkedInIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-cream/8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs text-cream/30">
          <p>&copy; {new Date().getFullYear()} Nimara Reformer Pilates S.L.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-cream/50">{t.footer.privacy}</Link>
            <Link href="/terms" className="hover:text-cream/50">{t.footer.terms}</Link>
            <Link href="/cancellation" className="hover:text-cream/50">{t.footer.cancellation}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
