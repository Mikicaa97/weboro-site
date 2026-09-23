<template>
  <div class="bg-black text-white font-sans">
    <HeaderWeboro />

    <article>
      <!-- 1. HERO -->
      <section class="relative pt-24 sm:pt-28 lg:pt-32 pb-10 sm:pb-16 lg:pb-24 px-6 md:px-12 lg:px-20 overflow-hidden border-b border-zinc-800/50">
        <div class="pointer-events-none absolute inset-0 ogc-hero-grid" aria-hidden="true"></div>
        <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_50%_at_82%_18%,rgba(255,138,61,0.1),transparent_58%)]" aria-hidden="true"></div>
        <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_15%_80%,rgba(139,92,246,0.06),transparent_55%)]" aria-hidden="true"></div>

        <div class="relative z-10 max-w-7xl mx-auto">
          <nav class="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-5 sm:mb-8 flex flex-wrap items-center gap-2">
            <router-link to="/" class="hover:text-zinc-300 transition-colors">{{ $t('nav_home') }}</router-link>
            <span class="opacity-40">/</span>
            <router-link to="/portfolio" class="hover:text-zinc-300 transition-colors">{{ $t('nav_portfolio') }}</router-link>
            <span class="opacity-40">/</span>
            <span class="text-zinc-400">OutreachGenie</span>
          </nav>

          <div class="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div class="lg:col-span-5 xl:col-span-5">
              <p class="text-[11px] uppercase tracking-[0.2em] text-[#ffb088]/90 mb-3">{{ $t('ogc_hero_marker') }}</p>
              <h1 class="text-[2.15rem] sm:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight leading-[1.05] mb-3">
                OutreachGenie
              </h1>
              <p class="text-sm sm:text-base text-zinc-400 mb-4 sm:mb-5">{{ $t('ogc_hero_positioning') }}</p>
              <p class="text-[15px] sm:text-lg text-zinc-300 leading-relaxed mb-3 sm:mb-4 max-w-xl">
                {{ $t('ogc_hero_lead') }}
              </p>
              <p class="hidden sm:block text-sm text-zinc-500 leading-relaxed mb-6 max-w-xl">
                {{ $t('ogc_hero_support') }}
              </p>

              <div class="flex flex-wrap items-center gap-2.5 mb-5 sm:mb-7">
                <span class="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-zinc-700/80 bg-zinc-900/50 text-xs text-zinc-300">
                  <span class="text-zinc-500 uppercase tracking-wider">{{ $t('ogc_status_label') }}</span>
                  <span class="text-[#ffb088]">{{ $t('ogc_status_value') }}</span>
                </span>
                <span class="text-[11px] text-zinc-600 px-2">{{ $t('ogc_type_line') }}</span>
              </div>
              <p class="hidden sm:block text-xs text-zinc-500 mb-7 max-w-md leading-relaxed">{{ $t('ogc_commercial_note') }}</p>

              <div class="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
                <router-link
                  to="/kontakt"
                  class="inline-flex items-center justify-center min-h-[48px] px-7 py-3.5 bg-[#ff8a3d] text-zinc-950 font-semibold rounded-xl hover:bg-[#ff9d5c] hover:shadow-[0_0_28px_-6px_rgba(255,138,61,0.4)] transition-all"
                >
                  {{ $t('ogc_hero_cta_talk') }}
                </router-link>
                <span
                  class="inline-flex items-center justify-center px-5 py-3 text-sm text-zinc-500 border border-zinc-800 rounded-xl bg-zinc-900/40 cursor-default select-none"
                  aria-disabled="true"
                >
                  {{ $t('ogc_coming_soon') }}
                </span>
              </div>
            </div>

            <div class="lg:col-span-7 xl:col-span-7 relative">
              <div class="absolute -inset-4 bg-gradient-to-tr from-[#ff8a3d]/18 via-violet-500/8 to-transparent blur-3xl rounded-[2rem] pointer-events-none" aria-hidden="true"></div>
              <div class="relative rounded-2xl border border-zinc-600/70 bg-[#0f0f10] overflow-hidden shadow-[0_32px_80px_-24px_rgba(0,0,0,0.95)]">
                <div class="flex items-center gap-2 px-4 h-10 border-b border-zinc-800 bg-[#141416]">
                  <span class="w-2.5 h-2.5 rounded-full bg-zinc-600" aria-hidden="true"></span>
                  <span class="w-2.5 h-2.5 rounded-full bg-zinc-600" aria-hidden="true"></span>
                  <span class="w-2.5 h-2.5 rounded-full bg-zinc-600" aria-hidden="true"></span>
                  <span class="ml-2 flex-1 max-w-[16rem] h-5 rounded-md bg-zinc-800/90 border border-zinc-700/60 text-[10px] text-zinc-500 flex items-center px-2.5 truncate">
                    OutreachGenie
                  </span>
                </div>
                <div class="relative bg-[#07080a] ogc-hero-media" role="img" :aria-label="$t('ogc_hero_img_alt')">
                  <!-- Desktop: full campaign editor -->
                  <svg class="hidden sm:block w-full h-full" viewBox="0 0 640 360" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
                    <rect width="640" height="360" fill="#0a0a0c"/>
                    <rect x="0" y="0" width="640" height="32" fill="#121214"/>
                    <rect x="12" y="10" width="14" height="12" rx="3" fill="#ff8a3d" opacity="0.75"/>
                    <text x="32" y="20" fill="#a1a1aa" font-size="9" font-family="ui-sans-serif, system-ui, sans-serif">OutreachGenie</text>
                    <rect x="140" y="9" width="48" height="14" rx="4" fill="#1a1a1d" stroke="rgba(63,63,70,0.8)"/>
                    <rect x="196" y="9" width="56" height="14" rx="4" fill="#1f1610" stroke="rgba(255,138,61,0.35)"/>
                    <rect x="260" y="9" width="44" height="14" rx="4" fill="#1a1a1d" stroke="rgba(63,63,70,0.8)"/>
                    <rect x="560" y="9" width="64" height="14" rx="4" fill="#18181b" stroke="rgba(63,63,70,0.7)"/>
                    <rect x="0" y="32" width="52" height="328" fill="#0e0e10"/>
                    <rect x="14" y="48" width="24" height="24" rx="6" fill="#1a1a1d" stroke="rgba(255,138,61,0.4)"/>
                    <rect x="18" y="86" width="16" height="6" rx="2" fill="#3f3f46"/>
                    <rect x="18" y="102" width="16" height="6" rx="2" fill="#27272a"/>
                    <rect x="18" y="118" width="16" height="6" rx="2" fill="#27272a"/>
                    <rect x="18" y="134" width="16" height="6" rx="2" fill="#27272a"/>
                    <rect x="14" y="168" width="24" height="24" rx="6" fill="#151517" stroke="rgba(63,63,70,0.7)"/>
                    <rect x="14" y="204" width="24" height="24" rx="6" fill="#151517" stroke="rgba(63,63,70,0.7)"/>
                    <rect x="14" y="240" width="24" height="24" rx="6" fill="#151517" stroke="rgba(63,63,70,0.7)"/>
                    <rect x="52" y="32" width="108" height="328" fill="#111113" stroke="rgba(39,39,42,0.9)"/>
                    <text x="64" y="52" fill="#71717a" font-size="8" letter-spacing="1" font-family="ui-sans-serif, system-ui, sans-serif">BLOCKS</text>
                    <rect x="64" y="64" width="84" height="36" rx="6" fill="#18181b" stroke="rgba(255,138,61,0.3)"/>
                    <rect x="72" y="74" width="40" height="5" rx="1" fill="#52525b"/>
                    <rect x="72" y="84" width="56" height="4" rx="1" fill="#3f3f46"/>
                    <rect x="64" y="110" width="84" height="36" rx="6" fill="#18181b" stroke="rgba(63,63,70,0.8)"/>
                    <rect x="72" y="120" width="48" height="5" rx="1" fill="#3f3f46"/>
                    <rect x="72" y="130" width="36" height="4" rx="1" fill="#27272a"/>
                    <rect x="64" y="156" width="84" height="36" rx="6" fill="#18181b" stroke="rgba(63,63,70,0.8)"/>
                    <rect x="72" y="166" width="44" height="5" rx="1" fill="#3f3f46"/>
                    <rect x="72" y="176" width="52" height="4" rx="1" fill="#27272a"/>
                    <rect x="64" y="202" width="84" height="36" rx="6" fill="#18181b" stroke="rgba(63,63,70,0.8)"/>
                    <rect x="72" y="212" width="36" height="5" rx="1" fill="#3f3f46"/>
                    <rect x="72" y="222" width="48" height="4" rx="1" fill="#27272a"/>
                    <rect x="160" y="32" width="320" height="328" fill="#0c0c0e"/>
                    <rect x="160" y="32" width="320" height="36" fill="#141416"/>
                    <rect x="172" y="42" width="28" height="16" rx="3" fill="#1c1c1f" stroke="rgba(63,63,70,0.8)"/>
                    <rect x="206" y="42" width="28" height="16" rx="3" fill="#1c1c1f" stroke="rgba(63,63,70,0.8)"/>
                    <rect x="240" y="42" width="28" height="16" rx="3" fill="#1c1c1f" stroke="rgba(63,63,70,0.8)"/>
                    <rect x="280" y="42" width="1" height="16" fill="#27272a"/>
                    <rect x="292" y="42" width="52" height="16" rx="3" fill="#1f1610" stroke="rgba(255,138,61,0.4)"/>
                    <text x="318" y="53" text-anchor="middle" fill="#ffb088" font-size="8" font-family="ui-sans-serif, system-ui, sans-serif">Preview</text>
                    <rect x="420" y="42" width="48" height="16" rx="3" fill="#ff8a3d" opacity="0.85"/>
                    <rect x="188" y="82" width="264" height="258" rx="8" fill="#121214" stroke="rgba(63,63,70,0.75)"/>
                    <rect x="208" y="98" width="36" height="10" rx="2" fill="#ff8a3d" opacity="0.35"/>
                    <rect x="208" y="122" width="180" height="10" rx="2" fill="#e4e4e7" opacity="0.85"/>
                    <rect x="208" y="140" width="140" height="7" rx="2" fill="#71717a"/>
                    <rect x="208" y="160" width="224" height="72" rx="6" fill="#18181b" stroke="rgba(63,63,70,0.8)"/>
                    <rect x="248" y="188" width="40" height="4" rx="1" fill="#3f3f46"/>
                    <rect x="296" y="188" width="56" height="4" rx="1" fill="#27272a"/>
                    <rect x="208" y="246" width="200" height="5" rx="1" fill="#3f3f46"/>
                    <rect x="208" y="258" width="176" height="5" rx="1" fill="#27272a"/>
                    <rect x="208" y="270" width="188" height="5" rx="1" fill="#27272a"/>
                    <rect x="208" y="290" width="88" height="22" rx="5" fill="#ff8a3d" opacity="0.8"/>
                    <rect x="208" y="324" width="64" height="4" rx="1" fill="#3f3f46"/>
                    <rect x="280" y="324" width="48" height="4" rx="1" fill="#27272a"/>
                    <rect x="480" y="32" width="160" height="328" fill="#111113" stroke="rgba(39,39,42,0.9)"/>
                    <text x="496" y="52" fill="#71717a" font-size="8" letter-spacing="1" font-family="ui-sans-serif, system-ui, sans-serif">SETTINGS</text>
                    <rect x="496" y="64" width="128" height="8" rx="2" fill="#3f3f46"/>
                    <rect x="496" y="80" width="96" height="6" rx="2" fill="#27272a"/>
                    <rect x="496" y="104" width="128" height="48" rx="6" fill="#18181b" stroke="rgba(63,63,70,0.75)"/>
                    <rect x="508" y="118" width="72" height="5" rx="1" fill="#52525b"/>
                    <rect x="508" y="130" width="96" height="5" rx="1" fill="#3f3f46"/>
                    <rect x="496" y="166" width="128" height="48" rx="6" fill="#18181b" stroke="rgba(255,138,61,0.25)"/>
                    <rect x="508" y="180" width="64" height="5" rx="1" fill="#ffb088" opacity="0.7"/>
                    <rect x="508" y="192" width="88" height="5" rx="1" fill="#3f3f46"/>
                    <rect x="496" y="228" width="128" height="28" rx="6" fill="#151517" stroke="rgba(63,63,70,0.7)"/>
                    <rect x="496" y="268" width="128" height="28" rx="6" fill="#151517" stroke="rgba(63,63,70,0.7)"/>
                    <rect x="496" y="308" width="60" height="22" rx="5" fill="#1a1a1d" stroke="rgba(63,63,70,0.8)"/>
                    <rect x="564" y="308" width="60" height="22" rx="5" fill="#1f1610" stroke="rgba(255,138,61,0.35)"/>
                  </svg>

                  <!-- Mobile: simplified editor (canvas-focused) -->
                  <svg class="sm:hidden w-full h-full" viewBox="0 0 390 220" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
                    <rect width="390" height="220" fill="#0a0a0c"/>
                    <rect x="0" y="0" width="390" height="28" fill="#121214"/>
                    <rect x="10" y="8" width="12" height="12" rx="3" fill="#ff8a3d" opacity="0.75"/>
                    <text x="28" y="18" fill="#a1a1aa" font-size="9" font-family="ui-sans-serif, system-ui, sans-serif">OutreachGenie</text>
                    <rect x="300" y="7" width="76" height="14" rx="3" fill="#ff8a3d" opacity="0.8"/>
                    <rect x="0" y="28" width="40" height="192" fill="#0e0e10"/>
                    <rect x="10" y="42" width="20" height="20" rx="5" fill="#1a1a1d" stroke="rgba(255,138,61,0.4)"/>
                    <rect x="12" y="74" width="16" height="5" rx="1" fill="#3f3f46"/>
                    <rect x="12" y="88" width="16" height="5" rx="1" fill="#27272a"/>
                    <rect x="12" y="102" width="16" height="5" rx="1" fill="#27272a"/>
                    <rect x="40" y="28" width="350" height="192" fill="#0c0c0e"/>
                    <rect x="40" y="28" width="350" height="30" fill="#141416"/>
                    <rect x="52" y="36" width="24" height="14" rx="3" fill="#1c1c1f" stroke="rgba(63,63,70,0.8)"/>
                    <rect x="82" y="36" width="24" height="14" rx="3" fill="#1c1c1f" stroke="rgba(63,63,70,0.8)"/>
                    <rect x="118" y="36" width="48" height="14" rx="3" fill="#1f1610" stroke="rgba(255,138,61,0.4)"/>
                    <rect x="58" y="70" width="220" height="136" rx="7" fill="#121214" stroke="rgba(63,63,70,0.75)"/>
                    <rect x="74" y="84" width="28" height="8" rx="2" fill="#ff8a3d" opacity="0.35"/>
                    <rect x="74" y="102" width="140" height="8" rx="2" fill="#e4e4e7" opacity="0.85"/>
                    <rect x="74" y="116" width="100" height="5" rx="1" fill="#71717a"/>
                    <rect x="74" y="130" width="188" height="40" rx="5" fill="#18181b" stroke="rgba(63,63,70,0.8)"/>
                    <rect x="74" y="180" width="72" height="16" rx="4" fill="#ff8a3d" opacity="0.8"/>
                    <rect x="290" y="70" width="86" height="136" rx="6" fill="#111113" stroke="rgba(39,39,42,0.9)"/>
                    <rect x="300" y="84" width="66" height="6" rx="1" fill="#3f3f46"/>
                    <rect x="300" y="98" width="48" height="5" rx="1" fill="#27272a"/>
                    <rect x="300" y="118" width="66" height="32" rx="5" fill="#18181b" stroke="rgba(255,138,61,0.25)"/>
                    <rect x="300" y="162" width="66" height="22" rx="5" fill="#151517" stroke="rgba(63,63,70,0.7)"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 2. PROBLEM -->
      <section class="py-14 lg:py-16 px-6 md:px-12 lg:px-20 border-b border-zinc-800/40">
        <div class="max-w-7xl mx-auto grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div class="lg:col-span-5">
            <p class="text-[11px] uppercase tracking-[0.2em] text-zinc-500 mb-3">{{ $t('ogc_problem_eyebrow') }}</p>
            <h2 class="text-2xl sm:text-3xl lg:text-[2.15rem] font-extrabold tracking-tight mb-4">{{ $t('ogc_problem_title') }}</h2>
            <p class="text-zinc-300 leading-relaxed mb-5">{{ $t('ogc_problem_lead') }}</p>
            <ul class="space-y-2 mb-5">
              <li v-for="(item, i) in problemSources" :key="'ps'+i" class="flex gap-3 text-sm text-zinc-400">
                <span class="text-[#ff8a3d] shrink-0">—</span>
                <span>{{ item }}</span>
              </li>
            </ul>
            <p class="text-zinc-500 text-sm leading-relaxed">{{ $t('ogc_problem_closing') }}</p>
          </div>

          <div class="lg:col-span-7">
            <div class="rounded-2xl border border-zinc-800 bg-zinc-950/80 p-5 sm:p-7 overflow-hidden">
              <svg class="w-full h-auto" viewBox="0 0 560 200" role="img" :aria-label="$t('ogc_problem_visual_aria')">
                <rect width="560" height="200" fill="transparent"/>
                <text x="100" y="22" text-anchor="middle" fill="#71717a" font-size="10" letter-spacing="1.5" font-family="ui-sans-serif, system-ui, sans-serif">{{ $t('ogc_problem_viz_left') }}</text>
                <rect x="20" y="40" width="72" height="34" rx="6" fill="#18181b" stroke="rgba(63,63,70,0.9)"/>
                <text x="56" y="61" text-anchor="middle" fill="#a1a1aa" font-size="9" font-family="ui-sans-serif, system-ui, sans-serif">Sheets</text>
                <rect x="108" y="40" width="72" height="34" rx="6" fill="#18181b" stroke="rgba(63,63,70,0.9)"/>
                <text x="144" y="61" text-anchor="middle" fill="#a1a1aa" font-size="9" font-family="ui-sans-serif, system-ui, sans-serif">Email</text>
                <rect x="48" y="88" width="72" height="34" rx="6" fill="#18181b" stroke="rgba(63,63,70,0.9)"/>
                <text x="84" y="109" text-anchor="middle" fill="#a1a1aa" font-size="9" font-family="ui-sans-serif, system-ui, sans-serif">Shop</text>
                <rect x="136" y="88" width="72" height="34" rx="6" fill="#18181b" stroke="rgba(63,63,70,0.9)"/>
                <text x="172" y="109" text-anchor="middle" fill="#a1a1aa" font-size="9" font-family="ui-sans-serif, system-ui, sans-serif">Forms</text>
                <rect x="80" y="136" width="80" height="34" rx="6" fill="#18181b" stroke="rgba(63,63,70,0.9)"/>
                <text x="120" y="157" text-anchor="middle" fill="#a1a1aa" font-size="9" font-family="ui-sans-serif, system-ui, sans-serif">Tools</text>

                <path d="M 230 100 L 290 100" fill="none" stroke="rgba(255,138,61,0.55)" stroke-width="1.8" stroke-linecap="round"/>
                <polygon points="290,100 282,95 282,105" fill="#ff8a3d" opacity="0.7"/>
                <circle class="ogc-dot" r="2.4" fill="#ff8a3d">
                  <animateMotion dur="3.2s" repeatCount="indefinite" path="M 230 100 L 288 100"/>
                </circle>

                <text x="420" y="22" text-anchor="middle" fill="#ffb088" font-size="10" letter-spacing="1.5" font-family="ui-sans-serif, system-ui, sans-serif">{{ $t('ogc_problem_viz_right') }}</text>
                <rect x="320" y="42" width="200" height="128" rx="12" fill="#141416" stroke="rgba(255,138,61,0.35)"/>
                <rect x="338" y="62" width="100" height="8" rx="2" fill="#3f3f46"/>
                <rect x="338" y="82" width="164" height="6" rx="2" fill="#27272a"/>
                <rect x="338" y="98" width="140" height="6" rx="2" fill="#ff8a3d" opacity="0.45"/>
                <rect x="338" y="114" width="152" height="6" rx="2" fill="#27272a"/>
                <rect x="338" y="138" width="48" height="20" rx="5" fill="#1c1c1f" stroke="rgba(255,138,61,0.25)"/>
                <rect x="396" y="138" width="48" height="20" rx="5" fill="#1c1c1f" stroke="rgba(139,92,246,0.25)"/>
                <rect x="454" y="138" width="48" height="20" rx="5" fill="#1c1c1f" stroke="rgba(63,63,70,0.8)"/>
              </svg>
            </div>
          </div>
        </div>
      </section>

      <!-- 3. FOR WHOM -->
      <section class="py-14 lg:py-16 px-6 md:px-12 lg:px-20 bg-zinc-950 border-b border-zinc-800/40">
        <div class="max-w-7xl mx-auto grid lg:grid-cols-12 gap-8 lg:gap-12">
          <div class="lg:col-span-7">
            <p class="text-[11px] uppercase tracking-[0.2em] text-zinc-500 mb-3">{{ $t('ogc_who_eyebrow') }}</p>
            <h2 class="text-2xl sm:text-3xl lg:text-[2.15rem] font-extrabold tracking-tight mb-4">{{ $t('ogc_who_title') }}</h2>
            <p class="text-zinc-400 leading-relaxed max-w-2xl">{{ $t('ogc_who_lead') }}</p>
          </div>
          <div class="lg:col-span-5">
            <ul class="flex flex-wrap gap-2" :aria-label="$t('ogc_who_examples_aria')">
              <li
                v-for="(ex, i) in whoExamples"
                :key="i"
                class="text-sm text-zinc-300 border border-zinc-800 bg-zinc-900/40 rounded-lg px-3 py-2"
              >
                {{ ex }}
              </li>
            </ul>
          </div>
        </div>
      </section>

      <!-- 4. HOW IT SOLVES -->
      <section class="py-14 lg:py-16 px-6 md:px-12 lg:px-20 border-b border-zinc-800/40">
        <div class="max-w-7xl mx-auto">
          <div class="max-w-2xl mb-8">
            <p class="text-[11px] uppercase tracking-[0.2em] text-zinc-500 mb-3">{{ $t('ogc_solution_eyebrow') }}</p>
            <h2 class="text-2xl sm:text-3xl lg:text-[2.15rem] font-extrabold tracking-tight mb-3">{{ $t('ogc_solution_title') }}</h2>
            <p class="text-zinc-400 leading-relaxed">{{ $t('ogc_solution_lead') }}</p>
          </div>

          <ol class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-3" :aria-label="$t('ogc_solution_flow_aria')">
            <li
              v-for="(step, i) in solutionSteps"
              :key="i"
              class="relative rounded-xl border border-zinc-800 bg-zinc-900/40 px-4 py-4"
            >
              <span class="text-[10px] uppercase tracking-[0.16em] text-[#ffb088]/80">{{ String(i + 1).padStart(2, '0') }}</span>
              <p class="mt-2 text-sm font-semibold text-zinc-100 leading-snug">{{ step }}</p>
            </li>
          </ol>
          <p class="mt-6 text-sm text-zinc-500 max-w-2xl leading-relaxed">{{ $t('ogc_solution_ai') }}</p>
        </div>
      </section>

      <!-- 5. CURRENT PLATFORM -->
      <section class="py-14 lg:py-20 px-6 md:px-12 lg:px-20 bg-zinc-950 border-b border-zinc-800/40">
        <div class="max-w-7xl mx-auto">
          <div class="flex flex-wrap items-end justify-between gap-4 mb-8">
            <div class="max-w-2xl">
              <p class="text-[11px] uppercase tracking-[0.2em] text-zinc-500 mb-3">{{ $t('ogc_today_eyebrow') }}</p>
              <h2 class="text-2xl sm:text-3xl lg:text-[2.15rem] font-extrabold tracking-tight mb-3">{{ $t('ogc_today_title') }}</h2>
              <p class="text-zinc-400 leading-relaxed">{{ $t('ogc_today_lead') }}</p>
            </div>
            <span class="inline-flex text-[10px] uppercase tracking-[0.18em] text-[#ffb088] border border-[#ff8a3d]/35 bg-[#ff8a3d]/10 rounded-md px-3 py-1.5">
              {{ $t('ogc_today_badge') }}
            </span>
          </div>

          <div class="border-t border-zinc-800/80">
            <div
              v-for="(item, i) in todayItems"
              :key="i"
              class="grid sm:grid-cols-12 gap-2 sm:gap-6 py-5 border-b border-zinc-800/80"
            >
              <h3 class="sm:col-span-4 text-sm font-bold tracking-tight text-zinc-100">{{ item.title }}</h3>
              <p class="sm:col-span-8 text-sm text-zinc-400 leading-relaxed">{{ item.desc }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- 6. BUSINESS VALUE -->
      <section class="py-14 lg:py-16 px-6 md:px-12 lg:px-20 border-b border-zinc-800/40">
        <div class="max-w-7xl mx-auto">
          <div class="max-w-2xl mb-8">
            <p class="text-[11px] uppercase tracking-[0.2em] text-zinc-500 mb-3">{{ $t('ogc_value_eyebrow') }}</p>
            <h2 class="text-2xl sm:text-3xl lg:text-[2.15rem] font-extrabold tracking-tight mb-3">{{ $t('ogc_value_title') }}</h2>
            <p class="text-zinc-400 leading-relaxed">{{ $t('ogc_value_lead') }}</p>
          </div>
          <ul class="grid sm:grid-cols-2 gap-x-10 gap-y-0 border-t border-zinc-800/80 sm:border-t-0">
            <li
              v-for="(item, i) in valueItems"
              :key="i"
              class="py-3.5 border-b border-zinc-800/80 flex gap-3 items-baseline"
            >
              <span class="text-[#ff8a3d] shrink-0">—</span>
              <p class="text-sm sm:text-base text-zinc-200 leading-snug">{{ item }}</p>
            </li>
          </ul>
        </div>
      </section>

      <!-- 7. WHAT WEBORO BUILT -->
      <section class="py-14 lg:py-16 px-6 md:px-12 lg:px-20 bg-zinc-950 border-b border-zinc-800/40">
        <div class="max-w-7xl mx-auto">
          <div class="max-w-2xl mb-8">
            <p class="text-[11px] uppercase tracking-[0.2em] text-zinc-500 mb-3">{{ $t('ogc_built_eyebrow') }}</p>
            <h2 class="text-2xl sm:text-3xl lg:text-[2.15rem] font-extrabold tracking-tight mb-3">{{ $t('ogc_built_title') }}</h2>
            <p class="text-zinc-400 leading-relaxed">{{ $t('ogc_built_lead') }}</p>
          </div>
          <div class="grid md:grid-cols-2 gap-4">
            <div
              v-for="(area, i) in builtAreas"
              :key="i"
              class="rounded-xl border border-zinc-800 bg-zinc-900/30 px-5 py-5"
            >
              <h3 class="text-base font-bold tracking-tight mb-2">{{ area.title }}</h3>
              <p class="text-sm text-zinc-400 leading-relaxed">{{ area.desc }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- 8. PRODUCT / SYSTEM MAP -->
      <section class="py-14 lg:py-20 px-6 md:px-12 lg:px-20 border-b border-zinc-800/40 overflow-hidden">
        <div class="max-w-7xl mx-auto">
          <div class="max-w-2xl mb-8">
            <p class="text-[11px] uppercase tracking-[0.2em] text-zinc-500 mb-3">{{ $t('ogc_map_eyebrow') }}</p>
            <h2 class="text-2xl sm:text-3xl lg:text-[2.15rem] font-extrabold tracking-tight mb-3">{{ $t('ogc_map_title') }}</h2>
            <p class="text-zinc-400 leading-relaxed">{{ $t('ogc_map_lead') }}</p>
          </div>

          <div class="rounded-2xl border border-zinc-800 bg-[#0c0c0e] p-4 sm:p-6 lg:p-8">
            <svg class="hidden md:block w-full h-auto" viewBox="0 0 700 180" role="img" :aria-label="$t('ogc_map_aria')">
              <defs>
                <linearGradient id="ogcMapLine" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stop-color="#ff8a3d" stop-opacity="0.25"/>
                  <stop offset="100%" stop-color="#ff8a3d" stop-opacity="0.55"/>
                </linearGradient>
              </defs>
              <line x1="40" y1="55" x2="660" y2="55" stroke="url(#ogcMapLine)" stroke-width="1.5"/>
              <g v-for="(node, i) in mapNodes" :key="'md'+i">
                <rect
                  :x="20 + i * 136"
                  y="28"
                  width="120"
                  height="54"
                  rx="10"
                  fill="#141416"
                  :stroke="i === 2 || i === 3 ? 'rgba(255,138,61,0.4)' : 'rgba(63,63,70,0.85)'"
                />
                <text
                  :x="80 + i * 136"
                  y="60"
                  text-anchor="middle"
                  fill="#e4e4e7"
                  font-size="11"
                  font-family="ui-sans-serif, system-ui, sans-serif"
                >{{ node }}</text>
              </g>
              <circle class="ogc-dot" r="2.5" fill="#ff8a3d">
                <animateMotion dur="6s" repeatCount="indefinite" path="M 40 55 L 660 55"/>
              </circle>
              <text x="350" y="118" text-anchor="middle" fill="#52525b" font-size="9" letter-spacing="1.4" font-family="ui-sans-serif, system-ui, sans-serif">{{ $t('ogc_map_support_label') }}</text>
              <g v-for="(sup, i) in mapSupport" :key="'sup'+i">
                <rect :x="160 + i * 130" y="130" width="110" height="32" rx="7" fill="#121214" stroke="rgba(63,63,70,0.75)"/>
                <text :x="215 + i * 130" y="150" text-anchor="middle" fill="#a1a1aa" font-size="10" font-family="ui-sans-serif, system-ui, sans-serif">{{ sup }}</text>
              </g>
            </svg>

            <div class="md:hidden space-y-4">
              <ol class="space-y-2.5" :aria-label="$t('ogc_map_aria')">
                <li v-for="(node, i) in mapNodes" :key="'mv'+i" class="flex items-center gap-3">
                  <span class="w-7 h-7 rounded-lg border border-zinc-700 bg-zinc-900 flex items-center justify-center text-[10px] text-[#ffb088] tabular-nums shrink-0">
                    {{ String(i + 1).padStart(2, '0') }}
                  </span>
                  <span class="flex-1 rounded-xl border border-zinc-800 bg-zinc-900/50 px-4 py-2.5 text-sm font-medium text-zinc-200">{{ node }}</span>
                </li>
              </ol>
              <p class="text-[10px] uppercase tracking-[0.16em] text-zinc-600 pt-2">{{ $t('ogc_map_support_label') }}</p>
              <ul class="flex flex-wrap gap-2">
                <li
                  v-for="(sup, i) in mapSupport"
                  :key="'ms'+i"
                  class="text-xs text-zinc-400 border border-zinc-800 rounded-lg px-3 py-1.5"
                >{{ sup }}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- 9. DESIGNED TO GROW / FUTURE -->
      <section class="py-14 lg:py-16 px-6 md:px-12 lg:px-20 bg-zinc-950 border-b border-zinc-800/40">
        <div class="max-w-7xl mx-auto">
          <div class="max-w-2xl mb-8">
            <div class="flex flex-wrap items-center gap-3 mb-3">
              <p class="text-[11px] uppercase tracking-[0.2em] text-zinc-500">{{ $t('ogc_future_eyebrow') }}</p>
              <span class="text-[10px] uppercase tracking-[0.14em] text-zinc-500 border border-zinc-700 rounded-md px-2.5 py-1">
                {{ $t('ogc_future_badge') }}
              </span>
            </div>
            <h2 class="text-2xl sm:text-3xl lg:text-[2.15rem] font-extrabold tracking-tight mb-4">{{ $t('ogc_future_title') }}</h2>
            <p class="text-zinc-400 leading-relaxed mb-4">{{ $t('ogc_future_lead') }}</p>
            <p class="text-sm text-zinc-500 leading-relaxed">{{ $t('ogc_future_automation') }}</p>
          </div>

          <div class="grid lg:grid-cols-12 gap-6">
            <div class="lg:col-span-5 rounded-xl border border-zinc-800 bg-zinc-900/30 p-5">
              <p class="text-[10px] uppercase tracking-[0.16em] text-zinc-500 mb-4">{{ $t('ogc_future_flow_label') }}</p>
              <ol class="space-y-2">
                <li
                  v-for="(step, i) in futureFlow"
                  :key="i"
                  class="flex items-center gap-3 text-sm text-zinc-300"
                >
                  <span class="text-[10px] text-[#ffb088]/70 tabular-nums w-5">{{ String(i + 1).padStart(2, '0') }}</span>
                  {{ step }}
                </li>
              </ol>
            </div>

            <div class="lg:col-span-7 space-y-4">
              <div class="rounded-xl border border-dashed border-zinc-700 bg-zinc-900/20 p-5">
                <p class="text-[10px] uppercase tracking-[0.16em] text-zinc-500 mb-2">{{ $t('ogc_future_channels_label') }}</p>
                <p class="text-sm text-zinc-300 mb-1">{{ $t('ogc_future_channels') }}</p>
                <p class="text-xs text-zinc-600">{{ $t('ogc_future_channels_note') }}</p>
              </div>
              <div class="rounded-xl border border-dashed border-zinc-700 bg-zinc-900/20 p-5">
                <p class="text-[10px] uppercase tracking-[0.16em] text-zinc-500 mb-2">{{ $t('ogc_future_int_label') }}</p>
                <p class="text-sm text-zinc-300 mb-2">{{ $t('ogc_future_integrations') }}</p>
                <p class="text-xs text-zinc-500 leading-relaxed">{{ $t('ogc_future_mailbox_note') }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 10. WEBORO PROOF -->
      <section class="py-14 lg:py-16 px-6 md:px-12 lg:px-20 border-b border-zinc-800/40">
        <div class="max-w-7xl mx-auto grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div class="lg:col-span-7">
            <p class="text-[11px] uppercase tracking-[0.2em] text-[#ffb088]/85 mb-3">{{ $t('ogc_proof_eyebrow') }}</p>
            <h2 class="text-2xl sm:text-3xl font-extrabold tracking-tight mb-4">{{ $t('ogc_proof_title') }}</h2>
            <p class="text-zinc-300 leading-relaxed mb-3">{{ $t('ogc_proof_lead') }}</p>
            <p class="text-zinc-500 text-sm leading-relaxed">{{ $t('ogc_proof_note') }}</p>
          </div>
          <div class="lg:col-span-5">
            <ul class="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-5 space-y-3" :aria-label="$t('ogc_proof_caps_aria')">
              <li
                v-for="(item, i) in proofSignals"
                :key="i"
                class="flex items-center gap-3 text-sm text-zinc-300"
              >
                <span class="w-1.5 h-1.5 rounded-full bg-[#ff8a3d] shrink-0" aria-hidden="true"></span>
                {{ item }}
              </li>
            </ul>
          </div>
        </div>
      </section>

      <!-- 11. DUAL FINAL CTA -->
      <section class="relative py-20 lg:py-24 px-6 md:px-12 lg:px-20 overflow-hidden">
        <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_50%_0%,rgba(255,138,61,0.1),transparent_55%)]" aria-hidden="true"></div>
        <div class="relative z-10 max-w-5xl mx-auto grid md:grid-cols-2 gap-6 lg:gap-8">
          <div class="rounded-2xl border border-zinc-700/80 bg-zinc-950/70 p-7 sm:p-8 flex flex-col">
            <p class="text-[11px] uppercase tracking-[0.18em] text-[#ffb088]/85 mb-3">{{ $t('ogc_cta_product_label') }}</p>
            <h2 class="text-xl sm:text-2xl font-extrabold tracking-tight mb-3">{{ $t('ogc_cta_product_title') }}</h2>
            <p class="text-sm text-zinc-400 leading-relaxed mb-7 flex-1">{{ $t('ogc_cta_product_desc') }}</p>
            <span
              class="inline-flex items-center justify-center px-6 py-3.5 text-sm text-zinc-500 border border-zinc-800 rounded-xl bg-zinc-900/50 cursor-default select-none"
              aria-disabled="true"
            >
              {{ $t('ogc_coming_soon') }}
            </span>
          </div>

          <div class="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-7 sm:p-8 flex flex-col">
            <p class="text-[11px] uppercase tracking-[0.18em] text-zinc-500 mb-3">{{ $t('ogc_cta_weboro_label') }}</p>
            <h2 class="text-xl sm:text-2xl font-extrabold tracking-tight mb-3">{{ $t('ogc_cta_weboro_title') }}</h2>
            <p class="text-sm text-zinc-400 leading-relaxed mb-7 flex-1">{{ $t('ogc_cta_weboro_desc') }}</p>
            <router-link
              to="/kontakt"
              class="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-zinc-700 bg-zinc-950/50 text-zinc-200 rounded-xl hover:border-[#ff8a3d]/45 hover:text-[#ffb088] transition-all"
            >
              {{ $t('cta_send_project') }}
            </router-link>
          </div>
        </div>
      </section>
    </article>

    <Footer />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import HeaderWeboro from '@/components/HeaderWeboro.vue'
import Footer from '@/components/Footer.vue'

const { tm } = useI18n()

const problemSources = computed(() => tm('ogc_problem_sources') || [])
const whoExamples = computed(() => tm('ogc_who_examples') || [])
const solutionSteps = computed(() => tm('ogc_solution_steps') || [])
const todayItems = computed(() => tm('ogc_today_items') || [])
const valueItems = computed(() => tm('ogc_value_items') || [])
const builtAreas = computed(() => tm('ogc_built_areas') || [])
const mapNodes = computed(() => tm('ogc_map_nodes') || [])
const mapSupport = computed(() => tm('ogc_map_support') || [])
const futureFlow = computed(() => tm('ogc_future_flow') || [])
const proofSignals = computed(() => tm('ogc_proof_signals') || [])
</script>

<style scoped>
.ogc-hero-grid {
  background-image:
    linear-gradient(rgba(63, 63, 70, 0.2) 1px, transparent 1px),
    linear-gradient(90deg, rgba(63, 63, 70, 0.2) 1px, transparent 1px);
  background-size: 28px 28px;
  mask-image: radial-gradient(ellipse 65% 55% at 75% 25%, black 20%, transparent 72%);
  opacity: 0.45;
}

.ogc-hero-media {
  aspect-ratio: 16 / 9;
  max-height: 240px;
}

@media (min-width: 640px) {
  .ogc-hero-media {
    max-height: 300px;
  }
}

@media (min-width: 1024px) {
  .ogc-hero-media {
    max-height: 380px;
  }
}

@media (max-width: 639px) {
  /* Hide denser side rails on small screens — SVG still scales cleanly */
  .ogc-hero-media {
    max-height: 160px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .ogc-dot {
    display: none;
  }
}
</style>
