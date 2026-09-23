import fs from 'fs'

const srPatch = {
  contact_v2_eyebrow: 'Kontakt',
  contact_v2_title: 'Recite nam \u0161ta \u017eelite da napravite \u2014 ili \u0161ta trenutno ne radi kako treba.',
  contact_v2_lead:
    'Ne morate unapred da znate platformu, tehnologiju ili kona\u010dno re\u0161enje. Opi\u0161ite nam trenutno stanje, problem i cilj, a mi \u0107emo sagledati koji je najprakti\u010dniji slede\u0107i korak.',
  contact_v2_next_title: '\u0160ta se de\u0161ava nakon slanja',
  contact_v2_next_steps: [
    {
      title: 'Pregledamo upit',
      desc: 'Razumemo trenutno stanje, cilj i kontekst.',
    },
    {
      title: 'Javljamo se',
      desc: 'Ako ima smisla, dogovaramo kratak razgovor ili tra\u017eimo dodatne informacije.',
    },
    {
      title: 'Predla\u017eemo slede\u0107i korak',
      desc: 'Audit, unapre\u0111enje postoje\u0107eg sistema ili konkretan plan novog projekta.',
    },
  ],
  contact_full_headline:
    'Recite nam \u0161ta \u017eelite da napravite \u2014 ili \u0161ta trenutno ne radi kako treba.',
  contact_full_lead:
    'Ne morate unapred da znate platformu, tehnologiju ili kona\u010dno re\u0161enje. Opi\u0161ite nam trenutno stanje, problem i cilj, a mi \u0107emo sagledati koji je najprakti\u010dniji slede\u0107i korak.',
  contact_form_full_name: 'Ime i prezime',
  contact_form_company: 'Kompanija',
  contact_form_consent:
    'Saglasan/na sam da Weboro koristi ove podatke kako bi odgovorio na moj upit. Detalji su u',
  contact_form_message_placeholder:
    'Ukratko opi\u0161ite \u0161ta trenutno imate, \u0161ta \u017eelite da unapredite ili napravite i koji problem poku\u0161avate da re\u0161ite.',
  contact_form_interest_options: [
    'Web / prezentacioni sajt',
    'eCommerce / webshop',
    'Custom development / SaaS',
    'Magento',
    'WordPress / WooCommerce',
    'Growth / Ads / SEO / Analytics',
    'Postoje\u0107i sistem / unapre\u0111enje',
    'Integracije',
    'Drugo',
  ],
  contact_form_success_title: 'Hvala \u2014 primili smo va\u0161 upit.',
  contact_form_success_full:
    'Pregleda\u0107emo informacije koje ste poslali i javiti se sa odgovaraju\u0107im slede\u0107im korakom.',
  contact_err_company: 'Unesite naziv kompanije (najmanje 2 karaktera).',
  contact_err_phone: 'Telefon je preduga\u010dak.',
  contact_err_message_long: 'Poruka je preduga\u010dka (maks. 5000 karaktera).',
  contact_err_unavailable: 'Upit trenutno nije mogu\u0107e poslati putem forme.',
  contact_err_fallback_prefix: 'Po\u0161aljite email direktno na',
  contact_err_not_configured:
    'Upit trenutno nije mogu\u0107e poslati putem forme.',
  contact_err_server: 'Upit trenutno nije mogu\u0107e poslati putem forme.',
}

const enPatch = {
  contact_v2_eyebrow: 'Contact',
  contact_v2_title: 'Tell us what you want to build — or what is not working the way it should.',
  contact_v2_lead:
    'You do not need to know the platform, technology or final solution in advance. Describe the current state, the problem and the goal, and we will assess the most practical next step.',
  contact_v2_next_title: 'What happens after you send',
  contact_v2_next_steps: [
    {
      title: 'We review the inquiry',
      desc: 'We understand the current state, goal and context.',
    },
    {
      title: 'We get in touch',
      desc: 'If it makes sense, we schedule a short call or ask for more information.',
    },
    {
      title: 'We propose the next step',
      desc: 'An audit, improving the existing system, or a concrete plan for a new project.',
    },
  ],
  contact_full_headline:
    'Tell us what you want to build — or what is not working the way it should.',
  contact_full_lead:
    'You do not need to know the platform, technology or final solution in advance. Describe the current state, the problem and the goal, and we will assess the most practical next step.',
  contact_form_full_name: 'Full name',
  contact_form_company: 'Company',
  contact_form_consent:
    'I agree that Weboro may use these details to respond to my inquiry. Details are in the',
  contact_form_message_placeholder:
    'Briefly describe what you have today, what you want to improve or build, and which problem you are trying to solve.',
  contact_form_interest_options: [
    'Web / brochure site',
    'eCommerce / webshop',
    'Custom development / SaaS',
    'Magento',
    'WordPress / WooCommerce',
    'Growth / Ads / SEO / Analytics',
    'Existing system / improvement',
    'Integrations',
    'Other',
  ],
  contact_form_success_title: 'Thank you — we received your inquiry.',
  contact_form_success_full:
    'We will review the information you sent and get back to you with an appropriate next step.',
  contact_err_company: 'Enter a company name (at least 2 characters).',
  contact_err_phone: 'Phone number is too long.',
  contact_err_message_long: 'Message is too long (max 5000 characters).',
  contact_err_unavailable: 'The inquiry cannot be sent through the form right now.',
  contact_err_fallback_prefix: 'Please email us directly at',
  contact_err_not_configured:
    'The inquiry cannot be sent through the form right now.',
  contact_err_server: 'The inquiry cannot be sent through the form right now.',
}

function merge(path, patch) {
  const data = JSON.parse(fs.readFileSync(path, 'utf8'))
  Object.assign(data, patch)
  fs.writeFileSync(path, JSON.stringify(data, null, 2) + '\n')
  console.log('OK', path)
}

merge('src/locales/sr.json', srPatch)
merge('src/locales/en.json', enPatch)
