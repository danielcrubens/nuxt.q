<template>
  <section>
    <div v-if="loading">
      <p>Carregando perguntas...</p>
    </div>
    <div v-else-if="questions.length > 0">
      <div v-for="question in questions" :key="question.id" class="bg-light-blue my-5 p-5">
        <div class="flex items-center gap-3">
          <div class="user bg-blue-100 w-10 p-2 mx-0 rounded-full">
            <User color="#ffff" />
          </div>
          <p class="text-blue">{{ question.content }}</p>
        </div>
        <div class="flex justify-end items-center gap-6">
          <button @click="showModalCheck = true" class="flex items-center">
            <CheckIcon :size="18" color="#3485ff" />
            <p class="text-blue-100">Marcar como lida</p>
          </button>
          <button @click="openDeleteModal(question)" class="flex items-center">
            <Trash :size="18" color="#E83F5B" />
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
    <Check :isVisible="showModalCheck" @close="showModalCheck = false" />
    <Delete :isVisible="showModalDelete" :question="questionToDelete" @close="showModalDelete = false"
      @deleteQuestion="handleDeleteQuestion" />
  </section>
</template>

<style scoped>
p {
  @apply text-blue;
}
</style>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { User, Trash, CheckIcon } from 'lucide-vue-next'
import { useQuestion } from '@/composables/useQuestion'
import Check from '@/components/Modal/Check.vue';
import Delete from '@/components/Modal/Delete.vue';

const showModalCheck = ref(false);
const showModalDelete = ref(false);
const questionToDelete = ref(null); // Armazena a pergunta a ser excluída
const route = useRoute()
const roomCode = ref(route.params.code)
const questions = ref([])
const loading = ref(true)
const { getQuestions, updateQuestion, deleteQuestion } = useQuestion()

const fetchQuestions = async () => {
  loading.value = true
  try {
    const fetchedQuestions = await getQuestions(roomCode.value)
    questions.value = fetchedQuestions
  } catch (error) {
    console.error('Erro ao buscar perguntas:', error)
  } finally {
    loading.value = false
  }
}

const markAsRead = async (questionId) => {
  await updateQuestion(questionId, true)
  await fetchQuestions()
}

const openDeleteModal = (question) => {
  questionToDelete.value = question;
  showModalDelete.value = true;
}

const handleDeleteQuestion = async ({ question, password }) => {
  try {
    const result = await deleteQuestion({
      id: question.id,
      roomCode: roomCode.value,
      password, // Envia a senha para o backend
    });

    if (result.success) {
      questions.value = questions.value.filter(q => q.id !== question.id);
    } else {
      console.error(`Falha ao excluir pergunta:`, result.error);
    }
  } catch (error) {
    console.error(`Erro ao excluir pergunta:`, error);
  }
}

onMounted(fetchQuestions)

watch(() => route.params.code, (newCode) => {
  if (newCode !== roomCode.value) {
    roomCode.value = newCode
    fetchQuestions()
  }
})
</script>
