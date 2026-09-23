<template>
  <!-- Scroll Progress Bar -->
  <div
      v-show="scrollProgress > 0"
      class="fixed top-0 left-0 h-1 bg-[#ff8a3d] z-[9999] transition-all duration-200 ease-out"
      :style="{ width: scrollProgress + '%' }"
  ></div>

  <!-- Scroll to Top Button -->
  <button
      v-show="showButton"
      type="button"
      @click="scrollTop"
      :aria-label="t('a11y_scroll_top')"
      class="fixed bottom-6 right-6 bg-[#ff8a3d] text-zinc-950 p-3 rounded-full shadow-lg hover:bg-[#ff9d5c] transition z-[9999] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ffb088] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
  >
    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" aria-hidden="true">
      <path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7" />
    </svg>
  </button>

  <router-view />
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const showButton = ref(false)
const scrollProgress = ref(0)

const onScroll = () => {
  const scrollTop = window.scrollY
  const docHeight = document.documentElement.scrollHeight - window.innerHeight
  scrollProgress.value = (scrollTop / docHeight) * 100
  showButton.value = scrollTop > 300
}

const scrollTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<style>

</style>
