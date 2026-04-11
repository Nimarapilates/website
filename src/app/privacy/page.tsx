import Link from "next/link";

export default function PrivacyPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-charcoal pt-28 sm:pt-36 pb-16 sm:pb-20">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
          <p className="text-xs uppercase tracking-[0.2em] font-medium text-sage mb-4">
            Legal
          </p>
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-light text-cream leading-tight">
            Privacy Policy
          </h1>
          <p className="text-cream/50 text-sm mt-4">
            Last updated: 11 April 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-sand py-16 sm:py-24 lg:py-32">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="prose-legal space-y-12">
            {/* 1 */}
            <div>
              <h2 className="font-heading text-2xl font-light text-charcoal mb-4">
                1. Data Controller
              </h2>
              <p className="text-stone leading-relaxed text-sm mb-3">
                The data controller responsible for processing your personal data is:
              </p>
              <ul className="text-stone text-sm leading-relaxed space-y-1 ml-4 list-disc">
                <li><strong className="text-charcoal">Business name:</strong> Nimara Reformer Pilates S.L.</li>
                <li><strong className="text-charcoal">Address:</strong> C/ Joan Cresp&iacute;, 47, 07014 Palma de Mallorca, Illes Balears, Spain</li>
                <li><strong className="text-charcoal">Email:</strong>{" "}
                  <a href="mailto:info@nimarapilates.com" className="text-green hover:text-green-light transition-colors">
                    info@nimarapilates.com
                  </a>
                </li>
                <li><strong className="text-charcoal">Website:</strong>{" "}
                  <a href="https://nimarapilates.com" className="text-green hover:text-green-light transition-colors">
                    nimarapilates.com
                  </a>
                </li>
              </ul>
            </div>

            {/* 2 */}
            <div>
              <h2 className="font-heading text-2xl font-light text-charcoal mb-4">
                2. Data We Collect
              </h2>
              <p className="text-stone leading-relaxed text-sm mb-3">
                We collect personal data through the following channels:
              </p>

              <h3 className="font-heading text-lg font-light text-charcoal mt-6 mb-2">
                2.1 Contact Form (Formspree)
              </h3>
              <p className="text-stone leading-relaxed text-sm">
                When you submit our contact form, we collect your first name, last name, email address, phone number (optional), and message content. This data is processed by Formspree, Inc. and forwarded to us via email.
              </p>

              <h3 className="font-heading text-lg font-light text-charcoal mt-6 mb-2">
                2.2 Class Bookings (Bsport)
              </h3>
              <p className="text-stone leading-relaxed text-sm">
                When you book a class, you interact with Bsport, a third-party booking platform. Bsport collects your name, email address, phone number, payment information, and booking history. Bsport acts as an independent data controller for data processed through its platform. Please refer to{" "}
                <a href="https://www.bsport.io/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-green hover:text-green-light transition-colors">
                  Bsport&apos;s privacy policy
                </a>{" "}
                for details.
              </p>

              <h3 className="font-heading text-lg font-light text-charcoal mt-6 mb-2">
                2.3 Website Analytics (Vercel Analytics)
              </h3>
              <p className="text-stone leading-relaxed text-sm">
                We use Vercel Analytics and Vercel Speed Insights to understand how visitors use our website. These tools collect anonymised, aggregated data such as page views, referral sources, and performance metrics. No personally identifiable information is collected. No cookies are set for analytics purposes.
              </p>

              <h3 className="font-heading text-lg font-light text-charcoal mt-6 mb-2">
                2.4 WhatsApp (Meta)
              </h3>
              <p className="text-stone leading-relaxed text-sm">
                Our website includes a WhatsApp button for direct messaging. When you contact us via WhatsApp, your messages and phone number are processed by Meta Platforms Ireland Ltd. Please refer to{" "}
                <a href="https://www.whatsapp.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-green hover:text-green-light transition-colors">
                  WhatsApp&apos;s privacy policy
                </a>{" "}
                for details.
              </p>
            </div>

            {/* 3 */}
            <div>
              <h2 className="font-heading text-2xl font-light text-charcoal mb-4">
                3. Legal Basis for Processing
              </h2>
              <p className="text-stone leading-relaxed text-sm mb-3">
                We process your personal data on the following legal bases under Article 6 of the GDPR:
              </p>
              <ul className="text-stone text-sm leading-relaxed space-y-2 ml-4 list-disc">
                <li>
                  <strong className="text-charcoal">Consent (Art. 6(1)(a)):</strong> When you voluntarily submit the contact form or initiate a WhatsApp conversation with us.
                </li>
                <li>
                  <strong className="text-charcoal">Performance of a contract (Art. 6(1)(b)):</strong> When processing is necessary to fulfil a class booking or manage your membership.
                </li>
                <li>
                  <strong className="text-charcoal">Legitimate interest (Art. 6(1)(f)):</strong> For website analytics to improve our services and user experience, where such interests are not overridden by your rights.
                </li>
              </ul>
            </div>

            {/* 4 */}
            <div>
              <h2 className="font-heading text-2xl font-light text-charcoal mb-4">
                4. Data Retention
              </h2>
              <ul className="text-stone text-sm leading-relaxed space-y-2 ml-4 list-disc">
                <li>
                  <strong className="text-charcoal">Contact form submissions:</strong> Retained for up to 12 months from the date of enquiry, then deleted unless a business relationship is established.
                </li>
                <li>
                  <strong className="text-charcoal">Booking and payment data:</strong> Retained in accordance with Spanish tax and accounting obligations (minimum 5 years as required by Ley General Tributaria).
                </li>
                <li>
                  <strong className="text-charcoal">Analytics data:</strong> Aggregated and anonymised; no personal data is stored.
                </li>
              </ul>
            </div>

            {/* 5 */}
            <div>
              <h2 className="font-heading text-2xl font-light text-charcoal mb-4">
                5. Third-Party Processors
              </h2>
              <p className="text-stone leading-relaxed text-sm mb-3">
                We share your data with the following third-party services, each of which maintains its own privacy policy:
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-stone border-collapse">
                  <thead>
                    <tr className="border-b border-charcoal/15">
                      <th className="text-left text-charcoal font-medium py-3 pr-4">Service</th>
                      <th className="text-left text-charcoal font-medium py-3 pr-4">Purpose</th>
                      <th className="text-left text-charcoal font-medium py-3">Location</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-charcoal/8">
                    <tr>
                      <td className="py-3 pr-4">Vercel, Inc.</td>
                      <td className="py-3 pr-4">Website hosting, analytics, speed insights</td>
                      <td className="py-3">USA (EU data region available)</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4">Formspree, Inc.</td>
                      <td className="py-3 pr-4">Contact form processing</td>
                      <td className="py-3">USA</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4">Bsport SAS</td>
                      <td className="py-3 pr-4">Class booking and payments</td>
                      <td className="py-3">France (EU)</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4">Meta Platforms Ireland Ltd</td>
                      <td className="py-3 pr-4">WhatsApp messaging</td>
                      <td className="py-3">Ireland (EU)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-stone leading-relaxed text-sm mt-3">
                Where data is transferred outside the European Economic Area, appropriate safeguards are in place (e.g., EU Standard Contractual Clauses or adequacy decisions).
              </p>
            </div>

            {/* 6 */}
            <div>
              <h2 className="font-heading text-2xl font-light text-charcoal mb-4">
                6. Cookies
              </h2>
              <p className="text-stone leading-relaxed text-sm mb-3">
                Our website uses only essential cookies required for the proper functioning of the site. We do not use advertising or tracking cookies.
              </p>
              <p className="text-stone leading-relaxed text-sm">
                Vercel Analytics is privacy-focused and does not use cookies to collect data. No cookie consent banner is required for essential-only cookies under the ePrivacy Directive and Spain&apos;s LSSI (Ley 34/2002, de servicios de la sociedad de la informaci&oacute;n y de comercio electr&oacute;nico).
              </p>
            </div>

            {/* 7 */}
            <div>
              <h2 className="font-heading text-2xl font-light text-charcoal mb-4">
                7. Your Rights Under the GDPR
              </h2>
              <p className="text-stone leading-relaxed text-sm mb-3">
                As a data subject, you have the following rights:
              </p>
              <ul className="text-stone text-sm leading-relaxed space-y-2 ml-4 list-disc">
                <li><strong className="text-charcoal">Right of access</strong> &mdash; obtain confirmation of whether your data is being processed and request a copy.</li>
                <li><strong className="text-charcoal">Right to rectification</strong> &mdash; request correction of inaccurate or incomplete data.</li>
                <li><strong className="text-charcoal">Right to erasure</strong> &mdash; request deletion of your personal data where there is no compelling reason for continued processing.</li>
                <li><strong className="text-charcoal">Right to restriction of processing</strong> &mdash; request that we limit how we use your data.</li>
                <li><strong className="text-charcoal">Right to data portability</strong> &mdash; receive your data in a structured, commonly used, machine-readable format.</li>
                <li><strong className="text-charcoal">Right to object</strong> &mdash; object to processing based on legitimate interests or direct marketing.</li>
                <li><strong className="text-charcoal">Right to withdraw consent</strong> &mdash; where processing is based on consent, you may withdraw it at any time without affecting the lawfulness of prior processing.</li>
              </ul>
              <p className="text-stone leading-relaxed text-sm mt-4">
                To exercise any of these rights, please contact us at{" "}
                <a href="mailto:info@nimarapilates.com" className="text-green hover:text-green-light transition-colors">
                  info@nimarapilates.com
                </a>
                . We will respond within 30 days.
              </p>
            </div>

            {/* 8 */}
            <div>
              <h2 className="font-heading text-2xl font-light text-charcoal mb-4">
                8. Right to Lodge a Complaint
              </h2>
              <p className="text-stone leading-relaxed text-sm">
                If you believe your data protection rights have been infringed, you have the right to lodge a complaint with the Spanish Data Protection Agency (Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos, AEPD):
              </p>
              <ul className="text-stone text-sm leading-relaxed space-y-1 ml-4 mt-3 list-disc">
                <li><strong className="text-charcoal">Website:</strong>{" "}
                  <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer" className="text-green hover:text-green-light transition-colors">
                    www.aepd.es
                  </a>
                </li>
                <li><strong className="text-charcoal">Address:</strong> C/ Jorge Juan 6, 28001 Madrid, Spain</li>
                <li><strong className="text-charcoal">Phone:</strong> +34 901 100 099</li>
              </ul>
            </div>

            {/* 9 */}
            <div>
              <h2 className="font-heading text-2xl font-light text-charcoal mb-4">
                9. Changes to This Policy
              </h2>
              <p className="text-stone leading-relaxed text-sm">
                We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.
              </p>
            </div>

            {/* 10 */}
            <div>
              <h2 className="font-heading text-2xl font-light text-charcoal mb-4">
                10. Contact
              </h2>
              <p className="text-stone leading-relaxed text-sm">
                For any questions regarding this Privacy Policy or your personal data, please contact us at{" "}
                <a href="mailto:info@nimarapilates.com" className="text-green hover:text-green-light transition-colors">
                  info@nimarapilates.com
                </a>
                .
              </p>
            </div>

            {/* Back link */}
            <div className="pt-6 border-t border-charcoal/10">
              <Link
                href="/"
                className="text-green hover:text-green-light text-sm transition-colors"
              >
                &larr; Back to home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
