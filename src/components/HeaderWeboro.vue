<template>
  <header class="bg-black text-white fixed top-0 left-0 w-full z-50 shadow-md">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
      <!-- Logo -->
<!--      <router-link to="/" class="flex items-center space-x-2">-->

<!--      </router-link>-->

      <!-- Logo -->
      <router-link to="/" class="flex items-center justify-center">
        <img
            src="/src/assets/weborologo.png"
            alt="OutreachGenie Logo"
            class="max-w-[140px] sm:max-w-[180px] md:max-w-[140px] lg:max-w-[150px] xl:max-w-[180px] h-auto mt-1 object-contain"
        />
      </router-link>

      <!-- Desktop Menu -->
      <nav class="hidden md:flex space-x-6 text-sm items-center">
        <button @click="toggleServices"
                class="hover:text-yellow-400 transition-colors flex items-center gap-1">
          {{ $t('nav_services') }}
          <svg :class="isServicesOpen ? 'rotate-180' : 'rotate-0'"
               class="w-4 h-4 transition-transform"
               fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <router-link to="/portfolio" class="hover:text-yellow-400">{{$t('nav_portfolio')}}</router-link>
        <router-link to="/o-nama" class="hover:text-yellow-400">{{$t('nav_about')}}</router-link>
        <router-link to="/blog" class="hover:text-yellow-400">{{$t('nav_blog')}}</router-link>
        <router-link to="/karijera" class="hover:text-yellow-400">{{$t('nav_career')}}</router-link>
        <router-link to="/kontakt"
                     class="ml-4 bg-yellow-400 text-black px-4 py-2 rounded-full font-medium hover:bg-yellow-300">
          {{$t('cta_send_inquiry')}}
        </router-link>
        <button @click="switchLang"
                class="text-sm border border-zinc-700 px-3 py-1 rounded hover:border-yellow-400">
          {{ locale.toUpperCase() }}
        </button>
      </nav>

      <!-- Mobile Menu Button -->
      <button class="md:hidden focus:outline-none" @click="toggleMobile">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>

    <!-- DESKTOP MEGA PANEL -->
    <transition name="fade-slide">
      <div v-if="isServicesOpen"
           class="hidden md:block absolute top-16 left-0 w-full bg-zinc-950 border-t border-zinc-800 shadow-xl z-40">
        <div class="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div v-for="(service,i) in services" :key="i"
               class="bg-zinc-900 p-6 rounded-xl hover:bg-zinc-800 hover:scale-105 transition transform cursor-pointer">
            <h3 class="text-lg font-semibold mb-2 text-yellow-400">{{$t(service.title)}}</h3>
            <p class="text-sm text-gray-300">{{ $t(service.desc) }}</p>
            <router-link :to="service.link"
                         class="inline-block mt-4 text-yellow-400 text-sm hover:underline">
              {{$t('learn_more')}} →
            </router-link>
          </div>
        </div>
      </div>
    </transition>

    <!-- MOBILE MENU -->
    <transition name="fade-slide">
      <div v-if="isMobileOpen" class="md:hidden bg-black px-4 pb-4 border-t border-zinc-800">
        <!-- Mobile services dropdown -->
        <details class="border-b border-zinc-800">
          <summary class="py-3 cursor-pointer">{{ $t('nav_services') }}</summary>
          <div class="mt-2 max-h-72 overflow-y-auto pr-2 space-y-3">
            <div v-for="(service,i) in services" :key="i"
                 class="bg-zinc-900 p-4 rounded-lg">
              <h3 class="text-yellow-400 text-sm font-semibold mb-1">{{ $t(service.title) }}</h3>
              <p class="text-xs text-gray-400">{{ $t(service.desc) }}</p>
              <router-link :to="service.link"
                           class="text-yellow-400 text-xs hover:underline block mt-1">
                {{$t('learn_more')}} →
              </router-link>
            </div>
          </div>
        </details>

        <router-link to="/portfolio" class="block py-2 border-b border-zinc-800">{{$t('nav_portfolio')}}</router-link>
        <router-link to="/o-nama" class="block py-2 border-b border-zinc-800">{{$t('nav_about')}}</router-link>
        <router-link to="/blog" class="block py-2 border-b border-zinc-800">{{$t('nav_blog')}}</router-link>
        <router-link to="/karijera" class="block py-2 border-b border-zinc-800">{{$t('nav_career')}}</router-link>
        <router-link to="/kontakt" class="block py-2">{{$t('cta_send_inquiry')}}</router-link>

        <!-- Language switch -->
        <button @click="switchLang"
                class="w-full mt-4 text-sm border border-zinc-700 px-3 py-2 rounded hover:border-yellow-400">
          {{ locale.toUpperCase() }}
        </button>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
const switchLang = () => {
  locale.value = locale.value === 'sr' ? 'en' : 'sr'
}

const isMobileOpen = ref(false)
const isServicesOpen = ref(false)

const toggleMobile = () => {
  isMobileOpen.value = !isMobileOpen.value
  if (isMobileOpen.value) isServicesOpen.value = false
}
const toggleServices = () => {
  isServicesOpen.value = !isServicesOpen.value
  if (isServicesOpen.value) isMobileOpen.value = false
}

const services = [
  { title: 'service_outreach_title', desc: 'service_outreach_desc', link: '/outreachgenie-production.up.railway.app/' },
  { title: 'service_ecommerce_title', desc: 'service_ecommerce_desc', link: '/usluge/ecommerce' },
  { title: 'service_social_title', desc: 'service_social_desc', link: '/usluge/social-media' },
  { title: 'service_google_title', desc: 'service_google_desc', link: '/usluge/google-ads' },
  { title: 'service_seo_title', desc: 'service_seo_desc', link: '/usluge/seo' },
  { title: 'service_branding_title', desc: 'service_branding_desc', link: '/usluge/branding' },
  { title: 'service_video_title', desc: 'service_video_desc', link: '/usluge/video' },
  { title: 'service_growth_title', desc: 'service_growth_desc', link: '/usluge/outreach' },
]

</script>

<style scoped>
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.3s ease;
}
.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}
.fade-slide-enter-to {
  opacity: 1;
  transform: translateY(0);
}
.fade-slide-leave-from {
  opacity: 1;
  transform: translateY(0);
}
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
details summary::-webkit-details-marker {
  display: none;
}
</style>
