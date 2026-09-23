/**
 * Faza 5 locale patches
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dir = path.join(__dirname, '..', 'src', 'locales')

const shared = {
  sr: {
    not_found_title: 'Stranica nije pronađena',
    not_found_desc: 'Link možda više ne postoji ili je adresa pogrešna. Vratite se na početnu ili nam pošaljite projekat.',
    not_found_home: 'Početna',
    a11y_scroll_top: 'Nazad na vrh stranice',
    blog_coming_soon: 'Članak uskoro',
    mg_mig_final_cta_btn: 'Pošaljite nam projekat',
    mg_int_final_cta_btn: 'Pošaljite nam projekat',
    // Soften unverifiable KPI strips — empty = hidden via v-if
    mg_mig_stats: [],
    mg_int_stats: [],
    mg_perf_stats: [],
    mg_fe_stats: [],
    mg_sla_stats: [],
    mg_b2b_stats: [],
  },
  en: {
    not_found_title: 'Page not found',
    not_found_desc: 'This link may no longer exist, or the address is wrong. Go home or send us your project.',
    not_found_home: 'Home',
    a11y_scroll_top: 'Back to top',
    blog_coming_soon: 'Article coming soon',
    mg_mig_final_cta_btn: 'Send us your project',
    mg_int_final_cta_btn: 'Send us your project',
    mg_mig_stats: [],
    mg_int_stats: [],
    mg_perf_stats: [],
    mg_fe_stats: [],
    mg_sla_stats: [],
    mg_b2b_stats: [],
  },
}

for (const lang of ['sr', 'en']) {
  const file = path.join(dir, `${lang}.json`)
  const data = JSON.parse(fs.readFileSync(file, 'utf8'))
  Object.assign(data, shared[lang])
  fs.writeFileSync(file, JSON.stringify(data, null, 2) + '\n')
  console.log('patched', lang)
}
