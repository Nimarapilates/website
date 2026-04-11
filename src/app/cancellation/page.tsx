import Link from "next/link";

export default function CancellationPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-charcoal pt-28 sm:pt-36 pb-16 sm:pb-20">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
          <p className="text-xs uppercase tracking-[0.2em] font-medium text-sage mb-4">
            Legal
          </p>
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-light text-cream leading-tight">
            Cancellation Policy
          </h1>
          <p className="text-cream/50 text-sm mt-4">
            Last updated: 11 April 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-sand py-16 sm:py-24 lg:py-32">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="space-y-12">
            {/* 1 */}
            <div>
              <h2 className="font-heading text-2xl font-light text-charcoal mb-4">
                1. Overview
              </h2>
              <p className="text-stone leading-relaxed text-sm mb-3">
                This cancellation policy applies to all group classes, private sessions, and duet sessions booked at Nimara Reformer Pilates S.L. (&ldquo;Nimara&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;), located at C/ Joan Cresp&iacute;, 47, 07014 Palma de Mallorca, Spain.
              </p>
              <p className="text-stone leading-relaxed text-sm">
                By booking a session, you agree to the terms set out below. We keep our classes small &mdash; eight clients maximum &mdash; so your place matters. Timely cancellations allow other clients to take your spot.
              </p>
            </div>

            {/* 2 */}
            <div>
              <h2 className="font-heading text-2xl font-light text-charcoal mb-4">
                2. Group Classes
              </h2>
              <ul className="text-stone text-sm leading-relaxed space-y-3 ml-4 list-disc">
                <li>
                  <strong className="text-charcoal">Cancellation window:</strong> You may cancel or reschedule a group class free of charge up to <strong className="text-charcoal">4 hours</strong> before the scheduled start time.
                </li>
                <li>
                  <strong className="text-charcoal">Late cancellation:</strong> Cancellations made less than 4 hours before the class start time will result in the deduction of one class credit from your pack or membership allowance.
                </li>
                <li>
                  <strong className="text-charcoal">No-show:</strong> Failure to attend a booked class without prior cancellation will also result in the deduction of one class credit.
                </li>
                <li>
                  <strong className="text-charcoal">Late cancellation fee (drop-in bookings):</strong> If you booked a single drop-in session, a late cancellation or no-show incurs a fee equal to the full drop-in rate (&euro;38). This fee is payable within <strong className="text-charcoal">24 hours</strong> of the cancellation or missed session.
                </li>
              </ul>
            </div>

            {/* 3 */}
            <div>
              <h2 className="font-heading text-2xl font-light text-charcoal mb-4">
                3. Private &amp; Duet Sessions
              </h2>
              <ul className="text-stone text-sm leading-relaxed space-y-3 ml-4 list-disc">
                <li>
                  <strong className="text-charcoal">Cancellation window:</strong> Private and duet sessions may be cancelled or rescheduled free of charge up to <strong className="text-charcoal">24 hours</strong> before the scheduled start time.
                </li>
                <li>
                  <strong className="text-charcoal">Late cancellation or no-show:</strong> Cancellations made less than 24 hours before the session, or failure to attend, will be charged at the full session rate (&euro;75 for private, &euro;95 for duet). This fee is payable within <strong className="text-charcoal">24 hours</strong>.
                </li>
              </ul>
            </div>

            {/* 4 */}
            <div>
              <h2 className="font-heading text-2xl font-light text-charcoal mb-4">
                4. Class Packs
              </h2>
              <ul className="text-stone text-sm leading-relaxed space-y-3 ml-4 list-disc">
                <li>
                  Class packs (5-session and 10-session) are <strong className="text-charcoal">non-refundable</strong> once purchased.
                </li>
                <li>
                  Credits are valid for the period stated at purchase (2 months for 5-packs, 3 months for 10-packs). Unused credits expire at the end of the validity period and cannot be extended or transferred.
                </li>
                <li>
                  Late cancellations and no-shows deduct one credit as described above.
                </li>
              </ul>
            </div>

            {/* 5 */}
            <div>
              <h2 className="font-heading text-2xl font-light text-charcoal mb-4">
                5. Memberships
              </h2>
              <ul className="text-stone text-sm leading-relaxed space-y-3 ml-4 list-disc">
                <li>
                  All memberships (Essentiel, R&eacute;gulier, Unlimited) are auto-renewing and require a minimum commitment period (2 months for Essentiel and R&eacute;gulier, 3 months for Unlimited).
                </li>
                <li>
                  To cancel a membership, you must provide <strong className="text-charcoal">30 days&rsquo; written notice</strong> after the minimum commitment period has been fulfilled. Notice may be sent by email to{" "}
                  <a href="mailto:info@nimarapilates.com" className="text-green hover:text-green-light transition-colors">
                    info@nimarapilates.com
                  </a>.
                </li>
                <li>
                  Monthly credits do not roll over to the following month. Unused credits at the end of each billing cycle are forfeited.
                </li>
                <li>
                  <strong className="text-charcoal">Pause:</strong> Each membership holder may pause their membership once per calendar year, for a maximum of 4 weeks. Pause requests must be made at least 7 days in advance.
                </li>
                <li>
                  Membership fees are non-refundable for the current billing period once charged.
                </li>
              </ul>
            </div>

            {/* 6 */}
            <div>
              <h2 className="font-heading text-2xl font-light text-charcoal mb-4">
                6. Discovery Offer
              </h2>
              <ul className="text-stone text-sm leading-relaxed space-y-3 ml-4 list-disc">
                <li>
                  The Discovery Offer (&euro;29 for 2 sessions) is valid for 15 days from the date of purchase and is non-refundable.
                </li>
                <li>
                  It is limited to one per person and is non-transferable.
                </li>
                <li>
                  The standard cancellation windows (4 hours for group classes) apply to Discovery sessions.
                </li>
              </ul>
            </div>

            {/* 7 */}
            <div>
              <h2 className="font-heading text-2xl font-light text-charcoal mb-4">
                7. Payment of Fees
              </h2>
              <p className="text-stone leading-relaxed text-sm mb-3">
                All late cancellation and no-show fees are payable within <strong className="text-charcoal">24 hours</strong> of the cancellation or missed session. Payment may be made via the Bsport platform or by contacting the studio directly.
              </p>
              <p className="text-stone leading-relaxed text-sm">
                Failure to settle outstanding fees may result in the suspension of your booking privileges until the balance is cleared.
              </p>
            </div>

            {/* 8 */}
            <div>
              <h2 className="font-heading text-2xl font-light text-charcoal mb-4">
                8. Exceptional Circumstances
              </h2>
              <p className="text-stone leading-relaxed text-sm">
                We understand that emergencies and unforeseen situations arise. If you need to cancel outside the standard windows due to illness, injury, or emergency, please contact us as soon as possible at{" "}
                <a href="mailto:info@nimarapilates.com" className="text-green hover:text-green-light transition-colors">
                  info@nimarapilates.com
                </a>
                . We will review each case individually and respond with fairness and understanding.
              </p>
            </div>

            {/* 9 */}
            <div>
              <h2 className="font-heading text-2xl font-light text-charcoal mb-4">
                9. Studio-Initiated Cancellations
              </h2>
              <p className="text-stone leading-relaxed text-sm mb-3">
                In the rare event that Nimara cancels a class (due to instructor illness, facility issues, or other circumstances beyond our control), all affected clients will be notified promptly and will receive either:
              </p>
              <ul className="text-stone text-sm leading-relaxed space-y-2 ml-4 list-disc">
                <li>A full credit returned to their pack or membership, or</li>
                <li>A complimentary rebooking at a time of their choosing (subject to availability).</li>
              </ul>
            </div>

            {/* 10 */}
            <div>
              <h2 className="font-heading text-2xl font-light text-charcoal mb-4">
                10. Changes to This Policy
              </h2>
              <p className="text-stone leading-relaxed text-sm">
                Nimara reserves the right to amend this cancellation policy at any time. Changes will be communicated via email and published on this page. The &ldquo;last updated&rdquo; date above reflects the most recent revision.
              </p>
            </div>

            {/* 11 */}
            <div>
              <h2 className="font-heading text-2xl font-light text-charcoal mb-4">
                11. Contact
              </h2>
              <p className="text-stone leading-relaxed text-sm">
                If you have any questions about this policy, please contact us at{" "}
                <a href="mailto:info@nimarapilates.com" className="text-green hover:text-green-light transition-colors">
                  info@nimarapilates.com
                </a>{" "}
                or visit us at C/ Joan Cresp&iacute;, 47, 07014 Palma de Mallorca.
              </p>
            </div>

            {/* Back link */}
            <div className="pt-8 border-t border-charcoal/10">
              <Link
                href="/pricing"
                className="text-green hover:text-green-light transition-colors text-sm"
              >
                &larr; Back to pricing
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
