"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

const content = {
  en: {
    s1: "1. Data Controller",
    s1p1: "The data controller responsible for processing your personal data is:",
    s2: "2. Data We Collect",
    s2p1: "We collect personal data through the following channels:",
    s2_1: "2.1 Contact Form (Formspree)",
    s2_1p: "When you submit our contact form, we collect your first name, last name, email address, phone number (optional), and message content. This data is processed by Formspree, Inc. and forwarded to us via email.",
    s2_2: "2.2 Class Bookings (Bsport)",
    s2_2p: "When you book a class, you interact with Bsport, a third-party booking platform. Bsport collects your name, email address, phone number, payment information, and booking history. Bsport acts as an independent data controller for data processed through its platform. Please refer to",
    s2_2p2: "Bsport\u2019s privacy policy",
    s2_2p3: "for details.",
    s2_3: "2.3 Website Analytics (Vercel Analytics)",
    s2_3p: "We use Vercel Analytics and Vercel Speed Insights to understand how visitors use our website. These tools collect anonymised, aggregated data such as page views, referral sources, and performance metrics. No personally identifiable information is collected. No cookies are set for analytics purposes.",
    s2_4: "2.4 WhatsApp (Meta)",
    s2_4p: "Our website includes a WhatsApp button for direct messaging. When you contact us via WhatsApp, your messages and phone number are processed by Meta Platforms Ireland Ltd. Please refer to",
    s2_4p2: "WhatsApp\u2019s privacy policy",
    s2_4p3: "for details.",
    s3: "3. Legal Basis for Processing",
    s3p1: "We process your personal data on the following legal bases under Article 6 of the GDPR:",
    s3b1: "Consent (Art. 6(1)(a)):",
    s3b1t: "When you voluntarily submit the contact form or initiate a WhatsApp conversation with us.",
    s3b2: "Performance of a contract (Art. 6(1)(b)):",
    s3b2t: "When processing is necessary to fulfil a class booking or manage your membership.",
    s3b3: "Legitimate interest (Art. 6(1)(f)):",
    s3b3t: "For website analytics to improve our services and user experience, where such interests are not overridden by your rights.",
    s4: "4. Data Retention",
    s4b1: "Contact form submissions:",
    s4b1t: "Retained for up to 12 months from the date of enquiry, then deleted unless a business relationship is established.",
    s4b2: "Booking and payment data:",
    s4b2t: "Retained in accordance with Spanish tax and accounting obligations (minimum 5 years as required by Ley General Tributaria).",
    s4b3: "Analytics data:",
    s4b3t: "Aggregated and anonymised; no personal data is stored.",
    s5: "5. Third-Party Processors",
    s5p1: "We share your data with the following third-party services, each of which maintains its own privacy policy:",
    s5th1: "Service", s5th2: "Purpose", s5th3: "Location",
    s5r1c1: "Vercel, Inc.", s5r1c2: "Website hosting, analytics, speed insights", s5r1c3: "USA (EU data region available)",
    s5r2c1: "Formspree, Inc.", s5r2c2: "Contact form processing", s5r2c3: "USA",
    s5r3c1: "Bsport SAS", s5r3c2: "Class booking and payments", s5r3c3: "France (EU)",
    s5r4c1: "Meta Platforms Ireland Ltd", s5r4c2: "WhatsApp messaging", s5r4c3: "Ireland (EU)",
    s5p2: "Where data is transferred outside the European Economic Area, appropriate safeguards are in place (e.g., EU Standard Contractual Clauses or adequacy decisions).",
    s6: "6. Cookies",
    s6p1: "Our website uses only essential cookies required for the proper functioning of the site. We do not use advertising or tracking cookies.",
    s6p2: "Vercel Analytics is privacy-focused and does not use cookies to collect data. No cookie consent banner is required for essential-only cookies under the ePrivacy Directive and Spain\u2019s LSSI (Ley 34/2002, de servicios de la sociedad de la informaci\u00f3n y de comercio electr\u00f3nico).",
    s7: "7. Your Rights Under the GDPR",
    s7p1: "As a data subject, you have the following rights:",
    s7b1: "Right of access", s7b1t: "\u2014 obtain confirmation of whether your data is being processed and request a copy.",
    s7b2: "Right to rectification", s7b2t: "\u2014 request correction of inaccurate or incomplete data.",
    s7b3: "Right to erasure", s7b3t: "\u2014 request deletion of your personal data where there is no compelling reason for continued processing.",
    s7b4: "Right to restriction of processing", s7b4t: "\u2014 request that we limit how we use your data.",
    s7b5: "Right to data portability", s7b5t: "\u2014 receive your data in a structured, commonly used, machine-readable format.",
    s7b6: "Right to object", s7b6t: "\u2014 object to processing based on legitimate interests or direct marketing.",
    s7b7: "Right to withdraw consent", s7b7t: "\u2014 where processing is based on consent, you may withdraw it at any time without affecting the lawfulness of prior processing.",
    s7p2: "To exercise any of these rights, please contact us at",
    s7p3: ". We will respond within 30 days.",
    s8: "8. Right to Lodge a Complaint",
    s8p1: "If you believe your data protection rights have been infringed, you have the right to lodge a complaint with the Spanish Data Protection Agency (Agencia Espa\u00f1ola de Protecci\u00f3n de Datos, AEPD):",
    s8b1: "Website:", s8b2: "Address:", s8b2t: "C/ Jorge Juan 6, 28001 Madrid, Spain", s8b3: "Phone:", s8b3t: "+34 901 100 099",
    s9: "9. Changes to This Policy",
    s9p: "We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.",
    s10: "10. Contact",
    s10p: "For any questions regarding this Privacy Policy or your personal data, please contact us at",
    busName: "Business name:", addr: "Address:", email: "Email:", website: "Website:",
  },
  fr: {
    s1: "1. Responsable du traitement",
    s1p1: "Le responsable du traitement de vos données personnelles est :",
    s2: "2. Données collectées",
    s2p1: "Nous collectons des données personnelles via les canaux suivants :",
    s2_1: "2.1 Formulaire de contact (Formspree)",
    s2_1p: "Lorsque vous soumettez notre formulaire de contact, nous collectons votre prénom, nom de famille, adresse e-mail, numéro de téléphone (optionnel) et le contenu de votre message. Ces données sont traitées par Formspree, Inc. et nous sont transmises par e-mail.",
    s2_2: "2.2 Réservations de cours (Bsport)",
    s2_2p: "Lorsque vous réservez un cours, vous interagissez avec Bsport, une plateforme de réservation tierce. Bsport collecte votre nom, adresse e-mail, numéro de téléphone, informations de paiement et historique de réservation. Bsport agit en tant que responsable de traitement indépendant pour les données traitées via sa plateforme. Veuillez consulter",
    s2_2p2: "la politique de confidentialité de Bsport",
    s2_2p3: "pour plus de détails.",
    s2_3: "2.3 Analyse du site web (Vercel Analytics)",
    s2_3p: "Nous utilisons Vercel Analytics et Vercel Speed Insights pour comprendre comment les visiteurs utilisent notre site. Ces outils collectent des données anonymisées et agrégées telles que les pages vues, les sources de référence et les indicateurs de performance. Aucune information permettant d\u2019identifier personnellement un utilisateur n\u2019est collectée. Aucun cookie n\u2019est déposé à des fins analytiques.",
    s2_4: "2.4 WhatsApp (Meta)",
    s2_4p: "Notre site inclut un bouton WhatsApp pour la messagerie directe. Lorsque vous nous contactez via WhatsApp, vos messages et votre numéro de téléphone sont traités par Meta Platforms Ireland Ltd. Veuillez consulter",
    s2_4p2: "la politique de confidentialité de WhatsApp",
    s2_4p3: "pour plus de détails.",
    s3: "3. Base légale du traitement",
    s3p1: "Nous traitons vos données personnelles sur les bases légales suivantes prévues à l\u2019article 6 du RGPD :",
    s3b1: "Consentement (art. 6(1)(a)) :",
    s3b1t: "Lorsque vous soumettez volontairement le formulaire de contact ou engagez une conversation WhatsApp avec nous.",
    s3b2: "Exécution d\u2019un contrat (art. 6(1)(b)) :",
    s3b2t: "Lorsque le traitement est nécessaire à l\u2019exécution d\u2019une réservation de cours ou à la gestion de votre abonnement.",
    s3b3: "Intérêt légitime (art. 6(1)(f)) :",
    s3b3t: "Pour les analyses du site afin d\u2019améliorer nos services et l\u2019expérience utilisateur, dans la mesure où ces intérêts ne prévalent pas sur vos droits.",
    s4: "4. Durée de conservation",
    s4b1: "Formulaires de contact :",
    s4b1t: "Conservés jusqu\u2019à 12 mois à compter de la demande, puis supprimés sauf si une relation commerciale est établie.",
    s4b2: "Données de réservation et de paiement :",
    s4b2t: "Conservées conformément aux obligations fiscales et comptables espagnoles (minimum 5 ans en vertu de la Ley General Tributaria).",
    s4b3: "Données analytiques :",
    s4b3t: "Agrégées et anonymisées ; aucune donnée personnelle n\u2019est stockée.",
    s5: "5. Sous-traitants",
    s5p1: "Nous partageons vos données avec les services tiers suivants, chacun disposant de sa propre politique de confidentialité :",
    s5th1: "Service", s5th2: "Finalité", s5th3: "Localisation",
    s5r1c1: "Vercel, Inc.", s5r1c2: "Hébergement, analytics, performance", s5r1c3: "États-Unis (région UE disponible)",
    s5r2c1: "Formspree, Inc.", s5r2c2: "Traitement des formulaires de contact", s5r2c3: "États-Unis",
    s5r3c1: "Bsport SAS", s5r3c2: "Réservations et paiements", s5r3c3: "France (UE)",
    s5r4c1: "Meta Platforms Ireland Ltd", s5r4c2: "Messagerie WhatsApp", s5r4c3: "Irlande (UE)",
    s5p2: "Lorsque des données sont transférées en dehors de l\u2019Espace économique européen, des garanties appropriées sont en place (ex. : clauses contractuelles types de l\u2019UE ou décisions d\u2019adéquation).",
    s6: "6. Cookies",
    s6p1: "Notre site utilise uniquement des cookies essentiels au bon fonctionnement du site. Nous n\u2019utilisons pas de cookies publicitaires ni de traçage.",
    s6p2: "Vercel Analytics est axé sur la confidentialité et n\u2019utilise pas de cookies pour collecter des données. Aucun bandeau de consentement aux cookies n\u2019est requis pour les cookies essentiels uniquement au titre de la directive ePrivacy et de la LSSI espagnole (Ley 34/2002).",
    s7: "7. Vos droits au titre du RGPD",
    s7p1: "En tant que personne concernée, vous disposez des droits suivants :",
    s7b1: "Droit d\u2019accès", s7b1t: "\u2014 obtenir la confirmation que vos données sont traitées et en demander une copie.",
    s7b2: "Droit de rectification", s7b2t: "\u2014 demander la correction de données inexactes ou incomplètes.",
    s7b3: "Droit à l\u2019effacement", s7b3t: "\u2014 demander la suppression de vos données personnelles lorsqu\u2019il n\u2019existe pas de raison impérieuse de continuer à les traiter.",
    s7b4: "Droit à la limitation du traitement", s7b4t: "\u2014 demander que nous limitions l\u2019utilisation de vos données.",
    s7b5: "Droit à la portabilité", s7b5t: "\u2014 recevoir vos données dans un format structuré, couramment utilisé et lisible par machine.",
    s7b6: "Droit d\u2019opposition", s7b6t: "\u2014 s\u2019opposer au traitement fondé sur l\u2019intérêt légitime ou à des fins de marketing direct.",
    s7b7: "Droit de retirer votre consentement", s7b7t: "\u2014 lorsque le traitement est fondé sur votre consentement, vous pouvez le retirer à tout moment sans affecter la licéité du traitement antérieur.",
    s7p2: "Pour exercer l\u2019un de ces droits, contactez-nous à",
    s7p3: ". Nous répondrons dans un délai de 30 jours.",
    s8: "8. Droit de déposer une réclamation",
    s8p1: "Si vous estimez que vos droits en matière de protection des données ont été violés, vous avez le droit de déposer une réclamation auprès de l\u2019Agence espagnole de protection des données (Agencia Española de Protección de Datos, AEPD) :",
    s8b1: "Site web :", s8b2: "Adresse :", s8b2t: "C/ Jorge Juan 6, 28001 Madrid, Espagne", s8b3: "Téléphone :", s8b3t: "+34 901 100 099",
    s9: "9. Modifications de cette politique",
    s9p: "Nous pouvons mettre à jour cette politique de confidentialité à tout moment. Toute modification sera publiée sur cette page avec une date de révision mise à jour. Nous vous encourageons à consulter cette politique régulièrement.",
    s10: "10. Contact",
    s10p: "Pour toute question concernant cette politique de confidentialité ou vos données personnelles, contactez-nous à",
    busName: "Raison sociale :", addr: "Adresse :", email: "E-mail :", website: "Site web :",
  },
  es: {
    s1: "1. Responsable del tratamiento",
    s1p1: "El responsable del tratamiento de sus datos personales es:",
    s2: "2. Datos que recopilamos",
    s2p1: "Recopilamos datos personales a través de los siguientes canales:",
    s2_1: "2.1 Formulario de contacto (Formspree)",
    s2_1p: "Cuando envía nuestro formulario de contacto, recopilamos su nombre, apellido, dirección de correo electrónico, número de teléfono (opcional) y el contenido del mensaje. Estos datos son procesados por Formspree, Inc. y nos son remitidos por correo electrónico.",
    s2_2: "2.2 Reservas de clases (Bsport)",
    s2_2p: "Cuando reserva una clase, interactúa con Bsport, una plataforma de reservas de terceros. Bsport recopila su nombre, dirección de correo electrónico, número de teléfono, información de pago e historial de reservas. Bsport actúa como responsable del tratamiento independiente para los datos procesados a través de su plataforma. Consulte",
    s2_2p2: "la política de privacidad de Bsport",
    s2_2p3: "para más información.",
    s2_3: "2.3 Analítica web (Vercel Analytics)",
    s2_3p: "Utilizamos Vercel Analytics y Vercel Speed Insights para comprender cómo los visitantes usan nuestro sitio web. Estas herramientas recopilan datos anónimos y agregados como páginas vistas, fuentes de referencia e indicadores de rendimiento. No se recopila información de identificación personal. No se establecen cookies con fines analíticos.",
    s2_4: "2.4 WhatsApp (Meta)",
    s2_4p: "Nuestro sitio web incluye un botón de WhatsApp para mensajería directa. Cuando nos contacta a través de WhatsApp, sus mensajes y número de teléfono son procesados por Meta Platforms Ireland Ltd. Consulte",
    s2_4p2: "la política de privacidad de WhatsApp",
    s2_4p3: "para más información.",
    s3: "3. Base jurídica del tratamiento",
    s3p1: "Tratamos sus datos personales sobre las siguientes bases jurídicas del artículo 6 del RGPD:",
    s3b1: "Consentimiento (art. 6(1)(a)):",
    s3b1t: "Cuando envía voluntariamente el formulario de contacto o inicia una conversación de WhatsApp con nosotros.",
    s3b2: "Ejecución de un contrato (art. 6(1)(b)):",
    s3b2t: "Cuando el tratamiento es necesario para ejecutar una reserva de clase o gestionar su membresía.",
    s3b3: "Interés legítimo (art. 6(1)(f)):",
    s3b3t: "Para la analítica web con el fin de mejorar nuestros servicios y la experiencia del usuario, siempre que dichos intereses no prevalezcan sobre sus derechos.",
    s4: "4. Conservación de datos",
    s4b1: "Formularios de contacto:",
    s4b1t: "Conservados hasta 12 meses desde la fecha de la consulta, luego eliminados salvo que se establezca una relación comercial.",
    s4b2: "Datos de reservas y pagos:",
    s4b2t: "Conservados de acuerdo con las obligaciones fiscales y contables españolas (mínimo 5 años según la Ley General Tributaria).",
    s4b3: "Datos de analítica:",
    s4b3t: "Agregados y anonimizados; no se almacenan datos personales.",
    s5: "5. Encargados del tratamiento",
    s5p1: "Compartimos sus datos con los siguientes servicios de terceros, cada uno con su propia política de privacidad:",
    s5th1: "Servicio", s5th2: "Finalidad", s5th3: "Ubicación",
    s5r1c1: "Vercel, Inc.", s5r1c2: "Alojamiento web, analítica, rendimiento", s5r1c3: "EE. UU. (región UE disponible)",
    s5r2c1: "Formspree, Inc.", s5r2c2: "Procesamiento del formulario de contacto", s5r2c3: "EE. UU.",
    s5r3c1: "Bsport SAS", s5r3c2: "Reservas y pagos", s5r3c3: "Francia (UE)",
    s5r4c1: "Meta Platforms Ireland Ltd", s5r4c2: "Mensajería WhatsApp", s5r4c3: "Irlanda (UE)",
    s5p2: "Cuando los datos se transfieren fuera del Espacio Económico Europeo, se aplican las salvaguardas adecuadas (p. ej., cláusulas contractuales tipo de la UE o decisiones de adecuación).",
    s6: "6. Cookies",
    s6p1: "Nuestro sitio web utiliza únicamente cookies esenciales necesarias para el correcto funcionamiento del sitio. No utilizamos cookies publicitarias ni de seguimiento.",
    s6p2: "Vercel Analytics está centrado en la privacidad y no utiliza cookies para recopilar datos. No se requiere banner de consentimiento de cookies para cookies exclusivamente esenciales en virtud de la Directiva ePrivacy y la LSSI española (Ley 34/2002).",
    s7: "7. Sus derechos en virtud del RGPD",
    s7p1: "Como interesado, tiene los siguientes derechos:",
    s7b1: "Derecho de acceso", s7b1t: "\u2014 obtener confirmación de si sus datos están siendo tratados y solicitar una copia.",
    s7b2: "Derecho de rectificación", s7b2t: "\u2014 solicitar la corrección de datos inexactos o incompletos.",
    s7b3: "Derecho de supresión", s7b3t: "\u2014 solicitar la eliminación de sus datos personales cuando no exista motivo imperioso para continuar el tratamiento.",
    s7b4: "Derecho a la limitación del tratamiento", s7b4t: "\u2014 solicitar que limitemos el uso de sus datos.",
    s7b5: "Derecho a la portabilidad", s7b5t: "\u2014 recibir sus datos en un formato estructurado, de uso común y lectura mecánica.",
    s7b6: "Derecho de oposición", s7b6t: "\u2014 oponerse al tratamiento basado en intereses legítimos o con fines de marketing directo.",
    s7b7: "Derecho a retirar el consentimiento", s7b7t: "\u2014 cuando el tratamiento se base en el consentimiento, puede retirarlo en cualquier momento sin afectar a la licitud del tratamiento anterior.",
    s7p2: "Para ejercer cualquiera de estos derechos, contáctenos en",
    s7p3: ". Responderemos en un plazo de 30 días.",
    s8: "8. Derecho a presentar una reclamación",
    s8p1: "Si considera que sus derechos en materia de protección de datos han sido vulnerados, tiene derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (AEPD):",
    s8b1: "Sitio web:", s8b2: "Dirección:", s8b2t: "C/ Jorge Juan 6, 28001 Madrid, España", s8b3: "Teléfono:", s8b3t: "+34 901 100 099",
    s9: "9. Modificaciones de esta política",
    s9p: "Podemos actualizar esta política de privacidad en cualquier momento. Cualquier cambio se publicará en esta página con una fecha de revisión actualizada. Le recomendamos que revise esta política periódicamente.",
    s10: "10. Contacto",
    s10p: "Para cualquier pregunta sobre esta política de privacidad o sus datos personales, contáctenos en",
    busName: "Nombre comercial:", addr: "Dirección:", email: "Correo electrónico:", website: "Sitio web:",
  },
  de: {
    s1: "1. Verantwortlicher",
    s1p1: "Der Verantwortliche für die Verarbeitung Ihrer personenbezogenen Daten ist:",
    s2: "2. Erhobene Daten",
    s2p1: "Wir erheben personenbezogene Daten über folgende Kanäle:",
    s2_1: "2.1 Kontaktformular (Formspree)",
    s2_1p: "Wenn Sie unser Kontaktformular absenden, erheben wir Ihren Vornamen, Nachnamen, Ihre E-Mail-Adresse, Telefonnummer (optional) und den Nachrichteninhalt. Diese Daten werden von Formspree, Inc. verarbeitet und uns per E-Mail weitergeleitet.",
    s2_2: "2.2 Kursbuchungen (Bsport)",
    s2_2p: "Wenn Sie einen Kurs buchen, interagieren Sie mit Bsport, einer Drittanbieter-Buchungsplattform. Bsport erhebt Ihren Namen, Ihre E-Mail-Adresse, Telefonnummer, Zahlungsinformationen und Buchungshistorie. Bsport agiert als eigenständiger Verantwortlicher für die über seine Plattform verarbeiteten Daten. Bitte beachten Sie",
    s2_2p2: "die Datenschutzerklärung von Bsport",
    s2_2p3: "für weitere Informationen.",
    s2_3: "2.3 Website-Analyse (Vercel Analytics)",
    s2_3p: "Wir nutzen Vercel Analytics und Vercel Speed Insights, um zu verstehen, wie Besucher unsere Website nutzen. Diese Tools erheben anonymisierte, aggregierte Daten wie Seitenaufrufe, Verweisquellen und Leistungsmetriken. Es werden keine personenbezogenen Daten erhoben. Es werden keine Cookies zu Analysezwecken gesetzt.",
    s2_4: "2.4 WhatsApp (Meta)",
    s2_4p: "Unsere Website enthält eine WhatsApp-Schaltfläche für die direkte Kommunikation. Wenn Sie uns über WhatsApp kontaktieren, werden Ihre Nachrichten und Ihre Telefonnummer von Meta Platforms Ireland Ltd. verarbeitet. Bitte beachten Sie",
    s2_4p2: "die Datenschutzerklärung von WhatsApp",
    s2_4p3: "für weitere Informationen.",
    s3: "3. Rechtsgrundlage der Verarbeitung",
    s3p1: "Wir verarbeiten Ihre personenbezogenen Daten auf folgenden Rechtsgrundlagen gemäß Art. 6 DSGVO:",
    s3b1: "Einwilligung (Art. 6(1)(a)):",
    s3b1t: "Wenn Sie das Kontaktformular freiwillig absenden oder ein WhatsApp-Gespräch mit uns initiieren.",
    s3b2: "Vertragserfüllung (Art. 6(1)(b)):",
    s3b2t: "Wenn die Verarbeitung zur Erfüllung einer Kursbuchung oder Verwaltung Ihrer Mitgliedschaft erforderlich ist.",
    s3b3: "Berechtigtes Interesse (Art. 6(1)(f)):",
    s3b3t: "Für Website-Analysen zur Verbesserung unserer Dienste und der Nutzererfahrung, soweit diese Interessen Ihre Rechte nicht überwiegen.",
    s4: "4. Datenspeicherung",
    s4b1: "Kontaktformulare:",
    s4b1t: "Bis zu 12 Monate ab dem Anfragedatum gespeichert, dann gelöscht, sofern keine Geschäftsbeziehung entstanden ist.",
    s4b2: "Buchungs- und Zahlungsdaten:",
    s4b2t: "Gemäß den spanischen Steuer- und Buchführungspflichten gespeichert (mindestens 5 Jahre gemäß Ley General Tributaria).",
    s4b3: "Analysedaten:",
    s4b3t: "Aggregiert und anonymisiert; es werden keine personenbezogenen Daten gespeichert.",
    s5: "5. Auftragsverarbeiter",
    s5p1: "Wir teilen Ihre Daten mit folgenden Drittanbietern, die jeweils über eigene Datenschutzerklärungen verfügen:",
    s5th1: "Dienst", s5th2: "Zweck", s5th3: "Standort",
    s5r1c1: "Vercel, Inc.", s5r1c2: "Website-Hosting, Analyse, Performance", s5r1c3: "USA (EU-Datenregion verfügbar)",
    s5r2c1: "Formspree, Inc.", s5r2c2: "Kontaktformularverarbeitung", s5r2c3: "USA",
    s5r3c1: "Bsport SAS", s5r3c2: "Kursbuchung und Zahlungen", s5r3c3: "Frankreich (EU)",
    s5r4c1: "Meta Platforms Ireland Ltd", s5r4c2: "WhatsApp-Messaging", s5r4c3: "Irland (EU)",
    s5p2: "Bei Datenübermittlungen außerhalb des Europäischen Wirtschaftsraums sind geeignete Schutzmaßnahmen vorhanden (z. B. EU-Standardvertragsklauseln oder Angemessenheitsbeschlüsse).",
    s6: "6. Cookies",
    s6p1: "Unsere Website verwendet ausschließlich technisch notwendige Cookies, die für das ordnungsgemäße Funktionieren der Website erforderlich sind. Wir verwenden keine Werbe- oder Tracking-Cookies.",
    s6p2: "Vercel Analytics ist datenschutzorientiert und verwendet keine Cookies zur Datenerhebung. Für ausschließlich notwendige Cookies ist gemäß der ePrivacy-Richtlinie und Spaniens LSSI (Ley 34/2002) kein Cookie-Einwilligungsbanner erforderlich.",
    s7: "7. Ihre Rechte nach der DSGVO",
    s7p1: "Als betroffene Person haben Sie folgende Rechte:",
    s7b1: "Auskunftsrecht", s7b1t: "\u2014 Bestätigung erhalten, ob Ihre Daten verarbeitet werden, und eine Kopie anfordern.",
    s7b2: "Berichtigungsrecht", s7b2t: "\u2014 Korrektur unrichtiger oder unvollständiger Daten verlangen.",
    s7b3: "Recht auf Löschung", s7b3t: "\u2014 Löschung Ihrer personenbezogenen Daten verlangen, wenn kein zwingender Grund für die weitere Verarbeitung besteht.",
    s7b4: "Recht auf Einschränkung der Verarbeitung", s7b4t: "\u2014 verlangen, dass wir die Nutzung Ihrer Daten einschränken.",
    s7b5: "Recht auf Datenübertragbarkeit", s7b5t: "\u2014 Ihre Daten in einem strukturierten, gängigen, maschinenlesbaren Format erhalten.",
    s7b6: "Widerspruchsrecht", s7b6t: "\u2014 der Verarbeitung auf Basis berechtigter Interessen oder zu Direktmarketingzwecken widersprechen.",
    s7b7: "Recht auf Widerruf der Einwilligung", s7b7t: "\u2014 wenn die Verarbeitung auf Ihrer Einwilligung beruht, können Sie diese jederzeit widerrufen, ohne die Rechtmäßigkeit der bisherigen Verarbeitung zu berühren.",
    s7p2: "Um eines dieser Rechte auszuüben, kontaktieren Sie uns bitte unter",
    s7p3: ". Wir antworten innerhalb von 30 Tagen.",
    s8: "8. Recht auf Beschwerde",
    s8p1: "Wenn Sie der Ansicht sind, dass Ihre Datenschutzrechte verletzt wurden, haben Sie das Recht, eine Beschwerde bei der spanischen Datenschutzbehörde (Agencia Española de Protección de Datos, AEPD) einzureichen:",
    s8b1: "Website:", s8b2: "Adresse:", s8b2t: "C/ Jorge Juan 6, 28001 Madrid, Spanien", s8b3: "Telefon:", s8b3t: "+34 901 100 099",
    s9: "9. Änderungen dieser Richtlinie",
    s9p: "Wir können diese Datenschutzerklärung von Zeit zu Zeit aktualisieren. Änderungen werden auf dieser Seite mit einem aktualisierten Überarbeitungsdatum veröffentlicht. Wir empfehlen Ihnen, diese Richtlinie regelmäßig zu überprüfen.",
    s10: "10. Kontakt",
    s10p: "Bei Fragen zu dieser Datenschutzerklärung oder Ihren personenbezogenen Daten kontaktieren Sie uns bitte unter",
    busName: "Firmenname:", addr: "Adresse:", email: "E-Mail:", website: "Website:",
  },
};

export default function PrivacyPage() {
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
            {l.privacyTitle}
          </h1>
          <p className="text-cream/50 text-sm mt-4">
            {l.lastUpdated}: 11 {lang === "fr" ? "avril" : lang === "es" ? "de abril de" : lang === "de" ? "April" : "April"} 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-sand py-16 sm:py-24 lg:py-32">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="prose-legal space-y-12">
            {/* 1 */}
            <div>
              <h2 className="font-heading text-2xl font-light text-charcoal mb-4">{c.s1}</h2>
              <p className="text-stone leading-relaxed text-sm mb-3">{c.s1p1}</p>
              <ul className="text-stone text-sm leading-relaxed space-y-1 ml-4 list-disc">
                <li><strong className="text-charcoal">{c.busName}</strong> Nimara Reformer Pilates S.L.</li>
                <li><strong className="text-charcoal">{c.addr}</strong> C/ Joan Cresp&iacute;, 47, 07014 Palma de Mallorca, Illes Balears, Spain</li>
                <li><strong className="text-charcoal">{c.email}</strong>{" "}
                  <a href="mailto:info@nimarapilates.com" className="text-green hover:text-green-light transition-colors">info@nimarapilates.com</a>
                </li>
                <li><strong className="text-charcoal">{c.website}</strong>{" "}
                  <a href="https://nimarapilates.com" className="text-green hover:text-green-light transition-colors">nimarapilates.com</a>
                </li>
              </ul>
            </div>

            {/* 2 */}
            <div>
              <h2 className="font-heading text-2xl font-light text-charcoal mb-4">{c.s2}</h2>
              <p className="text-stone leading-relaxed text-sm mb-3">{c.s2p1}</p>
              <h3 className="font-heading text-lg font-light text-charcoal mt-6 mb-2">{c.s2_1}</h3>
              <p className="text-stone leading-relaxed text-sm">{c.s2_1p}</p>
              <h3 className="font-heading text-lg font-light text-charcoal mt-6 mb-2">{c.s2_2}</h3>
              <p className="text-stone leading-relaxed text-sm">
                {c.s2_2p}{" "}
                <a href="https://www.bsport.io/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-green hover:text-green-light transition-colors">{c.s2_2p2}</a>{" "}
                {c.s2_2p3}
              </p>
              <h3 className="font-heading text-lg font-light text-charcoal mt-6 mb-2">{c.s2_3}</h3>
              <p className="text-stone leading-relaxed text-sm">{c.s2_3p}</p>
              <h3 className="font-heading text-lg font-light text-charcoal mt-6 mb-2">{c.s2_4}</h3>
              <p className="text-stone leading-relaxed text-sm">
                {c.s2_4p}{" "}
                <a href="https://www.whatsapp.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-green hover:text-green-light transition-colors">{c.s2_4p2}</a>{" "}
                {c.s2_4p3}
              </p>
            </div>

            {/* 3 */}
            <div>
              <h2 className="font-heading text-2xl font-light text-charcoal mb-4">{c.s3}</h2>
              <p className="text-stone leading-relaxed text-sm mb-3">{c.s3p1}</p>
              <ul className="text-stone text-sm leading-relaxed space-y-2 ml-4 list-disc">
                <li><strong className="text-charcoal">{c.s3b1}</strong> {c.s3b1t}</li>
                <li><strong className="text-charcoal">{c.s3b2}</strong> {c.s3b2t}</li>
                <li><strong className="text-charcoal">{c.s3b3}</strong> {c.s3b3t}</li>
              </ul>
            </div>

            {/* 4 */}
            <div>
              <h2 className="font-heading text-2xl font-light text-charcoal mb-4">{c.s4}</h2>
              <ul className="text-stone text-sm leading-relaxed space-y-2 ml-4 list-disc">
                <li><strong className="text-charcoal">{c.s4b1}</strong> {c.s4b1t}</li>
                <li><strong className="text-charcoal">{c.s4b2}</strong> {c.s4b2t}</li>
                <li><strong className="text-charcoal">{c.s4b3}</strong> {c.s4b3t}</li>
              </ul>
            </div>

            {/* 5 */}
            <div>
              <h2 className="font-heading text-2xl font-light text-charcoal mb-4">{c.s5}</h2>
              <p className="text-stone leading-relaxed text-sm mb-3">{c.s5p1}</p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-stone border-collapse">
                  <thead>
                    <tr className="border-b border-charcoal/15">
                      <th className="text-left text-charcoal font-medium py-3 pr-4">{c.s5th1}</th>
                      <th className="text-left text-charcoal font-medium py-3 pr-4">{c.s5th2}</th>
                      <th className="text-left text-charcoal font-medium py-3">{c.s5th3}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-charcoal/8">
                    <tr><td className="py-3 pr-4">{c.s5r1c1}</td><td className="py-3 pr-4">{c.s5r1c2}</td><td className="py-3">{c.s5r1c3}</td></tr>
                    <tr><td className="py-3 pr-4">{c.s5r2c1}</td><td className="py-3 pr-4">{c.s5r2c2}</td><td className="py-3">{c.s5r2c3}</td></tr>
                    <tr><td className="py-3 pr-4">{c.s5r3c1}</td><td className="py-3 pr-4">{c.s5r3c2}</td><td className="py-3">{c.s5r3c3}</td></tr>
                    <tr><td className="py-3 pr-4">{c.s5r4c1}</td><td className="py-3 pr-4">{c.s5r4c2}</td><td className="py-3">{c.s5r4c3}</td></tr>
                  </tbody>
                </table>
              </div>
              <p className="text-stone leading-relaxed text-sm mt-3">{c.s5p2}</p>
            </div>

            {/* 6 */}
            <div>
              <h2 className="font-heading text-2xl font-light text-charcoal mb-4">{c.s6}</h2>
              <p className="text-stone leading-relaxed text-sm mb-3">{c.s6p1}</p>
              <p className="text-stone leading-relaxed text-sm">{c.s6p2}</p>
            </div>

            {/* 7 */}
            <div>
              <h2 className="font-heading text-2xl font-light text-charcoal mb-4">{c.s7}</h2>
              <p className="text-stone leading-relaxed text-sm mb-3">{c.s7p1}</p>
              <ul className="text-stone text-sm leading-relaxed space-y-2 ml-4 list-disc">
                <li><strong className="text-charcoal">{c.s7b1}</strong> {c.s7b1t}</li>
                <li><strong className="text-charcoal">{c.s7b2}</strong> {c.s7b2t}</li>
                <li><strong className="text-charcoal">{c.s7b3}</strong> {c.s7b3t}</li>
                <li><strong className="text-charcoal">{c.s7b4}</strong> {c.s7b4t}</li>
                <li><strong className="text-charcoal">{c.s7b5}</strong> {c.s7b5t}</li>
                <li><strong className="text-charcoal">{c.s7b6}</strong> {c.s7b6t}</li>
                <li><strong className="text-charcoal">{c.s7b7}</strong> {c.s7b7t}</li>
              </ul>
              <p className="text-stone leading-relaxed text-sm mt-4">
                {c.s7p2}{" "}
                <a href="mailto:info@nimarapilates.com" className="text-green hover:text-green-light transition-colors">info@nimarapilates.com</a>
                {c.s7p3}
              </p>
            </div>

            {/* 8 */}
            <div>
              <h2 className="font-heading text-2xl font-light text-charcoal mb-4">{c.s8}</h2>
              <p className="text-stone leading-relaxed text-sm">{c.s8p1}</p>
              <ul className="text-stone text-sm leading-relaxed space-y-1 ml-4 mt-3 list-disc">
                <li><strong className="text-charcoal">{c.s8b1}</strong>{" "}
                  <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer" className="text-green hover:text-green-light transition-colors">www.aepd.es</a>
                </li>
                <li><strong className="text-charcoal">{c.s8b2}</strong> {c.s8b2t}</li>
                <li><strong className="text-charcoal">{c.s8b3}</strong> {c.s8b3t}</li>
              </ul>
            </div>

            {/* 9 */}
            <div>
              <h2 className="font-heading text-2xl font-light text-charcoal mb-4">{c.s9}</h2>
              <p className="text-stone leading-relaxed text-sm">{c.s9p}</p>
            </div>

            {/* 10 */}
            <div>
              <h2 className="font-heading text-2xl font-light text-charcoal mb-4">{c.s10}</h2>
              <p className="text-stone leading-relaxed text-sm">
                {c.s10p}{" "}
                <a href="mailto:info@nimarapilates.com" className="text-green hover:text-green-light transition-colors">info@nimarapilates.com</a>.
              </p>
            </div>

            {/* Back link */}
            <div className="pt-6 border-t border-charcoal/10">
              <Link href="/" className="text-green hover:text-green-light text-sm transition-colors">
                {l.backToHome}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
