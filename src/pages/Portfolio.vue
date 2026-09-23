<template>
  <div class="bg-black text-white font-sans">
    <HeaderWeboro />

    <!-- HERO -->
    <section class="relative pt-28 lg:pt-32 pb-10 lg:pb-12 px-6 md:px-12 lg:px-20 overflow-hidden border-b border-zinc-800/50">
      <div class="pointer-events-none absolute inset-0 pf-hero-grid" aria-hidden="true"></div>
      <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_48%_42%_at_74%_14%,rgba(255,138,61,0.08),transparent_58%)]" aria-hidden="true"></div>

      <div class="relative z-10 max-w-7xl mx-auto">
        <nav class="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-8 flex items-center gap-2">
          <router-link to="/" class="hover:text-zinc-300 transition-colors">{{ $t('nav_home') }}</router-link>
          <span class="opacity-40">/</span>
          <span class="text-zinc-400">{{ $t('nav_portfolio') }}</span>
        </nav>
        <h1 class="text-[2.1rem] sm:text-4xl lg:text-[2.75rem] font-extrabold tracking-tight leading-[1.08] mb-5 max-w-3xl">
          {{ $t('portfolio_v2_title') }}
        </h1>
        <p class="text-base sm:text-lg text-zinc-300 leading-relaxed max-w-2xl mb-8">
          {{ $t('portfolio_v2_lead') }}
        </p>

        <!-- TABS -->
        <div
          role="tablist"
          :aria-label="$t('nav_portfolio')"
          class="flex flex-wrap gap-2 overflow-x-auto pb-1 -mx-1 px-1"
        >
          <button
            v-for="tab in tabs"
            :id="`pf-tab-${tab.id}`"
            :key="tab.id"
            type="button"
            role="tab"
            :aria-selected="activeTab === tab.id"
            :aria-controls="`pf-panel-${tab.id}`"
            :tabindex="activeTab === tab.id ? 0 : -1"
            class="shrink-0 min-h-[44px] px-4 sm:px-5 py-2.5 rounded-xl text-sm font-medium border transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff8a3d]"
            :class="
              activeTab === tab.id
                ? 'bg-[#ff8a3d] text-zinc-950 border-[#ff8a3d]'
                : 'border-zinc-700 text-zinc-300 hover:border-[#ff8a3d]/45 hover:text-[#ffb088] bg-zinc-950/40'
            "
            @click="activeTab = tab.id"
            @keydown="onTabKeydown($event, tab.id)"
          >
            {{ $t(tab.labelKey) }}
          </button>
        </div>
      </div>
    </section>

    <!-- PROJECTS — keep all in DOM for SEO -->
    <section class="py-12 lg:py-16 px-6 md:px-12 lg:px-20 border-b border-zinc-800/40">
      <div class="max-w-7xl mx-auto space-y-10 lg:space-y-12">
        <!-- OUTREACHGENIE -->
        <article
          v-show="showProduct"
          id="pf-panel-product"
          role="tabpanel"
          aria-labelledby="pf-tab-product"
          class="pf-fade"
        >
          <p class="text-[11px] uppercase tracking-[0.2em] text-[#ffb088]/85 mb-5">{{ $t('portfolio_type_product') }}</p>
          <div class="group grid lg:grid-cols-12 gap-0 items-stretch rounded-2xl border border-zinc-700/80 bg-zinc-950/60 overflow-hidden transition hover:border-[#ff8a3d]/30">
            <div class="lg:col-span-7 relative h-48 sm:h-64 lg:h-auto lg:min-h-[300px] bg-[#0a0a0c] overflow-hidden">
              <OgProductVisual class="absolute inset-0 pf-visual-hover" :aria-label="$t('portfolio_v2_og_visual_aria')" />
            </div>
            <div class="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-center">
              <h2 class="text-2xl sm:text-3xl font-extrabold tracking-tight mb-3">OutreachGenie</h2>
              <div class="flex flex-wrap gap-2 mb-4">
                <span
                  v-for="(tag, i) in ogTags"
                  :key="i"
                  class="text-[11px] px-2.5 py-1 rounded-lg border border-zinc-800 text-zinc-400"
                >{{ tag }}</span>
              </div>
              <p class="text-sm sm:text-base text-zinc-300 leading-relaxed mb-6">{{ $t('portfolio_v2_og_desc') }}</p>
              <div class="flex flex-col sm:flex-row sm:items-center gap-3 mt-auto">
                <router-link
                  to="/portfolio/outreachgenie"
                  class="inline-flex items-center justify-center px-6 py-3 bg-[#ff8a3d] text-zinc-950 font-semibold rounded-xl hover:bg-[#ff9d5c] transition-all"
                >
                  {{ $t('portfolio_v2_view_case') }}
                </router-link>
                <span
                  class="inline-flex items-center justify-center px-4 py-2.5 text-sm text-zinc-500 border border-zinc-800 rounded-xl bg-zinc-900/40 cursor-default select-none"
                  aria-disabled="true"
                >
                  {{ $t('portfolio_v2_coming_soon') }}
                </span>
              </div>
            </div>
          </div>
        </article>

        <!-- CLIENT WORK -->
        <div
          v-show="showClient"
          id="pf-panel-client"
          role="tabpanel"
          aria-labelledby="pf-tab-client"
          class="pf-fade"
        >
          <div class="mb-6" v-if="activeTab !== 'product'">
            <p class="text-[11px] uppercase tracking-[0.2em] text-zinc-500 mb-2">{{ $t('portfolio_type_client') }}</p>
            <h2 class="text-xl sm:text-2xl font-extrabold tracking-tight text-white" v-if="activeTab === 'client'">
              {{ $t('portfolio_v2_client_title') }}
            </h2>
          </div>

          <div class="grid md:grid-cols-2 gap-5 lg:gap-6">
            <!-- Bleki -->
            <a
              href="https://bleki.co.rs/"
              target="_blank"
              rel="noopener noreferrer"
              class="group flex flex-col rounded-2xl border border-zinc-800 bg-zinc-900/30 overflow-hidden hover:border-[#ff8a3d]/35 transition"
            >
              <div class="relative h-40 sm:h-48 bg-[#f4f4f5] overflow-hidden border-b border-zinc-800/80">
                <BlekiCatalogVisual class="absolute inset-0 pf-visual-hover" :aria-label="$t('portfolio_v2_bleki_visual_aria')" />
              </div>
              <div class="p-5 sm:p-6 flex flex-col flex-1">
                <p class="text-[11px] uppercase tracking-[0.16em] text-zinc-500 mb-2">{{ $t('portfolio_type_client') }}</p>
                <h3 class="text-xl font-bold text-white mb-3 group-hover:text-[#ffb088] transition-colors">{{ $t('portfolio_v2_bleki_title') }}</h3>
                <div class="flex flex-wrap gap-2 mb-3">
                  <span
                    v-for="(tag, i) in blekiTags"
                    :key="i"
                    class="text-[11px] px-2.5 py-1 rounded-lg border border-zinc-800 text-zinc-400"
                  >{{ tag }}</span>
                </div>
                <p class="text-sm text-zinc-400 leading-relaxed mb-5 flex-1">{{ $t('portfolio_v2_bleki_desc') }}</p>
                <span class="text-sm text-[#ffb088]">{{ $t('portfolio_v2_visit_site') }}</span>
              </div>
            </a>

            <!-- ProdajAutomobil -->
            <a
              href="https://prodajautomobil.rs/"
              target="_blank"
              rel="noopener noreferrer"
              class="group flex flex-col rounded-2xl border border-zinc-800 bg-zinc-900/30 overflow-hidden hover:border-[#ff8a3d]/35 transition"
            >
              <div class="relative h-40 sm:h-48 bg-[#0a0a0c] overflow-hidden border-b border-zinc-800/80">
                <PaLeadVisual class="absolute inset-0 pf-visual-hover" :aria-label="$t('portfolio_v2_pa_visual_aria')" />
              </div>
              <div class="p-5 sm:p-6 flex flex-col flex-1">
                <p class="text-[11px] uppercase tracking-[0.16em] text-zinc-500 mb-2">{{ $t('portfolio_type_client') }}</p>
                <h3 class="text-xl font-bold text-white mb-3 group-hover:text-[#ffb088] transition-colors">{{ $t('portfolio_v2_pa_title') }}</h3>
                <div class="flex flex-wrap gap-2 mb-3">
                  <span
                    v-for="(tag, i) in paTags"
                    :key="i"
                    class="text-[11px] px-2.5 py-1 rounded-lg border border-zinc-800 text-zinc-400"
                  >{{ tag }}</span>
                </div>
                <p class="text-sm text-zinc-400 leading-relaxed mb-5 flex-1">{{ $t('portfolio_v2_pa_desc') }}</p>
                <span class="text-sm text-[#ffb088]">{{ $t('portfolio_v2_visit_site') }}</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="relative py-20 lg:py-24 px-6 md:px-12 lg:px-20 overflow-hidden">
      <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_55%_at_50%_0%,rgba(255,138,61,0.08),transparent_55%)]" aria-hidden="true"></div>
      <div class="relative z-10 max-w-3xl mx-auto text-center">
        <h2 class="text-2xl sm:text-3xl font-extrabold tracking-tight mb-4">{{ $t('portfolio_full_cta_title') }}</h2>
        <p class="text-zinc-400 leading-relaxed mb-8 max-w-2xl mx-auto">{{ $t('portfolio_full_cta_desc') }}</p>
        <router-link
          to="/kontakt"
          class="inline-flex items-center justify-center px-8 py-3.5 bg-[#ff8a3d] text-zinc-950 font-semibold rounded-xl hover:bg-[#ff9d5c] transition-all"
        >
          {{ $t('cta_send_project') }}
        </router-link>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import HeaderWeboro from '@/components/HeaderWeboro.vue'
import Footer from '@/components/Footer.vue'
import OgProductVisual from '@/components/portfolio/visuals/OgProductVisual.vue'
import BlekiCatalogVisual from '@/components/portfolio/visuals/BlekiCatalogVisual.vue'
import PaLeadVisual from '@/components/portfolio/visuals/PaLeadVisual.vue'

const { tm } = useI18n()

const tabs = [
  { id: 'all', labelKey: 'portfolio_filter_all' },
  { id: 'product', labelKey: 'portfolio_filter_product' },
  { id: 'client', labelKey: 'portfolio_filter_client' },
]

const activeTab = ref('all')

const showProduct = computed(() => activeTab.value === 'all' || activeTab.value === 'product')
const showClient = computed(() => activeTab.value === 'all' || activeTab.value === 'client')

const ogTags = computed(() => {
  const tags = tm('portfolio_v2_og_tags')
  return Array.isArray(tags) ? tags : []
})
const blekiTags = computed(() => {
  const tags = tm('portfolio_v2_bleki_tags')
  return Array.isArray(tags) ? tags : []
})
const paTags = computed(() => {
  const tags = tm('portfolio_v2_pa_tags')
  return Array.isArray(tags) ? tags : []
})

function onTabKeydown(event, currentId) {
  const ids = tabs.map((tab) => tab.id)
  const index = ids.indexOf(currentId)
  if (index < 0) return

  let next = null
  if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
    next = ids[(index + 1) % ids.length]
  } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
    next = ids[(index - 1 + ids.length) % ids.length]
  } else if (event.key === 'Home') {
    next = ids[0]
  } else if (event.key === 'End') {
    next = ids[ids.length - 1]
  }

  if (!next) return
  event.preventDefault()
  activeTab.value = next
  requestAnimationFrame(() => {
    document.getElementById(`pf-tab-${next}`)?.focus()
  })
}
</script>

<style scoped>
.pf-hero-grid {
  background-image:
    linear-gradient(rgba(63, 63, 70, 0.16) 1px, transparent 1px),
    linear-gradient(90deg, rgba(63, 63, 70, 0.16) 1px, transparent 1px);
  background-size: 28px 28px;
  mask-image: radial-gradient(ellipse 55% 48% at 74% 18%, black 12%, transparent 70%);
  opacity: 0.32;
}

.pf-fade {
  animation: pfFade 0.28s ease;
}

.pf-visual-hover {
  transition: transform 0.45s ease;
}

.group:hover .pf-visual-hover {
  transform: scale(1.02);
}

@keyframes pfFade {
  from {
    opacity: 0.55;
    transform: translateY(4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

:deep(.pf-pulse) {
  animation: pfPulse 2.8s ease-in-out infinite;
}

@keyframes pfPulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.72;
  }
}

@media (prefers-reduced-motion: reduce) {
  .pf-fade,
  .pf-visual-hover,
  :deep(.pf-pulse) {
    animation: none !important;
    transition: none !important;
  }

  .group:hover .pf-visual-hover {
    transform: none;
  }
}
</style>
