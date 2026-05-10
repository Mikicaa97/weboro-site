<template>
  <div class="bg-black text-white font-sans">
    <HeaderWeboro/>

    <section
        ref="mgB2bHeroRef"
        class="relative pt-28 lg:pt-36 pb-20 lg:pb-28 px-6 md:px-12 lg:px-20 scroll-mt-20 overflow-hidden border-b border-zinc-800/80"
    >
      <div class="pointer-events-none absolute inset-0 mg-home-grid-bg" aria-hidden="true"></div>
      <div class="pointer-events-none absolute inset-0 mg-home-grid-shimmer" aria-hidden="true"></div>
      <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_72%_18%,rgba(255,138,61,0.10),transparent_58%)]" aria-hidden="true"></div>
      <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(45%_42%_at_12%_82%,rgba(56,189,248,0.04),transparent_60%)]" aria-hidden="true"></div>

      <div class="relative z-10 max-w-7xl mx-auto">
        <nav class="text-xs uppercase tracking-[0.22em] text-zinc-500 mb-8 flex flex-wrap items-center gap-2">
          <router-link to="/" class="hover:text-zinc-300 transition-colors">{{ $t('mg_b2b_breadcrumb_home') }}</router-link>
          <span class="opacity-40">/</span>
          <router-link to="/usluge/magento" class="hover:text-zinc-300 transition-colors">{{ $t('mg_b2b_breadcrumb_hub') }}</router-link>
          <span class="opacity-40">/</span>
          <span class="text-zinc-300">{{ $t('mg_b2b_breadcrumb_self') }}</span>
        </nav>

        <div v-scroll-animate class="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div class="lg:col-span-7 space-y-6">
            <div class="flex flex-wrap items-center gap-3">
              <span class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff8a3d]/10 border border-[#ff8a3d]/35 text-[#ffb088] text-xs font-semibold uppercase tracking-wider">
                <span class="w-1.5 h-1.5 rounded-full bg-[#ff8a3d]"></span>
                {{ $t('mg_b2b_badge') }}
              </span>
              <span class="text-xs uppercase tracking-[0.2em] text-zinc-500">{{ $t('mg_b2b_eyebrow') }}</span>
            </div>

            <h1 class="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.05] tracking-tight">
              {{ $t('mg_b2b_title') }}
            </h1>

            <p class="text-base sm:text-lg lg:text-xl text-zinc-300 leading-relaxed max-w-2xl">
              {{ $t('mg_b2b_lead') }}
            </p>

            <div class="flex flex-wrap gap-2 pt-1">
              <span
                  v-for="(kpi, i) in tm('mg_b2b_kpis')"
                  :key="i"
                  class="inline-flex items-center px-3 py-1.5 rounded-full border border-zinc-700/90 bg-zinc-900/60 text-xs text-zinc-300"
              >{{ kpi }}</span>
            </div>

            <div class="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
              <router-link
                  to="/kontakt"
                  class="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#ff8a3d] text-zinc-950 font-semibold rounded-xl hover:bg-[#ff9d5c] hover:shadow-[0_0_28px_-5px_rgba(255,138,61,0.5)] transition-all"
              >
                {{ $t('mg_b2b_cta_audit') }}
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                </svg>
              </router-link>
              <router-link
                  to="/usluge/magento"
                  class="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-zinc-700 bg-zinc-900/50 text-zinc-200 rounded-xl hover:border-[#ff8a3d]/45 hover:text-[#ffb088] transition-all"
              >
                {{ $t('mg_b2b_cta_back_hub') }}
              </router-link>
            </div>
          </div>

          <div class="lg:col-span-5 flex justify-center lg:justify-end">
            <div class="relative w-full max-w-[460px]">
              <div class="absolute -inset-6 bg-gradient-to-br from-[#ff8a3d]/16 via-sky-500/6 to-transparent blur-3xl rounded-[3rem] pointer-events-none"></div>
              <svg
                  ref="mgB2bSvgRef"
                  viewBox="0 0 420 360"
                  class="relative w-full h-auto"
                  role="img"
                  :aria-label="$t('mg_b2b_flow_aria')"
              >
                <defs>
                  <linearGradient id="mg-b2b-line" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stop-color="#ff8a3d" stop-opacity="0.55"/>
                    <stop offset="100%" stop-color="#ff8a3d" stop-opacity="0.05"/>
                  </linearGradient>
                  <filter id="mg-b2b-glow" x="-30%" y="-30%" width="160%" height="160%">
                    <feGaussianBlur stdDeviation="1.6" result="b"/>
                    <feMerge>
                      <feMergeNode in="b"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>

                <!-- panel frame -->
                <rect x="14" y="14" width="392" height="332" rx="14" fill="#0a0a0a" stroke="rgba(63,63,70,0.7)" stroke-width="1"/>
                <line x1="14" y1="46" x2="406" y2="46" stroke="rgba(63,63,70,0.6)" stroke-width="1"/>
                <text x="30" y="34" fill="#ffb088" font-size="10" font-weight="800" font-family="ui-sans-serif, system-ui, sans-serif" letter-spacing="2">B2B COMPANY ACCOUNT</text>
                <circle cx="394" cy="30" r="3" fill="#22c55e">
                  <animate attributeName="opacity" values="1;0.4;1" dur="2.4s" repeatCount="indefinite"/>
                </circle>

                <!-- Company HQ node -->
                <rect x="148" y="62" width="124" height="46" rx="10" fill="#161618" stroke="rgba(255,138,61,0.45)" stroke-width="1.4"/>
                <text x="210" y="84" text-anchor="middle" fill="#fafafa" font-size="13" font-weight="800" font-family="ui-sans-serif, system-ui, sans-serif">ACME Corp</text>
                <text x="210" y="98" text-anchor="middle" fill="#a1a1aa" font-size="9" font-family="ui-sans-serif, system-ui, sans-serif" letter-spacing="1.5">COMPANY ACCOUNT · NET 30</text>

                <!-- Connecting lines -->
                <path d="M 210 108 L 210 130 L 80 130 L 80 152" stroke="url(#mg-b2b-line)" stroke-width="1.4" fill="none"/>
                <path d="M 210 108 L 210 152" stroke="url(#mg-b2b-line)" stroke-width="1.4" fill="none"/>
                <path d="M 210 108 L 210 130 L 340 130 L 340 152" stroke="url(#mg-b2b-line)" stroke-width="1.4" fill="none"/>

                <!-- 3 user role cards -->
                <g v-for="(u, i) in mgB2bUsers" :key="'u-'+i">
                  <rect :x="20 + i * 130" y="152" width="120" height="62" rx="9" fill="#0f0f10" stroke="rgba(63,63,70,0.7)" stroke-width="1"/>
                  <circle :cx="36 + i * 130" cy="172" r="6" :fill="u.color"/>
                  <text :x="48 + i * 130" y="170" fill="#fafafa" font-size="11" font-weight="700" font-family="ui-sans-serif, system-ui, sans-serif">{{ u.name }}</text>
                  <text :x="48 + i * 130" y="183" fill="#71717a" font-size="9" font-family="ui-sans-serif, system-ui, sans-serif">{{ u.email }}</text>
                  <rect :x="20 + i * 130 + 10" y="194" width="64" height="14" rx="3" :fill="u.tagBg"/>
                  <text :x="20 + i * 130 + 42" y="204" text-anchor="middle" :fill="u.tagFg" font-size="8.5" font-weight="800" font-family="ui-sans-serif, system-ui, sans-serif" letter-spacing="1">{{ u.role }}</text>
                </g>

                <!-- Quote workflow header -->
                <text x="30" y="248" fill="#71717a" font-size="9" font-weight="800" font-family="ui-sans-serif, system-ui, sans-serif" letter-spacing="2">QUOTE #Q-2487 · €18,420.00</text>

                <!-- Workflow steps -->
                <g font-family="ui-sans-serif, system-ui, sans-serif">
                  <line x1="50" y1="280" x2="370" y2="280" stroke="rgba(63,63,70,0.6)" stroke-width="1.5"/>
                  <line x1="50" y1="280" x2="290" y2="280" stroke="#ff8a3d" stroke-width="1.5" filter="url(#mg-b2b-glow)"/>

                  <g v-for="(s, i) in mgB2bSteps" :key="'s-'+i">
                    <circle :cx="50 + i * 80" cy="280" :r="s.active ? 7 : 5" :fill="s.done || s.active ? '#ff8a3d' : '#27272a'" :stroke="s.active ? 'rgba(255,138,61,0.4)' : 'transparent'" stroke-width="6">
                      <animate v-if="s.active" attributeName="r" values="6;9;6" dur="1.8s" repeatCount="indefinite"/>
                    </circle>
                    <text :x="50 + i * 80" y="266" text-anchor="middle" :fill="s.done || s.active ? '#fafafa' : '#71717a'" font-size="9.5" font-weight="700">{{ s.label }}</text>
                    <text :x="50 + i * 80" y="304" text-anchor="middle" fill="#52525b" font-size="8.5">{{ s.time }}</text>
                  </g>
                </g>

                <!-- Footer bar -->
                <line x1="14" y1="320" x2="406" y2="320" stroke="rgba(63,63,70,0.6)" stroke-width="1"/>
                <text x="30" y="335" fill="#71717a" font-size="9" font-family="ui-sans-serif, system-ui, sans-serif">Approver: Sarah Bennett · Pending review</text>
                <text x="394" y="335" text-anchor="end" fill="#22c55e" font-size="9" font-weight="700" font-family="ui-sans-serif, system-ui, sans-serif">SHARED CATALOG · TIER A</text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-14 lg:py-20 px-6 md:px-12 lg:px-20 bg-zinc-950 border-b border-zinc-800/60">
      <div class="max-w-7xl mx-auto" v-scroll-animate>
        <p class="text-[11px] uppercase tracking-[0.22em] text-zinc-500 text-center mb-8">{{ $t('mg_b2b_stats_title') }}</p>
        <dl class="grid grid-cols-2 md:grid-cols-4 gap-px bg-zinc-800/70 border border-zinc-800/70 rounded-2xl overflow-hidden">
          <div v-for="(s, i) in tm('mg_b2b_stats')" :key="i" class="bg-zinc-950 px-5 py-7 text-center">
            <dt class="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#ff8a3d] leading-none">{{ s.value }}</dt>
            <dd class="mt-2 text-xs sm:text-sm text-zinc-400">{{ s.label }}</dd>
          </div>
        </dl>
      </div>
    </section>

    <section class="py-24 lg:py-28 px-6 md:px-12 lg:px-20">
      <div class="max-w-7xl mx-auto">
        <div v-scroll-animate class="max-w-2xl mb-12">
          <h2 class="text-3xl sm:text-4xl font-bold tracking-tight mb-3">{{ $t('mg_b2b_pain_title') }}</h2>
          <p class="text-zinc-400 text-base sm:text-lg leading-relaxed">{{ $t('mg_b2b_pain_subtitle') }}</p>
        </div>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          <div
              v-for="(p, i) in tm('mg_b2b_pain')"
              :key="i"
              v-scroll-animate
              :style="{ transitionDelay: (i * 55) + 'ms' }"
              class="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 hover:border-[#ff8a3d]/30 transition-colors"
          >
            <p class="text-[#ff8a3d] text-2xl font-extrabold leading-none mb-3">0{{ i + 1 }}</p>
            <h3 class="text-base font-bold text-white mb-2">{{ p.title }}</h3>
            <p class="text-sm text-zinc-400 leading-relaxed">{{ p.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-24 lg:py-28 px-6 md:px-12 lg:px-20 bg-zinc-950 border-t border-zinc-800/40">
      <div class="max-w-7xl mx-auto">
        <div v-scroll-animate class="max-w-2xl mb-12">
          <h2 class="text-3xl sm:text-4xl font-bold tracking-tight mb-3">{{ $t('mg_b2b_features_title') }}</h2>
          <p class="text-zinc-400 text-base sm:text-lg leading-relaxed">{{ $t('mg_b2b_features_subtitle') }}</p>
        </div>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          <div
              v-for="(f, i) in tm('mg_b2b_features')"
              :key="i"
              v-scroll-animate
              :style="{ transitionDelay: (i * 55) + 'ms' }"
              class="bg-zinc-900/70 border border-zinc-800 rounded-2xl p-6 hover:border-[#ff8a3d]/30 transition-colors flex flex-col"
          >
            <div class="text-3xl mb-3">{{ f.icon }}</div>
            <p class="text-[#ff8a3d]/85 text-xs font-semibold uppercase tracking-wider mb-1">{{ f.tag }}</p>
            <h3 class="text-lg font-bold text-white mb-2">{{ f.title }}</h3>
            <p class="text-sm text-zinc-400 leading-relaxed mb-4">{{ f.desc }}</p>
            <ul class="space-y-1.5 mt-auto">
              <li v-for="(item, j) in f.items" :key="j" class="flex gap-2 text-xs text-zinc-300">
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
          <h2 class="text-3xl sm:text-4xl font-bold tracking-tight mb-3">{{ $t('mg_b2b_compare_title') }}</h2>
          <p class="text-zinc-400 text-base sm:text-lg leading-relaxed">{{ $t('mg_b2b_compare_subtitle') }}</p>
        </div>
        <div class="grid md:grid-cols-3 gap-5 lg:gap-6">
          <div
              v-for="(opt, i) in tm('mg_b2b_compare')"
              :key="i"
              v-scroll-animate
              :style="{ transitionDelay: (i * 70) + 'ms' }"
              :class="[
                'bg-zinc-900/60 border rounded-2xl p-7 lg:p-8 flex flex-col',
                opt.highlight ? 'border-[#ff8a3d]/40 shadow-[0_0_36px_-12px_rgba(255,138,61,0.35)]' : 'border-zinc-800'
              ]"
          >
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-xl font-bold text-white">{{ opt.title }}</h3>
              <span :class="[
                'text-[10px] uppercase tracking-wider px-2 py-1 rounded-full font-semibold',
                opt.highlight ? 'bg-[#ff8a3d]/10 border border-[#ff8a3d]/35 text-[#ffb088]' : 'border border-zinc-700 text-zinc-500'
              ]">{{ opt.tag }}</span>
            </div>
            <p class="text-sm text-zinc-400 leading-relaxed mb-5">{{ opt.desc }}</p>
            <div class="space-y-3 mb-5">
              <div>
                <p class="text-[10px] uppercase tracking-wider text-emerald-400/85 mb-1.5 font-semibold">{{ $t('mg_b2b_compare_pros') }}</p>
                <ul class="space-y-1.5">
                  <li v-for="(pro, j) in opt.pros" :key="j" class="flex gap-2 text-xs text-zinc-300">
                    <span class="text-emerald-400/80 shrink-0">+</span>
                    <span>{{ pro }}</span>
                  </li>
                </ul>
              </div>
              <div>
                <p class="text-[10px] uppercase tracking-wider text-zinc-500 mb-1.5 font-semibold">{{ $t('mg_b2b_compare_cons') }}</p>
                <ul class="space-y-1.5">
                  <li v-for="(con, j) in opt.cons" :key="j" class="flex gap-2 text-xs text-zinc-400">
                    <span class="text-zinc-500 shrink-0">−</span>
                    <span>{{ con }}</span>
                  </li>
                </ul>
              </div>
            </div>
            <div class="text-xs text-zinc-500 pt-3 border-t border-zinc-800 mt-auto">
              <span class="text-zinc-300 font-semibold">{{ $t('mg_b2b_compare_for') }}</span> {{ opt.for }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-24 lg:py-28 px-6 md:px-12 lg:px-20 bg-zinc-950 border-t border-zinc-800/40">
      <div class="max-w-7xl mx-auto">
        <div v-scroll-animate class="max-w-2xl mb-12">
          <h2 class="text-3xl sm:text-4xl font-bold tracking-tight mb-3">{{ $t('mg_b2b_phases_title') }}</h2>
          <p class="text-zinc-400 text-base sm:text-lg leading-relaxed">{{ $t('mg_b2b_phases_subtitle') }}</p>
        </div>
        <ol class="relative border-l-2 border-zinc-800 ml-3 space-y-8">
          <li
              v-for="(ph, i) in tm('mg_b2b_phases')"
              :key="i"
              v-scroll-animate
              :style="{ transitionDelay: (i * 60) + 'ms' }"
              class="relative pl-8"
          >
            <span class="absolute -left-[11px] top-1 w-5 h-5 rounded-full bg-zinc-950 border-2 border-[#ff8a3d] flex items-center justify-center">
              <span class="w-1.5 h-1.5 rounded-full bg-[#ff8a3d]"></span>
            </span>
            <div class="flex flex-wrap items-baseline gap-3 mb-2">
              <p class="text-[#ff8a3d] text-2xl font-extrabold leading-none">0{{ i + 1 }}</p>
              <h3 class="text-lg font-bold text-white">{{ ph.title }}</h3>
              <span class="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full border border-zinc-700 text-zinc-400">{{ ph.duration }}</span>
            </div>
            <p class="text-sm text-zinc-400 leading-relaxed">{{ ph.desc }}</p>
          </li>
        </ol>
      </div>
    </section>

    <section class="py-24 lg:py-28 px-6 md:px-12 lg:px-20">
      <div class="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16">
        <div v-scroll-animate>
          <h2 class="text-3xl sm:text-4xl font-bold tracking-tight mb-3">{{ $t('mg_b2b_deliverables_title') }}</h2>
          <p class="text-zinc-400 mb-6 leading-relaxed">{{ $t('mg_b2b_deliverables_subtitle') }}</p>
          <ul class="space-y-4">
            <li
                v-for="(d, i) in tm('mg_b2b_deliverables')"
                :key="i"
                class="flex gap-3 text-sm text-zinc-300 leading-relaxed border border-zinc-800 rounded-xl p-4 bg-zinc-900/40"
            >
              <span class="text-[#ff8a3d] shrink-0 font-bold">✓</span>
              <span><strong class="text-white">{{ d.title }}</strong> — {{ d.desc }}</span>
            </li>
          </ul>
        </div>
        <div v-scroll-animate>
          <h2 class="text-3xl sm:text-4xl font-bold tracking-tight mb-3">{{ $t('mg_b2b_usecases_title') }}</h2>
          <p class="text-zinc-400 mb-6 leading-relaxed">{{ $t('mg_b2b_usecases_subtitle') }}</p>
          <ul class="space-y-3">
            <li
                v-for="(r, i) in tm('mg_b2b_usecases')"
                :key="i"
                class="text-sm text-zinc-400 leading-relaxed pl-4 border-l-2 border-[#ff8a3d]/40"
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
          <h2 class="text-3xl sm:text-4xl font-bold tracking-tight mb-3">{{ $t('mg_b2b_faq_title') }}</h2>
          <p class="text-zinc-400">{{ $t('mg_b2b_faq_subtitle') }}</p>
        </div>
        <div class="space-y-3">
          <details
              v-for="(q, i) in tm('mg_b2b_faq')"
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
        <h2 class="text-2xl sm:text-3xl font-bold tracking-tight mb-2">{{ $t('mg_b2b_related_title') }}</h2>
        <p class="text-zinc-400 text-sm sm:text-base mb-8 max-w-2xl">{{ $t('mg_b2b_related_subtitle') }}</p>
        <div class="flex flex-wrap gap-3">
          <router-link
              v-for="(rel, i) in tm('mg_b2b_related')"
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
              <h2 class="text-2xl sm:text-3xl font-bold tracking-tight mb-2">{{ $t('mg_b2b_final_cta_title') }}</h2>
              <p class="text-zinc-400 leading-relaxed max-w-2xl">{{ $t('mg_b2b_final_cta_desc') }}</p>
            </div>
            <div class="lg:col-span-4 flex lg:justify-end">
              <router-link
                  to="/kontakt"
                  class="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#ff8a3d] text-zinc-950 font-semibold rounded-xl hover:bg-[#ff9d5c] transition-all w-full lg:w-auto"
              >
                {{ $t('mg_b2b_final_cta_btn') }}
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

const mgB2bHeroRef = ref(null)
const mgB2bSvgRef = ref(null)
let mgB2bIo = null
let mgB2bReduceMotion = false

const mgB2bUsers = [
  { name: 'John Doe', email: 'john@acme.com', role: 'ADMIN', color: '#ff8a3d', tagBg: 'rgba(255,138,61,0.15)', tagFg: '#ffb088' },
  { name: 'Sarah B.', email: 'sarah@acme.com', role: 'APPROVER', color: '#38bdf8', tagBg: 'rgba(56,189,248,0.15)', tagFg: '#7dd3fc' },
  { name: 'Mike R.', email: 'mike@acme.com', role: 'BUYER', color: '#22c55e', tagBg: 'rgba(34,197,94,0.15)', tagFg: '#86efac' },
]

const mgB2bSteps = [
  { label: 'Draft', time: 'Mon 9:14', done: true, active: false },
  { label: 'Submitted', time: 'Mon 11:02', done: true, active: false },
  { label: 'In review', time: 'Tue 10:48', done: true, active: false },
  { label: 'Pending', time: 'now', done: false, active: true },
  { label: 'Order', time: '—', done: false, active: false },
]

function setMgB2bPaused(paused) {
  const svg = mgB2bSvgRef.value
  if (!svg || mgB2bReduceMotion) return
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
  mgB2bReduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  nextTick(() => {
    const sec = mgB2bHeroRef.value
    if (!sec) return
    sec.classList.toggle('mg-home-motion-off', mgB2bReduceMotion)
    if (mgB2bReduceMotion) {
      nextTick(() => setMgB2bPaused(true))
      return
    }
    if (mgB2bIo) mgB2bIo.disconnect()
    mgB2bIo = new IntersectionObserver(
        (entries) => {
          const vis = entries.some((e) => e.isIntersecting)
          sec.classList.toggle('mg-home-motion-off', !vis)
          setMgB2bPaused(!vis)
        },
        { rootMargin: '120px 0px', threshold: 0 },
    )
    mgB2bIo.observe(sec)
  })
})

onBeforeUnmount(() => {
  if (mgB2bIo) {
    mgB2bIo.disconnect()
    mgB2bIo = null
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

@media (prefers-reduced-motion: reduce) {
  .mg-before-reveal {
    opacity: 1 !important;
    transform: none !important;
    transition: none !important;
  }
}

details > summary::-webkit-details-marker {
  display: none;
}
</style>
