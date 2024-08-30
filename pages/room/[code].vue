<template>
  <HeaderRoom />
  <section class="lg:px-36 px-4">
    <h1 class="title py-4">Faça suasdacdc pergunta</h1>
    <FormQuestion @question-created="fetchQuestions" />
    <Questions ref="questionsComponent" />
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'


const route = useRoute()
const router = useRouter()
const roomCode = route.params.code
const questionsComponent = ref(null)

const isAuthenticated = computed(() => {
  return !!localStorage.getItem(`room_${roomCode}`)
})

const fetchQuestions = () => {
  questionsComponent.value?.fetchQuestions()
}

onMounted(() => {
  if (!isAuthenticated.value) {
    router.push('/')
    return
  }
})

definePageMeta({
  layout: 'rooms',
})
</script>