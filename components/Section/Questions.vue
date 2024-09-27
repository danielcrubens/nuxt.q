<template>
  <section>
    <div v-if="pending" class="fixed inset-0 bg-slate-900 bg-opacity-80 flex justify-center items-center z-50">
      <Spinner/>
    </div>
    <div v-else-if="questions.length > 0">
      <div v-for="question in questions" :key="question.id"
        class="my-5 p-5 bg-light-blue relative shadow-sm rounded-md">
        <div :class="{ 'blur-sm ': question.isRead }">
          <div class="flex items-center gap-3">
            <div class="user bg-blue-100 w-10 p-2 mx-0 rounded-full">
              <User color="#ffff" />
            </div>
            <p class="text-blue">{{ question.content }}</p>
          </div>
          <div class="flex justify-end items-center gap-6 mt-3 px-24">
            <button v-if="!question.isRead" @click="openCheckModal(question)" class="flex items-center">
              <CheckIcon :size="17" color="#3485ff" />
              <p class="text-blue-100">Marcar como lida</p>
            </button>
          </div>
        </div>
        <div class="absolute bottom-5 right-5">
          <button @click="openDeleteModal(question)" class="flex items-center">
            <Trash :size="17" color="#E83F5B" />
            <p class="text-[#E83F5B]">Excluir</p>
          </button>
        </div>
      </div>
    </div>
    <div v-else class="flex flex-col justify-center items-center">
      <img class="w-28 lg:w-36 mx-auto mt-8 py-5" src="@/assets/images/noquestions.svg" alt="Sem perguntas">
      <p>Nenhuma pergunta por aqui...</p>
      <p>Faça sua primeira pergunta e envie o <br>código dessa sala para outras pessoas!</p>
    </div>
    <Check :isVisible="showModalCheck" :question="questionToMarkAsRead" @close="showModalCheck = false"
      @markAsRead="handleMarkAsRead" />
    <Delete :isVisible="showModalDelete" :question="questionToDelete" @close="showModalDelete = false"
      @deleteQuestion="handleDeleteQuestion" />
  </section>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { User, Trash, CheckIcon } from 'lucide-vue-next'
import { useQuestion } from '@/composables/useQuestion'
import Check from '@/components/Modal/Check.vue'
import Delete from '@/components/Modal/Delete.vue'
import { useToast } from 'vue-toastification/dist/index.mjs'
import Spinner from '@/components/Loading/Spinner.vue'

const toast = useToast()
const showModalCheck = ref(false)
const showModalDelete = ref(false)
const questionToDelete = ref(null)
const questionToMarkAsRead = ref(null)
const route = useRoute()
const roomCode = ref(route.params.code)

const { getQuestions, updateQuestion, deleteQuestion } = useQuestion()

const { data: questions, pending, refresh } = useAsyncData(
  'questions',
  () => getQuestions(roomCode.value),
  { server: true, lazy: false }
)

const openCheckModal = (question) => {
  questionToMarkAsRead.value = question
  showModalCheck.value = true
}

const handleMarkAsRead = async ({ question, password }) => {
  if (!question || !question.id) {
    console.error("Pergunta não definida ou inválida:", question)
    return
  }

  try {
    const result = await updateQuestion({
      id: question.id,
      isRead: true,
      roomCode: roomCode.value,
      password,
    })

    if (result.success) {
      await refresh()
      toast.success('Pergunta marcada como lida com sucesso!', {
        timeout: 3100,
        position: 'bottom-right',
        pauseOnFocusLoss: false,
        pauseOnHover: false,
        closeButton: false,
      })
    }
  } catch (error) {
    toast.error('Erro ao marcar pergunta como lida. Tente novamente mais tarde.', {
      timeout: 3100,
      position: 'bottom-right',
      pauseOnFocusLoss: false,
      pauseOnHover: false,
      closeButton: false,
    })
  }
}

const openDeleteModal = (question) => {
  questionToDelete.value = question
  showModalDelete.value = true
}

const handleDeleteQuestion = async ({ question, password }) => {
  if (!question || !question.id) {
    console.error("Pergunta não definida ou inválida:", question)
    return
  }

  try {
    const result = await deleteQuestion({
      id: question.id,
      roomCode: roomCode.value,
      password,
    })

    if (result.success) {
      await refresh()
      toast.success('Pergunta excluída com sucesso!', {
        timeout: 3100,
        position: 'bottom-right',
        pauseOnFocusLoss: false,
        pauseOnHover: false,
        closeButton: false,
      })
    } else {
      throw new Error(result.error || 'Falha ao excluir pergunta')
    }
  } catch (error) {
    toast.error(error.message || 'Erro ao excluir pergunta. Verifique a senha e tente novamente.', {
      timeout: 3100,
      position: 'bottom-right',
      pauseOnFocusLoss: false,
      pauseOnHover: false,
      closeButton: false,
    })
  }
}

watch(() => route.params.code, (newCode) => {
  if (newCode !== roomCode.value) {
    roomCode.value = newCode
    refresh()
  }
})
</script>

<style scoped>
p {
  @apply text-blue;
}
</style>