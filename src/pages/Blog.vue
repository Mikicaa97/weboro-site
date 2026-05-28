<template>
  <div class="bg-black text-white font-sans">
    <HeaderWeboro />

    <section class="relative pt-28 lg:pt-36 pb-20 lg:pb-28 px-6 md:px-12 lg:px-20 overflow-hidden border-b border-zinc-800/80">
      <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_72%_55%_at_72%_18%,rgba(250,204,21,0.08),transparent_60%)]" aria-hidden="true"></div>
      <div class="relative z-10 max-w-7xl mx-auto">
        <nav class="text-xs uppercase tracking-[0.22em] text-zinc-500 mb-8 flex items-center gap-2">
          <router-link to="/" class="hover:text-zinc-300 transition-colors">{{ $t('nav_home') }}</router-link>
          <span class="opacity-40">/</span>
          <span class="text-zinc-300">{{ $t('nav_blog') }}</span>
        </nav>
        <h1 class="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight mb-5">{{ $t('blog_full_title') }}</h1>
        <p class="text-lg md:text-xl text-zinc-300 max-w-3xl">{{ $t('blog_full_lead') }}</p>
      </div>
    </section>

    <section class="py-24 px-6 md:px-20">
      <div class="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
            v-for="(post,i) in posts"
            :key="i"
            class="bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 hover:border-yellow-400/35 hover:scale-[1.02] transition"
        >
          <div class="h-44 bg-zinc-800 flex items-center justify-center text-zinc-500 text-sm">
            {{ $t('blog_full_mock') }}
          </div>
          <div class="p-6">
            <p class="text-[11px] uppercase tracking-[0.16em] text-zinc-500 mb-2">{{ post.tag }}</p>
            <h3 class="text-xl font-semibold text-yellow-300 mb-2">{{ post.title }}</h3>
            <p class="text-zinc-300 text-sm mb-4">{{ post.excerpt }}</p>
            <router-link
                :to="`/blog/${post.slug}`"
                class="text-sm text-yellow-300 hover:underline"
            >
              {{ $t('blog_read_more') }}
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 text-center px-6 md:px-20 bg-zinc-950 border-t border-zinc-800/40">
      <h2 class="text-3xl font-bold mb-4">{{ $t('blog_full_cta_title') }}</h2>
      <p class="text-zinc-300 mb-8 max-w-2xl mx-auto">{{ $t('blog_full_cta_desc') }}</p>
      <router-link
          to="/kontakt"
          class="px-8 py-4 bg-yellow-400 text-black rounded-full font-semibold hover:bg-yellow-300 transition"
      >
        {{ $t('blog_full_cta_button') }}
      </router-link>
    </section>

    <Footer />
  </div>
</template>

<script setup>
import Footer from '@/components/Footer.vue'
import HeaderWeboro from '@/components/HeaderWeboro.vue'
import { useI18n } from 'vue-i18n'
const { t, tm } = useI18n()

const posts = tm('blog_full_posts')
</script>
