<template>
  <form @submit.prevent="handleSubmit">
    <input v-model="password"
      class="mt-6 w-full rounded-lg border-solid border-2 text-blue border-gray-blue p-3 text-md shadow-sm placeholder-dark-blue"
      type="password" placeholder="Insira uma senha" />
    <p v-if="error" class="text-red-500 text-sm mt-0">{{ error }}</p>
    <button type="submit"
      class="w-full mt-6 flex justify-center items-center gap-2 rounded-lg bg-blue-100 p-3 font-medium text-lg text-white transition hover:brightness-95 focus:outline-none">
      <Users />
      Criar Sala
    </button>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import { Users } from 'lucide-vue-next'
import { useRoom } from '@/composables/useRoom'
import { useRouter } from 'vue-router'
import { z } from 'zod'

const password = ref('')
const error = ref('')
const router = useRouter()
const { createRoom } = useRoom()

const passwordSchema = z
  .string()
  .min(1, { message: 'Por favor, insira uma senha.' })
  .min(3, { message: 'A senha deve ter no mínimo 3 caracteres.' }) 
  .regex(/^\d+$/, { message: 'A senha deve conter apenas números.' }) 

const handleSubmit = async () => {
  const result = passwordSchema.safeParse(password.value)

  if (!result.success) {
    error.value = result.error.errors[0].message
    return
  }

  error.value = ''
  const room = await createRoom(password.value)
  localStorage.setItem(`room_${room.code}`, room.id)
  router.push(`/room/${room.code}`)
}
</script>