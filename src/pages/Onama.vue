<template>
  <header-weboro/>
  <div class="bg-black text-white font-sans">

    <!-- Hero -->
    <section class="relative h-[70vh] flex flex-col justify-center items-center text-center px-6 md:px-20">
      <h1 class="pt-16 text-6xl md:text-7xl font-extrabold tracking-wide mb-4">{{$t('about_title')}}</h1>
      <p class="text-lg md:text-xl text-gray-300 max-w-2xl">
        {{$t('about_subtitle')}}
      </p>
    </section>

    <!-- Misija i vizija -->
    <section class="py-24 px-6 md:px-20 bg-zinc-950">
      <div class="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 text-center">
        <div class="bg-zinc-900 p-8 rounded-xl hover:scale-105 transition">
          <h2 class="text-2xl font-semibold mb-3 text-yellow-400">{{$t('about_mission_title')}}</h2>
          <p class="text-gray-300 leading-relaxed">
            {{$t('about_mission_desc')}}
          </p>
        </div>
        <div class="bg-zinc-900 p-8 rounded-xl hover:scale-105 transition">
          <h2 class="text-2xl font-semibold mb-3 text-yellow-400">{{$t('about_vision_title')}}</h2>
          <p class="text-gray-300 leading-relaxed">
            {{$t('about_vision_desc')}}
          </p>
        </div>
      </div>
    </section>

    <!-- Timeline -->
    <section class="py-24 px-6 md:px-20">
      <h2 class="text-4xl font-bold text-center mb-16">{{$t('about_timeline_title')}}</h2>
      <div class="relative max-w-4xl mx-auto before:absolute before:top-0 before:bottom-0 before:left-1/2 before:w-1 before:bg-zinc-800">
        <div v-for="(step,i) in tm('about_timeline')" :key="i" class="relative mb-14">
          <div class="w-1/2 pr-10 text-right" :class="i % 2 ? 'ml-auto pl-10 text-left' : ''">
            <div class="bg-zinc-900 p-6 rounded-xl shadow-lg">
              <h3 class="text-xl font-semibold text-yellow-400 mb-1">{{ step.year }}</h3>
              <p class="text-gray-300 leading-relaxed">{{ step.text }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Vrednosti -->
    <section class="py-24 px-6 md:px-20 bg-zinc-950">
      <h2 class="text-4xl font-bold text-center mb-16">{{$t('about_values_title')}}</h2>
      <div class="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        <div v-for="(v,i) in tm('about_values')" :key="i"
             class="bg-zinc-900 p-6 rounded-xl text-center hover:scale-105 transition">
          <h3 class="text-xl font-semibold text-yellow-400 mb-2">{{ v.title }}</h3>
          <p class="text-gray-300 text-sm leading-relaxed">{{ v.desc }}</p>
        </div>
      </div>
    </section>

    <!-- Tim -->
    <section class="py-24 px-6 md:px-20">
      <h2 class="text-4xl font-bold text-center mb-16">{{$t('about_team_title')}}</h2>
      <div class="max-w-4xl mx-auto grid sm:grid-cols-2 gap-10 text-center">
        <div v-for="(member,i) in tm('about_team')" :key="i"
             class="bg-zinc-900 p-6 rounded-xl hover:scale-105 transition">
          <div class="w-24 h-24 mx-auto rounded-full bg-zinc-800 mb-4"></div>
          <h3 class="text-xl font-semibold text-yellow-400">{{ member.name }}</h3>
          <p class="text-gray-300 text-sm mb-2">{{ member.role }}</p>
          <p class="text-gray-400 text-xs">{{ member.bio }}</p>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-24 px-6 md:px-20 text-center bg-zinc-950">
      <h2 class="text-3xl font-bold mb-4">{{$t('about_cta_title')}}</h2>
      <p class="text-gray-300 mb-8">{{$t('about_cta_desc')}}</p>
      <router-link to="/kontakt"
                   class="px-8 py-4 bg-yellow-400 text-black rounded-full font-semibold hover:bg-yellow-300 transition">
        {{$t('about_cta_btn')}}
      </router-link>
    </section>
  </div>
  <Footer/>
</template>


<script setup>
import HeaderWeboro from "@/components/HeaderWeboro.vue";
import Footer from "@/components/Footer.vue";
import { useI18n } from 'vue-i18n'

const { tm } = useI18n()

const timeline = [
  { year: '2022', text: 'Početak — freelancing i prvi projekti.' },
  { year: '2023', text: 'Razvijen OutreachGenie kao SaaS alat.' },
  { year: '2024', text: 'Širenje usluga na Shopify i eCommerce projekte.' },
  { year: '2025', text: 'Formiranje Weboro tima i lansiranje portfolija.' },
]

const values = [
  { title: '💡 Inovacija', desc: 'Uvek tražimo nova i bolja rešenja.' },
  { title: '⚡ Efikasnost', desc: 'Brzo isporučujemo, bez kompromisa na kvalitetu.' },
  { title: '🤝 Transparentnost', desc: 'Otvorena komunikacija sa klijentima.' },
  { title: '🎨 Dizajn', desc: 'Verujemo u snagu dobrog dizajna.' },
  { title: '📈 Rezultati', desc: 'Cilj nam je meren rast, ne samo lep izgled.' },
  { title: '💛 Posvećenost', desc: 'Tvoj uspeh je i naš uspeh.' },
]

const team = [
  { name: 'Mihailo Vlajković', role: 'Osnivač & sistem arhitekta', bio: 'Graditelj digitalnih sistema i SaaS proizvoda.' },
  { name: 'Jelena', role: 'Event & media', bio: 'Predstavljanje brendova i sadržaja pred publikom.' },
]
</script>
