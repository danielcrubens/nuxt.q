export const useRoom = () => {
  const createRoom = async (password: string) => {
    const { data } = await useFetch('/api/create-room', {
      method: 'POST',
      body: { password },
    })
    return data.value
  }

  const enterRoom = async (id: string) => {
    const { data } = await useFetch('/api/enter-room', {
      method: 'POST',
      body: { id },
    })
    return data.value
  }

  return {
    createRoom,
    enterRoom,
  }
}