<template>
  <form @submit.prevent="validateAndEnterRoom">
    <input v-model="roomCode"
      class="mt-6 w-full bg-[#f6faff] rounded-lg border-solid border-2 text-blue border-gray-blue p-3 text-md shadow-sm placeholder-dark-blue"
      type="text" placeholder="Código da sala" />
    <p v-if="validationError" class="text-red-500 text-sm mt-0">{{ validationError }}</p>
    <button type="submit"
      class="w-full mt-6 flex justify-center items-center gap-2 rounded-lg bg-blue-100 p-3 font-medium text-lg text-white transition hover:brightness-95 focus:outline-none">
      <Loader v-if="isLoading" class="animate-spin"  :size="20"/>
      <LogIn v-else />
      Entrar na sala
    </button>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { LogIn, Loader } from 'lucide-vue-next'
import { useToast } from 'vue-toastification'
import { z } from 'zod'

const passwordSchema = z
  .string()
  .min(1, { message: 'Por favor, insira uma senha.' })
  .min(3, { message: 'A senha deve ter no mínimo 3 caracteres.' })
  .regex(/^\d+$/, { message: 'A senha deve conter apenas números.' })

const router = useRouter()
const roomCode = ref('')
const validationError = ref('')
const isLoading = ref(false)
const toast = useToast()

const validateAndEnterRoom = async () => {
  validationError.value = ''
  const validationResult = passwordSchema.safeParse(roomCode.value)

  if (!validationResult.success) {
    validationError.value = validationResult.error.issues[0].message
    return
  }

  isLoading.value = true

  try {
    const { data, error } = await useFetch('/api/enter-room', {
      method: 'POST',
      body: { code: roomCode.value },
    })

    if (error.value) {
      console.error('Erro ao entrar na sala:', error.value)
      toast.error('Ocorreu um erro ao tentar entrar na sala', {
        timeout: 3100,
        position: 'bottom-right',
        pauseOnFocusLoss: false,
        pauseOnHover: false,
        closeButton: false,
      })
    } else if (data.value) {
      router.push(`/room/${roomCode.value}`)
    } else {
      toast.error('Sala não encontrada', {
        timeout: 3100,
        position: 'bottom-right',
        pauseOnFocusLoss: false,
        pauseOnHover: false,
        closeButton: false,
      })
    }
  } finally {
    isLoading.value = false
  }
}
</script>