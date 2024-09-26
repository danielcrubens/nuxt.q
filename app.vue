<template>
<NuxtLayout>
  <NuxtPage />
</NuxtLayout>
</template>

<script setup lang="ts">
useHead({
  title: 'Nuxt.Q',
})

useSeoMeta({
  title: 'Nuxt.Q - Interação Anônima através de Perguntas',
  ogTitle: 'Nuxt.Q - Interação Anônima através de Perguntas',
  description: 'Plataforma interativa para criação de salas de perguntas anônimas',
  ogDescription: 'Plataforma interativa para criação de salas de perguntas anônimas',
})
</script>