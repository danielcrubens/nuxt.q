<template>
  <header class="w-full lg:px-36 px-4 py-8">
    <Logo />
  </header>
  <section class="grid grid-cols-1 lg:grid-cols-2 h-full ">
    <Background />
    <div class="  my-auto mt-32">
      <div class="px-4 lg:px-40 mx-auto">
        <h1 class=" title">Crie sua própria sala</h1>
        <FormCreateRoom />
      </div>
    </div>
  </section>
</template>

<script setup>
import Logo from '@/components/Header/Logo.vue'
import Background from '@/components/Section/Background.vue'
</script>
