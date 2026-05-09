<template>
  <div class="bg-black text-white font-sans min-h-screen flex flex-col">
    <HeaderWeboro/>

    <main class="flex-1 pt-24 pb-12">
      <!-- Breadcrumb -->
      <div class="max-w-6xl mx-auto px-6 lg:px-8 mb-6">
        <nav class="flex items-center gap-2 text-xs sm:text-sm text-zinc-500" aria-label="Breadcrumb">
          <router-link to="/" class="hover:text-yellow-400 transition-colors">{{ $t('og_breadcrumb_home') }}</router-link>
          <span class="text-zinc-700">/</span>
          <router-link to="/outreachgenie" class="hover:text-yellow-400 transition-colors">{{ $t('og_breadcrumb_outreachgenie') }}</router-link>
          <template v-if="current">
            <span class="text-zinc-700">/</span>
            <span class="text-zinc-300">{{ current }}</span>
          </template>
        </nav>
      </div>

      <slot />
    </main>

    <Footer/>
  </div>
</template>

<script setup>
import HeaderWeboro from '@/components/HeaderWeboro.vue'
import Footer from '@/components/Footer.vue'

defineProps({
  current: { type: String, default: '' },
})
</script>
