import fs from 'fs'

const sr = {
  wp_v2_eyebrow: 'WordPress / WooCommerce',
  wp_v2_title: 'Fleksibilan web i eCommerce bez nepotrebne kompleksnosti.',
  wp_v2_lead:
    'Od poslovnih sajtova i landing stranica do WooCommerce prodavnica i custom funkcionalnosti \u2014 biramo WordPress kada daje dovoljno slobode bez potrebe za te\u017eim sistemom.',
  wp_v2_visual_aria: 'Content i commerce sistem: sadr\u017eaj, shop i administracija',
  wp_v2_viz_content: 'Sadr\u017eaj',
  wp_v2_viz_shop: 'WooCommerce',
  wp_v2_viz_admin: 'Admin',
  wp_v2_when_eyebrow: 'Kada ima smisla',
  wp_v2_when_title: 'Kada je WordPress / WooCommerce pravi izbor',
  wp_v2_when_lead:
    'Ozbiljno re\u0161enje kada je pravilno projektovano \u2014 ne jeftinija zamena za Magento.',
  wp_v2_when_items: [
    'Poslovni sajt ili content-heavy website',
    'Lead-generation i landing pages',
    'WooCommerce sa razumnom kompleksno\u0161\u0107u',
    'Custom integrations uz fleksibilan CMS',
    'Sajt koji tim mora lako da ure\u0111uje',
  ],
  wp_v2_keep_title: 'Ne menjamo platformu bez razloga',
  wp_v2_keep_lead:
    'Ako postoje\u0107i WordPress ili WooCommerce mo\u017ee da se ubrza, o\u010disti, pobolj\u0161a UX, integri\u0161e, pro\u0161iri ili tehni\u010dki stabilizuje \u2014 ne\u0107emo preporu\u010diti migraciju samo zato \u0161to mo\u017eemo.',
  wp_v2_keep_items: [
    'ubrzati i stabilizovati sajt',
    'pobolj\u0161ati UX i checkout',
    'dodati ili srediti integracije',
    'pro\u0161iriti funkcionalnosti',
  ],
  wp_v2_keep_note:
    'Migracija ili te\u017ea platforma dolazi tek kada postoje\u0107i sistem stvarno postane ograni\u010denje.',
  wp_v2_woo_eyebrow: 'WooCommerce',
  wp_v2_woo_title: 'Prodavnica bez nepotrebne enterprise te\u017eine',
  wp_v2_woo_lead:
    'WooCommerce mo\u017ee biti vrlo dobro re\u0161enje kada katalog i proces ne zahtevaju enterprise commerce arhitekturu \u2014 a administracija i fleksibilnost imaju veliku vrednost.',
  wp_v2_woo_good_label: 'Dobro odgovara kada',
  wp_v2_woo_good: [
    'katalog nije ekstremno kompleksan',
    'poslovni proces ne zahteva te\u0161ku commerce arhitekturu',
    'tim treba jednostavnu administraciju',
  ],
  wp_v2_woo_limit_label: 'Kada kompleksnost preraste platformu',
  wp_v2_woo_limit:
    'Tada analiziramo Magento ili custom pristup \u2014 bez konkurentskog obra\u010duna platformi, ve\u0107 prema tome \u0161ta poslovanje stvarno tra\u017ei.',
  wp_v2_out_title: '\u0160ta klijent dobija',
  wp_v2_out_lead: 'Ishodi, ne lista pluginova.',
  wp_v2_outcomes: [
    'Br\u017ei i jasniji korisni\u010dki put',
    'Administraciju koju tim mo\u017ee da koristi',
    'Stabilniji sajt',
    'Integracije gde su potrebne',
    'Mogu\u0107nost daljeg razvoja',
    'Odr\u017eavanje bez nepotrebne kompleksnosti',
  ],
  wp_v2_cta_title: 'Imate postoje\u0107i WordPress/WooCommerce ili planirate novi?',
  wp_v2_cta_desc:
    'Pogleda\u0107emo da li treba unaprediti postoje\u0107e ili graditi novo \u2014 bez automatskog prelaska na te\u017eu platformu.',

  gr_v2_eyebrow: 'Growth & Analytics',
  gr_v2_title: 'Rast koji mo\u017eemo da pratimo, a ne samo saobra\u0107aj koji mo\u017eemo da kupimo.',
  gr_v2_lead:
    'Povezujemo akviziciju, organsku vidljivost i analitiku kako biste znali odakle dolaze korisnici, \u0161ta rade i gde postoji prostor za pobolj\u0161anje.',
  gr_v2_visual_aria: 'Growth tok: akvizicija, sajt, akcije i merenje',
  gr_v2_node_acq: 'Akvizicija',
  gr_v2_node_site: 'Sajt / proizvod',
  gr_v2_node_actions: 'Akcije',
  gr_v2_node_meas: 'Meri',
  gr_v2_loop_note: 'Traffic bez merenja nije strategija.',
  gr_v2_principle_title: 'Growth povezan sa poslovnim ciljem',
  gr_v2_principle_text:
    'Napravili smo digitalni proizvod. Sada treba dovesti relevantne korisnike, meriti pona\u0161anje, razumeti \u0161ta radi i unapre\u0111ivati na osnovu podataka. Analytics bez poslovnog cilja je samo gomila podataka.',
  gr_v2_areas_eyebrow: 'Tri oblasti',
  gr_v2_areas_title: 'Akvizicija, organska vidljivost i merenje',
  gr_v2_areas_lead: 'Jedan sistem \u2014 ne tri odvojene usluge.',
  gr_v2_ads_title: 'Google Ads / pla\u0107eni kanali',
  gr_v2_ads_lead:
    'Ne upravljamo kampanjom samo prema klikovima. Gledamo \u0161ta se de\u0161ava nakon klika.',
  gr_v2_ads_items: [
    'lead ili prodaja kao cilj',
    'tracking koji podr\u017eava odluke',
    'landing experience',
    'feed/data gde je relevantno',
  ],
  gr_v2_seo_title: 'SEO / organska vidljivost',
  gr_v2_seo_lead:
    'Ne \u201eubacujemo klju\u010dne re\u010di\u201c. Gradimo tehni\u010dku osnovu, strukturu, sadr\u017eaj i search intent za dugoro\u010dnu organsku vidljivost.',
  gr_v2_seo_items: [
    'tehni\u010dka osnova i struktura',
    'sadr\u017eaj uskla\u0111en sa intentom',
    'stabilniji organski kanal',
    'manja zavisnost samo od pla\u0107enog saobra\u0107aja',
  ],
  gr_v2_analytics_title: 'GA4 / GTM / reporting',
  gr_v2_analytics_lead:
    'Ne mo\u017eemo da unapredimo ono \u0161to ne merimo dovoljno dobro.',
  gr_v2_analytics_items: [
    'odakle korisnik dolazi',
    '\u0161ta radi na sajtu ili u proizvodu',
    'koje akcije imaju poslovnu vrednost',
    'gde funnel gubi korisnike',
  ],
  gr_v2_secondary_note: 'Merchant, YouTube, Looker i ostalo \u2014 po potrebi, dublje u Google marketingu.',
  gr_v2_dev_eyebrow: 'Development + Growth',
  gr_v2_dev_title: 'Growth i development ne moraju biti odvojeni timovi.',
  gr_v2_dev_lead:
    'Ako tracking poka\u017ee da landing, checkout ili UX stvaraju problem, mo\u017eemo menjati i samu platformu.',
  gr_v2_dev_note: 'To je Weboro prednost: isti partner za sistem i za rast.',
  gr_v2_cta_title: 'Imate saobra\u0107aj, ali ne znate dovoljno dobro \u0161ta donosi rezultat?',
  gr_v2_cta_desc:
    'Pogleda\u0107emo tracking, kanale i korisni\u010dki put \u2014 pa predlo\u017eiti slede\u0107i korak.',
}

const en = {
  wp_v2_eyebrow: 'WordPress / WooCommerce',
  wp_v2_title: 'Flexible web and eCommerce without unnecessary complexity.',
  wp_v2_lead:
    'From business sites and landing pages to WooCommerce stores and custom features — we choose WordPress when it gives enough freedom without needing a heavier system.',
  wp_v2_visual_aria: 'Content and commerce system: content, shop and admin',
  wp_v2_viz_content: 'Content',
  wp_v2_viz_shop: 'WooCommerce',
  wp_v2_viz_admin: 'Admin',
  wp_v2_when_eyebrow: 'When it fits',
  wp_v2_when_title: 'When WordPress / WooCommerce is the right choice',
  wp_v2_when_lead:
    'A serious solution when designed properly — not a cheaper substitute for Magento.',
  wp_v2_when_items: [
    'Business site or content-heavy website',
    'Lead generation and landing pages',
    'WooCommerce with reasonable complexity',
    'Custom integrations with a flexible CMS',
    'A site the team must edit easily',
  ],
  wp_v2_keep_title: 'We do not change the platform without a reason',
  wp_v2_keep_lead:
    'If existing WordPress or WooCommerce can be sped up, cleaned, improved for UX, integrated, extended or stabilized — we will not recommend migration just because we can.',
  wp_v2_keep_items: [
    'speed up and stabilize the site',
    'improve UX and checkout',
    'add or clean up integrations',
    'extend functionality',
  ],
  wp_v2_keep_note:
    'Migration or a heavier platform comes only when the existing system truly becomes a constraint.',
  wp_v2_woo_eyebrow: 'WooCommerce',
  wp_v2_woo_title: 'A store without unnecessary enterprise weight',
  wp_v2_woo_lead:
    'WooCommerce can be a very good fit when the catalog and process do not require enterprise commerce architecture — and administration and flexibility matter a lot.',
  wp_v2_woo_good_label: 'A good fit when',
  wp_v2_woo_good: [
    'the catalog is not extremely complex',
    'the business process does not need heavy commerce architecture',
    'the team needs simple administration',
  ],
  wp_v2_woo_limit_label: 'When complexity outgrows the platform',
  wp_v2_woo_limit:
    'Then we assess Magento or a custom approach — without ranking platforms against each other, based on what the business actually needs.',
  wp_v2_out_title: 'What the client gets',
  wp_v2_out_lead: 'Outcomes, not a plugin list.',
  wp_v2_outcomes: [
    'A faster, clearer user journey',
    'Admin the team can actually use',
    'A more stable site',
    'Integrations where needed',
    'Room for further development',
    'Maintenance without unnecessary complexity',
  ],
  wp_v2_cta_title: 'Have existing WordPress/WooCommerce — or planning a new one?',
  wp_v2_cta_desc:
    'We will look at whether to improve what exists or build new — without automatically moving to a heavier platform.',

  gr_v2_eyebrow: 'Growth & Analytics',
  gr_v2_title: 'Growth we can track — not just traffic we can buy.',
  gr_v2_lead:
    'We connect acquisition, organic visibility and analytics so you know where users come from, what they do, and where there is room to improve.',
  gr_v2_visual_aria: 'Growth flow: acquisition, site, actions and measurement',
  gr_v2_node_acq: 'Acquisition',
  gr_v2_node_site: 'Site / product',
  gr_v2_node_actions: 'Actions',
  gr_v2_node_meas: 'Measure',
  gr_v2_loop_note: 'Traffic without measurement is not a strategy.',
  gr_v2_principle_title: 'Growth tied to a business goal',
  gr_v2_principle_text:
    'We built a digital product. Now we need to bring relevant users, measure behavior, understand what works and improve from data. Analytics without a business goal is just a pile of numbers.',
  gr_v2_areas_eyebrow: 'Three areas',
  gr_v2_areas_title: 'Acquisition, organic visibility and measurement',
  gr_v2_areas_lead: 'One system — not three disconnected services.',
  gr_v2_ads_title: 'Google Ads / paid channels',
  gr_v2_ads_lead:
    'We do not run campaigns for clicks alone. We look at what happens after the click.',
  gr_v2_ads_items: [
    'leads or sales as the goal',
    'tracking that supports decisions',
    'landing experience',
    'feed/data where relevant',
  ],
  gr_v2_seo_title: 'SEO / organic visibility',
  gr_v2_seo_lead:
    'We do not “stuff keywords”. We build technical foundations, structure, content and search intent for long-term organic visibility.',
  gr_v2_seo_items: [
    'technical foundation and structure',
    'content aligned with intent',
    'a more stable organic channel',
    'less dependence on paid traffic alone',
  ],
  gr_v2_analytics_title: 'GA4 / GTM / reporting',
  gr_v2_analytics_lead: 'We cannot improve what we do not measure well enough.',
  gr_v2_analytics_items: [
    'where the user comes from',
    'what they do on the site or in the product',
    'which actions have business value',
    'where the funnel loses users',
  ],
  gr_v2_secondary_note: 'Merchant, YouTube, Looker and more — as needed, deeper in Google marketing.',
  gr_v2_dev_eyebrow: 'Development + Growth',
  gr_v2_dev_title: 'Growth and development do not have to be separate teams.',
  gr_v2_dev_lead:
    'If tracking shows that landing, checkout or UX create the problem, we can change the platform itself.',
  gr_v2_dev_note: 'That is a Weboro advantage: the same partner for the system and for growth.',
  gr_v2_cta_title: 'Have traffic, but do not know clearly enough what drives results?',
  gr_v2_cta_desc:
    'We will look at tracking, channels and the user journey — then propose the next step.',
}

function merge(path, patch) {
  const data = JSON.parse(fs.readFileSync(path, 'utf8'))
  Object.assign(data, patch)
  fs.writeFileSync(path, JSON.stringify(data, null, 2) + '\n')
  console.log('OK', path)
}

merge('src/locales/sr.json', sr)
merge('src/locales/en.json', en)
