<template>
  <HeaderWeboro/>
  <div class="bg-black text-white font-sans">

    <!-- Hero -->
    <section class="relative h-[40vh] flex flex-col justify-center items-center text-center px-6 md:px-20">
      <h1 class="pt-16 text-6xl md:text-7xl font-extrabold tracking-wide mb-4">{{$t('contact_title_page')}}</h1>
      <p class="text-lg md:text-xl text-gray-300 max-w-2xl">
        {{$t('contact_subtitle_page')}}
      </p>
    </section>

    <!-- Kontakt informacije -->
    <section class="py-20 px-6 md:px-20 bg-zinc-950">
      <div class="max-w-4xl mx-auto grid sm:grid-cols-2 gap-10 text-center">
        <div class="bg-zinc-900 p-8 rounded-xl">
          <h2 class="text-xl font-semibold text-yellow-400 mb-2">{{$t('contact_email_cards')}}</h2>
          <p class="text-gray-300">kontakt@weboro.agency</p>
        </div>
        <div class="bg-zinc-900 p-8 rounded-xl">
          <h2 class="text-xl font-semibold text-yellow-400 mb-2">{{$t('contact_phone_cards')}}</h2>
          <p class="text-gray-300">+381 65 582 2552</p>
        </div>
      </div>

      <div class="max-w-md mx-auto mt-12 text-center">
        <h3 class="text-gray-400 text-sm mb-3">{{$t('contact_follow')}}</h3>
        <div class="flex justify-center gap-6 text-gray-400 text-xl">
          <a href="#" class="hover:text-yellow-400 transition">IG</a>
          <a href="#" class="hover:text-yellow-400 transition">LI</a>
          <a href="#" class="hover:text-yellow-400 transition">YT</a>
        </div>
      </div>
    </section>

    <!-- Forma -->
    <section class="py-24 px-6 md:px-20">
      <div class="max-w-2xl mx-auto bg-zinc-900 p-10 rounded-xl">
        <h2 class="text-3xl font-bold mb-6 text-center">{{$t('contact_form_title')}}</h2>

        <form @submit.prevent="submitForm" class="space-y-6">
          <div>
            <label class="block text-sm mb-1">{{$t('contact_form_name')}}</label>
            <input v-model="form.name" type="text" required
                   class="w-full px-4 py-3 bg-zinc-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400" />
          </div>

          <div>
            <label class="block text-sm mb-1">{{$t('contact_form_email')}}</label>
            <input v-model="form.email" type="email" required
                   class="w-full px-4 py-3 bg-zinc-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400" />
          </div>

          <div>
            <label class="block text-sm mb-1">{{$t('contact_form_message')}}</label>
            <textarea v-model="form.message" rows="5" required
                      class="w-full px-4 py-3 bg-zinc-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"></textarea>
          </div>

          <button type="submit"
                  class="w-full px-6 py-4 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-300 transition">
            {{$t('contact_form_btn')}}
          </button>
        </form>

        <p v-if="success" class="text-green-400 text-center mt-6">
          {{$t('contact_form_success')}}
        </p>
      </div>
    </section>

  </div>
  <Footer/>
</template>


<script setup>
import { ref } from 'vue'
import HeaderWeboro from "@/components/HeaderWeboro.vue";
import Footer from "@/components/Footer.vue";
import {useI18n} from "vue-i18n";

const { t } = useI18n()

const form = ref({ name: '', email: '', message: '' })
const success = ref(false)

const submitForm = () => {
  console.log('Poruka:', form.value)
  success.value = true

  // reset
  form.value = { name: '', email: '', message: '' }
  setTimeout(() => (success.value = false), 4000)
}
</script>
