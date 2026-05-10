<template>
  <div class="bg-black text-white font-sans">
    <HeaderWeboro/>

    <section
        ref="mgSlaHeroRef"
        class="relative pt-28 lg:pt-36 pb-20 lg:pb-28 px-6 md:px-12 lg:px-20 scroll-mt-20 overflow-hidden border-b border-zinc-800/80"
    >
      <div class="pointer-events-none absolute inset-0 mg-home-grid-bg" aria-hidden="true"></div>
      <div class="pointer-events-none absolute inset-0 mg-home-grid-shimmer" aria-hidden="true"></div>
      <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_72%_18%,rgba(255,138,61,0.10),transparent_58%)]" aria-hidden="true"></div>
      <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(45%_42%_at_12%_82%,rgba(34,197,94,0.04),transparent_60%)]" aria-hidden="true"></div>

      <div class="relative z-10 max-w-7xl mx-auto">
        <nav class="text-xs uppercase tracking-[0.22em] text-zinc-500 mb-8 flex flex-wrap items-center gap-2">
          <router-link to="/" class="hover:text-zinc-300 transition-colors">{{ $t('mg_sla_breadcrumb_home') }}</router-link>
          <span class="opacity-40">/</span>
          <router-link to="/usluge/magento" class="hover:text-zinc-300 transition-colors">{{ $t('mg_sla_breadcrumb_hub') }}</router-link>
          <span class="opacity-40">/</span>
          <span class="text-zinc-300">{{ $t('mg_sla_breadcrumb_self') }}</span>
        </nav>

        <div v-scroll-animate class="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div class="lg:col-span-7 space-y-6">
            <div class="flex flex-wrap items-center gap-3">
              <span class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff8a3d]/10 border border-[#ff8a3d]/35 text-[#ffb088] text-xs font-semibold uppercase tracking-wider">
                <span class="w-1.5 h-1.5 rounded-full bg-[#ff8a3d]"></span>
                {{ $t('mg_sla_badge') }}
              </span>
              <span class="text-xs uppercase tracking-[0.2em] text-zinc-500">{{ $t('mg_sla_eyebrow') }}</span>
            </div>

            <h1 class="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.05] tracking-tight">
              {{ $t('mg_sla_title') }}
            </h1>

            <p class="text-base sm:text-lg lg:text-xl text-zinc-300 leading-relaxed max-w-2xl">
              {{ $t('mg_sla_lead') }}
            </p>

            <div class="flex flex-wrap gap-2 pt-1">
              <span
                  v-for="(kpi, i) in tm('mg_sla_kpis')"
                  :key="i"
                  class="inline-flex items-center px-3 py-1.5 rounded-full border border-zinc-700/90 bg-zinc-900/60 text-xs text-zinc-300"
              >{{ kpi }}</span>
            </div>

            <div class="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
              <router-link
                  to="/kontakt"
                  class="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#ff8a3d] text-zinc-950 font-semibold rounded-xl hover:bg-[#ff9d5c] hover:shadow-[0_0_28px_-5px_rgba(255,138,61,0.5)] transition-all"
              >
                {{ $t('mg_sla_cta_quote') }}
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                </svg>
              </router-link>
              <router-link
                  to="/usluge/magento"
                  class="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-zinc-700 bg-zinc-900/50 text-zinc-200 rounded-xl hover:border-[#ff8a3d]/45 hover:text-[#ffb088] transition-all"
              >
                {{ $t('mg_sla_cta_back_hub') }}
              </router-link>
            </div>
          </div>

          <div class="lg:col-span-5 flex justify-center lg:justify-end">
            <div class="relative w-full max-w-[460px]">
              <div class="absolute -inset-6 bg-gradient-to-br from-[#ff8a3d]/16 via-emerald-500/6 to-transparent blur-3xl rounded-[3rem] pointer-events-none"></div>
              <svg
                  ref="mgSlaSvgRef"
                  viewBox="0 0 420 320"
                  class="relative w-full h-auto"
                  role="img"
                  :aria-label="$t('mg_sla_flow_aria')"
              >
                <defs>
                  <linearGradient id="mg-sla-pulse" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stop-color="#22c55e" stop-opacity="0"/>
                    <stop offset="50%" stop-color="#22c55e"/>
                    <stop offset="100%" stop-color="#22c55e" stop-opacity="0"/>
                  </linearGradient>
                  <filter id="mg-sla-glow" x="-30%" y="-30%" width="160%" height="160%">
                    <feGaussianBlur stdDeviation="1.6" result="b"/>
                    <feMerge>
                      <feMergeNode in="b"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>

                <!-- dashboard frame -->
                <rect x="14" y="14" width="392" height="292" rx="14" fill="#0a0a0a" stroke="rgba(63,63,70,0.7)" stroke-width="1"/>

                <!-- top bar -->
                <line x1="14" y1="46" x2="406" y2="46" stroke="rgba(63,63,70,0.6)" stroke-width="1"/>
                <circle cx="30" cy="30" r="3.6" fill="#22c55e">
                  <animate attributeName="opacity" values="1;0.4;1" dur="2.2s" repeatCount="indefinite"/>
                </circle>
                <text x="42" y="34" fill="#fafafa" font-size="11" font-weight="700" font-family="ui-sans-serif, system-ui, sans-serif" letter-spacing="1.5">LIVE</text>
                <text x="394" y="34" text-anchor="end" fill="#71717a" font-size="9.5" font-family="ui-sans-serif, system-ui, sans-serif">monitor.weboro.dev</text>

                <!-- big uptime number -->
                <text x="32" y="98" fill="#fafafa" font-size="44" font-weight="800" font-family="ui-sans-serif, system-ui, sans-serif">99.97%</text>
                <text x="32" y="118" fill="#a1a1aa" font-size="9.5" font-weight="700" font-family="ui-sans-serif, system-ui, sans-serif" letter-spacing="2.5">UPTIME · 30 DAYS</text>

                <!-- side stats -->
                <g font-family="ui-sans-serif, system-ui, sans-serif">
                  <text x="394" y="82" text-anchor="end" fill="#71717a" font-size="9" letter-spacing="1.2">RESPONSE</text>
                  <text x="394" y="98" text-anchor="end" fill="#fafafa" font-size="16" font-weight="800">142ms</text>
                  <text x="394" y="116" text-anchor="end" fill="#22c55e" font-size="9" font-weight="700">▲ within SLA</text>
                </g>

                <!-- heartbeat line -->
                <path d="M 30 158 L 70 158 L 78 138 L 88 178 L 96 158 L 140 158 L 148 142 L 158 174 L 166 158 L 220 158 L 228 144 L 238 172 L 246 158 L 300 158 L 308 138 L 318 178 L 326 158 L 392 158"
                      fill="none" stroke="url(#mg-sla-pulse)" stroke-width="2" filter="url(#mg-sla-glow)" class="mg-sla-pulse-anim"/>
                <line x1="30" y1="158" x2="392" y2="158" stroke="rgba(34,197,94,0.18)" stroke-width="1" stroke-dasharray="2 4"/>

                <!-- 24 day uptime strip -->
                <text x="32" y="206" fill="#71717a" font-size="9" font-weight="700" font-family="ui-sans-serif, system-ui, sans-serif" letter-spacing="1.5">LAST 30 DAYS</text>
                <g>
                  <rect v-for="d in 30" :key="'u-'+d"
                        :x="32 + (d - 1) * 12"
                        y="216"
                        width="9"
                        height="22"
                        rx="1.5"
                        :fill="d === 11 ? '#fbbf24' : '#22c55e'"
                        :opacity="d === 11 ? 0.85 : 0.7"
                  />
                </g>

                <!-- alerts block -->
                <g font-family="ui-sans-serif, system-ui, sans-serif">
                  <rect x="32" y="252" width="180" height="38" rx="8" fill="#0f0f10" stroke="rgba(34,197,94,0.3)" stroke-width="1"/>
                  <circle cx="48" cy="271" r="3.4" fill="#22c55e">
                    <animate attributeName="opacity" values="1;0.4;1" dur="3s" repeatCount="indefinite"/>
                  </circle>
                  <text x="60" y="268" fill="#fafafa" font-size="10" font-weight="700">All systems operational</text>
                  <text x="60" y="283" fill="#71717a" font-size="9">No incidents in last 87 days</text>
                </g>

                <g font-family="ui-sans-serif, system-ui, sans-serif">
                  <rect x="220" y="252" width="174" height="38" rx="8" fill="#0f0f10" stroke="rgba(255,138,61,0.3)" stroke-width="1"/>
                  <text x="232" y="268" fill="#ffb088" font-size="10" font-weight="700">Last patch applied</text>
                  <text x="232" y="283" fill="#71717a" font-size="9">2.4.7-p4 · 4 days ago · zero downtime</text>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-14 lg:py-20 px-6 md:px-12 lg:px-20 bg-zinc-950 border-b border-zinc-800/60">
      <div class="max-w-7xl mx-auto" v-scroll-animate>
        <p class="text-[11px] uppercase tracking-[0.22em] text-zinc-500 text-center mb-8">{{ $t('mg_sla_stats_title') }}</p>
        <dl class="grid grid-cols-2 md:grid-cols-4 gap-px bg-zinc-800/70 border border-zinc-800/70 rounded-2xl overflow-hidden">
          <div v-for="(s, i) in tm('mg_sla_stats')" :key="i" class="bg-zinc-950 px-5 py-7 text-center">
            <dt class="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#ff8a3d] leading-none">{{ s.value }}</dt>
            <dd class="mt-2 text-xs sm:text-sm text-zinc-400">{{ s.label }}</dd>
          </div>
        </dl>
      </div>
    </section>

    <section class="py-24 lg:py-28 px-6 md:px-12 lg:px-20">
      <div class="max-w-7xl mx-auto">
        <div v-scroll-animate class="max-w-2xl mb-12">
          <h2 class="text-3xl sm:text-4xl font-bold tracking-tight mb-3">{{ $t('mg_sla_tiers_title') }}</h2>
          <p class="text-zinc-400 text-base sm:text-lg leading-relaxed">{{ $t('mg_sla_tiers_subtitle') }}</p>
        </div>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          <div
              v-for="(tier, i) in tm('mg_sla_tiers')"
              :key="i"
              v-scroll-animate
              :style="{ transitionDelay: (i * 70) + 'ms' }"
              :class="[
                'relative bg-zinc-900/70 border rounded-2xl p-7 lg:p-8 flex flex-col',
                tier.highlight ? 'border-[#ff8a3d]/40 shadow-[0_0_36px_-12px_rgba(255,138,61,0.35)]' : 'border-zinc-800'
              ]"
          >
            <div v-if="tier.highlight"
                 class="absolute -top-3 left-7 inline-flex items-center px-2.5 py-1 rounded-full bg-[#ff8a3d] text-zinc-950 text-[10px] font-bold uppercase tracking-wider">
              {{ $t('mg_sla_tiers_popular') }}
            </div>
            <p class="text-[#ff8a3d]/85 text-xs font-semibold uppercase tracking-wider mb-1">{{ tier.tag }}</p>
            <h3 class="text-2xl font-bold text-white mb-2">{{ tier.title }}</h3>
            <p class="text-sm text-zinc-400 leading-relaxed mb-5">{{ tier.desc }}</p>
            <div class="border-y border-zinc-800 py-4 mb-5 space-y-1.5">
              <p class="text-xs text-zinc-500">{{ $t('mg_sla_tiers_response') }}</p>
              <p class="text-lg font-bold text-white">{{ tier.response }}</p>
            </div>
            <ul class="space-y-2.5 flex-1 mb-5">
              <li v-for="(f, j) in tier.features" :key="j" class="flex gap-2 text-sm text-zinc-300">
                <span class="text-[#ff8a3d] shrink-0 font-bold">✓</span>
                <span>{{ f }}</span>
              </li>
            </ul>
            <div class="text-xs text-zinc-500 pt-3 border-t border-zinc-800">
              <span class="text-zinc-300 font-semibold">{{ $t('mg_sla_tiers_for') }}</span> {{ tier.for }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-24 lg:py-28 px-6 md:px-12 lg:px-20 bg-zinc-950 border-t border-zinc-800/40">
      <div class="max-w-7xl mx-auto">
        <div v-scroll-animate class="max-w-2xl mb-12">
          <h2 class="text-3xl sm:text-4xl font-bold tracking-tight mb-3">{{ $t('mg_sla_covered_title') }}</h2>
          <p class="text-zinc-400 text-base sm:text-lg leading-relaxed">{{ $t('mg_sla_covered_subtitle') }}</p>
        </div>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          <div
              v-for="(c, i) in tm('mg_sla_covered')"
              :key="i"
              v-scroll-animate
              :style="{ transitionDelay: (i * 55) + 'ms' }"
              class="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 hover:border-[#ff8a3d]/30 transition-colors flex flex-col"
          >
            <div class="text-3xl mb-3">{{ c.icon }}</div>
            <h3 class="text-lg font-bold text-white mb-2">{{ c.title }}</h3>
            <p class="text-sm text-zinc-400 leading-relaxed mb-4">{{ c.desc }}</p>
            <ul class="space-y-1.5 mt-auto">
              <li v-for="(item, j) in c.items" :key="j" class="flex gap-2 text-xs text-zinc-300">
                <span class="text-[#ff8a3d]/80 shrink-0">▸</span>
                <span>{{ item }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="py-24 lg:py-28 px-6 md:px-12 lg:px-20">
      <div class="max-w-7xl mx-auto">
        <div v-scroll-animate class="max-w-2xl mb-12">
          <h2 class="text-3xl sm:text-4xl font-bold tracking-tight mb-3">{{ $t('mg_sla_severity_title') }}</h2>
          <p class="text-zinc-400 text-base sm:text-lg leading-relaxed">{{ $t('mg_sla_severity_subtitle') }}</p>
        </div>
        <div class="bg-zinc-900/40 border border-zinc-800 rounded-2xl overflow-hidden">
          <div class="grid grid-cols-12 px-5 py-3 border-b border-zinc-800 bg-zinc-950/60 text-[10px] uppercase tracking-wider text-zinc-500 font-semibold">
            <div class="col-span-2">{{ $t('mg_sla_severity_h_level') }}</div>
            <div class="col-span-3">{{ $t('mg_sla_severity_h_def') }}</div>
            <div class="col-span-3 hidden sm:block">{{ $t('mg_sla_severity_h_example') }}</div>
            <div class="col-span-4 sm:col-span-2">{{ $t('mg_sla_severity_h_response') }}</div>
            <div class="col-span-3 sm:col-span-2">{{ $t('mg_sla_severity_h_target') }}</div>
          </div>
          <div
              v-for="(row, i) in tm('mg_sla_severity_rows')"
              :key="i"
              v-scroll-animate
              :style="{ transitionDelay: (i * 50) + 'ms' }"
              class="grid grid-cols-12 px-5 py-5 border-b border-zinc-800 last:border-b-0 hover:bg-zinc-900/40 transition-colors items-start"
          >
            <div class="col-span-2 flex items-center gap-2">
              <span class="w-2 h-2 rounded-full" :style="{ background: row.color }"></span>
              <span class="font-bold text-white">{{ row.level }}</span>
            </div>
            <div class="col-span-3 text-sm text-zinc-300 leading-relaxed">{{ row.def }}</div>
            <div class="col-span-3 text-sm text-zinc-500 leading-relaxed hidden sm:block">{{ row.example }}</div>
            <div class="col-span-4 sm:col-span-2 text-sm font-bold text-[#ff8a3d]">{{ row.response }}</div>
            <div class="col-span-3 sm:col-span-2 text-sm text-zinc-300">{{ row.target }}</div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-24 lg:py-28 px-6 md:px-12 lg:px-20 bg-zinc-950 border-t border-zinc-800/40">
      <div class="max-w-7xl mx-auto">
        <div v-scroll-animate class="max-w-2xl mb-12">
          <h2 class="text-3xl sm:text-4xl font-bold tracking-tight mb-3">{{ $t('mg_sla_process_title') }}</h2>
          <p class="text-zinc-400 text-base sm:text-lg leading-relaxed">{{ $t('mg_sla_process_subtitle') }}</p>
        </div>
        <div class="grid md:grid-cols-2 lg:grid-cols-5 gap-5">
          <div
              v-for="(step, i) in tm('mg_sla_process')"
              :key="i"
              v-scroll-animate
              :style="{ transitionDelay: (i * 60) + 'ms' }"
              class="relative bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6"
          >
            <div class="flex items-center justify-between mb-3">
              <p class="text-[#ff8a3d] text-3xl font-extrabold leading-none">0{{ i + 1 }}</p>
              <span class="text-[10px] uppercase tracking-wider text-zinc-500">{{ step.tag }}</span>
            </div>
            <h3 class="text-base font-bold text-white mb-2">{{ step.title }}</h3>
            <p class="text-xs text-zinc-400 leading-relaxed">{{ step.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-24 lg:py-28 px-6 md:px-12 lg:px-20">
      <div class="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16">
        <div v-scroll-animate>
          <h2 class="text-3xl sm:text-4xl font-bold tracking-tight mb-3">{{ $t('mg_sla_deliverables_title') }}</h2>
          <p class="text-zinc-400 mb-6 leading-relaxed">{{ $t('mg_sla_deliverables_subtitle') }}</p>
          <ul class="space-y-4">
            <li
                v-for="(d, i) in tm('mg_sla_deliverables')"
                :key="i"
                class="flex gap-3 text-sm text-zinc-300 leading-relaxed border border-zinc-800 rounded-xl p-4 bg-zinc-900/40"
            >
              <span class="text-[#ff8a3d] shrink-0 font-bold">✓</span>
              <span><strong class="text-white">{{ d.title }}</strong> — {{ d.desc }}</span>
            </li>
          </ul>
        </div>
        <div v-scroll-animate>
          <h2 class="text-3xl sm:text-4xl font-bold tracking-tight mb-3">{{ $t('mg_sla_excluded_title') }}</h2>
          <p class="text-zinc-400 mb-6 leading-relaxed">{{ $t('mg_sla_excluded_subtitle') }}</p>
          <ul class="space-y-3">
            <li
                v-for="(r, i) in tm('mg_sla_excluded')"
                :key="i"
                class="text-sm text-zinc-400 leading-relaxed pl-4 border-l-2 border-zinc-700"
            >
              <span class="text-white font-semibold">{{ r.title }}</span>
              — {{ r.desc }}
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section class="py-24 lg:py-28 px-6 md:px-12 lg:px-20 bg-zinc-950 border-t border-zinc-800/40">
      <div class="max-w-4xl mx-auto">
        <div v-scroll-animate class="mb-10 text-center">
          <h2 class="text-3xl sm:text-4xl font-bold tracking-tight mb-3">{{ $t('mg_sla_faq_title') }}</h2>
          <p class="text-zinc-400">{{ $t('mg_sla_faq_subtitle') }}</p>
        </div>
        <div class="space-y-3">
          <details
              v-for="(q, i) in tm('mg_sla_faq')"
              :key="i"
              v-scroll-animate
              class="group bg-zinc-900/60 border border-zinc-800 rounded-2xl px-6 py-5 hover:border-[#ff8a3d]/30 transition-colors"
          >
            <summary class="flex items-center justify-between cursor-pointer list-none gap-4">
              <span class="font-semibold text-white text-left">{{ q.q }}</span>
              <span class="text-[#ff8a3d] group-open:rotate-180 transition-transform shrink-0">▾</span>
            </summary>
            <p class="mt-4 text-zinc-400 leading-relaxed">{{ q.a }}</p>
          </details>
        </div>
      </div>
    </section>

    <section class="py-24 lg:py-28 px-6 md:px-12 lg:px-20">
      <div class="max-w-7xl mx-auto" v-scroll-animate>
        <h2 class="text-2xl sm:text-3xl font-bold tracking-tight mb-2">{{ $t('mg_sla_related_title') }}</h2>
        <p class="text-zinc-400 text-sm sm:text-base mb-8 max-w-2xl">{{ $t('mg_sla_related_subtitle') }}</p>
        <div class="flex flex-wrap gap-3">
          <router-link
              v-for="(rel, i) in tm('mg_sla_related')"
              :key="i"
              :to="rel.to"
              class="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-zinc-800 bg-zinc-900/60 text-sm text-zinc-300 hover:border-[#ff8a3d]/40 hover:text-[#ffb088] transition-colors"
          >
            {{ rel.label }}
            <span class="text-[#ff8a3d]/80">→</span>
          </router-link>
        </div>
      </div>
    </section>

    <section class="pb-24 lg:pb-32 px-6 md:px-12 lg:px-20">
      <div class="max-w-7xl mx-auto" v-scroll-animate>
        <div class="relative rounded-3xl overflow-hidden border border-[#ff8a3d]/25 bg-gradient-to-br from-zinc-900 via-zinc-900 to-zinc-950 px-6 sm:px-10 lg:px-14 py-12 lg:py-14">
          <div class="absolute -top-16 -right-16 w-72 h-72 bg-[#ff8a3d]/10 blur-3xl rounded-full pointer-events-none"></div>
          <div class="relative grid lg:grid-cols-12 gap-8 items-center">
            <div class="lg:col-span-8">
              <h2 class="text-2xl sm:text-3xl font-bold tracking-tight mb-2">{{ $t('mg_sla_final_cta_title') }}</h2>
              <p class="text-zinc-400 leading-relaxed max-w-2xl">{{ $t('mg_sla_final_cta_desc') }}</p>
            </div>
            <div class="lg:col-span-4 flex lg:justify-end">
              <router-link
                  to="/kontakt"
                  class="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#ff8a3d] text-zinc-950 font-semibold rounded-xl hover:bg-[#ff9d5c] transition-all w-full lg:w-auto"
              >
                {{ $t('mg_sla_final_cta_btn') }}
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                </svg>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Footer/>
  </div>
</template>

<script setup>
import HeaderWeboro from '@/components/HeaderWeboro.vue'
import Footer from '@/components/Footer.vue'
import { useI18n } from 'vue-i18n'
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue'

const { tm } = useI18n()

const mgSlaHeroRef = ref(null)
const mgSlaSvgRef = ref(null)
let mgSlaIo = null
let mgSlaReduceMotion = false

function setMgSlaPaused(paused) {
  const svg = mgSlaSvgRef.value
  if (!svg || mgSlaReduceMotion) return
  try {
    if (paused && typeof svg.pauseAnimations === 'function') svg.pauseAnimations()
    else if (!paused && typeof svg.unpauseAnimations === 'function') svg.unpauseAnimations()
  } catch (_) {
    /* ignore */
  }
}

const vScrollAnimate = {
  mounted(el) {
    el.classList.add('mg-before-reveal')
    const observer = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              el.classList.add('mg-reveal')
              obs.unobserve(el)
            }
          })
        },
        { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    )
    observer.observe(el)
  },
}

onMounted(() => {
  mgSlaReduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  nextTick(() => {
    const sec = mgSlaHeroRef.value
    if (!sec) return
    sec.classList.toggle('mg-home-motion-off', mgSlaReduceMotion)
    if (mgSlaReduceMotion) {
      nextTick(() => setMgSlaPaused(true))
      return
    }
    if (mgSlaIo) mgSlaIo.disconnect()
    mgSlaIo = new IntersectionObserver(
        (entries) => {
          const vis = entries.some((e) => e.isIntersecting)
          sec.classList.toggle('mg-home-motion-off', !vis)
          setMgSlaPaused(!vis)
        },
        { rootMargin: '120px 0px', threshold: 0 },
    )
    mgSlaIo.observe(sec)
  })
})

onBeforeUnmount(() => {
  if (mgSlaIo) {
    mgSlaIo.disconnect()
    mgSlaIo = null
  }
})
</script>

<style scoped>
.mg-before-reveal {
  opacity: 0;
  transform: translateY(26px);
}
.mg-reveal {
  opacity: 1;
  transform: translateY(0);
  transition: opacity 0.65s ease-out, transform 0.65s ease-out;
}

.mg-sla-pulse-anim {
  stroke-dasharray: 80 600;
  stroke-dashoffset: 680;
  animation: mg-sla-sweep 3.4s linear infinite;
}

@keyframes mg-sla-sweep {
  to {
    stroke-dashoffset: 0;
  }
}

@media (prefers-reduced-motion: reduce) {
  .mg-before-reveal {
    opacity: 1 !important;
    transform: none !important;
    transition: none !important;
  }
  .mg-sla-pulse-anim {
    animation: none !important;
    stroke-dasharray: none !important;
  }
}

details > summary::-webkit-details-marker {
  display: none;
}
</style>
