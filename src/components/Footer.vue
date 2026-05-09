<template>
  <footer class="bg-zinc-950 border-t border-zinc-800/80 text-zinc-400 text-sm">
    <div class="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
      <div class="md:col-span-4 space-y-4">
        <p class="text-white font-bold text-lg tracking-tight">Weboro</p>
        <p class="text-zinc-500 leading-relaxed max-w-sm">{{ $t('footer_tagline') }}</p>
      </div>

      <div class="md:col-span-3 md:border-l md:border-zinc-800 md:pl-8">
        <p class="text-white font-semibold text-xs uppercase tracking-wider mb-4">{{ $t('footer_col_services') }}</p>
        <ul class="space-y-2.5">
          <li>
            <router-link to="/usluge/magento" class="hover:text-yellow-400 transition-colors">{{ $t('service_magento_title') }}</router-link>
          </li>
          <li>
            <router-link to="/usluge/wordpress" class="hover:text-yellow-400 transition-colors">{{ $t('service_wordpress_title') }}</router-link>
          </li>
          <li>
            <router-link to="/usluge/custom-web" class="hover:text-yellow-400 transition-colors">{{ $t('service_custom_web_title') }}</router-link>
          </li>
          <li>
            <router-link to="/usluge/growth" class="hover:text-yellow-400 transition-colors">{{ $t('service_growth_title') }}</router-link>
          </li>
        </ul>
      </div>

      <div class="md:col-span-3 md:border-l md:border-zinc-800 md:pl-8">
        <p class="text-white font-semibold text-xs uppercase tracking-wider mb-4">{{ $t('footer_col_company') }}</p>
        <ul class="space-y-2.5">
          <li>
            <router-link to="/" class="hover:text-yellow-400 transition-colors">{{ $t('footer_home') }}</router-link>
          </li>
          <li>
            <router-link to="/portfolio" class="hover:text-yellow-400 transition-colors">{{ $t('nav_portfolio') }}</router-link>
          </li>
          <li>
            <router-link to="/o-nama" class="hover:text-yellow-400 transition-colors">{{ $t('nav_about') }}</router-link>
          </li>
          <li>
            <router-link to="/kontakt" class="hover:text-yellow-400 transition-colors">{{ $t('footer_contact') }}</router-link>
          </li>
        </ul>
      </div>

      <div class="md:col-span-2 md:border-l md:border-zinc-800 md:pl-8">
        <p class="text-white font-semibold text-xs uppercase tracking-wider mb-4">{{ $t('footer_col_projects') }}</p>
        <ul class="space-y-2.5">
          <li>
            <router-link :to="{ path: '/', hash: '#outreachgenie' }" class="hover:text-yellow-400 transition-colors">
              {{ $t('footer_outreach') }}
            </router-link>
          </li>
          <li>
            <router-link to="/portfolio" class="hover:text-yellow-400 transition-colors">{{ $t('footer_lumawear') }}</router-link>
          </li>
        </ul>
      </div>
    </div>

    <div class="border-t border-zinc-800/80 py-6 text-center text-xs text-zinc-600">
      {{ $t('footer_rights') }}
    </div>
  </footer>
</template>

<script setup>
</script>

<style scoped>
</style>
