<template>
  <footer class="bg-zinc-950 py-10 text-center text-gray-500 text-sm">
    <p class="mb-2">{{$t('footer_rights')}}</p>
    <div class="flex justify-center gap-4">
      <a href="/outreachgenie" class="hover:underline">{{$t('footer_outreach')}}</a>
      <a href="/lumawear" class="hover:underline">{{$t('footer_lumawear')}}</a>
      <router-link to="/kontakt" class="hover:underline">{{$t('footer_contact')}}</router-link>
    </div>
  </footer>

</template>

<script>
import { ref } from 'vue'
export default {
  name: "Footer"
}
</script>

<style scoped>

</style>