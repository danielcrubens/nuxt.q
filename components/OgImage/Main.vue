<template>
  <div class="w-full h-full flex flex-col justify-end items-center bg-no-repeat bg-auto bg-blue-100" >
    <img src="/public/icon.svg" class="absolute inset-0  w-80 h-full object-contain" alt="logo"/>
    <h1 class="font-bold text-6xl text-white">
      {{ props.title }}
    </h1>
    <p class="text-white font-medium text-center text-4xl -mt-3">
      {{ props.description }}
    </p>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  title: string
  description: string
}>()
</script>