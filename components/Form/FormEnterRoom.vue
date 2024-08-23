<template>
  <form action="">
          <input
            class=" mt-6 w-full rounded-lg border-solid border-2 text-blue border-gray-blue p-3  text-md shadow-sm placeholder-dark-blue"
            type="number" placeholder="Código da sala" />
          <button type="submit"
            class="w-full mt-6 flex justify-center items-center gap-2 rounded-lg bg-blue-100 p-3 font-medium text-lg  text-white transition hover:brightness-95 focus:outline-none">
            <LogIn />
            Entrar na sala
          </button>
        </form>
  </template>

<script setup>
import { LogIn } from 'lucide-vue-next'
</script>