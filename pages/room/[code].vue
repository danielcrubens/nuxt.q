<template>
  <HeaderRoom />
  <section class="lg:px-36 px-4">
    <h1 class="title py-4">Faça sua pergunta</h1>
    <FormQuestion @question-created="fetchQuestions" />
    <Questions :questions="questions" @question-updated="fetchQuestions" />
  </section>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useQuestion } from '@/composables/useQuestion'

const route = useRoute()
const router = useRouter()
const roomCode = route.params.code
const questions = ref([])
const { getQuestions, updateQuestion } = useQuestion()

const isAuthenticated = computed(() => {
  return !!localStorage.getItem(`room_${roomCode}`)
})

const fetchQuestions = async () => {
  questions.value = await getQuestions(roomCode)
}

const handleQuestionUpdate = async (questionId, isRead) => {
  if (isAuthenticated.value) {
    await updateQuestion(questionId, isRead)
    await fetchQuestions()
  }
}

onMounted(() => {
  fetchQuestions()
  if (!isAuthenticated.value) {
    router.push('/')
  }
})

definePageMeta({
  layout: 'rooms',
})
</script>