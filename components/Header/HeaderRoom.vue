<template>
  <header class="w-full lg:px-36 px-4 lg:flex justify-between items-center py-8">
  <Logo/>
    <div class="flex justify-center gap-5 pt-7 lg:pt-0">
      <button
        class="px-6 flex justify-center items-center gap-2 rounded-lg border-2 border-blue-100  p-3 font-medium text-md  text-blue-100 transition hover:brightness-95 focus:outline-none">
        #123456
        <Copy />
      </button>
      <NuxtLink to="create-pass"
        class=" px-6 flex justify-center items-center gap-2 rounded-lg bg-blue-100 p-3 font-medium text-md  text-white transition hover:brightness-95 focus:outline-none">
        <Users />
        Criar Sala
      </NuxtLink>
    </div>
  </header>
</template>

<script setup>
import Logo from './Logo.vue';
import { Users, Copy } from 'lucide-vue-next'
</script>

