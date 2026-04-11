import Link from "next/link";

export default function TermsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-charcoal pt-28 sm:pt-36 pb-16 sm:pb-20">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
          <p className="text-xs uppercase tracking-[0.2em] font-medium text-sage mb-4">
            Legal
          </p>
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-light text-cream leading-tight">
            Terms &amp; Conditions
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
                1. About These Terms
              </h2>
              <p className="text-stone leading-relaxed text-sm mb-3">
                These Terms and Conditions (&quot;Terms&quot;) govern your use of the website{" "}
                <a href="https://nimarapilates.com" className="text-green hover:text-green-light transition-colors">
                  nimarapilates.com
                </a>{" "}
                and the services provided by Nimara Reformer Pilates S.L. (&quot;Nimara&quot;, &quot;we&quot;, &quot;us&quot;, &quot;our&quot;), located at C/ Joan Cresp&iacute;, 47, 07014 Palma de Mallorca, Illes Balears, Spain.
              </p>
              <p className="text-stone leading-relaxed text-sm">
                By using our website or attending our classes, you agree to be bound by these Terms. If you do not agree, please do not use our services.
              </p>
            </div>

            {/* 2 */}
            <div>
              <h2 className="font-heading text-2xl font-light text-charcoal mb-4">
                2. Services
              </h2>
              <p className="text-stone leading-relaxed text-sm">
                Nimara operates a Reformer Pilates studio offering group classes and private sessions. Classes are conducted on Balanced Body Allegro 2 Reformers in small groups of up to 8 participants. We offer various class formats including Fundamentals, Flow, Sculpt, and Restore, each designed for different levels and goals.
              </p>
            </div>

            {/* 3 */}
            <div>
              <h2 className="font-heading text-2xl font-light text-charcoal mb-4">
                3. Booking and Cancellation
              </h2>

              <h3 className="font-heading text-lg font-light text-charcoal mt-6 mb-2">
                3.1 Booking
              </h3>
              <p className="text-stone leading-relaxed text-sm">
                All class bookings are made through our booking platform, Bsport. You must create an account on Bsport to book classes. By booking a class, you agree to Bsport&apos;s terms of service in addition to these Terms.
              </p>

              <h3 className="font-heading text-lg font-light text-charcoal mt-6 mb-2">
                3.2 Cancellation Policy
              </h3>
              <p className="text-stone leading-relaxed text-sm mb-3">
                We understand plans change. Our cancellation policy is as follows:
              </p>
              <ul className="text-stone text-sm leading-relaxed space-y-2 ml-4 list-disc">
                <li>
                  <strong className="text-charcoal">12+ hours before class:</strong> Free cancellation. Your class credit or pass will be fully restored.
                </li>
                <li>
                  <strong className="text-charcoal">Less than 12 hours before class:</strong> The class credit or pass session will be forfeited. No refund will be issued.
                </li>
                <li>
                  <strong className="text-charcoal">No-show:</strong> If you do not attend a booked class without cancelling, the session will be forfeited.
                </li>
              </ul>
              <p className="text-stone leading-relaxed text-sm mt-3">
                We reserve the right to cancel or reschedule classes due to unforeseen circumstances (e.g., instructor illness, facility issues). In such cases, you will be notified as soon as possible and your class credit will be restored.
              </p>

              <h3 className="font-heading text-lg font-light text-charcoal mt-6 mb-2">
                3.3 Waitlist
              </h3>
              <p className="text-stone leading-relaxed text-sm">
                If a class is full, you may join the waitlist through Bsport. If a spot becomes available, you will be automatically enrolled and notified. Standard cancellation terms apply once you are enrolled.
              </p>
            </div>

            {/* 4 */}
            <div>
              <h2 className="font-heading text-2xl font-light text-charcoal mb-4">
                4. Pricing and Payment
              </h2>
              <ul className="text-stone text-sm leading-relaxed space-y-2 ml-4 list-disc">
                <li>All prices are displayed in Euros and include applicable taxes (IVA).</li>
                <li>Payment is processed securely through Bsport at the time of purchase.</li>
                <li>Class packs and memberships are non-transferable and non-refundable unless otherwise required by law.</li>
                <li>Class packs have a validity period as stated at the time of purchase. Unused sessions will expire at the end of this period.</li>
                <li>We reserve the right to update pricing at any time. Existing class packs and memberships will not be affected by price changes.</li>
              </ul>
            </div>

            {/* 5 */}
            <div>
              <h2 className="font-heading text-2xl font-light text-charcoal mb-4">
                5. Class Policies
              </h2>

              <h3 className="font-heading text-lg font-light text-charcoal mt-6 mb-2">
                5.1 Arrival
              </h3>
              <p className="text-stone leading-relaxed text-sm">
                Please arrive at least 5 minutes before your scheduled class. This allows time to set up your reformer and settle in. Late arrivals may not be admitted to class for safety reasons and to avoid disruption to other participants. Late arrivals will be marked as a no-show.
              </p>

              <h3 className="font-heading text-lg font-light text-charcoal mt-6 mb-2">
                5.2 What to Bring
              </h3>
              <p className="text-stone leading-relaxed text-sm">
                Wear comfortable, fitted clothing that allows your instructor to observe your alignment. Grip socks are required for hygiene and safety on the reformer. We have grip socks available for purchase at the studio. Bring water if you wish; we also have water available.
              </p>

              <h3 className="font-heading text-lg font-light text-charcoal mt-6 mb-2">
                5.3 Studio Etiquette
              </h3>
              <p className="text-stone leading-relaxed text-sm">
                We ask that you keep mobile phones on silent and refrain from using them during class. Please inform your instructor of any injuries, health conditions, or pregnancy before class begins.
              </p>
            </div>

            {/* 6 */}
            <div>
              <h2 className="font-heading text-2xl font-light text-charcoal mb-4">
                6. Health and Safety Disclaimer
              </h2>
              <p className="text-stone leading-relaxed text-sm mb-3">
                Reformer Pilates is a physical activity that carries inherent risks. By participating in our classes, you acknowledge and accept the following:
              </p>
              <ul className="text-stone text-sm leading-relaxed space-y-2 ml-4 list-disc">
                <li>You are participating voluntarily and at your own risk.</li>
                <li>You confirm that you are in adequate physical health to participate in Pilates classes. If you have any medical conditions, injuries, or are pregnant, you must inform your instructor before class.</li>
                <li>You are responsible for working within your own limits and following your instructor&apos;s guidance.</li>
                <li>We recommend consulting a healthcare professional before starting any new exercise programme, particularly if you have pre-existing medical conditions.</li>
              </ul>
              <p className="text-stone leading-relaxed text-sm mt-3">
                Nimara and its instructors are not liable for any injury, loss, or damage arising from participation in our classes, except where caused by our negligence or wilful misconduct.
              </p>
            </div>

            {/* 7 */}
            <div>
              <h2 className="font-heading text-2xl font-light text-charcoal mb-4">
                7. Limitation of Liability
              </h2>
              <p className="text-stone leading-relaxed text-sm mb-3">
                To the maximum extent permitted by Spanish law:
              </p>
              <ul className="text-stone text-sm leading-relaxed space-y-2 ml-4 list-disc">
                <li>Nimara shall not be liable for any indirect, incidental, or consequential damages arising from your use of our website or services.</li>
                <li>Our total liability for any claim relating to our services shall not exceed the amount paid by you for the specific service giving rise to the claim.</li>
                <li>We are not responsible for the content, policies, or practices of third-party platforms (Bsport, WhatsApp, etc.).</li>
              </ul>
              <p className="text-stone leading-relaxed text-sm mt-3">
                Nothing in these Terms excludes or limits our liability for death or personal injury caused by negligence, fraud, or any other liability that cannot be excluded or limited under applicable law.
              </p>
            </div>

            {/* 8 */}
            <div>
              <h2 className="font-heading text-2xl font-light text-charcoal mb-4">
                8. Intellectual Property
              </h2>
              <p className="text-stone leading-relaxed text-sm">
                All content on this website &mdash; including text, images, logos, branding, design elements, and code &mdash; is the property of Nimara Reformer Pilates S.L. or its licensors and is protected by copyright and intellectual property laws. You may not reproduce, distribute, modify, or create derivative works from any content on this website without our prior written consent.
              </p>
            </div>

            {/* 9 */}
            <div>
              <h2 className="font-heading text-2xl font-light text-charcoal mb-4">
                9. Privacy
              </h2>
              <p className="text-stone leading-relaxed text-sm">
                Your use of our website and services is also governed by our{" "}
                <Link href="/privacy" className="text-green hover:text-green-light transition-colors">
                  Privacy Policy
                </Link>
                , which describes how we collect, use, and protect your personal data in compliance with the GDPR and Spanish law.
              </p>
            </div>

            {/* 10 */}
            <div>
              <h2 className="font-heading text-2xl font-light text-charcoal mb-4">
                10. Modifications
              </h2>
              <p className="text-stone leading-relaxed text-sm">
                We reserve the right to modify these Terms at any time. Changes will be posted on this page with an updated revision date. Your continued use of our website or services after changes are posted constitutes acceptance of the revised Terms.
              </p>
            </div>

            {/* 11 */}
            <div>
              <h2 className="font-heading text-2xl font-light text-charcoal mb-4">
                11. Governing Law and Jurisdiction
              </h2>
              <p className="text-stone leading-relaxed text-sm">
                These Terms are governed by and construed in accordance with the laws of Spain. Any disputes arising from or relating to these Terms or our services shall be subject to the exclusive jurisdiction of the courts of Palma de Mallorca, Illes Balears, Spain, without prejudice to any mandatory consumer protection provisions that may apply under your local law.
              </p>
            </div>

            {/* 12 */}
            <div>
              <h2 className="font-heading text-2xl font-light text-charcoal mb-4">
                12. Contact
              </h2>
              <p className="text-stone leading-relaxed text-sm">
                For any questions about these Terms, please contact us at{" "}
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
