"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

const content = {
  en: {
    s1: "1. About These Terms",
    s1p1: "These Terms and Conditions (\u201cTerms\u201d) govern your use of the website nimarapilates.com and the services provided by Nimara Reformer Pilates S.L. (\u201cNimara\u201d, \u201cwe\u201d, \u201cus\u201d, \u201cour\u201d), located at C/ Joan Cresp\u00ed, 47, 07014 Palma de Mallorca, Illes Balears, Spain.",
    s1p2: "By using our website or attending our classes, you agree to be bound by these Terms. If you do not agree, please do not use our services.",
    s2: "2. Services",
    s2p: "Nimara operates a Reformer Pilates studio offering group classes and private sessions. Classes are conducted on Balanced Body Allegro 2 Reformers in small groups of up to 8 participants. We offer various class formats including Fundamentals, Flow, Sculpt, and Restore, each designed for different levels and goals.",
    s3: "3. Booking and Cancellation",
    s3_1: "3.1 Booking",
    s3_1p: "All class bookings are made through our booking platform, Bsport. You must create an account on Bsport to book classes. By booking a class, you agree to Bsport\u2019s terms of service in addition to these Terms.",
    s3_2: "3.2 Cancellation Policy",
    s3_2p: "We understand plans change. Our cancellation policy is as follows:",
    s3b1: "12+ hours before class:", s3b1t: "Free cancellation. Your class credit or pass will be fully restored.",
    s3b2: "Less than 12 hours before class:", s3b2t: "The class credit or pass session will be forfeited. No refund will be issued.",
    s3b3: "No-show:", s3b3t: "If you do not attend a booked class without cancelling, the session will be forfeited.",
    s3_2p2: "We reserve the right to cancel or reschedule classes due to unforeseen circumstances (e.g., instructor illness, facility issues). In such cases, you will be notified as soon as possible and your class credit will be restored.",
    s3_3: "3.3 Waitlist",
    s3_3p: "If a class is full, you may join the waitlist through Bsport. If a spot becomes available, you will be automatically enrolled and notified. Standard cancellation terms apply once you are enrolled.",
    s4: "4. Pricing and Payment",
    s4b1: "All prices are displayed in Euros and include applicable taxes (IVA).",
    s4b2: "Payment is processed securely through Bsport at the time of purchase.",
    s4b3: "Class packs and memberships are non-transferable and non-refundable unless otherwise required by law.",
    s4b4: "Class packs have a validity period as stated at the time of purchase. Unused sessions will expire at the end of this period.",
    s4b5: "We reserve the right to update pricing at any time. Existing class packs and memberships will not be affected by price changes.",
    s5: "5. Class Policies",
    s5_1: "5.1 Arrival",
    s5_1p: "Please arrive at least 5 minutes before your scheduled class. This allows time to set up your reformer and settle in. Late arrivals may not be admitted to class for safety reasons and to avoid disruption to other participants. Late arrivals will be marked as a no-show.",
    s5_2: "5.2 What to Bring",
    s5_2p: "Wear comfortable, fitted clothing that allows your instructor to observe your alignment. Grip socks are required for hygiene and safety on the reformer. We have grip socks available for purchase at the studio. Bring water if you wish; we also have water available.",
    s5_3: "5.3 Studio Etiquette",
    s5_3p: "We ask that you keep mobile phones on silent and refrain from using them during class. Please inform your instructor of any injuries, health conditions, or pregnancy before class begins.",
    s6: "6. Health and Safety Disclaimer",
    s6p1: "Reformer Pilates is a physical activity that carries inherent risks. By participating in our classes, you acknowledge and accept the following:",
    s6b1: "You are participating voluntarily and at your own risk.",
    s6b2: "You confirm that you are in adequate physical health to participate in Pilates classes. If you have any medical conditions, injuries, or are pregnant, you must inform your instructor before class.",
    s6b3: "You are responsible for working within your own limits and following your instructor\u2019s guidance.",
    s6b4: "We recommend consulting a healthcare professional before starting any new exercise programme, particularly if you have pre-existing medical conditions.",
    s6p2: "Nimara and its instructors are not liable for any injury, loss, or damage arising from participation in our classes, except where caused by our negligence or wilful misconduct.",
    s7: "7. Limitation of Liability",
    s7p1: "To the maximum extent permitted by Spanish law:",
    s7b1: "Nimara shall not be liable for any indirect, incidental, or consequential damages arising from your use of our website or services.",
    s7b2: "Our total liability for any claim relating to our services shall not exceed the amount paid by you for the specific service giving rise to the claim.",
    s7b3: "We are not responsible for the content, policies, or practices of third-party platforms (Bsport, WhatsApp, etc.).",
    s7p2: "Nothing in these Terms excludes or limits our liability for death or personal injury caused by negligence, fraud, or any other liability that cannot be excluded or limited under applicable law.",
    s8: "8. Intellectual Property",
    s8p: "All content on this website \u2014 including text, images, logos, branding, design elements, and code \u2014 is the property of Nimara Reformer Pilates S.L. or its licensors and is protected by copyright and intellectual property laws. You may not reproduce, distribute, modify, or create derivative works from any content on this website without our prior written consent.",
    s9: "9. Privacy",
    s9p1: "Your use of our website and services is also governed by our",
    s9p2: "Privacy Policy",
    s9p3: ", which describes how we collect, use, and protect your personal data in compliance with the GDPR and Spanish law.",
    s10: "10. Modifications",
    s10p: "We reserve the right to modify these Terms at any time. Changes will be posted on this page with an updated revision date. Your continued use of our website or services after changes are posted constitutes acceptance of the revised Terms.",
    s11: "11. Governing Law and Jurisdiction",
    s11p: "These Terms are governed by and construed in accordance with the laws of Spain. Any disputes arising from or relating to these Terms or our services shall be subject to the exclusive jurisdiction of the courts of Palma de Mallorca, Illes Balears, Spain, without prejudice to any mandatory consumer protection provisions that may apply under your local law.",
    s12: "12. Contact",
    s12p: "For any questions about these Terms, please contact us at",
  },
  fr: {
    s1: "1. Objet des présentes conditions",
    s1p1: "Les présentes Conditions générales (\u00ab CGV \u00bb) régissent votre utilisation du site nimarapilates.com et des services proposés par Nimara Reformer Pilates S.L. (\u00ab Nimara \u00bb, \u00ab nous \u00bb), situé C/ Joan Cresp\u00ed, 47, 07014 Palma de Majorque, Illes Balears, Espagne.",
    s1p2: "En utilisant notre site ou en participant à nos cours, vous acceptez d\u2019être lié par les présentes CGV. Si vous n\u2019acceptez pas ces conditions, veuillez ne pas utiliser nos services.",
    s2: "2. Services",
    s2p: "Nimara exploite un studio de Reformer Pilates proposant des cours collectifs et des sessions privées. Les cours se déroulent sur des Reformers Balanced Body Allegro 2, en petits groupes de 8 participants maximum. Nous proposons différents formats : Fundamentals, Flow, Sculpt et Restore, conçus pour différents niveaux et objectifs.",
    s3: "3. Réservation et annulation",
    s3_1: "3.1 Réservation",
    s3_1p: "Toutes les réservations de cours sont effectuées via notre plateforme Bsport. Vous devez créer un compte sur Bsport pour réserver des cours. En réservant un cours, vous acceptez les conditions d\u2019utilisation de Bsport en plus des présentes CGV.",
    s3_2: "3.2 Politique d\u2019annulation",
    s3_2p: "Nous comprenons que les plans peuvent changer. Notre politique d\u2019annulation est la suivante :",
    s3b1: "Plus de 12 heures avant le cours :", s3b1t: "Annulation gratuite. Votre crédit ou pass sera intégralement restitué.",
    s3b2: "Moins de 12 heures avant le cours :", s3b2t: "Le crédit ou la séance du pass sera perdu. Aucun remboursement ne sera effectué.",
    s3b3: "Absence :", s3b3t: "Si vous ne vous présentez pas à un cours réservé sans l\u2019annuler, la séance sera perdue.",
    s3_2p2: "Nous nous réservons le droit d\u2019annuler ou de reprogrammer des cours en raison de circonstances imprévues (maladie d\u2019un instructeur, problème dans les locaux, etc.). Dans ce cas, vous serez informé dès que possible et votre crédit sera restitué.",
    s3_3: "3.3 Liste d\u2019attente",
    s3_3p: "Si un cours est complet, vous pouvez rejoindre la liste d\u2019attente via Bsport. Si une place se libère, vous serez automatiquement inscrit et notifié. Les conditions d\u2019annulation standard s\u2019appliquent dès votre inscription.",
    s4: "4. Tarifs et paiement",
    s4b1: "Tous les prix sont affichés en euros et incluent les taxes applicables (IVA).",
    s4b2: "Le paiement est traité de manière sécurisée via Bsport au moment de l\u2019achat.",
    s4b3: "Les packs de cours et les abonnements sont non cessibles et non remboursables, sauf disposition légale contraire.",
    s4b4: "Les packs de cours ont une durée de validité précisée lors de l\u2019achat. Les séances non utilisées expirent à la fin de cette période.",
    s4b5: "Nous nous réservons le droit de modifier les tarifs à tout moment. Les packs et abonnements existants ne seront pas affectés par ces changements.",
    s5: "5. Règles du studio",
    s5_1: "5.1 Arrivée",
    s5_1p: "Merci d\u2019arriver au moins 5 minutes avant votre cours. Cela vous laisse le temps de préparer votre Reformer et de vous installer. Les retardataires peuvent ne pas être admis pour des raisons de sécurité et afin de ne pas perturber les autres participants. Ils seront enregistrés comme absents.",
    s5_2: "5.2 Ce qu\u2019il faut apporter",
    s5_2p: "Portez des vêtements confortables et ajustés permettant à votre instructeur d\u2019observer votre alignement. Les chaussettes antidérapantes sont obligatoires pour des raisons d\u2019hygiène et de sécurité sur le Reformer. Nous en vendons à l\u2019accueil. Vous pouvez apporter votre bouteille d\u2019eau ; nous en mettons également à disposition.",
    s5_3: "5.3 Étiquette en studio",
    s5_3p: "Nous vous demandons de mettre votre téléphone en mode silencieux et de vous abstenir de l\u2019utiliser pendant le cours. Veuillez informer votre instructeur de toute blessure, condition médicale ou grossesse avant le début du cours.",
    s6: "6. Avertissement santé et sécurité",
    s6p1: "Le Reformer Pilates est une activité physique comportant des risques inhérents. En participant à nos cours, vous reconnaissez et acceptez ce qui suit :",
    s6b1: "Vous participez volontairement et à vos propres risques.",
    s6b2: "Vous confirmez être en bonne condition physique pour participer aux cours de Pilates. Si vous avez des conditions médicales, des blessures ou si vous êtes enceinte, vous devez en informer votre instructeur avant le cours.",
    s6b3: "Vous êtes responsable de travailler dans vos limites et de suivre les consignes de votre instructeur.",
    s6b4: "Nous recommandons de consulter un professionnel de santé avant de commencer tout nouveau programme d\u2019exercice, en particulier si vous avez des antécédents médicaux.",
    s6p2: "Nimara et ses instructeurs ne sont pas responsables des blessures, pertes ou dommages résultant de la participation à nos cours, sauf en cas de négligence ou de faute intentionnelle de notre part.",
    s7: "7. Limitation de responsabilité",
    s7p1: "Dans la limite maximale permise par le droit espagnol :",
    s7b1: "Nimara ne saurait être tenu responsable des dommages indirects, accessoires ou consécutifs découlant de l\u2019utilisation de notre site ou de nos services.",
    s7b2: "Notre responsabilité totale pour toute réclamation liée à nos services ne saurait excéder le montant payé pour le service concerné.",
    s7b3: "Nous ne sommes pas responsables du contenu, des politiques ou des pratiques des plateformes tierces (Bsport, WhatsApp, etc.).",
    s7p2: "Rien dans les présentes CGV n\u2019exclut ni ne limite notre responsabilité en cas de décès ou de blessure causés par notre négligence, fraude ou toute autre responsabilité ne pouvant être exclue en vertu de la loi applicable.",
    s8: "8. Propriété intellectuelle",
    s8p: "Tout le contenu de ce site \u2014 textes, images, logos, identité visuelle, éléments de design et code \u2014 est la propriété de Nimara Reformer Pilates S.L. ou de ses concédants et est protégé par les lois relatives au droit d\u2019auteur et à la propriété intellectuelle. Vous ne pouvez pas reproduire, distribuer, modifier ou créer des œuvres dérivées à partir de ce contenu sans notre consentement écrit préalable.",
    s9: "9. Confidentialité",
    s9p1: "L\u2019utilisation de notre site et de nos services est également régie par notre",
    s9p2: "Politique de confidentialité",
    s9p3: ", qui décrit comment nous collectons, utilisons et protégeons vos données personnelles conformément au RGPD et au droit espagnol.",
    s10: "10. Modifications",
    s10p: "Nous nous réservons le droit de modifier les présentes CGV à tout moment. Les modifications seront publiées sur cette page avec une date de révision mise à jour. La poursuite de l\u2019utilisation de notre site ou de nos services après la publication des modifications vaut acceptation des CGV révisées.",
    s11: "11. Droit applicable et juridiction compétente",
    s11p: "Les présentes CGV sont régies et interprétées conformément au droit espagnol. Tout litige découlant des présentes CGV ou de nos services relève de la compétence exclusive des tribunaux de Palma de Majorque, Illes Balears, Espagne, sans préjudice des dispositions impératives de protection des consommateurs applicables dans votre pays.",
    s12: "12. Contact",
    s12p: "Pour toute question relative aux présentes CGV, contactez-nous à",
  },
  es: {
    s1: "1. Acerca de estas condiciones",
    s1p1: "Las presentes Condiciones generales (\u00abCondiciones\u00bb) rigen el uso del sitio web nimarapilates.com y los servicios prestados por Nimara Reformer Pilates S.L. (\u00abNimara\u00bb, \u00abnosotros\u00bb), con domicilio en C/ Joan Cresp\u00ed, 47, 07014 Palma de Mallorca, Illes Balears, España.",
    s1p2: "Al utilizar nuestro sitio web o asistir a nuestras clases, acepta quedar vinculado por estas Condiciones. Si no está de acuerdo, le rogamos que no utilice nuestros servicios.",
    s2: "2. Servicios",
    s2p: "Nimara gestiona un estudio de Reformer Pilates que ofrece clases en grupo y sesiones privadas. Las clases se imparten en Reformers Balanced Body Allegro 2, en grupos reducidos de hasta 8 participantes. Ofrecemos varios formatos: Fundamentals, Flow, Sculpt y Restore, diseñados para diferentes niveles y objetivos.",
    s3: "3. Reserva y cancelación",
    s3_1: "3.1 Reserva",
    s3_1p: "Todas las reservas de clases se realizan a través de nuestra plataforma de reservas, Bsport. Debe crear una cuenta en Bsport para reservar clases. Al reservar, acepta los términos de servicio de Bsport además de las presentes Condiciones.",
    s3_2: "3.2 Política de cancelación",
    s3_2p: "Entendemos que los planes pueden cambiar. Nuestra política de cancelación es la siguiente:",
    s3b1: "Más de 12 horas antes de la clase:", s3b1t: "Cancelación gratuita. Su crédito o bono se restituirá íntegramente.",
    s3b2: "Menos de 12 horas antes de la clase:", s3b2t: "El crédito o sesión del bono se perderá. No se emitirá reembolso.",
    s3b3: "Ausencia:", s3b3t: "Si no asiste a una clase reservada sin cancelarla, la sesión se perderá.",
    s3_2p2: "Nos reservamos el derecho de cancelar o reprogramar clases por circunstancias imprevistas (enfermedad del instructor, problemas en las instalaciones, etc.). En tal caso, recibirá notificación lo antes posible y su crédito será restituido.",
    s3_3: "3.3 Lista de espera",
    s3_3p: "Si una clase está completa, puede unirse a la lista de espera a través de Bsport. Si se libera una plaza, quedará inscrito automáticamente y recibirá notificación. Las condiciones de cancelación estándar se aplican desde el momento de la inscripción.",
    s4: "4. Precios y pago",
    s4b1: "Todos los precios se muestran en euros e incluyen los impuestos aplicables (IVA).",
    s4b2: "El pago se procesa de forma segura a través de Bsport en el momento de la compra.",
    s4b3: "Los packs de clases y las membresías no son cedibles ni reembolsables, salvo que la ley lo exija.",
    s4b4: "Los packs de clases tienen una validez indicada en el momento de la compra. Las sesiones no utilizadas caducan al final de dicho período.",
    s4b5: "Nos reservamos el derecho de actualizar los precios en cualquier momento. Los packs y membresías existentes no se verán afectados por los cambios de precio.",
    s5: "5. Normas del estudio",
    s5_1: "5.1 Llegada",
    s5_1p: "Por favor, llegue al menos 5 minutos antes de su clase. Esto le permite preparar el Reformer e instalarse. Por razones de seguridad y para no perturbar a los demás participantes, los rezagados pueden no ser admitidos y quedarán registrados como ausentes.",
    s5_2: "5.2 Qué traer",
    s5_2p: "Use ropa cómoda y ajustada que permita a su instructor observar su alineación. Los calcetines antideslizantes son obligatorios por higiene y seguridad en el Reformer. Los tenemos a la venta en el estudio. Puede traer su propia agua; también disponemos de agua.",
    s5_3: "5.3 Normas de etiqueta",
    s5_3p: "Le pedimos que mantenga el móvil en silencio y se abstenga de usarlo durante la clase. Informe a su instructor de cualquier lesión, condición médica o embarazo antes de comenzar.",
    s6: "6. Aviso de salud y seguridad",
    s6p1: "El Reformer Pilates es una actividad física que conlleva riesgos inherentes. Al participar en nuestras clases, reconoce y acepta lo siguiente:",
    s6b1: "Participa voluntariamente y bajo su propia responsabilidad.",
    s6b2: "Confirma estar en condiciones físicas adecuadas para participar en clases de Pilates. Si tiene alguna condición médica, lesión o está embarazada, debe informar a su instructor antes de la clase.",
    s6b3: "Es responsable de trabajar dentro de sus propios límites y de seguir las indicaciones de su instructor.",
    s6b4: "Recomendamos consultar a un profesional de la salud antes de comenzar cualquier programa de ejercicio nuevo, especialmente si tiene condiciones médicas preexistentes.",
    s6p2: "Nimara y sus instructores no son responsables de lesiones, pérdidas o daños derivados de la participación en nuestras clases, salvo que sean causados por nuestra negligencia o conducta dolosa.",
    s7: "7. Limitación de responsabilidad",
    s7p1: "En la medida máxima permitida por la legislación española:",
    s7b1: "Nimara no será responsable de ningún daño indirecto, incidental o consecuente derivado del uso de nuestro sitio web o servicios.",
    s7b2: "Nuestra responsabilidad total por cualquier reclamación relacionada con nuestros servicios no excederá el importe pagado por el servicio concreto que origine la reclamación.",
    s7b3: "No somos responsables del contenido, las políticas ni las prácticas de plataformas de terceros (Bsport, WhatsApp, etc.).",
    s7p2: "Nada en estas Condiciones excluye ni limita nuestra responsabilidad por muerte o lesiones personales causadas por negligencia, fraude u otro tipo de responsabilidad que no pueda excluirse conforme a la legislación aplicable.",
    s8: "8. Propiedad intelectual",
    s8p: "Todo el contenido de este sitio web \u2014 incluyendo textos, imágenes, logotipos, identidad de marca, elementos de diseño y código \u2014 es propiedad de Nimara Reformer Pilates S.L. o de sus licenciantes, y está protegido por las leyes de propiedad intelectual. No puede reproducir, distribuir, modificar ni crear obras derivadas de ningún contenido de este sitio sin nuestro consentimiento previo por escrito.",
    s9: "9. Privacidad",
    s9p1: "El uso de nuestro sitio web y servicios también se rige por nuestra",
    s9p2: "Política de privacidad",
    s9p3: ", que describe cómo recopilamos, utilizamos y protegemos sus datos personales de conformidad con el RGPD y la legislación española.",
    s10: "10. Modificaciones",
    s10p: "Nos reservamos el derecho de modificar estas Condiciones en cualquier momento. Los cambios se publicarán en esta página con una fecha de revisión actualizada. El uso continuado de nuestro sitio web o servicios tras la publicación de los cambios implica la aceptación de las Condiciones revisadas.",
    s11: "11. Ley aplicable y jurisdicción",
    s11p: "Las presentes Condiciones se rigen e interpretan de conformidad con la legislación española. Cualquier controversia derivada de o relacionada con estas Condiciones o nuestros servicios quedará sujeta a la jurisdicción exclusiva de los tribunales de Palma de Mallorca, Illes Balears, España, sin perjuicio de las disposiciones imperativas de protección al consumidor que puedan aplicarse según su legislación local.",
    s12: "12. Contacto",
    s12p: "Para cualquier pregunta sobre estas Condiciones, contáctenos en",
  },
  de: {
    s1: "1. Zu diesen Bedingungen",
    s1p1: "Diese Allgemeinen Geschäftsbedingungen (\u00bbAGB\u00ab) regeln Ihre Nutzung der Website nimarapilates.com und der Dienstleistungen von Nimara Reformer Pilates S.L. (\u00bbNimara\u00ab, \u00bbwir\u00ab, \u00bbuns\u00ab, \u00bbunser\u00ab), mit Sitz in C/ Joan Cresp\u00ed, 47, 07014 Palma de Mallorca, Illes Balears, Spanien.",
    s1p2: "Durch die Nutzung unserer Website oder die Teilnahme an unseren Kursen erklären Sie sich mit diesen AGB einverstanden. Wenn Sie nicht einverstanden sind, nutzen Sie unsere Dienste bitte nicht.",
    s2: "2. Dienstleistungen",
    s2p: "Nimara betreibt ein Reformer Pilates Studio, das Gruppenkurse und Privateinheiten anbietet. Die Kurse finden auf Balanced Body Allegro 2 Reformern in kleinen Gruppen von bis zu 8 Teilnehmern statt. Wir bieten verschiedene Kursformate an: Fundamentals, Flow, Sculpt und Restore, jeweils konzipiert für unterschiedliche Niveaus und Ziele.",
    s3: "3. Buchung und Stornierung",
    s3_1: "3.1 Buchung",
    s3_1p: "Alle Kursbuchungen erfolgen über unsere Buchungsplattform Bsport. Sie müssen ein Konto bei Bsport erstellen, um Kurse buchen zu können. Mit der Buchung eines Kurses stimmen Sie den Nutzungsbedingungen von Bsport zusätzlich zu diesen AGB zu.",
    s3_2: "3.2 Stornierungsbedingungen",
    s3_2p: "Wir verstehen, dass Pläne sich ändern können. Unsere Stornierungsbedingungen lauten wie folgt:",
    s3b1: "Mehr als 12 Stunden vor dem Kurs:", s3b1t: "Kostenlose Stornierung. Ihr Kursguthaben oder Pass wird vollständig erstattet.",
    s3b2: "Weniger als 12 Stunden vor dem Kurs:", s3b2t: "Das Kursguthaben oder die Pass-Einheit verfällt. Es erfolgt keine Rückerstattung.",
    s3b3: "Nichterscheinen:", s3b3t: "Wenn Sie nicht zu einem gebuchten Kurs erscheinen ohne zu stornieren, verfällt die Einheit.",
    s3_2p2: "Wir behalten uns das Recht vor, Kurse aufgrund unvorhergesehener Umstände (z. B. Instruktorkrankheit, Probleme mit den Räumlichkeiten) zu stornieren oder umzuplanen. In diesem Fall werden Sie so schnell wie möglich informiert und Ihr Kursguthaben wird erstattet.",
    s3_3: "3.3 Warteliste",
    s3_3p: "Wenn ein Kurs ausgebucht ist, können Sie sich über Bsport auf die Warteliste setzen lassen. Wenn ein Platz frei wird, werden Sie automatisch eingeschrieben und benachrichtigt. Die üblichen Stornierungsbedingungen gelten ab dem Moment Ihrer Einschreibung.",
    s4: "4. Preise und Zahlung",
    s4b1: "Alle Preise werden in Euro angegeben und enthalten die anfallenden Steuern (IVA).",
    s4b2: "Die Zahlung wird zum Zeitpunkt des Kaufs sicher über Bsport abgewickelt.",
    s4b3: "Kurspakete und Mitgliedschaften sind nicht übertragbar und nicht erstattungsfähig, sofern nicht gesetzlich anders vorgeschrieben.",
    s4b4: "Kurspakete haben eine zum Kaufzeitpunkt angegebene Gültigkeitsdauer. Nicht genutzte Einheiten verfallen am Ende dieses Zeitraums.",
    s4b5: "Wir behalten uns das Recht vor, Preise jederzeit zu aktualisieren. Bestehende Kurspakete und Mitgliedschaften werden von Preisänderungen nicht berührt.",
    s5: "5. Studioregeln",
    s5_1: "5.1 Ankunft",
    s5_1p: "Bitte erscheinen Sie mindestens 5 Minuten vor Ihrem Kurs. So haben Sie Zeit, Ihren Reformer einzurichten und zur Ruhe zu kommen. Zuspätkommer können aus Sicherheitsgründen und um andere Teilnehmer nicht zu stören vom Kurs ausgeschlossen werden und werden als Nichterscheinen eingetragen.",
    s5_2: "5.2 Was mitbringen",
    s5_2p: "Tragen Sie bequeme, eng anliegende Kleidung, die es Ihrem Instruktor ermöglicht, Ihre Ausrichtung zu beobachten. Grip-Socken sind aus Hygiene- und Sicherheitsgründen auf dem Reformer Pflicht. Wir haben Grip-Socken zum Kauf im Studio. Bringen Sie gerne Ihre eigene Wasserflasche mit; Wasser steht auch bereit.",
    s5_3: "5.3 Studioetikette",
    s5_3p: "Wir bitten Sie, Ihr Mobiltelefon auf stumm zu stellen und während des Kurses nicht zu verwenden. Informieren Sie Ihren Instruktor bitte vor Kursbeginn über Verletzungen, gesundheitliche Einschränkungen oder eine Schwangerschaft.",
    s6: "6. Gesundheits- und Sicherheitshinweis",
    s6p1: "Reformer Pilates ist eine körperliche Aktivität, die inhärente Risiken birgt. Mit der Teilnahme an unseren Kursen erkennen Sie Folgendes an und akzeptieren es:",
    s6b1: "Sie nehmen freiwillig und auf eigenes Risiko teil.",
    s6b2: "Sie bestätigen, körperlich fit genug für die Teilnahme an Pilates-Kursen zu sein. Bei Erkrankungen, Verletzungen oder Schwangerschaft müssen Sie Ihren Instruktor vor dem Kurs informieren.",
    s6b3: "Sie sind dafür verantwortlich, innerhalb Ihrer eigenen Grenzen zu arbeiten und den Anweisungen Ihres Instruktors zu folgen.",
    s6b4: "Wir empfehlen, vor Beginn eines neuen Sportprogramms einen Arzt aufzusuchen, insbesondere bei Vorerkrankungen.",
    s6p2: "Nimara und seine Instruktoren haften nicht für Verletzungen, Verluste oder Schäden, die durch die Teilnahme an unseren Kursen entstehen, es sei denn, diese sind auf unsere Fahrlässigkeit oder vorsätzliches Fehlverhalten zurückzuführen.",
    s7: "7. Haftungsbeschränkung",
    s7p1: "Im größtmöglichen gesetzlich zulässigen Umfang nach spanischem Recht:",
    s7b1: "Nimara haftet nicht für indirekte, zufällige oder Folgeschäden, die aus der Nutzung unserer Website oder unserer Dienste entstehen.",
    s7b2: "Unsere Gesamthaftung für Ansprüche im Zusammenhang mit unseren Diensten übersteigt nicht den von Ihnen für den betreffenden Dienst bezahlten Betrag.",
    s7b3: "Wir sind nicht verantwortlich für Inhalte, Richtlinien oder Praktiken von Drittanbieterplattformen (Bsport, WhatsApp usw.).",
    s7p2: "Nichts in diesen AGB schließt unsere Haftung für Tod oder Körperverletzung durch Fahrlässigkeit, Betrug oder sonstige Haftung aus oder beschränkt diese, soweit dies nach geltendem Recht nicht ausgeschlossen werden kann.",
    s8: "8. Geistiges Eigentum",
    s8p: "Alle Inhalte dieser Website \u2014 einschließlich Texte, Bilder, Logos, Marken, Designelemente und Code \u2014 sind Eigentum von Nimara Reformer Pilates S.L. oder seiner Lizenzgeber und durch Urheber- und Schutzrechte geschützt. Sie dürfen keine Inhalte dieser Website ohne unsere vorherige schriftliche Zustimmung reproduzieren, verbreiten, ändern oder davon abgeleitete Werke erstellen.",
    s9: "9. Datenschutz",
    s9p1: "Ihre Nutzung unserer Website und Dienste unterliegt auch unserer",
    s9p2: "Datenschutzerklärung",
    s9p3: ", die beschreibt, wie wir Ihre personenbezogenen Daten gemäß der DSGVO und dem spanischen Recht erheben, verwenden und schützen.",
    s10: "10. Änderungen",
    s10p: "Wir behalten uns das Recht vor, diese AGB jederzeit zu ändern. Änderungen werden auf dieser Seite mit einem aktualisierten Überarbeitungsdatum veröffentlicht. Ihre fortgesetzte Nutzung unserer Website oder Dienste nach der Veröffentlichung von Änderungen gilt als Zustimmung zu den überarbeiteten AGB.",
    s11: "11. Anwendbares Recht und Gerichtsstand",
    s11p: "Diese AGB unterliegen dem spanischen Recht und sind entsprechend auszulegen. Alle Streitigkeiten, die sich aus diesen AGB oder unseren Diensten ergeben oder damit zusammenhängen, unterliegen der ausschließlichen Zuständigkeit der Gerichte von Palma de Mallorca, Illes Balears, Spanien, unbeschadet zwingender Verbraucherschutzvorschriften, die nach Ihrem nationalen Recht gelten können.",
    s12: "12. Kontakt",
    s12p: "Bei Fragen zu diesen AGB kontaktieren Sie uns bitte unter",
  },
};

export default function TermsPage() {
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
            {l.termsTitle}
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
            <div>
              <h2 className="font-heading text-2xl font-light text-charcoal mb-4">{c.s1}</h2>
              <p className="text-stone leading-relaxed text-sm mb-3">{c.s1p1}</p>
              <p className="text-stone leading-relaxed text-sm">{c.s1p2}</p>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-light text-charcoal mb-4">{c.s2}</h2>
              <p className="text-stone leading-relaxed text-sm">{c.s2p}</p>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-light text-charcoal mb-4">{c.s3}</h2>
              <h3 className="font-heading text-lg font-light text-charcoal mt-6 mb-2">{c.s3_1}</h3>
              <p className="text-stone leading-relaxed text-sm">{c.s3_1p}</p>
              <h3 className="font-heading text-lg font-light text-charcoal mt-6 mb-2">{c.s3_2}</h3>
              <p className="text-stone leading-relaxed text-sm mb-3">{c.s3_2p}</p>
              <ul className="text-stone text-sm leading-relaxed space-y-2 ml-4 list-disc">
                <li><strong className="text-charcoal">{c.s3b1}</strong> {c.s3b1t}</li>
                <li><strong className="text-charcoal">{c.s3b2}</strong> {c.s3b2t}</li>
                <li><strong className="text-charcoal">{c.s3b3}</strong> {c.s3b3t}</li>
              </ul>
              <p className="text-stone leading-relaxed text-sm mt-3">{c.s3_2p2}</p>
              <h3 className="font-heading text-lg font-light text-charcoal mt-6 mb-2">{c.s3_3}</h3>
              <p className="text-stone leading-relaxed text-sm">{c.s3_3p}</p>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-light text-charcoal mb-4">{c.s4}</h2>
              <ul className="text-stone text-sm leading-relaxed space-y-2 ml-4 list-disc">
                <li>{c.s4b1}</li>
                <li>{c.s4b2}</li>
                <li>{c.s4b3}</li>
                <li>{c.s4b4}</li>
                <li>{c.s4b5}</li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-light text-charcoal mb-4">{c.s5}</h2>
              <h3 className="font-heading text-lg font-light text-charcoal mt-6 mb-2">{c.s5_1}</h3>
              <p className="text-stone leading-relaxed text-sm">{c.s5_1p}</p>
              <h3 className="font-heading text-lg font-light text-charcoal mt-6 mb-2">{c.s5_2}</h3>
              <p className="text-stone leading-relaxed text-sm">{c.s5_2p}</p>
              <h3 className="font-heading text-lg font-light text-charcoal mt-6 mb-2">{c.s5_3}</h3>
              <p className="text-stone leading-relaxed text-sm">{c.s5_3p}</p>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-light text-charcoal mb-4">{c.s6}</h2>
              <p className="text-stone leading-relaxed text-sm mb-3">{c.s6p1}</p>
              <ul className="text-stone text-sm leading-relaxed space-y-2 ml-4 list-disc">
                <li>{c.s6b1}</li>
                <li>{c.s6b2}</li>
                <li>{c.s6b3}</li>
                <li>{c.s6b4}</li>
              </ul>
              <p className="text-stone leading-relaxed text-sm mt-3">{c.s6p2}</p>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-light text-charcoal mb-4">{c.s7}</h2>
              <p className="text-stone leading-relaxed text-sm mb-3">{c.s7p1}</p>
              <ul className="text-stone text-sm leading-relaxed space-y-2 ml-4 list-disc">
                <li>{c.s7b1}</li>
                <li>{c.s7b2}</li>
                <li>{c.s7b3}</li>
              </ul>
              <p className="text-stone leading-relaxed text-sm mt-3">{c.s7p2}</p>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-light text-charcoal mb-4">{c.s8}</h2>
              <p className="text-stone leading-relaxed text-sm">{c.s8p}</p>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-light text-charcoal mb-4">{c.s9}</h2>
              <p className="text-stone leading-relaxed text-sm">
                {c.s9p1}{" "}
                <Link href="/privacy" className="text-green hover:text-green-light transition-colors">{c.s9p2}</Link>
                {c.s9p3}
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-light text-charcoal mb-4">{c.s10}</h2>
              <p className="text-stone leading-relaxed text-sm">{c.s10p}</p>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-light text-charcoal mb-4">{c.s11}</h2>
              <p className="text-stone leading-relaxed text-sm">{c.s11p}</p>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-light text-charcoal mb-4">{c.s12}</h2>
              <p className="text-stone leading-relaxed text-sm">
                {c.s12p}{" "}
                <a href="mailto:info@nimarapilates.com" className="text-green hover:text-green-light transition-colors">info@nimarapilates.com</a>.
              </p>
            </div>

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
