/**
 * Faza 4 locale patches — run once: node scripts/faza4-locales.js
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const localesDir = path.join(__dirname, '..', 'src', 'locales')

const patches = {
  sr: {
    nav_privacy: 'Politika privatnosti',
    nav_terms: 'Uslovi korišćenja',
    cta_send_inquiry: 'Pošaljite nam projekat',
    cta_start: 'Pošaljite nam projekat',
    cta_portfolio: 'Pogledajte naš rad',
    cta_send_project: 'Pošaljite nam projekat',
    cta_view_work: 'Pogledajte naš rad',
    cta_talk_project: 'Razgovarajmo o projektu',
    cta_view_case: 'Pogledajte case study',
    contact_title:
      'Imate postojeći sistem koji treba unaprediti ili ideju koju želite da razvijete?',
    contact_desc:
      'Opišite nam projekat i pogledaćemo koji je najpraktičniji sledeći korak.',
    contact_cta: 'Pošaljite nam projekat',
    contact_full_headline:
      'Imate projekat ili postojeći sistem koji želite da unapredite?',
    contact_full_lead:
      'Opišite nam gde ste trenutno i šta želite da postignete. Pogledaćemo šta ima smisla menjati, šta može da ostane i koji je najpraktičniji sledeći korak.',
    contact_full_title: 'Kontakt',
    contact_form_heading: 'Pošaljite nam projekat',
    contact_form_hint:
      'Nije potrebno da unapred znate tehnologiju. Dovoljno je da opišete situaciju i cilj.',
    contact_form_full_name: 'Ime',
    contact_form_company: 'Kompanija',
    contact_form_email_address: 'Email',
    contact_form_phone: 'Telefon',
    contact_optional: 'opciono',
    contact_form_interest: 'Vrsta projekta',
    contact_form_interest_placeholder: 'Odaberite vrstu projekta',
    contact_form_interest_options: [
      'Web / eCommerce',
      'Magento',
      'WordPress / WooCommerce',
      'Custom Development',
      'Growth / Analytics',
      'Postojeći sistem / nisam siguran',
      'Drugo',
    ],
    contact_form_message_label: 'Poruka',
    contact_form_message_placeholder:
      'Gde ste trenutno, šta želite da postignete, link ka postojećem sistemu ako postoji…',
    contact_form_consent:
      'Slažem se da Weboro koristi podatke iz ove forme da odgovori na moj upit. Detalji su u',
    contact_form_send: 'Pošaljite nam projekat',
    contact_form_sending: 'Slanje…',
    contact_form_success_title: 'Poruka je poslata',
    contact_form_success_full:
      'Hvala. Javićemo vam se nakon što pregledamo informacije koje ste poslali.',
    contact_form_send_another: 'Pošalji još jedan upit',
    contact_next_title: 'Šta se dešava nakon upita?',
    contact_next_steps: [
      'Pogledamo projekat i postojeće stanje',
      'Javljamo se sa pitanjima ako je potrebno',
      'Predlažemo sledeći korak',
    ],
    contact_next_note:
      'Javićemo vam se nakon što pregledamo informacije koje ste poslali.',
    contact_err_name: 'Unesite ime (najmanje 2 karaktera).',
    contact_err_email: 'Unesite ispravnu email adresu.',
    contact_err_type: 'Odaberite vrstu projekta.',
    contact_err_message: 'Poruka treba da ima najmanje 10 karaktera.',
    contact_err_consent: 'Potrebna je saglasnost za slanje upita.',
    contact_err_network:
      'Mrežna greška. Proverite konekciju i pokušajte ponovo.',
    contact_err_server:
      'Slanje nije uspelo. Pokušajte ponovo ili pišite na kontakt@weboro.agency.',
    contact_err_not_configured:
      'Kontakt forma trenutno nije konfigurisana na serveru. Pišite direktno na kontakt@weboro.agency.',
    about_full_cta_title: 'Imate projekat koji treba razviti ili unaprediti?',
    about_full_cta_desc:
      'Pošaljite kratki kontekst. Vraćamo jasan predlog narednih koraka.',
    about_full_cta_btn: 'Pošaljite nam projekat',
    about_cta_btn: 'Pošaljite nam projekat',
    portfolio_full_cta_btn: 'Pošaljite nam projekat',
    portfolio_cta_btn: 'Pošaljite nam projekat',
    service_magento_cta_button: 'Pošaljite nam projekat',
    service_wordpress_cta_button: 'Pošaljite nam projekat',
    privacy_title: 'Politika privatnosti',
    privacy_updated: 'Poslednje ažuriranje: septembar 2026.',
    privacy_contact_label: 'Pitanja o privatnosti:',
    privacy_sections: [
      {
        title: 'Ko smo',
        paragraphs: [
          'Weboro (weboro.agency) je digitalni studio koji razvija web/eCommerce sisteme, custom softver i growth/analytics rešenja. Ova stranica objašnjava kako postupamo sa ličnim podacima koje prikupimo preko sajta.',
        ],
      },
      {
        title: 'Koje podatke prikupljamo',
        paragraphs: [
          'Kada pošaljete kontakt formu, možemo obraditi:',
        ],
        items: [
          'ime',
          'kompaniju (ako je unesete)',
          'email adresu',
          'telefon (ako ga unesete)',
          'vrstu projekta i sadržaj poruke',
          'tehničke podatke potrebne za bezbedan rad sajta (npr. IP u server logovima, ograničenog trajanja)',
        ],
      },
      {
        title: 'Svrha obrade',
        paragraphs: [
          'Podatke iz kontakt forme koristimo isključivo da odgovorimo na upit, razumemo kontekst projekta i predložimo sledeći korak. Ne prodajemo lične podatke trećim stranama.',
        ],
      },
      {
        title: 'Pravni osnov',
        paragraphs: [
          'Osnova obrade je vaša saglasnost data pri slanju forme i/ili legitimni interes da odgovorimo na poslovni upit koji ste sami pokrenuli.',
        ],
      },
      {
        title: 'Čuvanje i deljenje',
        paragraphs: [
          'Poruke mogu biti prosleđene emailom na našu kontakt adresu putem email servisa koji koristimo za dostavu (npr. Resend). Pristup imaju samo osobe u Weboro-u kojima je to potrebno za odgovor. Podatke čuvamo onoliko dugo koliko je razumno potrebno za komunikaciju o upitu, osim ako zakon ne zahteva duže čuvanje.',
        ],
      },
      {
        title: 'Kolačići i analitika',
        paragraphs: [
          'Sajt može koristiti osnovne tehničke kolačiće potrebne za funkcionisanje. Ako uvedemo analitiku (npr. merenje poseta), informisaćemo o tome i, gde je potrebno, tražiti saglasnost. Trenutno ne koristimo oglašivačke tracking piksele trećih strana na kontakt formi.',
        ],
      },
      {
        title: 'Vaša prava',
        paragraphs: [
          'Možete zatražiti uvid, ispravku ili brisanje podataka koje čuvamo u vezi sa vašim upitom, kao i povlačenje saglasnosti za buduću komunikaciju. Kontakt: kontakt@weboro.agency.',
        ],
      },
      {
        title: 'Napomena',
        paragraphs: [
          'Ovaj tekst je osnovna informacija za korisnike sajta. Za formalne ugovore i detaljnu pravnu usklađenost može biti potreban dodatni pravni pregled.',
        ],
      },
    ],
    terms_title: 'Uslovi korišćenja',
    terms_updated: 'Poslednje ažuriranje: septembar 2026.',
    terms_contact_label: 'Kontakt:',
    terms_sections: [
      {
        title: 'Prihvatanje',
        paragraphs: [
          'Korišćenjem sajta weboro.agency prihvatate ove osnovne uslove. Ako se ne slažete, molimo vas da ne koristite sajt.',
        ],
      },
      {
        title: 'Sadržaj sajta',
        paragraphs: [
          'Informacije na sajtu su opšte prirode i služe predstavljanju Weboro usluga i projekata. Ne predstavljaju obavezujuću ponudu osim ako to nije izričito dogovoreno pisanim ugovorom.',
        ],
      },
      {
        title: 'Intelektualna svojina',
        paragraphs: [
          'Tekstovi, dizajn, logotipi i drugi materijali na sajtu pripadaju Weboro-u ili odgovarajućim vlasnicima. Ne smeju se kopirati ili koristiti bez dozvole, osim uobičajenog pregledanja sajta.',
        ],
      },
      {
        title: 'Portfolio i case studies',
        paragraphs: [
          'Opisi projekata su predstavljeni u dobroj veri. Detalji implementacije i rezultati mogu zavisiti od konteksta klijenta i ne garantuju isti ishod za novi projekat.',
        ],
      },
      {
        title: 'Odgovornost',
        paragraphs: [
          'Trudimo se da informacije budu tačne, ali ne garantujemo potpunu bezgrešnost ili neprekidnu dostupnost sajta. Weboro nije odgovoran za štetu nastalu isključivo korišćenjem javnog sadržaja sajta.',
        ],
      },
      {
        title: 'Kontakt i saradnja',
        paragraphs: [
          'Upiti poslati preko forme ili emaila ne stvaraju ugovorni odnos dok se uslovi saradnje ne dogovore i potvrde. Za projekte važe posebni ugovori ili ponude.',
        ],
      },
      {
        title: 'Izmene',
        paragraphs: [
          'Možemo ažurirati ove uslove. Datum poslednje izmene naveden je na vrhu stranice.',
        ],
      },
    ],
  },
  en: {
    nav_privacy: 'Privacy Policy',
    nav_terms: 'Terms of Use',
    cta_send_inquiry: 'Send us your project',
    cta_start: 'Send us your project',
    cta_portfolio: 'See our work',
    cta_send_project: 'Send us your project',
    cta_view_work: 'See our work',
    cta_talk_project: "Let's talk about your project",
    cta_view_case: 'View case study',
    contact_title:
      'Have an existing system to improve, or an idea you want to build?',
    contact_desc:
      "Describe the project and we'll look at the most practical next step.",
    contact_cta: 'Send us your project',
    contact_full_headline:
      'Have a project or an existing system you want to improve?',
    contact_full_lead:
      "Tell us where you are today and what you want to achieve. We'll look at what makes sense to change, what can stay, and the most practical next step.",
    contact_full_title: 'Contact',
    contact_form_heading: 'Send us your project',
    contact_form_hint:
      "You don't need to know the technology in advance. Describing the situation and goal is enough.",
    contact_form_full_name: 'Name',
    contact_form_company: 'Company',
    contact_form_email_address: 'Email',
    contact_form_phone: 'Phone',
    contact_optional: 'optional',
    contact_form_interest: 'Project type',
    contact_form_interest_placeholder: 'Select project type',
    contact_form_interest_options: [
      'Web / eCommerce',
      'Magento',
      'WordPress / WooCommerce',
      'Custom Development',
      'Growth / Analytics',
      "Existing system / I'm not sure",
      'Other',
    ],
    contact_form_message_label: 'Message',
    contact_form_message_placeholder:
      'Where you are today, what you want to achieve, link to the current system if you have one…',
    contact_form_consent:
      'I agree that Weboro may use the data from this form to reply to my inquiry. Details are in our',
    contact_form_send: 'Send us your project',
    contact_form_sending: 'Sending…',
    contact_form_success_title: 'Message sent',
    contact_form_success_full:
      "Thank you. We'll get back to you after reviewing the information you sent.",
    contact_form_send_another: 'Send another inquiry',
    contact_next_title: 'What happens after you reach out?',
    contact_next_steps: [
      'We review the project and current state',
      'We follow up with questions if needed',
      'We propose the next step',
    ],
    contact_next_note:
      "We'll get back to you after reviewing the information you sent.",
    contact_err_name: 'Enter your name (at least 2 characters).',
    contact_err_email: 'Enter a valid email address.',
    contact_err_type: 'Select a project type.',
    contact_err_message: 'Message must be at least 10 characters.',
    contact_err_consent: 'Consent is required to send the inquiry.',
    contact_err_network: 'Network error. Check your connection and try again.',
    contact_err_server:
      'Sending failed. Try again or email kontakt@weboro.agency.',
    contact_err_not_configured:
      'The contact form is not configured on the server yet. Email kontakt@weboro.agency directly.',
    about_full_cta_title: 'Have a project to build or improve?',
    about_full_cta_desc:
      'Send a short brief. We return a clear proposal for next steps.',
    about_full_cta_btn: 'Send us your project',
    about_cta_btn: 'Send us your project',
    portfolio_full_cta_btn: 'Send us your project',
    portfolio_cta_btn: 'Send us your project',
    service_magento_cta_button: 'Send us your project',
    service_wordpress_cta_button: 'Send us your project',
    privacy_title: 'Privacy Policy',
    privacy_updated: 'Last updated: September 2026.',
    privacy_contact_label: 'Privacy questions:',
    privacy_sections: [
      {
        title: 'Who we are',
        paragraphs: [
          'Weboro (weboro.agency) is a digital studio building web/eCommerce systems, custom software, and growth/analytics solutions. This page explains how we handle personal data collected through the site.',
        ],
      },
      {
        title: 'What we collect',
        paragraphs: ['When you submit the contact form, we may process:'],
        items: [
          'name',
          'company (if provided)',
          'email address',
          'phone (if provided)',
          'project type and message content',
          'technical data needed for secure site operation (e.g. IP in short-lived server logs)',
        ],
      },
      {
        title: 'Purpose',
        paragraphs: [
          'We use contact-form data only to reply to your inquiry, understand project context, and propose a next step. We do not sell personal data to third parties.',
        ],
      },
      {
        title: 'Legal basis',
        paragraphs: [
          'Processing is based on your consent when submitting the form and/or our legitimate interest in responding to a business inquiry you initiated.',
        ],
      },
      {
        title: 'Storage and sharing',
        paragraphs: [
          'Messages may be delivered by email to our contact address via the email provider we use for delivery (e.g. Resend). Access is limited to people at Weboro who need it to reply. We keep data only as long as reasonably needed for the inquiry, unless law requires longer retention.',
        ],
      },
      {
        title: 'Cookies and analytics',
        paragraphs: [
          'The site may use basic technical cookies required to function. If we introduce analytics (e.g. visit measurement), we will disclose that and request consent where required. We do not currently run third-party advertising pixels on the contact form.',
        ],
      },
      {
        title: 'Your rights',
        paragraphs: [
          'You may request access, correction, or deletion of data we hold about your inquiry, and withdraw consent for future contact. Email: kontakt@weboro.agency.',
        ],
      },
      {
        title: 'Note',
        paragraphs: [
          'This text is basic information for site visitors. Formal contracts and detailed legal compliance may require additional legal review.',
        ],
      },
    ],
    terms_title: 'Terms of Use',
    terms_updated: 'Last updated: September 2026.',
    terms_contact_label: 'Contact:',
    terms_sections: [
      {
        title: 'Acceptance',
        paragraphs: [
          'By using weboro.agency you accept these basic terms. If you do not agree, please do not use the site.',
        ],
      },
      {
        title: 'Site content',
        paragraphs: [
          'Information on the site is general and presents Weboro services and projects. It is not a binding offer unless expressly agreed in a written contract.',
        ],
      },
      {
        title: 'Intellectual property',
        paragraphs: [
          'Texts, design, logos, and other materials on the site belong to Weboro or the respective owners. They may not be copied or reused without permission, aside from normal browsing.',
        ],
      },
      {
        title: 'Portfolio and case studies',
        paragraphs: [
          'Project descriptions are presented in good faith. Implementation details and outcomes depend on client context and do not guarantee the same result for a new project.',
        ],
      },
      {
        title: 'Liability',
        paragraphs: [
          'We aim for accurate information but do not guarantee complete error-free content or uninterrupted availability. Weboro is not liable for damage arising solely from use of the public site content.',
        ],
      },
      {
        title: 'Contact and collaboration',
        paragraphs: [
          'Inquiries via form or email do not create a contract until collaboration terms are agreed and confirmed. Projects are governed by separate contracts or proposals.',
        ],
      },
      {
        title: 'Changes',
        paragraphs: [
          'We may update these terms. The last-updated date is shown at the top of this page.',
        ],
      },
    ],
  },
}

function deepSetCaseCta(obj, lang) {
  if (!obj?.case_studies) return
  const texts =
    lang === 'sr'
      ? {
          ctaTitle: 'Imate sličan problem ili sistem koji želite da unapredite?',
          ctaDesc:
            'Recite nam gde ste trenutno — predložićemo najpraktičniji sledeći korak, bez pretpostavke da treba isti sistem.',
          ctaButton: 'Razgovarajmo o projektu',
        }
      : {
          ctaTitle: 'Have a similar problem or a system you want to improve?',
          ctaDesc:
            "Tell us where you are today — we'll propose the most practical next step, without assuming you need the same system.",
          ctaButton: "Let's talk about your project",
        }
  for (const key of Object.keys(obj.case_studies)) {
    Object.assign(obj.case_studies[key], texts)
  }
}

for (const lang of ['sr', 'en']) {
  const file = path.join(localesDir, `${lang}.json`)
  const data = JSON.parse(fs.readFileSync(file, 'utf8'))
  Object.assign(data, patches[lang])
  deepSetCaseCta(data, lang)
  fs.writeFileSync(file, JSON.stringify(data, null, 2) + '\n', 'utf8')
  console.log('Patched', lang)
}
