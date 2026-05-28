<template>
  <div class="bg-black text-white font-sans">
    <HeaderWeboro />

    <section class="relative pt-28 lg:pt-36 pb-20 lg:pb-28 px-6 md:px-12 lg:px-20 overflow-hidden border-b border-zinc-800/80">
      <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_72%_55%_at_72%_18%,rgba(250,204,21,0.08),transparent_60%)]" aria-hidden="true"></div>
      <div class="relative z-10 max-w-7xl mx-auto">
        <nav class="text-xs uppercase tracking-[0.22em] text-zinc-500 mb-8 flex items-center gap-2">
          <router-link to="/" class="hover:text-zinc-300 transition-colors">{{ $t('nav_home') }}</router-link>
          <span class="opacity-40">/</span>
          <span class="text-zinc-300">{{ $t('nav_career') }}</span>
        </nav>
        <h1 class="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight mb-5">{{ $t('career_full_title') }}</h1>
        <p class="text-lg md:text-xl text-zinc-300 max-w-3xl">{{ $t('career_full_lead') }}</p>
      </div>
    </section>

    <section class="py-20 px-6 md:px-20 bg-zinc-950 border-b border-zinc-800/40">
      <div class="max-w-5xl mx-auto text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">{{ $t('career_full_why_title') }}</h2>
        <p class="text-zinc-300 text-lg leading-relaxed max-w-3xl mx-auto">
          {{ $t('career_full_why_desc') }}
        </p>
      </div>
      <div class="max-w-6xl mx-auto mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="(item, i) in tm('career_full_why_cards')" :key="i" class="bg-zinc-900 p-6 rounded-xl border border-zinc-800 text-left">
          <h3 class="text-yellow-300 font-semibold text-lg mb-2">{{ item.title }}</h3>
          <p class="text-zinc-400 text-sm">{{ item.desc }}</p>
        </div>
      </div>
    </section>

    <section class="py-24 px-6 md:px-20">
      <h2 class="text-3xl md:text-4xl font-bold text-center mb-12">{{ $t('career_full_open_title') }}</h2>

      <div class="max-w-4xl mx-auto">
        <div
          class="bg-zinc-900 border border-zinc-800 p-8 rounded-xl text-center"
        >
          <p class="text-xl sm:text-2xl font-semibold text-yellow-300 mb-3">{{ $t('career_full_no_open_title') }}</p>
          <p class="text-zinc-300 text-sm sm:text-base leading-relaxed mb-6 max-w-2xl mx-auto">{{ $t('career_full_no_open_desc') }}</p>
          <router-link to="/kontakt" class="inline-flex px-6 py-3 bg-yellow-400 text-black font-semibold rounded-full hover:bg-yellow-300 transition">
            {{ $t('career_full_no_open_button') }}
          </router-link>
        </div>
      </div>
    </section>

    <section class="py-20 text-center px-6 md:px-20 bg-zinc-950 border-t border-zinc-800/40">
      <h2 class="text-3xl font-bold mb-4">{{ $t('career_full_cta_title') }}</h2>
      <p class="text-zinc-300 mb-8 max-w-2xl mx-auto">{{ $t('career_full_cta_desc') }}</p>
      <router-link
          to="/kontakt"
          class="px-8 py-4 bg-yellow-400 text-black rounded-full font-semibold hover:bg-yellow-300 transition"
      >
        {{ $t('career_full_cta_button') }}
      </router-link>
    </section>

    <Footer />
  </div>
</template>

<script setup>
import HeaderWeboro from '@/components/HeaderWeboro.vue'
import Footer from '@/components/Footer.vue'
import { useI18n } from 'vue-i18n'

const { tm } = useI18n()
</script>
