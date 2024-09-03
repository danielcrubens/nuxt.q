export const useRoom = () => {
  const createRoom = async (password: string) => {
    const { data, error } = await useFetch('/api/create-room', {
      method: 'POST',
      body: { password },
    })

    if (error.value) {
      throw new Error('Erro ao criar sala')
    }

    return data.value
  }

  const enterRoom = async (code: string) => {
    const { data, error } = await useFetch('/api/enter-room', {
      method: 'POST',
      body: { code },
    })

    if (error.value) {
      throw new Error('Erro ao entrar na sala')
    }

    return data.value
  }

  return {
    createRoom,
    enterRoom,
  }
}