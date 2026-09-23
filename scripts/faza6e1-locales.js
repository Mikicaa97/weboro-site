import fs from 'fs'

const sr = {
  portfolio_v2_title: 'Proizvodi koje gradimo i rad koji isporu\u010dujemo.',
  portfolio_v2_lead:
    'Sopstveni SaaS proizvod, katalog/integracioni rad i lead-generation sajtovi \u2014 bez izmi\u0161ljene case study dubine.',
  portfolio_v2_product_eyebrow: 'Product by Weboro',
  portfolio_v2_og_meta: 'SaaS \u00b7 Customer Engagement',
  portfolio_v2_og_desc: 'Platforma za organizaciju kontakata, kampanja i komunikacije.',
  portfolio_v2_view_case: 'Pogledajte case study',
  portfolio_v2_coming_soon: 'Uskoro dostupno',
  portfolio_v2_client_eyebrow: 'Client Work',
  portfolio_v2_client_title: 'Klijentski rad',
  portfolio_v2_client_lead: 'Live sajtovi \u2014 direktan uvid u isporu\u010deni rad.',
  portfolio_v2_bleki_title: 'Bleki',
  portfolio_v2_bleki_meta: 'Product Catalog / Integration',
  portfolio_v2_bleki_desc:
    'Veliki proizvodni/promotivni katalog, integracija podataka i pojednostavljeno odr\u017eavanje sadr\u017eaja.',
  portfolio_v2_pa_title: 'ProdajAutomobil',
  portfolio_v2_pa_meta: 'Lead Generation',
  portfolio_v2_pa_desc:
    'Lead-generation sajt usmeren na jednostavan kontakt i merenje klju\u010dnih korisni\u010dkih akcija.',
  portfolio_v2_visit_site: 'Posetite sajt \u2197',
  ogc_coming_soon: 'Uskoro dostupno',
  ogc_cta_product_desc:
    'Proizvod jo\u0161 nije javno dostupan. Mo\u017eete pogledati case study ili nam poslati upit o sli\u010dnom sistemu.',
  portfolio_projects_v2: [
    {
      id: 'outreachgenie',
      title: 'OutreachGenie',
      type: 'product',
      typeLabel: 'Product by Weboro',
      category: 'Products by Weboro',
      desc: 'Platforma za organizaciju kontakata, kampanja i komunikacije.',
      tags: ['SaaS', 'Customer Engagement'],
      image: '/OutreachGenieHero.png',
      link: null,
      external: false,
      externalUrl: null,
      detailRoute: '/portfolio/outreachgenie',
    },
    {
      id: 'bleki',
      title: 'Bleki',
      type: 'client',
      typeLabel: 'Client Work',
      category: 'Client Work',
      desc: 'Veliki proizvodni/promotivni katalog, integracija podataka i pojednostavljeno odr\u017eavanje sadr\u017eaja.',
      tags: ['Product Catalog', 'Integration'],
      image: null,
      link: 'https://bleki.co.rs/',
      external: true,
      externalUrl: 'https://bleki.co.rs/',
      detailRoute: null,
    },
    {
      id: 'prodaj-automobil',
      title: 'ProdajAutomobil',
      type: 'client',
      typeLabel: 'Client Work',
      category: 'Client Work',
      desc: 'Lead-generation sajt usmeren na jednostavan kontakt i merenje klju\u010dnih korisni\u010dkih akcija.',
      tags: ['Lead Generation'],
      image: null,
      link: 'https://prodajautomobil.rs/',
      external: true,
      externalUrl: 'https://prodajautomobil.rs/',
      detailRoute: null,
    },
  ],
}

const en = {
  portfolio_v2_title: 'Products we build and work we ship.',
  portfolio_v2_lead:
    'Our own SaaS product, catalog/integration work and lead-generation sites — without invented case-study depth.',
  portfolio_v2_product_eyebrow: 'Product by Weboro',
  portfolio_v2_og_meta: 'SaaS · Customer Engagement',
  portfolio_v2_og_desc: 'A platform for organizing contacts, campaigns and communication.',
  portfolio_v2_view_case: 'View case study',
  portfolio_v2_coming_soon: 'Coming soon',
  portfolio_v2_client_eyebrow: 'Client Work',
  portfolio_v2_client_title: 'Client work',
  portfolio_v2_client_lead: 'Live sites — a direct look at delivered work.',
  portfolio_v2_bleki_title: 'Bleki',
  portfolio_v2_bleki_meta: 'Product Catalog / Integration',
  portfolio_v2_bleki_desc:
    'A large product/promotional catalog, data integration and simplified content maintenance.',
  portfolio_v2_pa_title: 'ProdajAutomobil',
  portfolio_v2_pa_meta: 'Lead Generation',
  portfolio_v2_pa_desc:
    'A lead-generation site focused on simple contact and measuring key user actions.',
  portfolio_v2_visit_site: 'Visit site ↗',
  ogc_coming_soon: 'Coming soon',
  ogc_cta_product_desc:
    'The product is not publicly available yet. You can review the case study or send us an inquiry about a similar system.',
  portfolio_projects_v2: [
    {
      id: 'outreachgenie',
      title: 'OutreachGenie',
      type: 'product',
      typeLabel: 'Product by Weboro',
      category: 'Products by Weboro',
      desc: 'A platform for organizing contacts, campaigns and communication.',
      tags: ['SaaS', 'Customer Engagement'],
      image: '/OutreachGenieHero.png',
      link: null,
      external: false,
      externalUrl: null,
      detailRoute: '/portfolio/outreachgenie',
    },
    {
      id: 'bleki',
      title: 'Bleki',
      type: 'client',
      typeLabel: 'Client Work',
      category: 'Client Work',
      desc: 'A large product/promotional catalog, data integration and simplified content maintenance.',
      tags: ['Product Catalog', 'Integration'],
      image: null,
      link: 'https://bleki.co.rs/',
      external: true,
      externalUrl: 'https://bleki.co.rs/',
      detailRoute: null,
    },
    {
      id: 'prodaj-automobil',
      title: 'ProdajAutomobil',
      type: 'client',
      typeLabel: 'Client Work',
      category: 'Client Work',
      desc: 'A lead-generation site focused on simple contact and measuring key user actions.',
      tags: ['Lead Generation'],
      image: null,
      link: 'https://prodajautomobil.rs/',
      external: true,
      externalUrl: 'https://prodajautomobil.rs/',
      detailRoute: null,
    },
  ],
}

function merge(path, patch) {
  const data = JSON.parse(fs.readFileSync(path, 'utf8'))
  Object.assign(data, patch)
  fs.writeFileSync(path, JSON.stringify(data, null, 2) + '\n')
  console.log('OK', path)
}

merge('src/locales/sr.json', sr)
merge('src/locales/en.json', en)
