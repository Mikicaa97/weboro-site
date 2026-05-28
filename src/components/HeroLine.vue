<template>
  <section class="relative min-h-screen bg-[#0a0908] overflow-hidden">
    <div class="pointer-events-none absolute inset-0 mg-home-grid-bg"></div>
    <div class="pointer-events-none absolute inset-0 mg-home-grid-shimmer"></div>
    <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_75%_55%_at_72%_18%,rgba(255,138,61,0.08),transparent_58%)]"></div>
    <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_45%_at_12%_78%,rgba(250,204,21,0.04),transparent_62%)]"></div>

    <div class="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-28 pb-16 lg:pt-32 lg:pb-20">
      <div class="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        <div class="lg:col-span-7 text-left">
          <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#ff8a3d]/35 bg-[#ff8a3d]/10 text-[11px] sm:text-xs uppercase tracking-[0.18em] text-[#ffb088] mb-6">
            <span class="w-1.5 h-1.5 rounded-full bg-[#ff8a3d]"></span>
            {{ $t('hero_eyebrow') }}
          </div>

          <h1 class="text-[2.5rem] sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.05] tracking-tight mb-6 text-white" v-html="$t('hero_title')"></h1>

          <p class="text-base sm:text-lg lg:text-xl max-w-2xl text-zinc-300 mb-8 leading-relaxed">
            {{ $t('hero_desc') }}
          </p>

          <div class="flex flex-wrap gap-2 mb-8">
            <router-link
              v-for="pill in heroPills"
              :key="pill.labelKey"
              :to="pill.to"
              class="inline-flex items-center px-3 py-1.5 rounded-full border border-zinc-700/90 bg-zinc-900/60 text-xs text-zinc-300 hover:border-[#ff8a3d]/45 hover:text-[#ffb088] transition-colors"
            >
              {{ $t(pill.labelKey) }}
            </router-link>
          </div>

          <div class="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-12">
            <router-link
              to="/usluge/magento"
              class="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#ff8a3d] text-zinc-950 font-semibold rounded-xl hover:bg-[#ff9d5c] hover:shadow-[0_0_30px_-5px_rgba(255,138,61,0.45)] transition-all"
            >
              {{ $t('hero_cta_primary') }}
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
              </svg>
            </router-link>
            <router-link
              to="/kontakt"
              class="inline-flex items-center justify-center px-7 py-3.5 border border-zinc-700 bg-zinc-900/40 backdrop-blur-sm text-zinc-200 rounded-xl hover:border-[#ff8a3d]/45 hover:text-[#ffb088] hover:bg-zinc-900/70 transition-all"
            >
              {{ $t('hero_cta_secondary') }}
            </router-link>
          </div>

          <dl class="grid grid-cols-3 gap-4 sm:gap-8 max-w-xl border-t border-zinc-800/80 pt-6">
            <div>
              <dt class="text-2xl sm:text-3xl font-extrabold text-[#ff8a3d] leading-none">{{ $t('hero_metric1_value') }}</dt>
              <dd class="text-[11px] sm:text-xs text-zinc-500 mt-2 leading-snug">{{ $t('hero_metric1_label') }}</dd>
            </div>
            <div>
              <dt class="text-2xl sm:text-3xl font-extrabold text-[#ff8a3d] leading-none">{{ $t('hero_metric2_value') }}</dt>
              <dd class="text-[11px] sm:text-xs text-zinc-500 mt-2 leading-snug">{{ $t('hero_metric2_label') }}</dd>
            </div>
            <div>
              <dt class="text-2xl sm:text-3xl font-extrabold text-[#ff8a3d] leading-none">{{ $t('hero_metric3_value') }}</dt>
              <dd class="text-[11px] sm:text-xs text-zinc-500 mt-2 leading-snug">{{ $t('hero_metric3_label') }}</dd>
            </div>
          </dl>
        </div>

        <div class="lg:col-span-5 relative">
          <div class="absolute -inset-6 bg-gradient-to-tr from-[#ff8a3d]/20 via-amber-500/10 to-transparent blur-3xl rounded-[3rem] pointer-events-none"></div>

          <div class="relative rounded-2xl overflow-hidden border border-zinc-700/70 bg-zinc-900 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)]">
            <svg viewBox="0 0 360 280" class="w-full h-auto block" role="img" :aria-label="$t('hero_visual_aria')">
              <defs>
                <linearGradient id="hero-flow-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stop-color="#fbbf24" stop-opacity="0.3"/>
                  <stop offset="50%" stop-color="#ff8a3d" stop-opacity="0.6"/>
                  <stop offset="100%" stop-color="#fbbf24" stop-opacity="0.25"/>
                </linearGradient>
              </defs>

              <rect x="12" y="14" width="336" height="252" rx="12" fill="#0f0f10" stroke="rgba(63,63,70,0.75)" stroke-width="1"/>
              <text x="24" y="34" fill="#a1a1aa" font-size="9" font-family="ui-sans-serif, system-ui, sans-serif" letter-spacing="2">JASAN PUT DO PRODAJE</text>

              <path d="M 56 130 L 184 130 L 304 130" fill="none" stroke="url(#hero-flow-grad)" stroke-width="2.2" stroke-linecap="round"/>

              <g v-for="(n, i) in heroFlowNodes" :key="i">
                <rect :x="n.x" y="110" :width="n.w" height="40" rx="10" fill="#18181b" stroke="rgba(255,138,61,0.35)" stroke-width="1.1"/>
                <text :x="n.x + (n.w / 2)" y="134" text-anchor="middle" fill="#f4f4f5" font-size="10.5" font-weight="700" font-family="ui-sans-serif, system-ui, sans-serif">{{ $t(n.labelKey) }}</text>
              </g>

              <circle r="3.2" fill="#ff8a3d">
                <animateMotion dur="18s" repeatCount="indefinite" rotate="auto" path="M 56 130 L 184 130 L 304 130"/>
              </circle>

              <g font-family="ui-sans-serif, system-ui, sans-serif">
                <rect x="24" y="188" width="94" height="58" rx="9" fill="#111214" stroke="rgba(255,138,61,0.25)" stroke-width="1"/>
                <text x="71" y="208" text-anchor="middle" fill="#71717a" font-size="8.5" letter-spacing="1.3">ROAS</text>
                <text x="71" y="232" text-anchor="middle" fill="#fafafa" font-size="20" font-weight="800">3.4x</text>

                <rect x="132" y="188" width="94" height="58" rx="9" fill="#111214" stroke="rgba(255,138,61,0.25)" stroke-width="1"/>
                <text x="179" y="208" text-anchor="middle" fill="#71717a" font-size="8.5" letter-spacing="1.3">CAC</text>
                <text x="179" y="232" text-anchor="middle" fill="#fafafa" font-size="20" font-weight="800">-22%</text>

                <rect x="240" y="188" width="94" height="58" rx="9" fill="#111214" stroke="rgba(255,138,61,0.25)" stroke-width="1"/>
                <text x="287" y="208" text-anchor="middle" fill="#71717a" font-size="8.5" letter-spacing="1.3">SEO</text>
                <text x="287" y="232" text-anchor="middle" fill="#fafafa" font-size="20" font-weight="800">+41%</text>
              </g>
            </svg>
          </div>

          <div class="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 px-3 py-2 bg-zinc-900/95 backdrop-blur border border-zinc-700 rounded-lg shadow-xl flex items-center gap-2 text-xs text-zinc-200">
            <span class="relative flex h-2 w-2">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff8a3d] opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-[#ff8a3d]"></span>
            </span>
            <span class="font-medium">{{ $t('hero_visual_caption') }}</span>
          </div>
        </div>
      </div>

      <div class="mt-16 lg:mt-24 pt-8 border-t border-zinc-800/70">
        <p class="text-[11px] uppercase tracking-[0.22em] text-zinc-600 text-center mb-5">{{ $t('hero_clients_label') }}</p>
        <div class="flex flex-wrap items-center justify-center gap-x-6 sm:gap-x-10 gap-y-3 text-sm sm:text-base text-zinc-500 font-medium">
          <span class="hover:text-zinc-200 transition-colors">Adobe Commerce</span>
          <span class="text-zinc-700/80">•</span>
          <span class="hover:text-zinc-200 transition-colors">Hyva</span>
          <span class="text-zinc-700/80">•</span>
          <span class="hover:text-zinc-200 transition-colors">Google Ads</span>
          <span class="text-zinc-700/80">•</span>
          <span class="hover:text-zinc-200 transition-colors">Meta Ads</span>
          <span class="text-zinc-700/80">•</span>
          <span class="hover:text-zinc-200 transition-colors">SEO</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const heroPills = [
  { labelKey: 'hero_pill_magento', to: '/usluge/magento' },
  { labelKey: 'hero_pill_ecommerce', to: '/usluge/ecommerce' },
  { labelKey: 'hero_pill_meta', to: '/usluge/social-media' },
  { labelKey: 'hero_pill_google_ads', to: '/usluge/google-ads' },
  { labelKey: 'hero_pill_seo', to: '/usluge/seo' },
]

const heroFlowNodes = [
  { x: 24, w: 102, labelKey: 'hero_flow_traffic' },
  { x: 132, w: 112, labelKey: 'hero_flow_storefront' },
  { x: 250, w: 92, labelKey: 'hero_flow_sales' },
]
</script>

<style scoped>
.mg-home-grid-bg {
  background-image:
    linear-gradient(rgba(63, 63, 70, 0.4) 1px, transparent 1px),
    linear-gradient(90deg, rgba(63, 63, 70, 0.4) 1px, transparent 1px);
  background-size: 20px 20px;
  mask-image: radial-gradient(ellipse 85% 75% at 50% 35%, black 15%, transparent 72%);
  opacity: 0.5;
}

.mg-home-grid-shimmer {
  background: linear-gradient(
    118deg,
    transparent 38%,
    rgba(255, 138, 61, 0.045) 48%,
    rgba(250, 204, 21, 0.055) 52%,
    transparent 62%
  );
  background-size: 220% 220%;
  animation: hero-shimmer 11s ease-in-out infinite;
  opacity: 0.85;
}

@keyframes hero-shimmer {
  0%,
  100% {
    background-position: 0% 45%;
  }
  50% {
    background-position: 100% 55%;
  }
}

@media (prefers-reduced-motion: reduce) {
  .mg-home-grid-shimmer {
    animation: none !important;
  }
}
</style>
