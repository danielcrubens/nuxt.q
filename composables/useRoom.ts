// composables/useRoom.ts

export const useRoom = () => {
  const createRoom = async (password: string) => {
    const { data } = await useFetch('/api/create-room', {
      method: 'POST',
      body: { password },
    })
    return data.value
  }

  const enterRoom = async (code: string) => {
    const { data } = await useFetch('/api/enter-room', {
      method: 'POST',
      body: { code },
    })
    return data.value
  }

  return {
    createRoom,
    enterRoom,
  }
}