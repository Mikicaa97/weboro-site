<template>
  <footer class="bg-black border-t border-zinc-800/50 text-zinc-400 text-sm">
    <div class="max-w-7xl mx-auto px-6 py-12 md:py-14 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
      <div class="md:col-span-4 space-y-3">
        <p class="text-white font-bold text-lg tracking-tight">Weboro</p>
        <p class="text-zinc-500 leading-relaxed max-w-sm text-[13px]">{{ $t('footer_tagline') }}</p>
      </div>

      <div class="md:col-span-3 md:border-l md:border-zinc-800/80 md:pl-8">
        <p class="text-white font-semibold text-[11px] uppercase tracking-[0.16em] mb-4">{{ $t('footer_col_services') }}</p>
        <ul class="space-y-2.5">
          <li>
            <router-link to="/usluge/ecommerce" class="hover:text-[#ffb088] transition-colors">{{ $t('footer_web') }}</router-link>
          </li>
          <li>
            <router-link to="/usluge/custom-web" class="hover:text-[#ffb088] transition-colors">{{ $t('footer_custom') }}</router-link>
          </li>
          <li>
            <router-link to="/usluge/growth" class="hover:text-[#ffb088] transition-colors">{{ $t('footer_growth') }}</router-link>
          </li>
          <li>
            <router-link to="/usluge/magento" class="hover:text-[#ffb088] transition-colors">{{ $t('mega_magento_title') }}</router-link>
          </li>
        </ul>
      </div>

      <div class="md:col-span-3 md:border-l md:border-zinc-800/80 md:pl-8">
        <p class="text-white font-semibold text-[11px] uppercase tracking-[0.16em] mb-4">{{ $t('footer_col_company') }}</p>
        <ul class="space-y-2.5">
          <li>
            <router-link to="/" class="hover:text-[#ffb088] transition-colors">{{ $t('footer_home') }}</router-link>
          </li>
          <li>
            <router-link to="/portfolio" class="hover:text-[#ffb088] transition-colors">{{ $t('nav_portfolio') }}</router-link>
          </li>
          <li>
            <router-link to="/o-nama" class="hover:text-[#ffb088] transition-colors">{{ $t('nav_about') }}</router-link>
          </li>
          <li>
            <router-link to="/kontakt" class="hover:text-[#ffb088] transition-colors">{{ $t('footer_contact') }}</router-link>
          </li>
        </ul>
      </div>

      <div class="md:col-span-2 md:border-l md:border-zinc-800/80 md:pl-8">
        <p class="text-white font-semibold text-[11px] uppercase tracking-[0.16em] mb-4">{{ $t('footer_col_products') }}</p>
        <ul class="space-y-2.5">
          <li>
            <router-link to="/portfolio/outreachgenie" class="hover:text-[#ffb088] transition-colors">
              {{ $t('footer_product_og') }}
            </router-link>
          </li>
        </ul>
      </div>
    </div>

    <div class="border-t border-zinc-800/50 py-5 px-6">
      <div class="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-600">
        <p>{{ $t('footer_rights') }}</p>
        <div class="flex items-center gap-4">
          <router-link to="/privacy" class="hover:text-[#ffb088] transition-colors">{{ $t('nav_privacy') }}</router-link>
          <router-link to="/terms" class="hover:text-[#ffb088] transition-colors">{{ $t('nav_terms') }}</router-link>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
</script>
