import fs from 'fs'

const sr = {
  ads_v2_eyebrow: 'Google Ads',
  ads_v2_title: 'Google Ads usmeren na poslovni rezultat, ne samo na klik.',
  ads_v2_lead:
    'Planiramo kampanje zajedno sa trackingom, landing iskustvom i podacima koji omogu\u0107avaju da razumemo \u0161ta zaista donosi leadove ili prodaju.',
  ads_v2_visual_aria: 'Tok kampanje: oglas, landing, akcija i merenje',
  ads_v2_node_ad: 'Oglas',
  ads_v2_node_landing: 'Landing / shop',
  ads_v2_node_action: 'Akcija',
  ads_v2_node_meas: 'Meri',
  ads_v2_loop_note: 'Potro\u0161nja ima smisla kada je povezana sa rezultatom.',
  ads_v2_channels_note: 'Search \u00b7 Shopping \u00b7 remarketing \u2014 po potrebi',
  ads_v2_approach_title: 'Pla\u0107eno ogla\u0161avanje kao deo sistema',
  ads_v2_approach_text:
    'Kampanja nije krajnji proizvod. Gledamo lanac: kampanja \u2192 landing / webshop \u2192 korisni\u010dka akcija \u2192 measurement \u2192 optimizacija. Cilj je da potro\u0161nja bude povezana sa leadom ili prodajom \u2014 ne sa klikom kao merilom uspeha.',
  ads_v2_out_title: '\u0160ta klijent dobija',
  ads_v2_out_lead: 'Ishodi kampanje uskla\u0111eni sa poslovnim ciljem.',
  ads_v2_outcomes: [
    'Jasnije definisan cilj kampanje',
    'Pravilno merenje va\u017enih akcija',
    'Struktura kampanja prema ponudi i publici',
    'Povezivanje sa landingom ili webshopom',
    'Optimizacija na osnovu stvarnih rezultata',
    'Feed / Shopping setup gde je relevantno',
  ],
  ads_v2_channels_detail:
    'Search, Shopping, remarketing i ostali formati dolaze kao sekundarni izbor kanala \u2014 ne kao zid ponude.',
  ads_v2_dev_eyebrow: 'Development + Growth',
  ads_v2_dev_title: 'Ne posmatramo Ads izolovano.',
  ads_v2_dev_lead:
    'Ako kampanja dovodi saobra\u0107aj, ali landing ne radi, checkout pravi problem, tracking je pogre\u0161an ili je feed lo\u0161 \u2014 re\u0161avamo uzrok, ne samo oglas.',
  ads_v2_dev_note: 'Ista Weboro prednost: growth povezan sa proizvodom i developmentom.',
  ads_v2_cta_title: 'Imate kampanje, ali ne znate dovoljno dobro \u0161ta stvarno donosi rezultat?',
  ads_v2_cta_desc: 'Pogleda\u0107emo tracking, landing i strukturu kampanja \u2014 pa predlo\u017eiti slede\u0107i korak.',

  seo_v2_eyebrow: 'SEO',
  seo_v2_title: 'SEO koji po\u010dinje od dobrog sajta, ne od liste klju\u010dnih re\u010di.',
  seo_v2_lead:
    'Povezujemo tehni\u010dku osnovu, strukturu sajta, sadr\u017eaj i search intent kako bi organski kanal mogao dugoro\u010dno da raste.',
  seo_v2_visual_aria: 'Struktura sajta i search intent',
  seo_v2_viz_site: 'Struktura sajta',
  seo_v2_viz_intent: 'Search intent',
  seo_v2_approach_title: 'Organska vidljivost kao poslovni kanal',
  seo_v2_approach_text:
    'Organska vidljivost po\u010dinje tehni\u010dki zdravim sajtom, jasnom strukturom i sadr\u017eajem koji odgovara onome \u0161to korisnici stvarno tra\u017ee. Cilj nije \u201evi\u0161e keyworda\u201c \u2014 ve\u0107 da relevantni korisnici prona\u0111u proizvod, uslugu, kategoriju ili odgovor.',
  seo_v2_value_note:
    'Bez obe\u0107anja prve pozicije, garantovanog ranga ili fiksnog rasta saobra\u0107aja. Gradimo kanal koji manje zavisi samo od pla\u0107enog saobra\u0107aja.',
  seo_v2_layers_title: 'Tri nivoa rada',
  seo_v2_layers_lead: 'Bez velikog SEO checklist-a \u2014 fokus na ono \u0161to stvarno pokre\u0107e vidljivost.',
  seo_v2_layers: [
    {
      title: 'Technical foundation',
      desc: 'Crawl i indexation, performance, struktura i metadata gde je relevantno \u2014 da search engine mo\u017ee da razume i u\u010dita sajt.',
    },
    {
      title: 'Information & content',
      desc: 'Arhitektura kategorija, usluga i sadr\u017eaja tako da ponuda bude jasna i korisniku i search-u.',
    },
    {
      title: 'Search intent',
      desc: '\u0160ta korisnik zapravo poku\u0161ava da prona\u0111e \u2014 i kako stranica odgovara na tu nameru.',
    },
  ],
  seo_v2_dev_eyebrow: 'Development + SEO',
  seo_v2_dev_title: 'Ako tehnika sajta ko\u010di SEO, menjamo i platformu.',
  seo_v2_dev_lead:
    'SEO nije odvojen od developmenta. Kada struktura, performance ili \u0161abloni ko\u010de organsku vidljivost, mo\u017eemo da interveni\u0161emo na samom proizvodu.',
  seo_v2_dev_note: 'To povezuje eCommerce, development i SEO u jedan tok.',
  seo_v2_cta_title: '\u017delite stabilniju organsku vidljivost i bolju strukturu sajta?',
  seo_v2_cta_desc: 'Pogleda\u0107emo tehni\u010dku osnovu, arhitekturu i sadr\u017eaj \u2014 bez checklist prodaje.',

  an_v2_eyebrow: 'Analytics / GA4 / GTM',
  an_v2_title: 'Merenje kojem mo\u017eete da verujete.',
  an_v2_lead:
    'Postavljamo analytics i tracking tako da mo\u017eete da razumete odakle korisnici dolaze, \u0161ta rade i koje akcije imaju stvarnu poslovnu vrednost.',
  an_v2_visual_aria: 'Tok merenja: izvor, putanja, doga\u0111aj i odluka',
  an_v2_node_source: 'Izvor',
  an_v2_node_journey: 'Putanja',
  an_v2_node_event: 'Akcija',
  an_v2_node_decide: 'Odluka',
  an_v2_flow_line1: 'plan \u2192 implementacija \u2192 test \u2192 validacija \u2192 reporting',
  an_v2_flow_line2: 'Ne zavr\u0161avamo na \u201etag je dodat\u201c.',
  an_v2_approach_title: 'Podaci imaju vrednost samo ako znamo za\u0161to merimo',
  an_v2_approach_text:
    'Analytics je veza izme\u0111u developmenta i growth-a. Prvo defini\u0161emo \u0161ta merimo i za\u0161to \u2014 pa tek onda GA4/GTM implementaciju.',
  an_v2_first_questions: [
    '\u0161ta predstavlja conversion za va\u0161 model',
    'koje akcije treba pratiti',
    'da li tracking zaista radi',
    'da li podaci odgovaraju realnom korisni\u010dkom putu',
  ],
  an_v2_measure_title: '\u0160ta mo\u017eemo da merimo',
  an_v2_measure_lead: 'Primeri, ne univerzalna lista \u2014 tracking zavisi od poslovnog modela.',
  an_v2_measure_items: [
    'forme / leadovi',
    'pozivi i kontakt akcije',
    'kupovine i checkout doga\u0111aji',
    'atribucija kampanja',
    'va\u017ene interakcije na proizvodu',
  ],
  an_v2_measure_note: 'Ne prodajemo eventove i tagove kao krajnji proizvod.',
  an_v2_process_title: 'Implementacija + validacija',
  an_v2_process_steps: [
    'Plan measurementa prema poslovnom cilju',
    'Implementacija (GA4 / GTM gde treba)',
    'Test u realnom toku',
    'Validacija da podaci odgovaraju stvarnosti',
    'Reporting / upotreba za odluke',
  ],
  an_v2_impl_note: 'GA4 i GTM su alati. Vrednost je merenje kojem mo\u017eete da verujete.',
  an_v2_report_title: 'Reporting u slu\u017ebi odluke',
  an_v2_report_text:
    'Dashboard je samo na\u010din prikaza. Glavna vrednost su podaci iz kojih mo\u017ee da se donese odluka \u2014 ne izve\u0161taj radi izve\u0161taja.',
  an_v2_dev_eyebrow: 'Development + Analytics',
  an_v2_dev_title: 'Kada podaci poka\u017eu problem, mo\u017eemo menjati i proizvod.',
  an_v2_dev_lead:
    'Ako tracking otkrije da landing, checkout ili UX gube korisnike, ne ostajemo na izve\u0161taju \u2014 mo\u017eemo da interveni\u0161emo na platformi.',
  an_v2_dev_note: 'Zato je Analytics najja\u010da veza izme\u0111u growth-a i developmenta u Weboro ponudi.',
  an_v2_cta_title: 'Ne verujete trenutnim podacima ili ne merite klju\u010dne korisni\u010dke akcije?',
  an_v2_cta_desc: 'Pogleda\u0107emo \u0161ta se meri, da li radi i kako se povezuje sa poslovnim ciljem.',
}

const en = {
  ads_v2_eyebrow: 'Google Ads',
  ads_v2_title: 'Google Ads aimed at business results — not just clicks.',
  ads_v2_lead:
    'We plan campaigns together with tracking, landing experience and data that show what actually drives leads or sales.',
  ads_v2_visual_aria: 'Campaign flow: ad, landing, action and measurement',
  ads_v2_node_ad: 'Ad',
  ads_v2_node_landing: 'Landing / shop',
  ads_v2_node_action: 'Action',
  ads_v2_node_meas: 'Measure',
  ads_v2_loop_note: 'Spend matters when it connects to a result.',
  ads_v2_channels_note: 'Search · Shopping · remarketing — as needed',
  ads_v2_approach_title: 'Paid advertising as part of a system',
  ads_v2_approach_text:
    'The campaign is not the end product. We look at the chain: campaign → landing / webshop → user action → measurement → optimization. The goal is spend tied to a lead or sale — not the click as a success metric.',
  ads_v2_out_title: 'What the client gets',
  ads_v2_out_lead: 'Campaign outcomes aligned with the business goal.',
  ads_v2_outcomes: [
    'A clearer campaign goal',
    'Proper measurement of important actions',
    'Campaign structure by offer and audience',
    'Connection to the landing page or webshop',
    'Optimization based on real results',
    'Feed / Shopping setup where relevant',
  ],
  ads_v2_channels_detail:
    'Search, Shopping, remarketing and other formats come as a secondary channel choice — not as a wall of offerings.',
  ads_v2_dev_eyebrow: 'Development + Growth',
  ads_v2_dev_title: 'We do not treat Ads in isolation.',
  ads_v2_dev_lead:
    'If a campaign brings traffic but the landing fails, checkout breaks, tracking is wrong or the feed is poor — we fix the cause, not just the ad.',
  ads_v2_dev_note: 'Same Weboro advantage: growth connected to the product and development.',
  ads_v2_cta_title: 'Have campaigns, but do not know clearly enough what actually drives results?',
  ads_v2_cta_desc: 'We will look at tracking, landing and campaign structure — then propose the next step.',

  seo_v2_eyebrow: 'SEO',
  seo_v2_title: 'SEO that starts from a good site — not a keyword list.',
  seo_v2_lead:
    'We connect technical foundations, site structure, content and search intent so the organic channel can grow over time.',
  seo_v2_visual_aria: 'Site structure and search intent',
  seo_v2_viz_site: 'Site structure',
  seo_v2_viz_intent: 'Search intent',
  seo_v2_approach_title: 'Organic visibility as a business channel',
  seo_v2_approach_text:
    'Organic visibility starts with a technically healthy site, clear structure and content that matches what users actually look for. The goal is not “more keywords” — it is that relevant users find a product, service, category or answer.',
  seo_v2_value_note:
    'No promises of first position, guaranteed ranking or fixed traffic growth. We build a channel that depends less on paid traffic alone.',
  seo_v2_layers_title: 'Three layers of work',
  seo_v2_layers_lead: 'No giant SEO checklist — focus on what actually drives visibility.',
  seo_v2_layers: [
    {
      title: 'Technical foundation',
      desc: 'Crawl and indexation, performance, structure and metadata where relevant — so search engines can understand and load the site.',
    },
    {
      title: 'Information & content',
      desc: 'Architecture of categories, services and content so the offer is clear to both users and search.',
    },
    {
      title: 'Search intent',
      desc: 'What the user is actually trying to find — and how the page answers that intent.',
    },
  ],
  seo_v2_dev_eyebrow: 'Development + SEO',
  seo_v2_dev_title: 'If site tech blocks SEO, we change the platform too.',
  seo_v2_dev_lead:
    'SEO is not separate from development. When structure, performance or templates block organic visibility, we can intervene on the product itself.',
  seo_v2_dev_note: 'That connects eCommerce, development and SEO in one flow.',
  seo_v2_cta_title: 'Want more stable organic visibility and better site structure?',
  seo_v2_cta_desc: 'We will look at the technical base, architecture and content — without checklist selling.',

  an_v2_eyebrow: 'Analytics / GA4 / GTM',
  an_v2_title: 'Measurement you can trust.',
  an_v2_lead:
    'We set up analytics and tracking so you can understand where users come from, what they do, and which actions have real business value.',
  an_v2_visual_aria: 'Measurement flow: source, journey, event and decision',
  an_v2_node_source: 'Source',
  an_v2_node_journey: 'Journey',
  an_v2_node_event: 'Action',
  an_v2_node_decide: 'Decide',
  an_v2_flow_line1: 'plan → implementation → test → validation → reporting',
  an_v2_flow_line2: 'We do not stop at “the tag was added”.',
  an_v2_approach_title: 'Data only has value if we know why we measure',
  an_v2_approach_text:
    'Analytics is the link between development and growth. First we define what we measure and why — then GA4/GTM implementation.',
  an_v2_first_questions: [
    'what counts as a conversion for your model',
    'which actions to track',
    'whether tracking actually works',
    'whether the data matches the real user journey',
  ],
  an_v2_measure_title: 'What we can measure',
  an_v2_measure_lead: 'Examples, not a universal list — tracking depends on the business model.',
  an_v2_measure_items: [
    'forms / leads',
    'calls and contact actions',
    'purchases and checkout events',
    'campaign attribution',
    'important product interactions',
  ],
  an_v2_measure_note: 'We do not sell events and tags as the end product.',
  an_v2_process_title: 'Implementation + validation',
  an_v2_process_steps: [
    'Measurement plan against the business goal',
    'Implementation (GA4 / GTM where needed)',
    'Test in the real flow',
    'Validation that data matches reality',
    'Reporting / use for decisions',
  ],
  an_v2_impl_note: 'GA4 and GTM are tools. The value is measurement you can trust.',
  an_v2_report_title: 'Reporting in service of decisions',
  an_v2_report_text:
    'A dashboard is only a display. The main value is data you can decide from — not a report for its own sake.',
  an_v2_dev_eyebrow: 'Development + Analytics',
  an_v2_dev_title: 'When data shows a problem, we can change the product too.',
  an_v2_dev_lead:
    'If tracking reveals that landing, checkout or UX lose users, we do not stop at the report — we can intervene on the platform.',
  an_v2_dev_note: 'That is why Analytics is the strongest link between growth and development in the Weboro offer.',
  an_v2_cta_title: 'Do not trust current data — or are you not measuring key user actions?',
  an_v2_cta_desc: 'We will look at what is measured, whether it works, and how it connects to the business goal.',
}

function merge(path, patch) {
  const data = JSON.parse(fs.readFileSync(path, 'utf8'))
  Object.assign(data, patch)
  fs.writeFileSync(path, JSON.stringify(data, null, 2) + '\n')
  console.log('OK', path)
}

merge('src/locales/sr.json', sr)
merge('src/locales/en.json', en)
