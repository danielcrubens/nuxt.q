<template>
  <HeaderRoom/>
  <section class="lg:px-36 px-4">
    <h1 class="title py-4">Faça sua pergunta</h1>
    <FormQuestion/>
   <Questions/>
  </section>
</template>
<style>
.title {
  @apply lg:text-[28px] text-2xl font-bold text-blue;
}
</style>

<script setup>
import Questions from '@/components/Section/Questions.vue';
definePageMeta({
  layout: 'rooms',
})
</script>
