<template>
  <div class="bg-black text-white font-sans">
    <!-- HEADER & HERO -->
    <header-weboro />
    <hero-line />

    <!-- OutreachGenie -->
    <section id="outreachgenie" v-scroll-animate class="py-24 px-6 md:px-20 scroll-mt-20">
      <div class="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <!-- Tekst -->
        <div class="md:w-1/2 text-gray-300 space-y-4">
          <img
              src="/src/assets/OutreachGenie-Logo.png"
              alt="OutreachGenie Logo"
              class="w-32 md:w-40 mb-3 mx-auto md:mx-0 object-contain"
              loading="lazy"
          />
          <p class="text-lg leading-relaxed">
            {{$t('outreach_desc1')}}
          </p>
          <p class="leading-relaxed">
            {{$t('outreach_desc2')}}
          </p>
          <a
              href="https://outreachgenie-production.up.railway.app/"
              class="inline-block mt-6 px-6 py-3 bg-yellow-400 text-black font-semibold rounded-full hover:bg-yellow-300 transition-colors"
          >
            {{$t('outreach_cta')}}
          </a>
        </div>

        <!-- Video Placeholder -->
        <div
            v-intersect="loadVideo"
            class="md:w-1/2 w-full"
        >
          <!-- Omotač za centriranje i padding -->
          <div
              class="relative w-full overflow-hidden rounded-xl shadow-xl border border-gray-700 bg-zinc-900 aspect-video flex items-center justify-center"
          >
            <!-- Ako video još nije vidljiv, prikaži placeholder -->
            <div
                v-if="!videoVisible"
                class="absolute inset-0 flex items-center justify-center text-gray-500 text-sm sm:text-base"
            >
              <span>{{ $t('outreach_video_placeholder') }}</span>
            </div>

            <!-- Kada je video spreman -->
            <div v-if="videoVisible" class="absolute inset-0">
              <iframe
                  src="https://www.loom.com/embed/dc991aaafb274ccfa76a99ee7ee042aa?sid=76c9ea96-ae12-4de0-8af1-273901e4067a"
                  frameborder="0"
                  webkitallowfullscreen
                  mozallowfullscreen
                  allowfullscreen
                  class="w-full h-full rounded-xl"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>


    <!-- Shopify -->
    <section
        id="shopify"
        v-scroll-animate
        class="py-24 px-6 md:px-20 bg-zinc-950 scroll-mt-20"
    >
      <div class="max-w-6xl mx-auto flex flex-col items-start gap-12">
        <!-- Tekst -->
        <div class="space-y-4">
          <h2 class="text-4xl font-bold text-white">{{$t('shopify_title')}}</h2>
          <p class="text-gray-300 text-lg leading-relaxed" v-html="$t('shopify_desc')"></p>
          <ul class="list-disc list-inside text-gray-400 text-base space-y-2">
            <li>{{$t('shopify_bullet1')}}</li>
            <li>{{$t('shopify_bullet2')}}</li>
            <li>{{$t('shopify_bullet3')}}</li>
          </ul>
          <a
              href="#kontakt"
              class="inline-block mt-6 px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-300 transition-colors"
          >
            {{$t('shopify_cta')}}
          </a>
        </div>

        <!-- Mockup -->
        <div class="w-full bg-zinc-800 p-6 rounded-2xl shadow-lg relative">
          <div
              class="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-sm font-semibold text-black shadow"
          >
            {{$t('shopify_badge')}}
          </div>
          <div
              class="aspect-video w-full bg-zinc-700 rounded-xl flex items-center justify-center text-gray-500 text-sm"
          >
            {{$t('shopify_mockup_placeholder')}}
          </div>
        </div>
      </div>
    </section>


    <!-- Marketing & Outreach -->
    <section v-scroll-animate class="py-24 px-6 md:px-20 bg-zinc-900 scroll-mt-20">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-16 space-y-4">
          <h2 class="text-4xl font-bold">{{$t('marketing_title')}}</h2>
          <p class="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed" v-html="$t('marketing_desc')"></p>
        </div>

        <div class="grid md:grid-cols-3 gap-8 text-gray-300">
          <div
              v-for="(item, i) in tm('marketing_cards')"
              :key="i"
              v-scroll-animate
              :style="{ transitionDelay: (i * 80) + 'ms' }"
              class="bg-zinc-800 p-6 rounded-xl shadow hover:shadow-lg hover:scale-[1.02] transition-transform transition-colors"
          >
            <h3 class="text-xl font-semibold text-white mb-2">{{ item.title }}</h3>
            <p class="text-sm leading-relaxed">{{ item.desc }}</p>
          </div>
        </div>

        <div class="w-full aspect-video bg-zinc-800 mt-20 rounded-xl flex items-center justify-center text-gray-500 text-sm">
          {{$t('marketing_video_placeholder')}}
        </div>

        <div class="text-center mt-12">
          <a
              href="#kontakt"
              class="inline-block px-6 py-3 bg-yellow-400 text-black font-semibold rounded-full hover:bg-yellow-300 transition-colors"
          >
            {{$t('marketing_cta')}}
          </a>
        </div>
      </div>
    </section>


    <!-- Usluge -->
    <section v-scroll-animate class="py-24 px-6 md:px-20 scroll-mt-20">
      <h2 class="text-3xl font-bold text-center mb-12">{{$t('services_title')}}</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div
            v-for="(usluga, i) in tm('services_cards')"
            :key="i"
            v-scroll-animate
            :style="{ transitionDelay: (i * 80) + 'ms' }"
            class="bg-zinc-900 p-6 rounded-xl shadow-md hover:scale-105 transition-transform"
        >
          <h3 class="text-xl font-semibold mb-2">{{ usluga.title }}</h3>
          <p class="text-gray-400">{{ usluga.desc }}</p>
        </div>
      </div>
    </section>


    <!-- Tehnologije -->
    <section v-scroll-animate class="py-24 px-6 md:px-20 scroll-mt-20">
      <h2 class="text-3xl font-bold text-center mb-12">{{$t('tech_title')}}</h2>
      <div class="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
    <span
        v-for="(tech, i) in tm('tech_list')"
        :key="i"
        v-scroll-animate
        :style="{ transitionDelay: (i * 40) + 'ms' }"
        class="bg-zinc-800 px-4 py-2 rounded-full text-sm hover:bg-zinc-700 transition-colors"
    >
      {{ tech }}
    </span>
      </div>
    </section>


    <!-- Tim -->
    <section v-scroll-animate class="py-24 px-6 md:px-20 scroll-mt-20">
      <h2 class="text-3xl font-bold text-center mb-8">{{$t('team_title')}}</h2>
      <div class="max-w-3xl mx-auto text-center text-gray-300 space-y-4">
        <p>{{$t('team_desc1')}}</p>
        <p>{{$t('team_desc2')}}</p>
      </div>
    </section>


    <!-- Kontakt -->
    <section
        id="kontakt"
        v-scroll-animate
        class="py-24 px-6 md:px-20 text-center scroll-mt-20"
    >
      <h2 class="text-3xl font-bold mb-6">{{$t('contact_title')}}</h2>
      <p class="mb-8 text-gray-300">{{$t('contact_desc')}}</p>
      <button
          class="bg-yellow-400 text-black px-8 py-3 rounded-full hover:bg-yellow-300 transition-colors">
        {{$t('contact_cta')}}
      </button>
    </section>


    <!-- Footer -->
    <Footer/>
  </div>
</template>

<script setup>
import HeaderWeboro from '@/components/HeaderWeboro.vue'
import HeroLine from '@/components/HeroLine.vue'
import Footer from "@/components/Footer.vue";
import { useI18n } from 'vue-i18n'
import {ref} from "vue";

const { tm } = useI18n()

//ucitavanje videa kada se dodje do njega
const videoVisible = ref(false)
const loadVideo = (isVisible) => {
  if (isVisible) videoVisible.value = true
}

const vIntersect = {
  mounted(el, binding) {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) binding.value(true)
    })
    observer.observe(el)
  }
}

/**
 * Scroll reveal direktiva – koristi IntersectionObserver
 * Napomena: u <script setup> naziv MORA krenuti sa `v` da bi radio kao direktiva.
 * U templatu se koristi kao v-scroll-animate.
 */
const vScrollAnimate = {
  mounted(el) {
    // početno stanje
    el.classList.add('before-reveal')

    const observer = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              el.classList.add('reveal')
              obs.unobserve(el)
            }
          })
        },
        {
          threshold: 0.15,
          // malo ranije triggovanje da deluje “prijatno”
          rootMargin: '0px 0px -10% 0px',
        }
    )

    observer.observe(el)
  },
}

const marketing = [
  { title: '🎯 Google Ads & Retargeting', desc: 'Izrada i optimizacija PPC kampanja – Search, Display, YouTube.' },
  { title: '📊 Google Analytics & Praćenje', desc: 'Merenje svega što se dešava na sajtu i funnel analize.' },
  { title: '📱 Social Media Kampanje', desc: 'Instagram, TikTok, Facebook – growth strategije i sadržaj.' },
  { title: '✉️ Email Marketing & Outreach', desc: 'Sekvence, segmentacija, personalizacija i AI integracije.' },
  { title: '🔍 SEO & Content Strategije', desc: 'Optimizacija sajtova, blogova i landing stranica.' },
  { title: '⚡️ Konverzija & UX Analiza', desc: 'Unapređenje korisničkog puta i performansi sajta.' },
]

const usluge = [
  { title: '💡 SaaS Razvoj', desc: 'Vue.js, Supabase, Stripe i AI integracije.' },
  { title: '🛒 Shopify & WordPress', desc: 'eCommerce rešenja za brendove svih veličina.' },
  { title: '🎨 UI/UX & Branding', desc: 'Od logotipa do kompletnog vizuelnog identiteta.' },
  { title: '📈 Growth strategije', desc: 'Outreach sistemi, cold email, content marketing.' },
  { title: '📸 Video produkcija', desc: 'Snimanje, montaža, titlovi, Instagram/TikTok edit.' },
  { title: '🎤 Event voditeljstvo', desc: 'Iskustvo vođenja i predstavljanja na događajima.' },
]

const techs = [
  'Vue.js','Supabase','Tailwind CSS','Magento 2','Shopify','WordPress',
  'Figma','Google Ads & Analitycs','Stripe','Premiere Pro','Branding & UI/UX'
]
</script>

<style>
/* Osnovni reveal */
.before-reveal {
  opacity: 0;
  transform: translateY(60px) scale(0.995);
}
.reveal {
  opacity: 1;
  transform: translateY(0) scale(1);
  transition:
      opacity 0.8s ease-out,
      transform 0.8s ease-out;
}

/* Ako želiš malo brži ulazak za sitne elemente (badge, pill, tagovi), možeš targetirati dodatno:
.section-pill.before-reveal { transform: translateY(20px); }
*/
</style>
