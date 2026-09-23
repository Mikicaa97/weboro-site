import fs from 'fs'

const sr = {
  about_v2_eyebrow: 'O nama',
  about_v2_title: 'Tehnologiju posmatramo kao alat za re\u0161avanje poslovnih problema.',
  about_v2_lead:
    'Weboro razvija web platforme, eCommerce sisteme i custom digitalne proizvode \u2014 od analize i arhitekture do razvoja, integracija, lansiranja i daljeg unapre\u0111enja.',
  about_v2_visual_aria: 'Tok rada: problem, strategija, izrada i unapre\u0111enje',
  about_v2_node_problem: 'Problem',
  about_v2_node_strategy: 'Strategija',
  about_v2_node_build: 'Build',
  about_v2_node_improve: 'Improve',
  about_v2_pill_business: 'Business',
  about_v2_pill_product: 'Product',
  about_v2_pill_eng: 'Engineering',

  about_v2_story_title: 'Ko smo',
  about_v2_story_p1:
    'Weboro nije napravljen oko jedne platforme ili jedne vrste projekta. Radimo od klasi\u010dnih web i eCommerce sistema do kompleksnijih custom aplikacija i sopstvenih SaaS proizvoda.',
  about_v2_story_p2:
    'Ono \u0161to povezuje projekte je isti pristup: prvo razumeti poslovni problem, pa tek onda odlu\u010diti \u0161ta treba napraviti.',

  about_v2_think_title: 'Kako razmi\u0161ljamo',
  about_v2_think_lead: 'Tri principa koja odre\u0111uju kako ulazimo u projekat.',
  about_v2_principles: [
    {
      title: 'Problem pre tehnologije',
      desc: 'Ne biramo platformu dok ne razumemo \u0161ta sistem treba da postigne.',
    },
    {
      title: 'Prakti\u010dna re\u0161enja',
      desc: 'Ne uvodimo kompleksnost koju projekat ne zahteva i ne predla\u017eemo rebuild ako postoje\u0107e mo\u017ee kvalitetno da se unapredi.',
    },
    {
      title: 'Dugoro\u010dan razvoj',
      desc: 'Sistem treba da mo\u017ee da se odr\u017eava i razvija nakon prvog lansiranja.',
    },
  ],

  about_v2_do_title: '\u0160ta radimo',
  about_v2_do_lead: '\u0160irina rada, bez ponavljanja cele ponude usluga.',
  about_v2_services: [
    {
      title: 'Web & eCommerce',
      desc: 'Sajtovi, shopovi i unapre\u0111enje postoje\u0107ih platformi.',
      to: '/usluge/ecommerce',
    },
    {
      title: 'Custom Development',
      desc: 'SaaS, aplikacije i sistemi kada gotov alat nije dovoljan.',
      to: '/usluge/custom-web',
    },
    {
      title: 'Growth & Analytics',
      desc: 'Akvizicija, SEO i merenje povezani sa poslovnim ciljem.',
      to: '/usluge/growth',
    },
  ],

  about_v2_product_eyebrow: 'Sopstveni proizvod',
  about_v2_product_title: 'Gradimo i sopstveni proizvod.',
  about_v2_product_text:
    'Razvoj sopstvenog SaaS proizvoda zna\u010di da iste odluke koje donosimo za klijente moramo da donosimo i za sebe \u2014 UX, arhitekturu, billing, sigurnost, infrastrukturu, korisni\u010dke tokove i dugoro\u010dni razvoj.',
  about_v2_product_note: 'To daje realno product iskustvo, ne samo teorijsko savetovanje.',
  about_v2_product_cta: 'Pogledajte OutreachGenie',
  about_v2_product_visual_aria: 'OutreachGenie kao sopstveni SaaS proizvod',
  about_v2_product_viz_label: 'SaaS u produkciji',

  about_v2_who_title: 'Ko stoji iza Weboro-a',
  about_v2_who_lead: 'Jasno ko vodi rad \u2014 bez agency glume oko velikog tima.',
  about_v2_founder_name: 'Mihailo Vlajkovi\u0107',
  about_v2_founder_role: 'Osniva\u010d',
  about_v2_founder_bio:
    'Radi na spoju razvoja proizvoda, web i eCommerce sistema i poslovne primene tehnologije. Uklju\u010den je od analize i planiranja do razvoja i daljeg vo\u0111enja projekta.',
  about_v2_team_note:
    'Weboro radi kroz fokusiran development rad i saradnju na projektu \u2014 bez pretvaranja da smo veliki multidisciplinary team.',

  about_v2_entry_title: 'Kako mo\u017eemo da u\u0111emo u projekat',
  about_v2_entry_lead: 'Ne morate da dolazite samo sa novim projektom od nule.',
  about_v2_entry_points: [
    'analiza postoje\u0107eg sistema',
    'nastavak ili preuzimanje postoje\u0107eg razvoja',
    'novi projekat od po\u010detka',
    'integracije i pro\u0161irenje',
    'dugoro\u010dno odr\u017eavanje i razvoj',
  ],

  about_v2_cta_title: 'Imate projekat ili postoje\u0107i sistem o kome \u017eelite da razgovaramo?',
  about_v2_cta_desc: 'Ne morate unapred da znate koju tehnologiju ili platformu treba koristiti.',
}

const en = {
  about_v2_eyebrow: 'About',
  about_v2_title: 'We treat technology as a tool for solving business problems.',
  about_v2_lead:
    'Weboro builds web platforms, eCommerce systems and custom digital products — from analysis and architecture to development, integrations, launch and ongoing improvement.',
  about_v2_visual_aria: 'Work flow: problem, strategy, build and improve',
  about_v2_node_problem: 'Problem',
  about_v2_node_strategy: 'Strategy',
  about_v2_node_build: 'Build',
  about_v2_node_improve: 'Improve',
  about_v2_pill_business: 'Business',
  about_v2_pill_product: 'Product',
  about_v2_pill_eng: 'Engineering',

  about_v2_story_title: 'Who we are',
  about_v2_story_p1:
    'Weboro was not built around one platform or one type of project. We work from classic web and eCommerce systems to more complex custom applications and our own SaaS products.',
  about_v2_story_p2:
    'What connects the projects is the same approach: understand the business problem first, then decide what to build.',

  about_v2_think_title: 'How we think',
  about_v2_think_lead: 'Three principles that shape how we enter a project.',
  about_v2_principles: [
    {
      title: 'Problem before technology',
      desc: 'We do not choose a platform until we understand what the system needs to achieve.',
    },
    {
      title: 'Practical solutions',
      desc: 'We do not introduce complexity the project does not need, and we do not propose a rebuild if what exists can be improved well.',
    },
    {
      title: 'Long-term development',
      desc: 'A system should be maintainable and developable after the first launch.',
    },
  ],

  about_v2_do_title: 'What we do',
  about_v2_do_lead: 'Breadth of work — without repeating the full service catalog.',
  about_v2_services: [
    {
      title: 'Web & eCommerce',
      desc: 'Sites, shops and improvement of existing platforms.',
      to: '/usluge/ecommerce',
    },
    {
      title: 'Custom Development',
      desc: 'SaaS, apps and systems when an off-the-shelf tool is not enough.',
      to: '/usluge/custom-web',
    },
    {
      title: 'Growth & Analytics',
      desc: 'Acquisition, SEO and measurement tied to a business goal.',
      to: '/usluge/growth',
    },
  ],

  about_v2_product_eyebrow: 'Own product',
  about_v2_product_title: 'We also build our own product.',
  about_v2_product_text:
    'Building our own SaaS product means the same decisions we make for clients we also make for ourselves — UX, architecture, billing, security, infrastructure, user flows and long-term development.',
  about_v2_product_note: 'That gives real product experience, not just theoretical advice.',
  about_v2_product_cta: 'See OutreachGenie',
  about_v2_product_visual_aria: 'OutreachGenie as our own SaaS product',
  about_v2_product_viz_label: 'SaaS in production',

  about_v2_who_title: 'Who is behind Weboro',
  about_v2_who_lead: 'Clear who leads the work — without agency theatre about a large team.',
  about_v2_founder_name: 'Mihailo Vlajković',
  about_v2_founder_role: 'Founder',
  about_v2_founder_bio:
    'Works at the intersection of product development, web and eCommerce systems, and applying technology to business. Involved from analysis and planning through development and ongoing project leadership.',
  about_v2_team_note:
    'Weboro works through focused development work and project collaboration — without pretending to be a large multidisciplinary team.',

  about_v2_entry_title: 'How we can enter a project',
  about_v2_entry_lead: 'You do not have to arrive only with a brand-new build from scratch.',
  about_v2_entry_points: [
    'analysis of an existing system',
    'continuing or taking over existing development',
    'a new project from the start',
    'integrations and extension',
    'long-term maintenance and development',
  ],

  about_v2_cta_title: 'Have a project — or an existing system — you want to discuss?',
  about_v2_cta_desc: 'You do not need to know in advance which technology or platform to use.',
}

function merge(path, patch) {
  const data = JSON.parse(fs.readFileSync(path, 'utf8'))
  Object.assign(data, patch)
  fs.writeFileSync(path, JSON.stringify(data, null, 2) + '\n')
  console.log('OK', path)
}

merge('src/locales/sr.json', sr)
merge('src/locales/en.json', en)
