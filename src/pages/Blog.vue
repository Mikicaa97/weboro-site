<template>
  <div class="bg-black text-white font-sans">
    <HeaderWeboro/>

    <!-- Hero -->
    <section class="relative h-[40vh] flex flex-col justify-center items-center text-center px-6 md:px-20">
      <h1 class="pt-16 text-6xl md:text-7xl font-extrabold tracking-wide mb-4">{{$t('blog_title')}}</h1>
      <p class="text-lg md:text-xl text-gray-300 max-w-2xl">
        {{$t('blog_subtitle')}}
      </p>
    </section>

    <!-- Lista blog postova -->
    <section class="py-24 px-6 md:px-20">
      <div class="max-w-5xl mx-auto grid sm:grid-cols-2 gap-10">
        <div
            v-for="(post,i) in posts"
            :key="i"
            class="bg-zinc-900 rounded-xl overflow-hidden hover:scale-[1.02] transition"
        >
          <div class="h-48 bg-zinc-800 flex items-center justify-center text-gray-500 text-sm">
            Slika / thumbnail
          </div>
          <div class="p-6">
            <h3 class="text-xl font-semibold text-yellow-400 mb-2">{{ post.title }}</h3>
            <p class="text-gray-300 text-sm mb-4">{{ post.excerpt }}</p>
            <router-link
                :to="`/blog/${post.slug}`"
                class="text-sm text-yellow-400 hover:underline"
            >
              {{$t('blog_read_more')}}
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-20 text-center px-6 md:px-20">
      <h2 class="text-3xl font-bold mb-4">{{$t('blog_cta_title')}}</h2>
      <p class="text-gray-300 mb-8">{{$t('blog_cta_desc')}}</p>
      <router-link
          to="/kontakt"
          class="px-8 py-4 bg-yellow-400 text-black rounded-full font-semibold hover:bg-yellow-300 transition"
      >
        {{$t('blog_cta_button')}}
      </router-link>
    </section>

  </div>
  <Footer/>
</template>

<script setup>
import Footer from "@/components/Footer.vue";
import HeaderWeboro from "@/components/HeaderWeboro.vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();

const posts = [
  {
    title: t('blog_post1_title'),
    excerpt: t('blog_post1_excerpt'),
    slug: 'outreachgenie-studija'
  },
  {
    title: t('blog_post2_title'),
    excerpt: t('blog_post2_excerpt'),
    slug: 'shopify-prednosti'
  },
  {
    title: t('blog_post3_title'),
    excerpt: t('blog_post3_excerpt'),
    slug: 'video-konverzije'
  },
]
</script>
