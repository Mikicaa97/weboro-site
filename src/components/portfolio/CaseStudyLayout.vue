<template>
  <div class="bg-black text-white font-sans">
    <HeaderWeboro />

    <article v-if="study">
      <!-- Hero -->
      <section class="relative pt-28 lg:pt-36 pb-16 lg:pb-20 px-6 md:px-12 lg:px-20 border-b border-zinc-800/80 overflow-hidden">
        <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_75%_15%,rgba(255,138,61,0.08),transparent_60%)]" aria-hidden="true"></div>
        <div class="relative z-10 max-w-6xl mx-auto">
          <nav class="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-8 flex flex-wrap items-center gap-2">
            <router-link to="/" class="hover:text-zinc-300 transition-colors">{{ $t('nav_home') }}</router-link>
            <span class="opacity-40">/</span>
            <router-link to="/portfolio" class="hover:text-zinc-300 transition-colors">{{ $t('nav_portfolio') }}</router-link>
            <span class="opacity-40">/</span>
            <span class="text-zinc-300 normal-case tracking-normal">{{ study.title }}</span>
          </nav>

          <div class="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            <div class="lg:col-span-7 space-y-5">
              <p class="text-[11px] uppercase tracking-[0.18em] text-zinc-500">{{ study.typeLabel }}</p>
              <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05]">
                {{ study.title }}
              </h1>
              <p class="text-lg sm:text-xl text-zinc-300 leading-relaxed max-w-2xl">
                {{ study.positioning }}
              </p>
              <p class="text-base text-zinc-400 leading-relaxed max-w-2xl">
                {{ study.lead }}
              </p>
              <div class="flex flex-wrap items-center gap-3 pt-2">
                <span class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-zinc-700 bg-zinc-900/60 text-xs text-zinc-300">
                  <span class="text-zinc-500 uppercase tracking-wider">{{ $t('case_status_label') }}</span>
                  <span class="text-[#ffb088]">{{ study.status }}</span>
                </span>
                <a
                  v-if="study.liveUrl"
                  :href="study.liveUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-2 text-sm text-[#ffb088] hover:text-[#ff8a3d] transition-colors"
                >
                  {{ study.liveLabel }}
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                  </svg>
                </a>
              </div>
            </div>

            <div class="lg:col-span-5">
              <div class="rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900 aspect-[16/10] flex items-center justify-center">
                <img
                  v-if="study.heroImage"
                  :src="study.heroImage"
                  :alt="study.title"
                  class="w-full h-full object-cover object-top"
                  loading="eager"
                  decoding="async"
                />
                <div v-else class="w-full h-full flex flex-col items-center justify-center gap-2 px-6 text-center bg-gradient-to-br from-zinc-900 to-zinc-950">
                  <span class="text-sm text-zinc-500">{{ $t('case_image_placeholder') }}</span>
                  <span class="text-[11px] text-zinc-600 uppercase tracking-wider">{{ study.title }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Problem -->
      <section class="py-16 lg:py-20 px-6 md:px-12 lg:px-20 border-b border-zinc-800/60">
        <div class="max-w-3xl mx-auto">
          <h2 class="text-2xl sm:text-3xl font-bold tracking-tight mb-5">{{ study.problemTitle }}</h2>
          <p class="text-zinc-300 leading-relaxed mb-5">{{ study.problemLead }}</p>
          <ul class="space-y-2.5 mb-6">
            <li
              v-for="(item, i) in study.problemItems"
              :key="i"
              class="flex gap-3 text-zinc-400 leading-relaxed"
            >
              <span class="text-[#ff8a3d] shrink-0 mt-1.5">•</span>
              <span>{{ item }}</span>
            </li>
          </ul>
          <p v-if="study.problemClosing" class="text-zinc-300 leading-relaxed">{{ study.problemClosing }}</p>
        </div>
      </section>

      <!-- Solution -->
      <section class="py-16 lg:py-20 px-6 md:px-12 lg:px-20 bg-zinc-950 border-b border-zinc-800/60">
        <div class="max-w-3xl mx-auto">
          <h2 class="text-2xl sm:text-3xl font-bold tracking-tight mb-5">{{ study.solutionTitle }}</h2>
          <p class="text-zinc-300 leading-relaxed mb-5">{{ study.solutionText }}</p>
          <p v-if="study.solutionNote" class="text-zinc-500 text-sm leading-relaxed border-l-2 border-[#ff8a3d]/40 pl-4">
            {{ study.solutionNote }}
          </p>
        </div>
      </section>

      <!-- Business value + Delivered -->
      <section class="py-16 lg:py-20 px-6 md:px-12 lg:px-20 border-b border-zinc-800/60">
        <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <h2 class="text-2xl sm:text-3xl font-bold tracking-tight mb-6">{{ study.valueTitle }}</h2>
            <ul class="space-y-3">
              <li
                v-for="(item, i) in study.valueItems"
                :key="i"
                class="flex gap-3 text-zinc-300 leading-relaxed"
              >
                <span class="text-[#ff8a3d] shrink-0">—</span>
                <span>{{ item }}</span>
              </li>
            </ul>
          </div>
          <div>
            <h2 class="text-2xl sm:text-3xl font-bold tracking-tight mb-6">{{ study.deliveredTitle }}</h2>
            <ul class="space-y-3">
              <li
                v-for="(item, i) in study.deliveredItems"
                :key="i"
                class="flex gap-3 text-zinc-300 leading-relaxed"
              >
                <span class="text-[#ff8a3d] shrink-0">—</span>
                <span>{{ item }}</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <!-- What this shows -->
      <section class="py-16 lg:py-20 px-6 md:px-12 lg:px-20 bg-zinc-950 border-b border-zinc-800/60">
        <div class="max-w-3xl mx-auto">
          <h2 class="text-2xl sm:text-3xl font-bold tracking-tight mb-4">{{ study.showsTitle }}</h2>
          <p class="text-zinc-300 leading-relaxed mb-8">{{ study.showsLead }}</p>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="(cap, i) in study.showsItems"
              :key="i"
              class="px-3 py-1.5 rounded-lg border border-zinc-800 bg-zinc-900/50 text-sm text-zinc-400"
            >{{ cap }}</span>
          </div>
        </div>
      </section>

      <!-- Gallery (optional) -->
      <section
        v-if="study.gallery && study.gallery.length > 1"
        class="py-16 lg:py-20 px-6 md:px-12 lg:px-20 border-b border-zinc-800/60"
      >
        <div class="max-w-6xl mx-auto">
          <h2 class="text-2xl sm:text-3xl font-bold tracking-tight mb-8">{{ $t('case_gallery_title') }}</h2>
          <div class="grid sm:grid-cols-2 gap-5">
            <div
              v-for="(src, i) in study.gallery"
              :key="i"
              class="rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900 aspect-video"
            >
              <img :src="src" :alt="study.title + ' ' + (i + 1)" class="w-full h-full object-cover" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <!-- Tags + CTA -->
      <section class="py-20 lg:py-24 px-6 md:px-12 lg:px-20">
        <div class="max-w-3xl mx-auto text-center">
          <div class="flex flex-wrap justify-center gap-2 mb-10">
            <span
              v-for="(tag, i) in study.tags"
              :key="i"
              class="text-[11px] px-2.5 py-1 rounded-full border border-zinc-700 text-zinc-400"
            >{{ tag }}</span>
          </div>
          <h2 class="text-2xl sm:text-3xl font-bold tracking-tight mb-4">{{ study.ctaTitle }}</h2>
          <p class="text-zinc-400 leading-relaxed mb-8 max-w-xl mx-auto">{{ study.ctaDesc }}</p>
          <div class="flex flex-col sm:flex-row items-center justify-center gap-3">
            <router-link
              to="/kontakt"
              class="inline-flex px-8 py-3.5 bg-[#ff8a3d] text-zinc-950 font-semibold rounded-xl hover:bg-[#ff9d5c] transition"
            >
              {{ study.ctaButton }}
            </router-link>
            <router-link
              to="/portfolio"
              class="inline-flex px-6 py-3.5 text-sm text-zinc-400 hover:text-[#ffb088] transition-colors"
            >
              ← {{ $t('case_back_portfolio') }}
            </router-link>
          </div>
        </div>
      </section>
    </article>

    <div v-else class="pt-32 pb-24 px-6 text-center">
      <p class="text-zinc-400 mb-6">Case study not found.</p>
      <router-link to="/portfolio" class="text-[#ffb088] hover:underline">{{ $t('case_back_portfolio') }}</router-link>
    </div>

    <Footer />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import HeaderWeboro from '@/components/HeaderWeboro.vue'
import Footer from '@/components/Footer.vue'

const props = defineProps({
  slug: {
    type: String,
    required: true,
  },
})

const { tm } = useI18n()

const study = computed(() => {
  const all = tm('case_studies')
  if (!all || typeof all !== 'object') return null
  return all[props.slug] || null
})
</script>
