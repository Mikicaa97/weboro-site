<template>
  <div class="bg-black text-white font-sans">
    <HeaderWeboro />

    <section class="relative pt-28 lg:pt-36 pb-20 lg:pb-28 px-6 md:px-12 lg:px-20 overflow-hidden border-b border-zinc-800/80">
      <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_72%_55%_at_72%_18%,rgba(251,191,36,0.09),transparent_60%)]" aria-hidden="true"></div>
      <div class="relative z-10 max-w-7xl mx-auto">
        <nav class="text-xs uppercase tracking-[0.22em] text-zinc-500 mb-8 flex items-center gap-2">
          <router-link to="/" class="hover:text-zinc-300 transition-colors">{{ $t('nav_home') }}</router-link>
          <span class="opacity-40">/</span>
          <span class="text-zinc-300">{{ $t('nav_portfolio') }}</span>
        </nav>
        <h1 class="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight mb-5">{{ $t('portfolio_full_title') }}</h1>
        <p class="text-lg md:text-xl text-zinc-300 max-w-3xl">{{ $t('portfolio_full_lead') }}</p>
      </div>
    </section>

    <section class="py-16 px-6 md:px-20 bg-zinc-950 border-b border-zinc-800/40">
      <div class="max-w-6xl mx-auto">
        <div class="grid sm:grid-cols-3 gap-4 mb-10">
          <div class="bg-zinc-900/80 border border-zinc-800 rounded-xl p-4 text-center">
            <p class="text-[11px] uppercase tracking-[0.16em] text-zinc-500 mb-1">{{ $t('portfolio_enterprise_stat_1_label') }}</p>
            <p class="text-lg font-semibold text-yellow-300">{{ $t('portfolio_enterprise_stat_1_value') }}</p>
          </div>
          <div class="bg-zinc-900/80 border border-zinc-800 rounded-xl p-4 text-center">
            <p class="text-[11px] uppercase tracking-[0.16em] text-zinc-500 mb-1">{{ $t('portfolio_enterprise_stat_2_label') }}</p>
            <p class="text-lg font-semibold text-yellow-300">{{ $t('portfolio_enterprise_stat_2_value') }}</p>
          </div>
          <div class="bg-zinc-900/80 border border-zinc-800 rounded-xl p-4 text-center">
            <p class="text-[11px] uppercase tracking-[0.16em] text-zinc-500 mb-1">{{ $t('portfolio_enterprise_stat_3_label') }}</p>
            <p class="text-lg font-semibold text-yellow-300">{{ $t('portfolio_enterprise_stat_3_value') }}</p>
          </div>
        </div>

        <div class="flex flex-wrap justify-center gap-4">
        <button
            v-for="(cat,i) in categories"
            :key="i"
            @click="activeCategory = cat"
            :class="[
              'px-5 py-2 rounded-full text-sm font-medium border transition',
              activeCategory === cat ? 'bg-yellow-400 text-black border-yellow-400' : 'border-zinc-700 hover:border-yellow-400 hover:text-yellow-300'
            ]"
        >
          {{ cat }}
        </button>
        </div>
      </div>
    </section>

    <section class="py-10 px-6 md:px-20">
      <div class="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
            v-for="(project,i) in filteredProjects"
            :key="i"
            class="bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 hover:border-yellow-400/35 hover:scale-[1.02] transition group"
        >
          <div class="h-48 bg-zinc-800/70 flex items-center justify-center text-zinc-500 text-sm group-hover:opacity-75 transition">
            {{ $t('portfolio_full_mockup') }}
          </div>
          <div class="p-6">
            <p class="text-[11px] uppercase tracking-[0.16em] text-zinc-500 mb-2">{{ project.category }}</p>
            <h3 class="text-xl font-semibold text-yellow-300 mb-2">{{ project.title }}</h3>
            <p class="text-zinc-300 text-sm mb-4">{{ project.desc }}</p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span
                v-for="(tag, tagIdx) in project.tags"
                :key="tagIdx"
                class="text-[11px] px-2.5 py-1 rounded-full border border-zinc-700 text-zinc-400"
              >
                {{ tag }}
              </span>
            </div>
            <a :href="project.link" target="_blank" class="text-sm text-yellow-300 hover:underline">{{ $t('portfolio_view_project') }}</a>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 px-6 md:px-20 bg-zinc-950 border-y border-zinc-800/40">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-3xl font-bold text-center mb-10">{{ $t('portfolio_enterprise_process_title') }}</h2>
        <div class="grid md:grid-cols-3 gap-5">
          <article v-for="(step, i) in tm('portfolio_enterprise_process')" :key="i" class="bg-zinc-900 border border-zinc-800 rounded-xl p-5">
            <p class="text-yellow-300 text-xs uppercase tracking-[0.16em] mb-2">{{ step.phase }}</p>
            <h3 class="text-white font-semibold mb-2">{{ step.title }}</h3>
            <p class="text-zinc-400 text-sm leading-relaxed">{{ step.desc }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="py-24 px-6 md:px-20 text-center bg-zinc-950 border-t border-zinc-800/40">
      <h2 class="text-3xl font-bold mb-4">{{ $t('portfolio_full_cta_title') }}</h2>
      <p class="text-zinc-300 mb-8 max-w-2xl mx-auto">{{ $t('portfolio_full_cta_desc') }}</p>
      <router-link
          to="/kontakt"
          class="px-8 py-4 bg-yellow-400 text-black rounded-full font-semibold hover:bg-yellow-300 transition"
      >
        {{ $t('portfolio_full_cta_btn') }}
      </router-link>
    </section>

    <Footer />
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import Footer from '@/components/Footer.vue'
import HeaderWeboro from '@/components/HeaderWeboro.vue'

const { tm } = useI18n()

const categories = tm('portfolio_enterprise_categories')
const activeCategory = ref(categories[0])

const projects = tm('portfolio_enterprise_projects').map(p => ({
  ...p,
  link: '#'
}))

// SaaS section is intentionally disabled for now until launch readiness.
// const saasProjects = tm('portfolio_saas_projects')

const filteredProjects = computed(() => {
  if (activeCategory.value === categories[0]) return projects
  return projects.filter(p => p.category === activeCategory.value)
})
</script>
