import fs from 'fs'

const webSr = {
  service_web_hub_intro:
    'Prvo gledamo sta vec imate — katalog, porudzbine, integracije, tim i gde sistem usporava — pa tek onda biramo WooCommerce, Magento ili custom pristup.',
  service_web_hub_cta_title: 'Imate webshop koji vise ne radi kako treba — ili planirate novi?',
  service_web_hub_cta_subtitle:
    'Opisite nam postojece stanje, katalog i poslovni proces. Pogledacemo sta ima smisla zadrzati, sta unaprediti i da li uopste postoji razlog za promenu platforme.',
  web_cta_talk: 'Posaljite nam projekat',
  web_hero_visual_aria: 'Commerce sistem: kupac, webshop, porudzbine i povezani sistemi',
  web_hero_flow_label: 'COMMERCE SYSTEM',
  web_hero_node_customer: 'Kupac',
  web_hero_node_shop: 'Webshop / Katalog',
  web_hero_node_orders: 'Porudzbine / Customer data',
  web_hero_node_supplier: 'Dobavljac',
  web_hero_node_pay: 'Placanje',
  web_hero_node_ship: 'Dostava',
  web_look_at: [
    'sta vec imate',
    'koliko je katalog slozen',
    'kako rade porudzbine',
    'koje integracije postoje',
    'ko administrira sistem',
    'sta vas trenutno usporava',
    'koliko sistem treba da raste',
  ],
  web_existing_eyebrow: 'Postojeci sistemi',
  web_existing_title: 'Postojeci sistem ne mora da se menja ako i dalje moze da podrzava poslovanje.',
  web_existing_lead:
    'Ako postojeci WooCommerce, Magento ili drugi sistem moze da se unapredi bez nepotrebnog rebuild-a, to je cesto bolji prvi korak.',
  web_existing_items: [
    'popraviti UX i performanse',
    'dodati ili srediti integracije',
    'urediti katalog i procese',
    'prosirti funkcionalnosti',
  ],
  web_existing_note:
    'Tek ako postojeci sistem stvarno postane ogranicenje, razmatramo migraciju ili novi sistem.',
  web_scenarios_eyebrow: 'Situacije',
  web_scenarios_title: 'Kada nam se kompanije najcesce javljaju',
  web_scenarios_lead: 'Konkretni poslovni problemi — ne lista tehnologija.',
  web_scenarios: [
    {
      title: 'Postojeci webshop radi, ali je postao ogranicenje',
      desc: 'UX, brzina, odrzavanje, checkout ili administracija otezavaju dalji rast.',
    },
    {
      title: 'Katalog je postao prevelik za rucno odrzavanje',
      desc: 'Veliki broj proizvoda, dobavljaci, cene, stanje i podaci traze bolji sistem.',
    },
    {
      title: 'Sistemi nisu povezani',
      desc: 'Webshop, ERP, CRM, dobavljaci, placanje i dostava zahtevaju rucno prebacivanje podataka.',
    },
    {
      title: 'B2B proces ne stane u klasican shop',
      desc: 'Razliciti kupci, cene, pravila, katalog i narucivanje traze drugaciji pristup.',
    },
    {
      title: 'Postojeca platforma je prerasla potrebe',
      desc: 'Tada procenjujemo da li ima smisla migracija na Magento ili custom resenje.',
    },
    {
      title: 'Novi eCommerce projekat',
      desc: 'Arhitekturu, platformu i integracije biramo od pocetka prema poslovanju.',
    },
  ],
  web_platforms_lead:
    'Nijedna opcija nije bolja uopste. Biramo onu koja ima smisla za konkretan slucaj — bez rangiranja.',
  web_plat_wp_desc:
    'Za projekte kojima ne treba nepotrebna kompleksnost — fleksibilnost, jednostavnija administracija i kontrolisan razvoj.',
  web_plat_mg_desc: 'Za kompleksniji commerce, velike kataloge, B2B i ozbiljne integracije.',
  web_plat_custom_desc: 'Kada standardna platforma tera poslovanje u neprirodne workarounde.',
  web_path_eyebrow: 'Kompleksan commerce',
  web_path_title: 'Veliki katalog, ERP, B2B ili integracije',
  web_path_lead: 'Za zahtevnije projekte ne krecemo od platforme — krecemo od procesa.',
  web_path_aria: 'Put od analize do izbora pristupa',
  web_path_steps: [
    'Veliki katalog / ERP / B2B',
    'Analiza procesa',
    'Unapredjenje postojeceg',
    'Magento ili Custom',
  ],
  web_work_lead: 'Realni dokazi kataloga, lead tokova i kompleksnijeg commerce puta.',
  web_work_magento_note_title: 'Kompleksniji commerce projekti',
  web_work_magento_note:
    'Za velike kataloge, zahtevnije integracije, B2B i sisteme koji traze vecu kontrolu nad commerce arhitekturom.',
  web_magento_path_title: 'Magento / Adobe Commerce',
  web_magento_path_cta: 'Pogledajte Magento ekspertizu',
}

// Fix: write proper Serbian with Unicode escapes to avoid shell encoding issues
const fixSr = {
  service_web_hub_intro:
    'Prvo gledamo \u0161ta ve\u0107 imate \u2014 katalog, porud\u017ebine, integracije, tim i gde sistem usporava \u2014 pa tek onda biramo WooCommerce, Magento ili custom pristup.',
  service_web_hub_cta_title:
    'Imate webshop koji vi\u0161e ne radi kako treba \u2014 ili planirate novi?',
  service_web_hub_cta_subtitle:
    'Opi\u0161ite nam postoje\u0107e stanje, katalog i poslovni proces. Pogleda\u0107emo \u0161ta ima smisla zadr\u017eati, \u0161ta unaprediti i da li uop\u0161te postoji razlog za promenu platforme.',
  web_cta_talk: 'Po\u0161aljite nam projekat',
  web_hero_visual_aria:
    'Commerce sistem: kupac, webshop, porud\u017ebine i povezani sistemi',
  web_hero_node_orders: 'Porud\u017ebine / Customer data',
  web_hero_node_supplier: 'Dobavlja\u010d',
  web_hero_node_pay: 'Pla\u0107anje',
  web_look_at: [
    '\u0161ta ve\u0107 imate',
    'koliko je katalog slo\u017een',
    'kako rade porud\u017ebine',
    'koje integracije postoje',
    'ko administrira sistem',
    '\u0161ta vas trenutno usporava',
    'koliko sistem treba da raste',
  ],
  web_existing_eyebrow: 'Postoje\u0107i sistemi',
  web_existing_title:
    'Postoje\u0107i sistem ne mora da se menja ako i dalje mo\u017ee da podr\u017ei poslovanje.',
  web_existing_lead:
    'Ako postoje\u0107i WooCommerce, Magento ili drugi sistem mo\u017ee da se unapredi bez nepotrebnog rebuild-a, to je \u010desto bolji prvi korak.',
  web_existing_items: [
    'popraviti UX i performanse',
    'dodati ili srediti integracije',
    'urediti katalog i procese',
    'pro\u0161iriti funkcionalnosti',
  ],
  web_existing_note:
    'Tek ako postoje\u0107i sistem stvarno postane ograni\u010denje, razmatramo migraciju ili novi sistem.',
  web_scenarios_title: 'Kada nam se kompanije naj\u010de\u0161\u0107e javljaju',
  web_scenarios: [
    {
      title: 'Postoje\u0107i webshop radi, ali je postao ograni\u010denje',
      desc: 'UX, brzina, odr\u017eavanje, checkout ili administracija ote\u017eavaju dalji rast.',
    },
    {
      title: 'Katalog je postao prevelik za ru\u010dno odr\u017eavanje',
      desc: 'Veliki broj proizvoda, dobavlja\u010di, cene, stanje i podaci tra\u017ee bolji sistem.',
    },
    {
      title: 'Sistemi nisu povezani',
      desc: 'Webshop, ERP, CRM, dobavlja\u010di, pla\u0107anje i dostava zahtevaju ru\u010dno prebacivanje podataka.',
    },
    {
      title: 'B2B proces ne stane u klasi\u010dan shop',
      desc: 'Razli\u010diti kupci, cene, pravila, katalog i naru\u010divanje tra\u017ee druga\u010diji pristup.',
    },
    {
      title: 'Postoje\u0107a platforma je prerasla potrebe',
      desc: 'Tada procenjujemo da li ima smisla migracija na Magento ili custom re\u0161enje.',
    },
    {
      title: 'Novi eCommerce projekat',
      desc: 'Arhitekturu, platformu i integracije biramo od po\u010detka prema poslovanju.',
    },
  ],
  web_platforms_lead:
    'Nijedna opcija nije bolja \u201euop\u0161te\u201c. Biramo onu koja ima smisla za konkretan slu\u010daj \u2014 bez rangiranja.',
  web_path_lead:
    'Za zahtevnije projekte ne kre\u0107emo od platforme \u2014 kre\u0107emo od procesa.',
  web_path_steps: [
    'Veliki katalog / ERP / B2B',
    'Analiza procesa',
    'Unapre\u0111enje postoje\u0107eg',
    'Magento ili Custom',
  ],
  web_work_magento_note:
    'Za velike kataloge, zahtevnije integracije, B2B i sisteme koji tra\u017ee ve\u0107u kontrolu nad commerce arhitekturom.',
  web_magento_path_cta: 'Pogledajte Magento ekspertizu',
}

Object.assign(webSr, fixSr)

const webEn = {
  service_web_hub_intro:
    'We first look at what you already have — catalog, orders, integrations, team and where the system slows you down — and only then choose WooCommerce, Magento or a custom approach.',
  service_web_hub_cta_title: 'Have a webshop that no longer works well — or planning a new one?',
  service_web_hub_cta_subtitle:
    'Tell us the current state, catalog and business process. We will look at what to keep, what to improve, and whether there is any real reason to change platforms.',
  web_cta_talk: 'Send us your project',
  web_hero_visual_aria: 'Commerce system: customer, webshop, orders and connected systems',
  web_hero_flow_label: 'COMMERCE SYSTEM',
  web_hero_node_customer: 'Customer',
  web_hero_node_shop: 'Webshop / Catalog',
  web_hero_node_orders: 'Orders / Customer data',
  web_hero_node_supplier: 'Supplier',
  web_hero_node_pay: 'Payments',
  web_hero_node_ship: 'Shipping',
  web_look_at: [
    'what you already have',
    'how complex the catalog is',
    'how orders work',
    'which integrations exist',
    'who administers the system',
    'what is slowing you down',
    'how far the system needs to grow',
  ],
  web_existing_eyebrow: 'Existing systems',
  web_existing_title: 'An existing system does not have to change if it can still support the business.',
  web_existing_lead:
    'If your WooCommerce, Magento or other system can be improved without an unnecessary rebuild, that is often the better first step.',
  web_existing_items: [
    'fix UX and performance',
    'add or clean up integrations',
    'organize catalog and processes',
    'extend functionality',
  ],
  web_existing_note:
    'Only if the existing system truly becomes a constraint do we consider migration or a new build.',
  web_scenarios_eyebrow: 'Situations',
  web_scenarios_title: 'When companies usually contact us',
  web_scenarios_lead: 'Concrete business problems — not a technology checklist.',
  web_scenarios: [
    {
      title: 'The existing webshop works, but has become a constraint',
      desc: 'UX, speed, maintenance, checkout or administration make further growth harder.',
    },
    {
      title: 'The catalog is too large for manual upkeep',
      desc: 'Product volume, suppliers, prices, stock and data need a stronger system.',
    },
    {
      title: 'Systems are not connected',
      desc: 'Webshop, ERP, CRM, suppliers, payments and shipping require manual data transfer.',
    },
    {
      title: 'B2B process does not fit a classic shop',
      desc: 'Different buyers, prices, rules, catalogs and ordering need another approach.',
    },
    {
      title: 'The current platform has outgrown needs',
      desc: 'Then we assess whether Magento or a custom solution makes sense.',
    },
    {
      title: 'A new eCommerce project',
      desc: 'Architecture, platform and integrations are chosen from day one around the business.',
    },
  ],
  web_platforms_lead:
    'No option is better “in general”. We choose what fits the case — without ranking.',
  web_plat_wp_desc:
    'For projects that do not need unnecessary complexity — flexibility, simpler admin and controlled delivery.',
  web_plat_mg_desc: 'For more complex commerce, large catalogs, B2B and serious integrations.',
  web_plat_custom_desc: 'When a standard platform forces unnatural workarounds.',
  web_path_eyebrow: 'Complex commerce',
  web_path_title: 'Large catalog, ERP, B2B or integrations',
  web_path_lead: 'For demanding projects we do not start from the platform — we start from the process.',
  web_path_aria: 'Path from analysis to approach choice',
  web_path_steps: [
    'Large catalog / ERP / B2B',
    'Process analysis',
    'Improve existing',
    'Magento or Custom',
  ],
  web_work_lead: 'Real proof for catalogs, lead flows and the more complex commerce path.',
  web_work_magento_note_title: 'More complex commerce projects',
  web_work_magento_note:
    'For large catalogs, demanding integrations, B2B and systems that need tighter control over commerce architecture.',
  web_magento_path_title: 'Magento / Adobe Commerce',
  web_magento_path_cta: 'See Magento expertise',
}

const mgServicesSr = [
  {
    tag: 'Migracije',
    title: 'Migracije & upgrade',
    desc: 'Sigurniji prelazak ili upgrade uz \u0161to manji rizik po prodaju, SEO i poslovanje.',
    to: '/usluge/magento/migracije-i-upgrade',
  },
  {
    tag: 'Integracije',
    title: 'Integracije',
    desc: 'Povezivanje Magenta sa ERP-om, CRM-om, pla\u0107anjem i dostavom — tako da podaci i procesi ne prelaze ru\u010dno izme\u0111u alata.',
    to: '/usluge/magento/integracije',
  },
  {
    tag: 'Performanse',
    title: 'Performanse & hosting',
    desc: 'Br\u017ei i stabilniji shop, posebno pod ve\u0107im katalogom i saobra\u0107ajem.',
    to: '/usluge/magento/performance-hosting',
  },
  {
    tag: 'Frontend',
    title: 'Frontend & Hyv\u00e4',
    desc: 'Br\u017ei storefront i jednostavniji korisni\u010dki put bez nepotrebnog frontend tereta.',
    to: '/usluge/magento/frontend-hyva',
  },
  {
    tag: 'Odr\u017eavanje',
    title: 'Odr\u017eavanje & SLA',
    desc: 'Stabilno i planirano odr\u017eavanje sistema koji treba da radi svaki dan.',
    to: '/usluge/magento/odrzavanje-sla',
  },
  {
    tag: 'B2B',
    title: 'B2B re\u0161enja',
    desc: 'Commerce tok prilago\u0111en poslovnim kupcima, cenama, katalogu i pravilima kompanije.',
    to: '/usluge/magento/b2b-resenja',
  },
]

const mgServicesEn = [
  {
    tag: 'Migrations',
    title: 'Migrations & upgrade',
    desc: 'A safer migration or upgrade with less risk to sales, SEO and operations.',
    to: '/usluge/magento/migracije-i-upgrade',
  },
  {
    tag: 'Integrations',
    title: 'Integrations',
    desc: 'Connecting Magento to ERP, CRM, payments and shipping — so data and processes do not move manually between tools.',
    to: '/usluge/magento/integracije',
  },
  {
    tag: 'Performance',
    title: 'Performance & hosting',
    desc: 'A faster, more stable shop — especially under larger catalogs and traffic.',
    to: '/usluge/magento/performance-hosting',
  },
  {
    tag: 'Frontend',
    title: 'Frontend & Hyvä',
    desc: 'A faster storefront and simpler path to purchase without unnecessary frontend weight.',
    to: '/usluge/magento/frontend-hyva',
  },
  {
    tag: 'Maintenance',
    title: 'Maintenance & SLA',
    desc: 'Stable, planned maintenance for a system that has to work every day.',
    to: '/usluge/magento/odrzavanje-sla',
  },
  {
    tag: 'B2B',
    title: 'B2B solutions',
    desc: 'A commerce flow adapted to business buyers, pricing, catalogs and company rules.',
    to: '/usluge/magento/b2b-resenja',
  },
]

const mgTech = [
  { label: 'Commerce platform', items: ['Magento 2.4', 'Adobe Commerce'] },
  { label: 'Performance layer', items: ['Varnish', 'Redis', 'FPC'] },
  { label: 'Search & data', items: ['Elasticsearch', 'MySQL', 'queues'] },
  { label: 'Integrations', items: ['REST', 'GraphQL', 'ERP/CRM APIs'] },
  { label: 'Frontend', items: ['Hyvä', 'Luma', 'headless options'] },
]

const subSr = {
  mg_hub_services: mgServicesSr,
  mg_hub_services_subtitle:
    '\u0160ta klijent dobija — detalji i tehni\u010dka dubina ostaju na podstranicama.',
  mg_hub_tech_title: 'Tehni\u010dka dubina kad ima smisla',
  mg_hub_tech_subtitle: 'Sekundarni dokaz platforme — ne glavni sales argument.',
  mg_hub_tech_groups: mgTech,
  mg_hub_kpis: [
    'Novi Magento sistemi',
    'Preuzimanje postoje\u0107ih',
    'Integracije i odr\u017eavanje',
    'B2B i kompleksan katalog',
  ],
  mg_perf_title:
    'Magento koji ostaje brz i stabilan kad katalog i saobra\u0107aj porastu',
  mg_perf_lead:
    'Cilj nije stack radi stack-a. Cilj je brzina koju kupac ose\u0107a, pouzdan checkout i manje problema tokom kampanja i pikova — uz tehni\u010dki stabilniju prodavnicu.',
  mg_perf_kpis: [
    'Br\u017ei do\u017eivljaj kupovine',
    'Stabilnost pod optere\u0107enjem',
    'Pouzdniji checkout',
    'Priprema za pikove',
  ],
  mg_int_title: 'Magento povezan sa sistemima koje poslovanje ve\u0107 koristi',
  mg_int_lead:
    'Magento retko radi sam. Integracije postoje da proizvodi, zalihe, cene, kupci, porud\u017ebine i statusi ne zahtevaju ru\u010dni transfer izme\u0111u sistema.',
  mg_int_kpis: [
    'Manje ru\u010dnog prepisivanja',
    'Sinhronizovani podaci',
    'Jasni tokovi porud\u017ebina',
    'Odr\u017eive integracije',
  ],
  mg_mig_title: 'Migracije i upgrade sa kontinuitetom prodaje u fokusu',
  mg_mig_lead:
    'Migracija nije tehni\u010dko preseljenje radi verzije. Cilj je kontinuitet prodaje, o\u010duvanje va\u017enih podataka, SEO continuity, kontrolisan prelaz i mogu\u0107nost rollback-a gde je potrebna.',
  mg_mig_kpis: [
    'Kontinuitet prodaje',
    'SEO continuity',
    'Kontrolisan go-live',
    'Planiran rollback',
  ],
  mg_fe_title: 'Br\u017ei storefront i jasniji put do kupovine',
  mg_fe_lead:
    'Ne prodajemo Hyv\u00e4 radi Hyv\u00e4-a. Prodajemo br\u017ei storefront, bolji UX i manji frontend overhead — Hyv\u00e4 je \u010desto najbolji na\u010din da se to postigne.',
  mg_fe_kpis: [
    'Br\u017ei storefront',
    'Jednostavniji UX',
    'Manji frontend teret',
    'Bolji put do checkout-a',
  ],
  mg_b2b_title: 'B2B commerce koji prati va\u0161 prodajni proces',
  mg_b2b_lead:
    'Magento B2B treba da prati na\u010din na koji ve\u0107 prodajete: razli\u010dite grupe kupaca, cene i uslove, company accounts, naru\u010divanje i katalog prilago\u0111en kompanijama.',
  mg_b2b_kpis: [
    'Company accounts',
    'Cene po kupcima',
    'Katalog po pravilima',
    'Proces naru\u010divanja',
  ],
}

const subEn = {
  mg_hub_services: mgServicesEn,
  mg_hub_services_subtitle:
    'What the client gets — detail and technical depth live on the subpages.',
  mg_hub_tech_title: 'Technical depth when it matters',
  mg_hub_tech_subtitle: 'Secondary platform proof — not the main sales argument.',
  mg_hub_tech_groups: mgTech,
  mg_hub_kpis: [
    'New Magento systems',
    'Taking over existing shops',
    'Integrations & maintenance',
    'B2B and complex catalogs',
  ],
  mg_perf_title: 'Magento that stays fast and stable as catalog and traffic grow',
  mg_perf_lead:
    'The goal is not stack for stack’s sake. It is speed shoppers feel, reliable checkout, and fewer issues during campaigns and peaks — with a technically more stable store.',
  mg_perf_kpis: [
    'Faster shopping experience',
    'Stability under load',
    'More reliable checkout',
    'Peak readiness',
  ],
  mg_int_title: 'Magento connected to the systems your business already uses',
  mg_int_lead:
    'Magento rarely works alone. Integrations exist so products, stock, prices, customers, orders and statuses do not require manual transfer between systems.',
  mg_int_kpis: [
    'Less manual re-entry',
    'Synchronized data',
    'Clear order flows',
    'Sustainable integrations',
  ],
  mg_mig_title: 'Migrations and upgrades with sales continuity first',
  mg_mig_lead:
    'Migration is not a technical move for a version bump. The goal is sales continuity, preserving critical data, SEO continuity, a controlled cutover and rollback options where needed.',
  mg_mig_kpis: ['Sales continuity', 'SEO continuity', 'Controlled go-live', 'Planned rollback'],
  mg_fe_title: 'A faster storefront and clearer path to purchase',
  mg_fe_lead:
    'We do not sell Hyvä for Hyvä’s sake. We sell a faster storefront, better UX and less frontend overhead — Hyvä is often the best way to get there.',
  mg_fe_kpis: [
    'Faster storefront',
    'Simpler UX',
    'Less frontend weight',
    'Clearer path to checkout',
  ],
  mg_b2b_title: 'B2B commerce that follows your sales process',
  mg_b2b_lead:
    'Magento B2B should follow how you already sell: different buyer groups, prices and terms, company accounts, ordering and catalogs adapted to companies.',
  mg_b2b_kpis: [
    'Company accounts',
    'Buyer-specific pricing',
    'Rule-based catalogs',
    'Ordering process',
  ],
}

function merge(path, patch) {
  const data = JSON.parse(fs.readFileSync(path, 'utf8'))
  delete data.web_solve_title
  delete data.web_solve_items
  Object.assign(data, patch)
  fs.writeFileSync(path, JSON.stringify(data, null, 2) + '\n')
  console.log('OK', path)
}

merge('src/locales/sr.json', { ...webSr, ...subSr })
merge('src/locales/en.json', { ...webEn, ...subEn })
