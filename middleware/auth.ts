import { useRoom } from '@/composables/useRoom'

export default defineNuxtRouteMiddleware(async (to) => {
  const { enterRoom } = useRoom()
  const roomCode = to.params.code

  if (!roomCode) {
    return navigateTo('/')
  }

  try {
    const result = await enterRoom(roomCode.toString())
    if (!result.success) {
      return navigateTo('/')
    }
  } catch (error) {
    console.error('Erro ao entrar na sala:', error)
    return navigateTo('/')
  }
})