<template>
  <div class="bg-black text-white font-sans min-h-screen flex flex-col">
    <HeaderWeboro />

    <main class="flex-1 flex items-center justify-center px-6 py-28">
      <div class="max-w-lg text-center">
        <p class="text-[11px] uppercase tracking-[0.22em] text-zinc-500 mb-4">404</p>
        <h1 class="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
          {{ $t('not_found_title') }}
        </h1>
        <p class="text-zinc-400 leading-relaxed mb-8">
          {{ $t('not_found_desc') }}
        </p>
        <div class="flex flex-col sm:flex-row items-center justify-center gap-3">
          <router-link
            to="/"
            class="inline-flex px-7 py-3.5 bg-[#ff8a3d] text-zinc-950 font-semibold rounded-xl hover:bg-[#ff9d5c] transition"
          >
            {{ $t('not_found_home') }}
          </router-link>
          <router-link
            to="/usluge/ecommerce"
            class="inline-flex px-6 py-3.5 text-sm text-zinc-300 border border-zinc-700 rounded-xl hover:border-[#ff8a3d]/45 hover:text-[#ffb088] transition-colors"
          >
            {{ $t('footer_col_services') }}
          </router-link>
          <router-link
            to="/kontakt"
            class="inline-flex px-6 py-3.5 text-sm text-zinc-400 hover:text-[#ffb088] transition-colors"
          >
            {{ $t('cta_send_project') }}
          </router-link>
        </div>
      </div>
    </main>

    <Footer />
  </div>
</template>

<script setup>
import HeaderWeboro from '@/components/HeaderWeboro.vue'
import Footer from '@/components/Footer.vue'
</script>
