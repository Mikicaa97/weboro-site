<template>
  <header
      class="fixed top-0 left-0 w-full z-50 transition-[background-color,box-shadow,backdrop-filter] duration-300"
      :class="headerSurfaceClass"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16 relative z-[60]">
      <router-link
          to="/"
          class="flex items-baseline gap-2 group shrink-0"
          @click="closeMenus"
      >
        <span class="text-xl sm:text-2xl font-black tracking-tight text-white group-hover:text-yellow-400 transition-colors">
          Weboro
        </span>
        <span class="hidden sm:inline text-[10px] sm:text-xs uppercase tracking-[0.18em] text-zinc-500 group-hover:text-zinc-400 transition-colors">
          {{ $t('hero_subbrand') }}
        </span>
      </router-link>

      <nav class="hidden md:flex items-center gap-1 text-sm">
        <router-link
            to="/"
            class="px-3 py-2 rounded-lg text-zinc-300 hover:text-yellow-400 hover:bg-white/5 transition-colors"
        >
          {{ $t('nav_home') }}
        </router-link>
        <button
            type="button"
            class="px-3 py-2 rounded-lg text-zinc-300 hover:text-yellow-400 hover:bg-white/5 transition-colors flex items-center gap-1"
            :aria-expanded="isServicesOpen"
            @click="toggleServices"
        >
          {{ $t('nav_services') }}
          <svg
              :class="isServicesOpen ? 'rotate-180' : 'rotate-0'"
              class="w-4 h-4 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <router-link to="/portfolio" class="px-3 py-2 rounded-lg text-zinc-300 hover:text-yellow-400 hover:bg-white/5 transition-colors">
          {{ $t('nav_portfolio') }}
        </router-link>
        <router-link to="/o-nama" class="px-3 py-2 rounded-lg text-zinc-300 hover:text-yellow-400 hover:bg-white/5 transition-colors">
          {{ $t('nav_about') }}
        </router-link>
        <router-link to="/blog" class="px-3 py-2 rounded-lg text-zinc-300 hover:text-yellow-400 hover:bg-white/5 transition-colors">
          {{ $t('nav_blog') }}
        </router-link>
        <router-link to="/karijera" class="px-3 py-2 rounded-lg text-zinc-300 hover:text-yellow-400 hover:bg-white/5 transition-colors">
          {{ $t('nav_career') }}
        </router-link>
        <router-link
            to="/kontakt"
            class="ml-2 bg-yellow-400 text-black px-4 py-2 rounded-full font-medium hover:bg-yellow-300 transition-colors"
        >
          {{ $t('cta_send_inquiry') }}
        </router-link>
        <button
            type="button"
            class="ml-1 text-sm border border-zinc-600 px-3 py-1.5 rounded-lg hover:border-yellow-400 text-zinc-200 transition-colors"
            @click="switchLang"
        >
          {{ locale.toUpperCase() }}
        </button>
      </nav>

      <button type="button" class="md:hidden p-2 rounded-lg hover:bg-white/10 -mr-2" aria-label="Menu" @click="toggleMobile">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>

    <transition name="fade">
      <button
          v-if="isServicesOpen"
          type="button"
          class="fixed inset-0 top-16 z-[55] bg-black/55 md:block hidden cursor-default border-0 p-0"
          aria-label="Zatvori meni"
          @click="isServicesOpen = false"
      />
    </transition>

    <transition name="fade-slide">
      <div
          v-if="isServicesOpen"
          class="hidden md:block absolute top-full left-0 w-full border-t border-zinc-800 bg-zinc-950/98 backdrop-blur-md shadow-2xl z-[56]"
      >
        <div class="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          <template v-for="(service, i) in services" :key="i">
            <router-link
                v-if="!isExternal(service.link)"
                :to="service.link"
                class="bg-zinc-900/90 p-5 rounded-xl border border-zinc-800/80 hover:border-yellow-400/40 hover:bg-zinc-800/90 transition-all block group"
                @click="closeMenus"
            >
              <h3 class="text-base font-semibold mb-2 text-yellow-400 group-hover:text-yellow-300">
                {{ $t(service.title) }}
              </h3>
              <p class="text-xs text-zinc-400 leading-relaxed line-clamp-3">{{ $t(service.desc) }}</p>
              <span class="inline-block mt-4 text-yellow-400 text-xs font-medium group-hover:underline">
                {{ $t('learn_more') }} →
              </span>
            </router-link>
            <a
                v-else
                :href="service.link"
                target="_blank"
                rel="noopener noreferrer"
                class="bg-zinc-900/90 p-5 rounded-xl border border-zinc-800/80 hover:border-yellow-400/40 hover:bg-zinc-800/90 transition-all block group"
                @click="closeMenus"
            >
              <h3 class="text-base font-semibold mb-2 text-yellow-400 group-hover:text-yellow-300">
                {{ $t(service.title) }}
              </h3>
              <p class="text-xs text-zinc-400 leading-relaxed line-clamp-3">{{ $t(service.desc) }}</p>
              <span class="inline-block mt-4 text-yellow-400 text-xs font-medium group-hover:underline">
                {{ $t('learn_more') }} →
              </span>
            </a>
          </template>
        </div>
      </div>
    </transition>

    <transition name="fade-slide">
      <div v-if="isMobileOpen" class="md:hidden border-t border-zinc-800 bg-black px-4 pb-6 max-h-[min(85vh,calc(100dvh-4rem))] overflow-y-auto">
        <details class="border-b border-zinc-800 py-2">
          <summary class="py-2 cursor-pointer list-none font-medium text-white">{{ $t('nav_services') }}</summary>
          <div class="mt-2 space-y-2 pb-2">
            <template v-for="(service, i) in services" :key="i">
              <router-link
                  v-if="!isExternal(service.link)"
                  :to="service.link"
                  class="block bg-zinc-900 p-4 rounded-lg border border-zinc-800"
                  @click="closeMenus"
              >
                <h3 class="text-yellow-400 text-sm font-semibold mb-1">{{ $t(service.title) }}</h3>
                <p class="text-xs text-zinc-400">{{ $t(service.desc) }}</p>
              </router-link>
              <a
                  v-else
                  :href="service.link"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="block bg-zinc-900 p-4 rounded-lg border border-zinc-800"
                  @click="closeMenus"
              >
                <h3 class="text-yellow-400 text-sm font-semibold mb-1">{{ $t(service.title) }}</h3>
                <p class="text-xs text-zinc-400">{{ $t(service.desc) }}</p>
              </a>
            </template>
          </div>
        </details>

        <router-link to="/" class="block py-3 border-b border-zinc-800 text-zinc-200" @click="closeMenus">{{ $t('nav_home') }}</router-link>
        <router-link to="/portfolio" class="block py-3 border-b border-zinc-800" @click="closeMenus">{{ $t('nav_portfolio') }}</router-link>
        <router-link to="/o-nama" class="block py-3 border-b border-zinc-800" @click="closeMenus">{{ $t('nav_about') }}</router-link>
        <router-link to="/blog" class="block py-3 border-b border-zinc-800" @click="closeMenus">{{ $t('nav_blog') }}</router-link>
        <router-link to="/karijera" class="block py-3 border-b border-zinc-800" @click="closeMenus">{{ $t('nav_career') }}</router-link>
        <router-link to="/kontakt" class="block py-3 font-medium text-yellow-400" @click="closeMenus">{{ $t('cta_send_inquiry') }}</router-link>

        <button
            type="button"
            class="w-full mt-4 text-sm border border-zinc-700 px-3 py-2 rounded-lg hover:border-yellow-400"
            @click="switchLang"
        >
          {{ locale.toUpperCase() }}
        </button>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { computed, onMounted, onUnmounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
const route = useRoute()
const isMobileOpen = ref(false)
const isServicesOpen = ref(false)
const scrolled = ref(false)

const headerSurfaceClass = computed(() =>
  scrolled.value || isServicesOpen.value || isMobileOpen.value
      ? 'bg-black/85 backdrop-blur-md border-b border-zinc-800/80 shadow-lg'
      : 'bg-transparent border-b border-transparent',
)

const switchLang = () => {
  locale.value = locale.value === 'sr' ? 'en' : 'sr'
}

const isExternal = (link) => link.startsWith('http')

const closeMenus = () => {
  isMobileOpen.value = false
  isServicesOpen.value = false
}

const toggleMobile = () => {
  isMobileOpen.value = !isMobileOpen.value
  if (isMobileOpen.value) isServicesOpen.value = false
}

const toggleServices = () => {
  isServicesOpen.value = !isServicesOpen.value
  if (isServicesOpen.value) isMobileOpen.value = false
}

const onScroll = () => {
  scrolled.value = window.scrollY > 16
}

watch(
    () => route.fullPath,
    () => closeMenus(),
)

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
})
onUnmounted(() => window.removeEventListener('scroll', onScroll))

const services = [
  { title: 'service_outreach_title', desc: 'service_outreach_desc', link: '/outreachgenie' },
  { title: 'service_magento_title', desc: 'service_magento_desc', link: '/usluge/magento' },
  { title: 'service_wordpress_title', desc: 'service_wordpress_desc', link: '/usluge/wordpress' },
  { title: 'service_custom_web_title', desc: 'service_custom_web_desc', link: '/usluge/custom-web' },
  { title: 'service_social_title', desc: 'service_social_desc', link: '/usluge/social-media' },
  { title: 'service_google_title', desc: 'service_google_desc', link: '/usluge/google-ads' },
  { title: 'service_seo_title', desc: 'service_seo_desc', link: '/usluge/seo' },
  { title: 'service_branding_title', desc: 'service_branding_desc', link: '/usluge/branding' },
  { title: 'service_video_title', desc: 'service_video_desc', link: '/usluge/video' },
  { title: 'service_growth_title', desc: 'service_growth_desc', link: '/usluge/growth' },
]
</script>

<style scoped>
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.25s ease;
}
.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
details summary::-webkit-details-marker {
  display: none;
}
</style>
