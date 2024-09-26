<template>
  <form @submit.prevent="sendQuestion" class="rounded-lg border-2 border-gray-blue mt-7 p-5 font-normal">
    <label class="sr-only" for="question">O que você quer perguntar?</label>
    <textarea v-model="question" name="question" id="question" class="w-full bg-[#f6faff] text-blue resize-none" placeholder="O que você quer perguntar?"></textarea>
    <div class="relative">
      <p v-if="errorMessage" class="text-red-500 text-sm absolute -mt-8">{{ errorMessage }}</p>
    </div>
    <footer class="flex justify-between items-center">
      <div class="flex items-baseline text-[#a5b0c1]">
        <LockKeyhole :size="17"/>
        <p class="text-sm">Esta pergunta é anônima</p>
      </div>
      <button class="px-10 flex justify-center items-center gap-2 rounded-lg bg-blue-100 p-3 font-medium text-md text-white transition hover:brightness-95 focus:outline-none">
        <Loader v-if="isLoading" class="animate-spin"  :size="20" />
        <span>Enviar</span>
      </button>
    </footer>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { useQuestion } from '@/composables/useQuestion'
import { LockKeyhole, Loader } from 'lucide-vue-next'
import { z } from 'zod'

const questionSchema = z.string().min(1, 'O campo não pode estar vazio.')

const route = useRoute()
const roomCode = route.params.code 

const question = ref('')
const errorMessage = ref('')
const isLoading = ref(false)
const { createQuestion } = useQuestion()

const sendQuestion = async () => {
  const result = questionSchema.safeParse(question.value)

  if (!result.success) {
    errorMessage.value = result.error.errors[0].message
    return
  }

  isLoading.value = true
  errorMessage.value = ''

  try {
    const createdQuestion = await createQuestion(question.value, roomCode)
    question.value = ''
    emit('question-created', createdQuestion)
    window.location.reload()
  } catch (error) {
    console.error('Erro ao enviar pergunta:', error)
    errorMessage.value = 'Ocorreu um erro ao enviar a pergunta. Por favor, tente novamente.'
  } finally {
    isLoading.value = false
  }
}

const emit = defineEmits(['question-created'])
</script>