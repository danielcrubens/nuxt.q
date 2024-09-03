<template>
  <Header/>
  <section class="grid grid-cols-1 lg:grid-cols-2 lg:h-screen">
    <Background />
    <div class="">
      <div class="px-4 lg:px-40 mx-auto">
        <h1 class=" title">Entre como participante</h1>
        <FormEnterRoom />
        <div class=" lg:py-12 py-12 flex gap-3 items-center justify-center">
          <div class="w-full h-[1px] bg-gray-blue"></div>
          <div class="text-gray-blue font-medium">ou</div>
          <div class="w-full h-[1px] bg-gray-blue"></div>
        </div>
        <h2 class="title">Crie sua própria sala de <br class="lg:block hidden"> forma fácil</h2>
        <NuxtLink to="create-pass"
          class="w-full mt-6 flex justify-center items-center gap-2 rounded-lg border-2 border-blue-100  p-3 font-medium text-lg  text-blue-100 transition hover:brightness-95 focus:outline-none">
          <Users/>
          Criar sala
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<style >
.title {
  @apply lg:text-[28px] text-2xl font-bold text-blue;
}
</style>

<script setup>
import Background from '@/components/Section/Background.vue'
</script>
