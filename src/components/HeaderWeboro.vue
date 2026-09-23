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
        <!-- Logo image kept for later; text brand for Phase 1 -->
        <!-- <img src="../assets/weboro-logo.png" alt="Weboro logo" class="h-7 w-auto sm:h-8 object-contain" /> -->
        <span class="text-xl sm:text-2xl font-black tracking-tight text-white group-hover:text-[#ff8a3d] transition-colors">
          Weboro
        </span>
        <span class="hidden sm:inline text-[10px] sm:text-xs uppercase tracking-[0.18em] text-zinc-500 group-hover:text-zinc-400 transition-colors">
          {{ $t('hero_subbrand') }}
        </span>
      </router-link>

      <nav class="hidden md:flex items-center gap-1 text-sm">
        <router-link to="/" :class="topNavClass('/')">
          {{ $t('nav_home') }}
        </router-link>
        <button
            type="button"
            class="px-3 py-2 rounded-lg transition-colors flex items-center gap-1"
            :class="isServicesOpen || isServicesActive ? 'text-[#ffb088] bg-white/5' : 'text-zinc-300 hover:text-[#ffb088] hover:bg-white/5'"
            :aria-expanded="isServicesOpen"
            aria-controls="desktop-services-menu"
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
        <router-link to="/portfolio" :class="topNavClass('/portfolio')">
          {{ $t('nav_portfolio') }}
        </router-link>
        <router-link to="/o-nama" :class="topNavClass('/o-nama')">
          {{ $t('nav_about') }}
        </router-link>
        <router-link
            to="/kontakt"
            class="ml-2 bg-[#ff8a3d] text-zinc-950 px-4 py-2 rounded-xl text-sm font-semibold hover:bg-[#ff9d5c] transition-colors"
        >
          {{ $t('cta_send_project') }}
        </router-link>
        <button
            type="button"
            class="ml-1 text-sm border border-zinc-600 px-3 py-1.5 rounded-lg hover:border-[#ff8a3d] text-zinc-200 transition-colors"
            @click="switchLang"
        >
          {{ locale.toUpperCase() }}
        </button>
      </nav>

      <button
        type="button"
        class="md:hidden p-2 rounded-lg hover:bg-white/10 -mr-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ffb088]"
        :aria-label="isMobileOpen ? 'Zatvori meni' : 'Otvori meni'"
        :aria-expanded="isMobileOpen"
        @click="toggleMobile"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            :d="isMobileOpen ? 'M6 6l12 12M6 18L18 6' : 'M4 6h16M4 12h16M4 18h16'"
          />
        </svg>
      </button>
    </div>

    <transition name="fade">
      <button
          v-if="isServicesOpen"
          type="button"
          class="fixed inset-0 top-16 z-[55] bg-black/80 md:block hidden cursor-default border-0 p-0"
          aria-label="Zatvori meni"
          @click="isServicesOpen = false"
      />
    </transition>

    <transition name="fade-slide">
      <div
          v-if="isServicesOpen"
          id="desktop-services-menu"
          class="hidden md:block absolute top-full left-0 w-full border-t border-zinc-800 bg-[#090909] shadow-[0_30px_80px_-25px_rgba(0,0,0,0.9)] z-[56]"
      >
        <div class="max-w-7xl mx-auto px-6 py-9 grid grid-cols-12 gap-8">
          <div class="col-span-4">
            <p class="text-[11px] uppercase tracking-[0.2em] text-zinc-500 mb-3">{{ t('mega_group_web') }}</p>
            <div class="space-y-2.5">
              <router-link
                v-for="(item, i) in servicesWeb"
                :key="'web-'+i"
                :to="item.link"
                class="block rounded-lg px-3 py-2.5 border transition-colors"
                :class="isRouteActive(item.link) ? 'bg-zinc-900 border-[#ff8a3d]/40' : 'border-zinc-800 hover:border-[#ff8a3d]/35 hover:bg-zinc-900'"
                @click="closeMenus"
              >
                <p class="text-sm font-semibold text-zinc-200">{{ $t(item.title) }}</p>
                <p class="text-xs text-zinc-500 mt-1 line-clamp-2">{{ $t(item.desc) }}</p>
              </router-link>
            </div>
          </div>

          <div class="col-span-4">
            <p class="text-[11px] uppercase tracking-[0.2em] text-zinc-500 mb-3">{{ t('mega_group_custom') }}</p>
            <div class="space-y-2.5">
              <router-link
                v-for="(item, i) in servicesCustom"
                :key="'custom-'+i"
                :to="item.link"
                class="block rounded-lg px-3 py-2.5 border transition-colors"
                :class="isRouteActive(item.link) ? 'bg-zinc-900 border-[#ff8a3d]/40' : 'border-zinc-800 hover:border-[#ff8a3d]/35 hover:bg-zinc-900'"
                @click="closeMenus"
              >
                <p class="text-sm font-semibold text-zinc-200">{{ $t(item.title) }}</p>
                <p class="text-xs text-zinc-500 mt-1 line-clamp-2">{{ $t(item.desc) }}</p>
              </router-link>
            </div>
          </div>

          <div class="col-span-4">
            <p class="text-[11px] uppercase tracking-[0.2em] text-zinc-500 mb-3">{{ t('mega_group_growth') }}</p>
            <div class="space-y-2.5">
              <router-link
                v-for="(item, i) in servicesGrowth"
                :key="'growth-'+i"
                :to="item.link"
                class="block rounded-lg px-3 py-2.5 border transition-colors"
                :class="isRouteActive(item.link) ? 'bg-zinc-900 border-[#ff8a3d]/40' : 'border-zinc-800 hover:border-[#ff8a3d]/35 hover:bg-zinc-900'"
                @click="closeMenus"
              >
                <p class="text-sm font-semibold text-zinc-200">{{ $t(item.title) }}</p>
                <p class="text-xs text-zinc-500 mt-1 line-clamp-2">{{ $t(item.desc) }}</p>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </transition>

    <transition name="fade">
      <button
        v-if="isMobileOpen"
        type="button"
        class="fixed inset-0 z-[68] bg-black/80 md:hidden border-0 p-0"
        aria-label="Close mobile menu"
        @click="closeMenus"
      />
    </transition>

    <transition name="fade-slide">
      <div
        v-if="isMobileOpen"
        class="md:hidden fixed top-16 left-0 right-0 z-[69] border-t border-zinc-800 bg-black px-4 pb-6 max-h-[calc(100dvh-4rem)] overflow-y-auto overscroll-contain"
      >
        <div class="mt-4 space-y-5 pb-2">
          <div>
            <p class="text-[10px] uppercase tracking-[0.18em] text-zinc-500 mb-2">{{ t('mega_group_web') }}</p>
            <router-link
              v-for="(item, i) in servicesWeb"
              :key="'m-web-'+i"
              :to="item.link"
              class="block bg-zinc-900 p-4 rounded-lg border border-zinc-800 mb-2"
              @click="closeMenus"
            >
              <h3 class="text-[#ffb088] text-sm font-semibold mb-1">{{ $t(item.title) }}</h3>
              <p class="text-xs text-zinc-400">{{ $t(item.desc) }}</p>
            </router-link>
          </div>

          <div>
            <p class="text-[10px] uppercase tracking-[0.18em] text-zinc-500 mb-2">{{ t('mega_group_custom') }}</p>
            <router-link
              v-for="(item, i) in servicesCustom"
              :key="'m-custom-'+i"
              :to="item.link"
              class="block bg-zinc-900 p-4 rounded-lg border border-zinc-800 mb-2"
              @click="closeMenus"
            >
              <h3 class="text-[#ffb088] text-sm font-semibold mb-1">{{ $t(item.title) }}</h3>
              <p class="text-xs text-zinc-400">{{ $t(item.desc) }}</p>
            </router-link>
          </div>

          <div>
            <p class="text-[10px] uppercase tracking-[0.18em] text-zinc-500 mb-2">{{ t('mega_group_growth') }}</p>
            <router-link
              v-for="(item, i) in servicesGrowth"
              :key="'m-growth-'+i"
              :to="item.link"
              class="block bg-zinc-900 p-4 rounded-lg border border-zinc-800 mb-2"
              @click="closeMenus"
            >
              <h3 class="text-[#ffb088] text-sm font-semibold mb-1">{{ $t(item.title) }}</h3>
              <p class="text-xs text-zinc-400">{{ $t(item.desc) }}</p>
            </router-link>
          </div>
        </div>

        <router-link to="/" class="block py-3 border-b border-zinc-800 text-zinc-200" @click="closeMenus">{{ $t('nav_home') }}</router-link>
        <router-link to="/portfolio" class="block py-3 border-b border-zinc-800" @click="closeMenus">{{ $t('nav_portfolio') }}</router-link>
        <router-link to="/o-nama" class="block py-3 border-b border-zinc-800" @click="closeMenus">{{ $t('nav_about') }}</router-link>
        <router-link to="/kontakt" class="block py-3 font-medium text-[#ff8a3d]" @click="closeMenus">{{ $t('cta_send_project') }}</router-link>

        <button
            type="button"
            class="w-full mt-4 text-sm border border-zinc-700 px-3 py-2 rounded-lg hover:border-[#ff8a3d]"
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

const { locale, t } = useI18n()
const route = useRoute()
const isMobileOpen = ref(false)
const isServicesOpen = ref(false)
const scrolled = ref(false)

const headerSurfaceClass = computed(() =>
  scrolled.value || isServicesOpen.value || isMobileOpen.value
      ? 'bg-black/90 backdrop-blur-md border-b border-zinc-800/70 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.8)]'
      : 'bg-transparent border-b border-transparent',
)

const switchLang = () => {
  locale.value = locale.value === 'sr' ? 'en' : 'sr'
}

watch(
  locale,
  (code) => {
    document.documentElement.lang = code === 'en' ? 'en' : 'sr'
  },
  { immediate: true },
)

const servicesWeb = [
  { title: 'mega_web_overview_title', desc: 'mega_web_overview_desc', link: '/usluge/ecommerce' },
  { title: 'mega_magento_title', desc: 'mega_magento_desc', link: '/usluge/magento' },
  { title: 'mega_wordpress_title', desc: 'mega_wordpress_desc', link: '/usluge/wordpress' },
]

const servicesCustom = [
  { title: 'mega_custom_overview_title', desc: 'mega_custom_overview_desc', link: '/usluge/custom-web' },
]

const servicesGrowth = [
  { title: 'mega_growth_overview_title', desc: 'mega_growth_overview_desc', link: '/usluge/growth' },
  { title: 'mega_ads_title', desc: 'mega_ads_desc', link: '/usluge/google-ads' },
  { title: 'mega_seo_title', desc: 'mega_seo_desc', link: '/usluge/seo' },
  { title: 'mega_analytics_title', desc: 'mega_analytics_desc', link: '/usluge/google/ga4-gtm' },
]

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

const isRouteActive = (path) => route.path === path || (path !== '/' && route.path.startsWith(`${path}/`))
const isServicesActive = computed(() => route.path.startsWith('/usluge'))
const topNavClass = (path) => (
  `px-3 py-2 rounded-lg transition-colors ${
    isRouteActive(path)
      ? 'text-[#ffb088] bg-white/5'
      : 'text-zinc-300 hover:text-[#ffb088] hover:bg-white/5'
  }`
)

const onEscClose = (e) => {
  if (e.key === 'Escape') closeMenus()
}

watch(
    () => route.fullPath,
    () => closeMenus(),
)

watch(isMobileOpen, (open) => {
  document.body.style.overflow = open ? 'hidden' : ''
})

const onResize = () => {
  if (window.innerWidth >= 768 && isMobileOpen.value) {
    isMobileOpen.value = false
  }
  if (window.innerWidth < 768 && isServicesOpen.value) {
    isServicesOpen.value = false
  }
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('keydown', onEscClose)
  window.addEventListener('resize', onResize)
  onScroll()
})
onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('keydown', onEscClose)
  window.removeEventListener('resize', onResize)
  document.body.style.overflow = ''
})
</script>

<style scoped>
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.2s ease;
}
.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
