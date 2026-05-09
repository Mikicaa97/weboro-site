<template>
  <div class="bg-black text-white font-sans min-h-screen flex flex-col">
    <HeaderWeboro/>

    <main class="flex-1 pt-24 pb-12">
      <div class="max-w-6xl mx-auto px-6 lg:px-8 mb-6">
        <nav class="flex items-center gap-2 text-xs sm:text-sm text-zinc-500" aria-label="Breadcrumb">
          <router-link to="/" class="hover:text-yellow-400 transition-colors">{{ $t('og_breadcrumb_home') }}</router-link>
          <span class="text-zinc-700">/</span>
          <span class="text-zinc-300">{{ $t('og_breadcrumb_outreachgenie') }}</span>
        </nav>
      </div>

      <!-- HERO -->
      <section class="relative overflow-hidden">
        <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_70%_20%,rgba(250,204,21,0.10),transparent_70%)]"></div>
        <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_60%_at_15%_85%,rgba(255,140,0,0.06),transparent_70%)]"></div>

        <div class="relative max-w-6xl mx-auto px-6 lg:px-8 py-12 lg:py-20">
          <div class="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div class="lg:col-span-7 space-y-6">
              <div class="flex flex-wrap items-center gap-3">
                <span class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-400/10 border border-yellow-400/30 text-yellow-300 text-xs font-semibold uppercase tracking-wider">
                  <span class="w-1.5 h-1.5 rounded-full bg-yellow-400"></span>
                  {{ $t('og_flagship_badge') }}
                </span>
                <span class="text-xs uppercase tracking-[0.2em] text-zinc-500">{{ $t('og_hub_eyebrow') }}</span>
              </div>

              <h1 class="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight tracking-tight">
                {{ $t('og_hub_title') }}
              </h1>

              <p class="text-base sm:text-lg lg:text-xl text-zinc-300 leading-relaxed max-w-2xl">
                {{ $t('og_hub_lead') }}
              </p>

              <div class="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
                <a
                    href="https://outreachgenie.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-yellow-400 text-black font-semibold rounded-xl hover:bg-yellow-300 hover:shadow-[0_0_30px_-5px_rgba(250,204,21,0.6)] transition-all"
                >
                  {{ $t('og_section_cta_demo') }}
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                  </svg>
                </a>
                <router-link
                    to="/kontakt"
                    class="inline-flex items-center justify-center px-6 py-3.5 border border-zinc-700 bg-zinc-900/40 backdrop-blur-sm text-zinc-200 rounded-xl hover:border-yellow-400/60 hover:text-yellow-400 hover:bg-zinc-900/70 transition-all"
                >
                  {{ $t('og_cta_start_project') }}
                </router-link>
              </div>
            </div>

            <div class="lg:col-span-5 relative">
              <div class="absolute -inset-6 bg-gradient-to-tr from-yellow-400/20 via-amber-500/10 to-transparent blur-3xl rounded-[3rem] pointer-events-none"></div>
              <div class="relative rounded-2xl overflow-hidden border border-zinc-700/70 bg-zinc-900 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)]">
                <div class="flex items-center gap-2 px-4 py-3 bg-zinc-950/90 border-b border-zinc-800">
                  <span class="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
                  <span class="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
                  <span class="w-2.5 h-2.5 rounded-full bg-green-500/80"></span>
                  <div class="flex-1 mx-3 px-3 py-1 rounded bg-zinc-800/70 text-[11px] text-zinc-500 truncate">outreachgenie.com</div>
                </div>
                <img
                    src="/OutreachGenieHero.png"
                    alt="OutreachGenie dashboard"
                    class="w-full h-auto object-cover block"
                    loading="eager"
                />
              </div>
            </div>
          </div>

          <!-- Stats -->
          <dl class="mt-14 lg:mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-zinc-800/70 border border-zinc-800/70 rounded-2xl overflow-hidden">
            <div
                v-for="(stat, i) in tm('og_stats')"
                :key="i"
                class="bg-zinc-950 px-6 py-8 text-center"
            >
              <dt class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-yellow-400 leading-none">{{ stat.value }}</dt>
              <dd class="mt-3 text-xs sm:text-sm text-zinc-400">{{ stat.label }}</dd>
            </div>
          </dl>
        </div>
      </section>

      <!-- ABOUT + AUDIENCE -->
      <section class="py-12 lg:py-16">
        <div class="max-w-6xl mx-auto px-6 lg:px-8 grid lg:grid-cols-12 gap-10 lg:gap-12">
          <div class="lg:col-span-7 space-y-6">
            <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">
              {{ $t('og_hub_about_title') }}
            </h2>
            <p class="text-zinc-300 text-base sm:text-lg leading-relaxed">
              {{ $t('og_hub_about_text') }}
            </p>
          </div>
          <div class="lg:col-span-5">
            <div class="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 lg:p-8">
              <p class="text-xs uppercase tracking-[0.22em] text-zinc-500 mb-4">{{ $t('og_hub_audience_title') }}</p>
              <ul class="space-y-3">
                <li
                    v-for="(item, i) in tm('og_hub_audience')"
                    :key="i"
                    class="flex gap-3 text-sm text-zinc-300"
                >
                  <span class="text-yellow-400 shrink-0">▸</span>
                  <span>{{ item }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- MODULES GRID -->
      <section class="py-12 lg:py-16 bg-zinc-950/60">
        <div class="max-w-6xl mx-auto px-6 lg:px-8">
          <div class="max-w-2xl mb-10">
            <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-3">{{ $t('og_modules_title') }}</h2>
            <p class="text-zinc-400 text-base sm:text-lg leading-relaxed">{{ $t('og_modules_subtitle') }}</p>
          </div>

          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            <router-link
                v-for="(mod, i) in tm('og_modules')"
                :key="i"
                :to="mod.link"
                class="group bg-zinc-900/80 border border-zinc-800 hover:border-yellow-400/40 rounded-2xl p-6 lg:p-7 transition-all hover:bg-zinc-900 hover:shadow-[0_0_30px_-10px_rgba(250,204,21,0.3)] block"
            >
              <div class="flex items-start justify-between gap-4 mb-4">
                <div class="text-3xl">{{ mod.icon }}</div>
                <span class="text-[10px] uppercase tracking-wider px-2 py-1 rounded-full border border-zinc-700 text-zinc-500 group-hover:text-yellow-400 group-hover:border-yellow-400/40 transition-colors whitespace-nowrap">
                  {{ mod.tag }}
                </span>
              </div>
              <h3 class="text-xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">{{ mod.title }}</h3>
              <p class="text-sm text-zinc-400 leading-relaxed mb-5">{{ mod.desc }}</p>
              <div class="flex items-center gap-2 text-sm font-medium text-yellow-400/70 group-hover:text-yellow-400 transition-colors">
                <span>Otvori modul</span>
                <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                </svg>
              </div>
            </router-link>
          </div>
        </div>
      </section>

      <!-- WHAT MAKES IT SPECIAL -->
      <section class="py-12 lg:py-16">
        <div class="max-w-6xl mx-auto px-6 lg:px-8">
          <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-10">
            {{ $t('og_hub_special_title') }}
          </h2>
          <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            <article
                v-for="(item, i) in tm('og_hub_special')"
                :key="i"
                class="bg-zinc-900/70 border border-zinc-800 rounded-2xl p-6 hover:border-yellow-400/30 hover:bg-zinc-900 transition-all"
            >
              <h3 class="text-base font-bold text-yellow-400 mb-2">{{ item.title }}</h3>
              <p class="text-sm text-zinc-400 leading-relaxed">{{ item.desc }}</p>
            </article>
          </div>
        </div>
      </section>

      <!-- STATUS -->
      <section class="py-12 lg:py-16 bg-zinc-950/60">
        <div class="max-w-6xl mx-auto px-6 lg:px-8 grid lg:grid-cols-12 gap-10">
          <div class="lg:col-span-5">
            <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-3">
              {{ $t('og_hub_status_title') }}
            </h2>
            <p class="text-zinc-400 text-sm leading-relaxed">
              Realan presek razvoja modula — bez marketinškog uglađivanja.
            </p>
          </div>
          <div class="lg:col-span-7 space-y-4">
            <div
                v-for="(row, i) in tm('og_hub_status')"
                :key="i"
                class="space-y-1.5"
            >
              <div class="flex justify-between text-sm">
                <span class="text-zinc-200">{{ row.label }}</span>
                <span class="text-yellow-400 font-semibold">{{ row.value }}%</span>
              </div>
              <div class="h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                <div
                    class="h-full bg-gradient-to-r from-yellow-500 to-yellow-300 rounded-full transition-all"
                    :style="{ width: row.value + '%' }"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ROADMAP -->
      <section class="py-12 lg:py-16">
        <div class="max-w-6xl mx-auto px-6 lg:px-8">
          <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-8">
            {{ $t('og_hub_roadmap_title') }}
          </h2>
          <ul class="space-y-3">
            <li
                v-for="(item, i) in tm('og_hub_roadmap')"
                :key="i"
                class="flex gap-4 items-start bg-zinc-900/60 border border-zinc-800 rounded-xl p-5"
            >
              <span class="shrink-0 w-7 h-7 rounded-full bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 text-xs font-bold flex items-center justify-center mt-0.5">
                {{ i + 1 }}
              </span>
              <span class="text-zinc-300 text-sm sm:text-base leading-relaxed">{{ item }}</span>
            </li>
          </ul>
        </div>
      </section>

      <!-- TECH STACK -->
      <section class="py-12 lg:py-16 bg-zinc-950/60">
        <div class="max-w-6xl mx-auto px-6 lg:px-8">
          <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-10">
            {{ $t('og_hub_tech_title') }}
          </h2>
          <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
            <div
                v-for="(group, i) in tm('og_hub_tech')"
                :key="i"
                class="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-6"
            >
              <p class="text-xs uppercase tracking-[0.22em] text-yellow-400/80 mb-4">{{ group.group }}</p>
              <ul class="space-y-2">
                <li
                    v-for="(item, j) in group.items"
                    :key="j"
                    class="text-sm text-zinc-300 leading-relaxed"
                >
                  {{ item }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- BOTTOM CTA -->
      <section class="py-12 lg:py-20">
        <div class="max-w-6xl mx-auto px-6 lg:px-8">
          <div class="relative rounded-3xl overflow-hidden border border-yellow-400/20 bg-gradient-to-br from-zinc-900 via-zinc-900 to-zinc-950 px-6 sm:px-10 lg:px-16 py-12 lg:py-16">
            <div class="absolute -top-20 -right-20 w-96 h-96 bg-yellow-400/10 blur-3xl rounded-full pointer-events-none"></div>
            <div class="relative grid lg:grid-cols-12 gap-8 items-center">
              <div class="lg:col-span-8">
                <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-3">
                  {{ $t('og_section_cta_inquiry_title') }}
                </h2>
                <p class="text-zinc-400 text-base sm:text-lg leading-relaxed max-w-2xl">
                  {{ $t('og_section_cta_inquiry_desc') }}
                </p>
              </div>
              <div class="lg:col-span-4 flex lg:justify-end">
                <router-link
                    to="/kontakt"
                    class="inline-flex items-center justify-center gap-2 px-8 py-4 bg-yellow-400 text-black font-semibold rounded-xl hover:bg-yellow-300 transition-all w-full lg:w-auto"
                >
                  {{ $t('og_section_cta_inquiry_btn') }}
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                  </svg>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

    <Footer/>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import HeaderWeboro from '@/components/HeaderWeboro.vue'
import Footer from '@/components/Footer.vue'

const { tm } = useI18n()
</script>
