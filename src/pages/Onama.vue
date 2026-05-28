<template>
  <div class="bg-black text-white font-sans">
    <HeaderWeboro />

    <section class="relative pt-28 lg:pt-36 pb-20 lg:pb-28 px-6 md:px-12 lg:px-20 overflow-hidden border-b border-zinc-800/80">
      <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_72%_55%_at_72%_18%,rgba(250,204,21,0.08),transparent_60%)]" aria-hidden="true"></div>
      <div class="relative z-10 max-w-7xl mx-auto">
        <nav class="text-xs uppercase tracking-[0.22em] text-zinc-500 mb-8 flex items-center gap-2">
          <router-link to="/" class="hover:text-zinc-300 transition-colors">{{ $t('nav_home') }}</router-link>
          <span class="opacity-40">/</span>
          <span class="text-zinc-300">{{ $t('nav_about') }}</span>
        </nav>
        <h1 class="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight mb-5">{{ $t('about_full_title') }}</h1>
        <p class="text-lg md:text-xl text-zinc-300 max-w-3xl">{{ $t('about_full_lead') }}</p>
        <div class="grid sm:grid-cols-3 gap-4 mt-10 max-w-4xl">
          <div class="bg-zinc-900/70 border border-zinc-800 rounded-xl p-4">
            <p class="text-[11px] uppercase tracking-[0.16em] text-zinc-500 mb-1">{{ $t('about_full_stat_1_label') }}</p>
            <p class="text-lg font-semibold text-yellow-300">{{ $t('about_full_stat_1_value') }}</p>
          </div>
          <div class="bg-zinc-900/70 border border-zinc-800 rounded-xl p-4">
            <p class="text-[11px] uppercase tracking-[0.16em] text-zinc-500 mb-1">{{ $t('about_full_stat_2_label') }}</p>
            <p class="text-lg font-semibold text-yellow-300">{{ $t('about_full_stat_2_value') }}</p>
          </div>
          <div class="bg-zinc-900/70 border border-zinc-800 rounded-xl p-4">
            <p class="text-[11px] uppercase tracking-[0.16em] text-zinc-500 mb-1">{{ $t('about_full_stat_3_label') }}</p>
            <p class="text-lg font-semibold text-yellow-300">{{ $t('about_full_stat_3_value') }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 px-6 md:px-20 bg-zinc-950 border-b border-zinc-800/40">
      <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
        <article class="bg-zinc-900 p-7 rounded-2xl border border-zinc-800">
          <p class="text-yellow-300 text-xs uppercase tracking-[0.18em] mb-2">{{ $t('about_full_mission_label') }}</p>
          <h2 class="text-2xl font-bold mb-3">{{ $t('about_full_mission_title') }}</h2>
          <p class="text-zinc-300 leading-relaxed">{{ $t('about_full_mission_desc') }}</p>
        </article>
        <article class="bg-zinc-900 p-7 rounded-2xl border border-zinc-800">
          <p class="text-yellow-300 text-xs uppercase tracking-[0.18em] mb-2">{{ $t('about_full_vision_label') }}</p>
          <h2 class="text-2xl font-bold mb-3">{{ $t('about_full_vision_title') }}</h2>
          <p class="text-zinc-300 leading-relaxed">{{ $t('about_full_vision_desc') }}</p>
        </article>
      </div>
    </section>

    <section class="py-20 px-6 md:px-20">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-bold mb-10 text-center">{{ $t('about_full_values_title') }}</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="(v, i) in tm('about_full_values')" :key="i" class="bg-zinc-900 p-6 rounded-2xl border border-zinc-800">
            <h3 class="text-yellow-300 font-semibold text-lg mb-2">{{ v.title }}</h3>
            <p class="text-zinc-400 text-sm leading-relaxed">{{ v.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 px-6 md:px-20 bg-zinc-950 border-y border-zinc-800/40">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-bold mb-10 text-center">{{ $t('about_full_capabilities_title') }}</h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <article v-for="(cap, i) in tm('about_full_capabilities')" :key="i" class="bg-zinc-900 p-6 rounded-2xl border border-zinc-800">
            <h3 class="text-yellow-300 font-semibold text-lg mb-2">{{ cap.title }}</h3>
            <p class="text-zinc-400 text-sm leading-relaxed">{{ cap.desc }}</p>
          </article>
        </div>
      </div>
    </section>

    <!-- <section class="py-20 px-6 md:px-20 bg-zinc-950 border-y border-zinc-800/40">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-bold mb-10 text-center">{{ $t('about_full_timeline_title') }}</h2>
        <div class="space-y-4">
          <div
            v-for="(step, i) in tm('about_full_timeline')"
            :key="i"
            class="bg-zinc-900 p-5 rounded-xl border border-zinc-800 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4"
          >
            <span class="text-yellow-300 font-bold text-sm sm:w-28 shrink-0">{{ step.year }}</span>
            <p class="text-zinc-300 text-sm leading-relaxed">{{ step.text }}</p>
          </div>
        </div>
      </div>
    </section> -->

    <!-- <section class="py-20 px-6 md:px-20">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-bold mb-10 text-center">{{ $t('about_full_leadership_title') }}</h2>
        <div class="grid md:grid-cols-2 gap-6">
          <article v-for="(member, i) in tm('about_full_leadership')" :key="i" class="bg-zinc-900 p-6 rounded-2xl border border-zinc-800">
            <p class="text-zinc-200 text-lg font-semibold">{{ member.name }}</p>
            <p class="text-yellow-300 text-sm mt-1 mb-3">{{ member.role }}</p>
            <p class="text-zinc-400 text-sm leading-relaxed">{{ member.bio }}</p>
          </article>
        </div>
      </div>
    </section> -->

    <section class="py-20 px-6 md:px-20 text-center">
      <h2 class="text-3xl font-bold mb-4">{{ $t('about_full_cta_title') }}</h2>
      <p class="text-zinc-300 mb-8 max-w-2xl mx-auto">{{ $t('about_full_cta_desc') }}</p>
      <router-link to="/kontakt" class="px-8 py-4 bg-yellow-400 text-black rounded-full font-semibold hover:bg-yellow-300 transition">
        {{ $t('about_full_cta_btn') }}
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
