<template>
  <form action="" class="rounded-lg border-2 border-gray-blue mt-7 p-5 font-normal">
    <label class="sr-only" for-id="question">O que você quer perguntar?</label>
    <textarea name="question" id="question" class="w-full bg-[#f6faff] text-blue resize-none"
      placeholder="O que você quer perguntar?"></textarea>

    <footer class="flex justify-between items-center">
      <div class="flex items-baseline text-[#a5b0c1]">
        <LockKeyhole :size="18" />
        <p class="text-sm">Esta pergunta é anônima</p>
      </div>
      <button
        class=" px-10 flex justify-center items-center gap-2 rounded-lg bg-blue-100 p-3 font-medium text-md  text-white transition hover:brightness-95 focus:outline-none">
        Enviar</button>
    </footer>
  </form>
</template>

<script setup>
import { LockKeyhole } from 'lucide-vue-next'
</script>
