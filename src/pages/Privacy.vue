<template>
  <div class="bg-black text-white font-sans">
    <HeaderWeboro />

    <section class="relative pt-28 lg:pt-36 pb-16 px-6 md:px-12 lg:px-20 border-b border-zinc-800/80">
      <div class="max-w-3xl mx-auto">
        <nav class="text-xs uppercase tracking-[0.22em] text-zinc-500 mb-8 flex items-center gap-2">
          <router-link to="/" class="hover:text-zinc-300 transition-colors">{{ $t('nav_home') }}</router-link>
          <span class="opacity-40">/</span>
          <span class="text-zinc-300">{{ $t('nav_privacy') }}</span>
        </nav>
        <h1 class="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">{{ $t('privacy_title') }}</h1>
        <p class="text-zinc-500 text-sm mb-10">{{ $t('privacy_updated') }}</p>

        <div class="space-y-8 text-zinc-300 leading-relaxed text-base">
          <section v-for="(block, i) in tm('privacy_sections')" :key="i">
            <h2 class="text-xl font-semibold text-white mb-3">{{ block.title }}</h2>
            <p class="mb-3" v-for="(p, pi) in block.paragraphs" :key="pi">{{ p }}</p>
            <ul v-if="block.items" class="space-y-2 list-disc pl-5 text-zinc-400">
              <li v-for="(item, ii) in block.items" :key="ii">{{ item }}</li>
            </ul>
          </section>
        </div>

        <p class="mt-12 text-sm text-zinc-500">
          {{ $t('privacy_contact_label') }}
          <a href="mailto:kontakt@weboro.io" class="text-[#ffb088] hover:underline">kontakt@weboro.io</a>
        </p>
      </div>
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
