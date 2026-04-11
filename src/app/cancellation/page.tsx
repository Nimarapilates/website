"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

const content = {
  en: {
    s1: "1. Overview",
    s1p1: "This cancellation policy applies to all group classes, private sessions, and duet sessions booked at Nimara Reformer Pilates S.L. (\u201cNimara\u201d, \u201cwe\u201d, \u201cus\u201d), located at C/ Joan Cresp\u00ed, 47, 07014 Palma de Mallorca, Spain.",
    s1p2: "By booking a session, you agree to the terms set out below. We keep our classes small \u2014 eight clients maximum \u2014 so your place matters. Timely cancellations allow other clients to take your spot.",
    s2: "2. Group Classes",
    s2b1: "Cancellation window:", s2b1t: "You may cancel or reschedule a group class free of charge up to 4 hours before the scheduled start time.",
    s2b2: "Late cancellation:", s2b2t: "Cancellations made less than 4 hours before the class start time will result in the deduction of one class credit from your pack or membership allowance.",
    s2b3: "No-show:", s2b3t: "Failure to attend a booked class without prior cancellation will also result in the deduction of one class credit.",
    s2b4: "Late cancellation fee (drop-in bookings):", s2b4t: "If you booked a single drop-in session, a late cancellation or no-show incurs a fee equal to the full drop-in rate (\u20ac38). This fee is payable within 24 hours of the cancellation or missed session.",
    s3: "3. Private & Duet Sessions",
    s3b1: "Cancellation window:", s3b1t: "Private and duet sessions may be cancelled or rescheduled free of charge up to 24 hours before the scheduled start time.",
    s3b2: "Late cancellation or no-show:", s3b2t: "Cancellations made less than 24 hours before the session, or failure to attend, will be charged at the full session rate (\u20ac75 for private, \u20ac95 for duet). This fee is payable within 24 hours.",
    s4: "4. Class Packs",
    s4b1: "Class packs (5-session and 10-session) are non-refundable once purchased.",
    s4b2: "Credits are valid for the period stated at purchase (2 months for 5-packs, 3 months for 10-packs). Unused credits expire at the end of the validity period and cannot be extended or transferred.",
    s4b3: "Late cancellations and no-shows deduct one credit as described above.",
    s5: "5. Memberships",
    s5b1: "All memberships (Essentiel, R\u00e9gulier, Unlimited) are auto-renewing and require a minimum commitment period (2 months for Essentiel and R\u00e9gulier, 3 months for Unlimited).",
    s5b2p1: "To cancel a membership, you must provide 30 days\u2019 written notice after the minimum commitment period has been fulfilled. Notice may be sent by email to",
    s5b2p2: ".",
    s5b3: "Monthly credits do not roll over to the following month. Unused credits at the end of each billing cycle are forfeited.",
    s5b4: "Pause: Each membership holder may pause their membership once per calendar year, for a maximum of 4 weeks. Pause requests must be made at least 7 days in advance.",
    s5b5: "Membership fees are non-refundable for the current billing period once charged.",
    s6: "6. Discovery Offer",
    s6b1: "The Discovery Offer (\u20ac29 for 2 sessions) is valid for 15 days from the date of purchase and is non-refundable.",
    s6b2: "It is limited to one per person and is non-transferable.",
    s6b3: "The standard cancellation windows (4 hours for group classes) apply to Discovery sessions.",
    s7: "7. Payment of Fees",
    s7p1: "All late cancellation and no-show fees are payable within 24 hours of the cancellation or missed session. Payment may be made via the Bsport platform or by contacting the studio directly.",
    s7p2: "Failure to settle outstanding fees may result in the suspension of your booking privileges until the balance is cleared.",
    s8: "8. Exceptional Circumstances",
    s8p: "We understand that emergencies and unforeseen situations arise. If you need to cancel outside the standard windows due to illness, injury, or emergency, please contact us as soon as possible at",
    s8p2: ". We will review each case individually and respond with fairness and understanding.",
    s9: "9. Studio-Initiated Cancellations",
    s9p1: "In the rare event that Nimara cancels a class (due to instructor illness, facility issues, or other circumstances beyond our control), all affected clients will be notified promptly and will receive either:",
    s9b1: "A full credit returned to their pack or membership, or",
    s9b2: "A complimentary rebooking at a time of their choosing (subject to availability).",
    s10: "10. Changes to This Policy",
    s10p: "Nimara reserves the right to amend this cancellation policy at any time. Changes will be communicated via email and published on this page. The \u201clast updated\u201d date above reflects the most recent revision.",
    s11: "11. Contact",
    s11p: "If you have any questions about this policy, please contact us at",
    s11p2: "or visit us at C/ Joan Cresp\u00ed, 47, 07014 Palma de Mallorca.",
  },
  fr: {
    s1: "1. Présentation",
    s1p1: "La présente politique d\u2019annulation s\u2019applique à toutes les séances en groupe, sessions privées et séances en duo réservées chez Nimara Reformer Pilates S.L. (\u00ab Nimara \u00bb, \u00ab nous \u00bb), situé C/ Joan Cresp\u00ed, 47, 07014 Palma de Majorque, Espagne.",
    s1p2: "En réservant une séance, vous acceptez les conditions énoncées ci-dessous. Nous limitons nos cours à huit clients maximum \u2014 votre place compte. Les annulations dans les délais permettent à d\u2019autres clients de prendre votre place.",
    s2: "2. Cours collectifs",
    s2b1: "Délai d\u2019annulation :", s2b1t: "Vous pouvez annuler ou reporter un cours collectif sans frais jusqu\u2019à 4 heures avant l\u2019heure de début prévue.",
    s2b2: "Annulation tardive :", s2b2t: "Toute annulation effectuée moins de 4 heures avant le début du cours entraîne la déduction d\u2019un crédit de séance sur votre pack ou votre abonnement.",
    s2b3: "Absence :", s2b3t: "Le fait de ne pas se présenter à un cours réservé sans annulation préalable entraîne également la déduction d\u2019un crédit.",
    s2b4: "Frais d\u2019annulation tardive (réservations à la séance) :", s2b4t: "Si vous avez réservé une séance unique, une annulation tardive ou une absence entraîne des frais équivalents au tarif plein à la séance (38 \u20ac). Ces frais sont dus dans les 24 heures suivant l\u2019annulation ou la séance manquée.",
    s3: "3. Sessions privées et en duo",
    s3b1: "Délai d\u2019annulation :", s3b1t: "Les sessions privées et en duo peuvent être annulées ou reportées sans frais jusqu\u2019à 24 heures avant l\u2019heure de début prévue.",
    s3b2: "Annulation tardive ou absence :", s3b2t: "Toute annulation effectuée moins de 24 heures avant la session, ou toute absence, sera facturée au tarif plein (75 \u20ac pour une session privée, 95 \u20ac pour un duo). Ces frais sont dus dans les 24 heures.",
    s4: "4. Packs de séances",
    s4b1: "Les packs de séances (5 et 10 séances) sont non remboursables une fois achetés.",
    s4b2: "Les crédits sont valables pendant la période indiquée à l\u2019achat (2 mois pour les packs de 5, 3 mois pour les packs de 10). Les crédits non utilisés expirent à la fin de la période de validité et ne peuvent être prolongés ni transférés.",
    s4b3: "Les annulations tardives et les absences déduisent un crédit comme indiqué ci-dessus.",
    s5: "5. Abonnements",
    s5b1: "Tous les abonnements (Essentiel, Régulier, Illimité) sont renouvelés automatiquement et exigent une période d\u2019engagement minimum (2 mois pour Essentiel et Régulier, 3 mois pour Illimité).",
    s5b2p1: "Pour résilier un abonnement, vous devez en informer par écrit avec un préavis de 30 jours après la période d\u2019engagement minimum. La demande peut être envoyée par e-mail à",
    s5b2p2: ".",
    s5b3: "Les crédits mensuels ne sont pas reportables au mois suivant. Les crédits non utilisés à la fin de chaque période de facturation sont perdus.",
    s5b4: "Suspension : Chaque titulaire d\u2019abonnement peut suspendre son abonnement une fois par année civile, pour une durée maximale de 4 semaines. Les demandes de suspension doivent être effectuées au moins 7 jours à l\u2019avance.",
    s5b5: "Les frais d\u2019abonnement ne sont pas remboursables pour la période de facturation en cours une fois prélevés.",
    s6: "6. Offre découverte",
    s6b1: "L\u2019offre découverte (29 \u20ac pour 2 séances) est valable 15 jours à compter de la date d\u2019achat et n\u2019est pas remboursable.",
    s6b2: "Elle est limitée à une par personne et n\u2019est pas transférable.",
    s6b3: "Les délais d\u2019annulation standard (4 heures pour les cours collectifs) s\u2019appliquent aux séances découverte.",
    s7: "7. Paiement des frais",
    s7p1: "Tous les frais d\u2019annulation tardive et d\u2019absence sont dus dans les 24 heures suivant l\u2019annulation ou la séance manquée. Le paiement peut être effectué via la plateforme Bsport ou en contactant directement le studio.",
    s7p2: "Le non-paiement des frais dus peut entraîner la suspension de vos droits de réservation jusqu\u2019au règlement du solde.",
    s8: "8. Circonstances exceptionnelles",
    s8p: "Nous comprenons que des urgences et des situations imprévues peuvent survenir. Si vous devez annuler hors des délais standard en raison d\u2019une maladie, d\u2019une blessure ou d\u2019une urgence, contactez-nous dès que possible à",
    s8p2: ". Nous examinerons chaque cas individuellement et répondrons avec équité et compréhension.",
    s9: "9. Annulations à l\u2019initiative du studio",
    s9p1: "Dans le cas exceptionnel où Nimara annule un cours (maladie d\u2019un instructeur, problème dans les locaux ou toute autre circonstance indépendante de notre volonté), tous les clients concernés seront informés rapidement et recevront au choix :",
    s9b1: "Un crédit complet restitué sur leur pack ou abonnement, ou",
    s9b2: "Un report gratuit à une date de leur choix (sous réserve de disponibilité).",
    s10: "10. Modifications de cette politique",
    s10p: "Nimara se réserve le droit de modifier cette politique d\u2019annulation à tout moment. Les modifications seront communiquées par e-mail et publiées sur cette page. La date de \u00ab dernière mise à jour \u00bb ci-dessus reflète la révision la plus récente.",
    s11: "11. Contact",
    s11p: "Pour toute question relative à cette politique, contactez-nous à",
    s11p2: "ou rendez-nous visite au C/ Joan Cresp\u00ed, 47, 07014 Palma de Majorque.",
  },
  es: {
    s1: "1. Descripción general",
    s1p1: "Esta política de cancelación se aplica a todas las clases en grupo, sesiones privadas y sesiones en pareja reservadas en Nimara Reformer Pilates S.L. (\u00abNimara\u00bb, \u00abnosotros\u00bb), ubicado en C/ Joan Cresp\u00ed, 47, 07014 Palma de Mallorca, España.",
    s1p2: "Al reservar una sesión, acepta los términos que se indican a continuación. Mantenemos nuestras clases pequeñas \u2014 ocho clientes como máximo \u2014, por lo que su plaza es importante. Las cancelaciones a tiempo permiten que otros clientes ocupen su lugar.",
    s2: "2. Clases en grupo",
    s2b1: "Plazo de cancelación:", s2b1t: "Puede cancelar o reprogramar una clase en grupo de forma gratuita hasta 4 horas antes de la hora de inicio programada.",
    s2b2: "Cancelación tardía:", s2b2t: "Las cancelaciones realizadas con menos de 4 horas de antelación al inicio de la clase conllevarán la deducción de un crédito de su pack o membresía.",
    s2b3: "Ausencia:", s2b3t: "No presentarse a una clase reservada sin cancelación previa también supondrá la deducción de un crédito.",
    s2b4: "Cargo por cancelación tardía (reservas sueltas):", s2b4t: "Si reservó una sesión individual, una cancelación tardía o ausencia genera un cargo equivalente al precio de la sesión suelta (38 \u20ac), pagadero en las 24 horas siguientes.",
    s3: "3. Sesiones privadas y en pareja",
    s3b1: "Plazo de cancelación:", s3b1t: "Las sesiones privadas y en pareja pueden cancelarse o reprogramarse de forma gratuita hasta 24 horas antes de la hora de inicio.",
    s3b2: "Cancelación tardía o ausencia:", s3b2t: "Las cancelaciones realizadas con menos de 24 horas de antelación, o la no presentación, se cobrarán a tarifa completa (75 \u20ac para sesión privada, 95 \u20ac para pareja), pagaderos en las 24 horas siguientes.",
    s4: "4. Packs de sesiones",
    s4b1: "Los packs de sesiones (5 y 10 sesiones) no son reembolsables una vez adquiridos.",
    s4b2: "Los créditos son válidos durante el periodo indicado en el momento de la compra (2 meses para packs de 5, 3 meses para packs de 10). Los créditos no utilizados caducan al final del periodo de validez y no pueden prorrogarse ni cederse.",
    s4b3: "Las cancelaciones tardías y ausencias descuentan un crédito según lo indicado anteriormente.",
    s5: "5. Membresías",
    s5b1: "Todas las membresías (Essentiel, Régulier, Ilimitado) se renuevan automáticamente y exigen un período mínimo de compromiso (2 meses para Essentiel y Régulier, 3 meses para Ilimitado).",
    s5b2p1: "Para cancelar una membresía, debe notificarlo por escrito con 30 días de preaviso una vez cumplido el período mínimo de compromiso. La notificación puede enviarse por correo electrónico a",
    s5b2p2: ".",
    s5b3: "Los créditos mensuales no se acumulan para el mes siguiente. Los créditos no utilizados al final de cada ciclo de facturación se pierden.",
    s5b4: "Pausa: Cada titular de membresía puede pausar su membresía una vez por año natural, por un máximo de 4 semanas. Las solicitudes de pausa deben realizarse con al menos 7 días de antelación.",
    s5b5: "Las cuotas de membresía no son reembolsables para el período de facturación en curso una vez cobradas.",
    s6: "6. Oferta de descubrimiento",
    s6b1: "La Oferta de descubrimiento (29 \u20ac para 2 sesiones) es válida durante 15 días a partir de la fecha de compra y no es reembolsable.",
    s6b2: "Está limitada a una por persona y no es transferible.",
    s6b3: "Los plazos estándar de cancelación (4 horas para clases en grupo) se aplican a las sesiones de descubrimiento.",
    s7: "7. Pago de cargos",
    s7p1: "Todos los cargos por cancelación tardía o ausencia son pagaderos en las 24 horas siguientes a la cancelación o sesión perdida. El pago puede realizarse a través de la plataforma Bsport o contactando directamente con el estudio.",
    s7p2: "El impago de los cargos pendientes puede resultar en la suspensión de sus privilegios de reserva hasta que el saldo sea liquidado.",
    s8: "8. Circunstancias excepcionales",
    s8p: "Entendemos que pueden surgir emergencias y situaciones imprevistas. Si necesita cancelar fuera de los plazos estándar por enfermedad, lesión o emergencia, contáctenos lo antes posible en",
    s8p2: ". Revisaremos cada caso individualmente y responderemos con equidad y comprensión.",
    s9: "9. Cancelaciones por parte del estudio",
    s9p1: "En el caso excepcional de que Nimara cancele una clase (por enfermedad del instructor, problemas en las instalaciones u otras circunstancias fuera de nuestro control), todos los clientes afectados serán notificados de inmediato y recibirán:",
    s9b1: "Un crédito completo devuelto a su pack o membresía, o",
    s9b2: "Un reagendamiento gratuito en la fecha que elijan (sujeto a disponibilidad).",
    s10: "10. Modificaciones de esta política",
    s10p: "Nimara se reserva el derecho de modificar esta política de cancelación en cualquier momento. Los cambios serán comunicados por correo electrónico y publicados en esta página. La fecha de \u00abúltima actualización\u00bb que figura arriba refleja la revisión más reciente.",
    s11: "11. Contacto",
    s11p: "Si tiene alguna pregunta sobre esta política, contáctenos en",
    s11p2: "o visítenos en C/ Joan Cresp\u00ed, 47, 07014 Palma de Mallorca.",
  },
  de: {
    s1: "1. Überblick",
    s1p1: "Diese Stornierungsbedingungen gelten für alle Gruppenklassen, Privatstunden und Duett-Einheiten, die bei Nimara Reformer Pilates S.L. (\u00bbNimara\u00ab, \u00bbwir\u00ab, \u00bbuns\u00ab) gebucht werden, mit Sitz in C/ Joan Cresp\u00ed, 47, 07014 Palma de Mallorca, Spanien.",
    s1p2: "Mit der Buchung einer Einheit stimmen Sie den nachstehenden Bedingungen zu. Wir halten unsere Kurse klein \u2014 maximal acht Kunden \u2014 daher ist Ihr Platz wichtig. Rechtzeitige Stornierungen ermöglichen es anderen Kunden, Ihren Platz zu nutzen.",
    s2: "2. Gruppenkurse",
    s2b1: "Stornierungsfrist:", s2b1t: "Sie können einen Gruppenkurs bis zu 4 Stunden vor der geplanten Startzeit kostenlos stornieren oder umbuchen.",
    s2b2: "Spätstornierung:", s2b2t: "Stornierungen, die weniger als 4 Stunden vor Kursbeginn eingehen, führen zum Abzug eines Kursguthabens von Ihrem Paket oder Abonnement.",
    s2b3: "Nichterscheinen:", s2b3t: "Das Nichterscheinen zu einem gebuchten Kurs ohne vorherige Stornierung führt ebenfalls zum Abzug eines Kursguthabens.",
    s2b4: "Gebühr bei Spätstornierung (Einzelbuchungen):", s2b4t: "Bei Buchung einer Einzelstunde fällt bei Spätstornierung oder Nichterscheinen eine Gebühr in Höhe des vollen Einzelpreises (38 \u20ac) an, zahlbar innerhalb von 24 Stunden.",
    s3: "3. Privat- und Duett-Einheiten",
    s3b1: "Stornierungsfrist:", s3b1t: "Privat- und Duett-Einheiten können bis zu 24 Stunden vor der geplanten Startzeit kostenlos storniert oder umgebucht werden.",
    s3b2: "Spätstornierung oder Nichterscheinen:", s3b2t: "Stornierungen weniger als 24 Stunden vor der Einheit oder Nichterscheinen werden zum vollen Preis berechnet (75 \u20ac für Privat, 95 \u20ac für Duett), zahlbar innerhalb von 24 Stunden.",
    s4: "4. Kurspakete",
    s4b1: "Kurspakete (5 und 10 Einheiten) sind nach dem Kauf nicht erstattungsfähig.",
    s4b2: "Guthaben sind für den bei der Buchung angegebenen Zeitraum gültig (2 Monate für 5er-Pakete, 3 Monate für 10er-Pakete). Nicht verwendete Guthaben verfallen am Ende der Gültigkeitsdauer und können weder verlängert noch übertragen werden.",
    s4b3: "Spätstornierungen und Nichterscheinen ziehen ein Guthaben ab, wie oben beschrieben.",
    s5: "5. Mitgliedschaften",
    s5b1: "Alle Mitgliedschaften (Essentiel, Régulier, Unbegrenzt) verlängern sich automatisch und erfordern eine Mindestlaufzeit (2 Monate für Essentiel und Régulier, 3 Monate für Unbegrenzt).",
    s5b2p1: "Um eine Mitgliedschaft zu kündigen, müssen Sie nach Ablauf der Mindestlaufzeit eine schriftliche Kündigung mit 30 Tagen Vorlauf einreichen. Die Kündigung kann per E-Mail an",
    s5b2p2: "gesendet werden.",
    s5b3: "Monatliche Guthaben werden nicht auf den Folgemonat übertragen. Nicht genutzte Guthaben am Ende jedes Abrechnungszeitraums verfallen.",
    s5b4: "Pause: Jeder Mitgliedschaftsinhaber kann seine Mitgliedschaft einmal pro Kalenderjahr für maximal 4 Wochen pausieren. Pausenanfragen müssen mindestens 7 Tage im Voraus gestellt werden.",
    s5b5: "Mitgliedschaftsgebühren sind für den laufenden Abrechnungszeitraum nach der Abbuchung nicht erstattungsfähig.",
    s6: "6. Entdeckungsangebot",
    s6b1: "Das Entdeckungsangebot (29 \u20ac für 2 Einheiten) ist ab Kaufdatum 15 Tage gültig und nicht erstattungsfähig.",
    s6b2: "Es ist auf eine pro Person begrenzt und nicht übertragbar.",
    s6b3: "Die üblichen Stornierungsfristen (4 Stunden für Gruppenkurse) gelten auch für Entdeckungseinheiten.",
    s7: "7. Zahlung von Gebühren",
    s7p1: "Alle Gebühren für Spätstornierungen und Nichterscheinen sind innerhalb von 24 Stunden nach der Stornierung oder der verpassten Einheit zu zahlen. Die Zahlung kann über die Bsport-Plattform oder direkt beim Studio erfolgen.",
    s7p2: "Das Nichtbegleichen offener Gebühren kann zur Sperrung Ihrer Buchungsrechte führen, bis der Betrag ausgeglichen ist.",
    s8: "8. Außergewöhnliche Umstände",
    s8p: "Wir wissen, dass Notfälle und unvorhergesehene Situationen vorkommen können. Wenn Sie aufgrund von Krankheit, Verletzung oder einem Notfall außerhalb der Standardfristen stornieren müssen, kontaktieren Sie uns so schnell wie möglich unter",
    s8p2: ". Wir prüfen jeden Fall individuell und reagieren fair und verständnisvoll.",
    s9: "9. Stornierungen durch das Studio",
    s9p1: "Im seltenen Fall, dass Nimara einen Kurs absagt (aufgrund von Instruktorkrankheit, Problemen mit den Räumlichkeiten oder anderen Umständen außerhalb unserer Kontrolle), werden alle betroffenen Kunden umgehend informiert und erhalten entweder:",
    s9b1: "Eine vollständige Gutschrift auf ihr Paket oder ihre Mitgliedschaft, oder",
    s9b2: "Eine kostenlose Umbuchung zu einem Zeitpunkt ihrer Wahl (vorbehaltlich der Verfügbarkeit).",
    s10: "10. Änderungen dieser Bedingungen",
    s10p: "Nimara behält sich das Recht vor, diese Stornierungsbedingungen jederzeit zu ändern. Änderungen werden per E-Mail mitgeteilt und auf dieser Seite veröffentlicht. Das oben angegebene Datum der \u00bbletzten Aktualisierung\u00ab gibt die jüngste Überarbeitung an.",
    s11: "11. Kontakt",
    s11p: "Bei Fragen zu diesen Bedingungen kontaktieren Sie uns bitte unter",
    s11p2: "oder besuchen Sie uns unter C/ Joan Cresp\u00ed, 47, 07014 Palma de Mallorca.",
  },
};

export default function CancellationPage() {
  const { lang, t } = useLanguage();
  const l = t.legal;
  const c = content[lang] ?? content.en;

  return (
    <>
      {/* Hero */}
      <section className="bg-charcoal pt-28 sm:pt-36 pb-16 sm:pb-20">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
          <p className="text-xs uppercase tracking-[0.2em] font-medium text-sage mb-4">
            {l.label}
          </p>
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-light text-cream leading-tight">
            {l.cancellationTitle}
          </h1>
          <p className="text-cream/50 text-sm mt-4">
            {l.lastUpdated}: 11 {lang === "fr" ? "avril" : lang === "es" ? "de abril de" : lang === "de" ? "April" : "April"} 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-sand py-16 sm:py-24 lg:py-32">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="space-y-12">
            <div>
              <h2 className="font-heading text-2xl font-light text-charcoal mb-4">{c.s1}</h2>
              <p className="text-stone leading-relaxed text-sm mb-3">{c.s1p1}</p>
              <p className="text-stone leading-relaxed text-sm">{c.s1p2}</p>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-light text-charcoal mb-4">{c.s2}</h2>
              <ul className="text-stone text-sm leading-relaxed space-y-3 ml-4 list-disc">
                <li><strong className="text-charcoal">{c.s2b1}</strong> {c.s2b1t}</li>
                <li><strong className="text-charcoal">{c.s2b2}</strong> {c.s2b2t}</li>
                <li><strong className="text-charcoal">{c.s2b3}</strong> {c.s2b3t}</li>
                <li><strong className="text-charcoal">{c.s2b4}</strong> {c.s2b4t}</li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-light text-charcoal mb-4">{c.s3}</h2>
              <ul className="text-stone text-sm leading-relaxed space-y-3 ml-4 list-disc">
                <li><strong className="text-charcoal">{c.s3b1}</strong> {c.s3b1t}</li>
                <li><strong className="text-charcoal">{c.s3b2}</strong> {c.s3b2t}</li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-light text-charcoal mb-4">{c.s4}</h2>
              <ul className="text-stone text-sm leading-relaxed space-y-3 ml-4 list-disc">
                <li>{c.s4b1}</li>
                <li>{c.s4b2}</li>
                <li>{c.s4b3}</li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-light text-charcoal mb-4">{c.s5}</h2>
              <ul className="text-stone text-sm leading-relaxed space-y-3 ml-4 list-disc">
                <li>{c.s5b1}</li>
                <li>
                  {c.s5b2p1}{" "}
                  <a href="mailto:info@nimarapilates.com" className="text-green hover:text-green-light transition-colors">info@nimarapilates.com</a>
                  {c.s5b2p2}
                </li>
                <li>{c.s5b3}</li>
                <li><strong className="text-charcoal">Pause{lang !== "en" ? " :" : ":"}</strong> {c.s5b4.replace(/^Pause[: ]+/, "")}</li>
                <li>{c.s5b5}</li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-light text-charcoal mb-4">{c.s6}</h2>
              <ul className="text-stone text-sm leading-relaxed space-y-3 ml-4 list-disc">
                <li>{c.s6b1}</li>
                <li>{c.s6b2}</li>
                <li>{c.s6b3}</li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-light text-charcoal mb-4">{c.s7}</h2>
              <p className="text-stone leading-relaxed text-sm mb-3">{c.s7p1}</p>
              <p className="text-stone leading-relaxed text-sm">{c.s7p2}</p>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-light text-charcoal mb-4">{c.s8}</h2>
              <p className="text-stone leading-relaxed text-sm">
                {c.s8p}{" "}
                <a href="mailto:info@nimarapilates.com" className="text-green hover:text-green-light transition-colors">info@nimarapilates.com</a>
                {c.s8p2}
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-light text-charcoal mb-4">{c.s9}</h2>
              <p className="text-stone leading-relaxed text-sm mb-3">{c.s9p1}</p>
              <ul className="text-stone text-sm leading-relaxed space-y-2 ml-4 list-disc">
                <li>{c.s9b1}</li>
                <li>{c.s9b2}</li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-light text-charcoal mb-4">{c.s10}</h2>
              <p className="text-stone leading-relaxed text-sm">{c.s10p}</p>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-light text-charcoal mb-4">{c.s11}</h2>
              <p className="text-stone leading-relaxed text-sm">
                {c.s11p}{" "}
                <a href="mailto:info@nimarapilates.com" className="text-green hover:text-green-light transition-colors">info@nimarapilates.com</a>{" "}
                {c.s11p2}
              </p>
            </div>

            <div className="pt-8 border-t border-charcoal/10">
              <Link href="/pricing" className="text-green hover:text-green-light transition-colors text-sm">
                {l.backToPricing}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
