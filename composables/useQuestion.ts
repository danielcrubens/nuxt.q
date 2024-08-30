
export const useQuestion = () => {
  const createQuestion = async (content: string, roomCode : string) => {
    try {
      const response = await useFetch('/api/create-question', {
        method: 'POST',
        body: { content, roomCode  },
      })
      return response
    } catch (error) {
      console.error('Erro ao criar pergunta:', error)
      throw error
    }
  }

  const getQuestions = async (roomCode : string) => {
    try {
      const { data, error } = await useFetch('/api/get-questions', {
        params: { roomCode  },
      })

      if (error.value) {
        console.error('Erro na requisição:', error.value)
        throw new Error(error.value.message)
      }

      return data.value
    } catch (e) {
      console.error('Erro ao obter perguntas:', e)
      throw e
    }
  }

  const updateQuestion = async (id: string, isRead: boolean) => {
    try {
      const { data, error } = await useFetch('/api/update-question', {
        method: 'PUT',
        body: { id, isRead },
      })

      if (error.value) {
        console.error('Erro na requisição:', error.value)
        throw new Error(error.value.message)
      }

      return data.value
    } catch (e) {
      console.error('Erro ao atualizar pergunta:', e)
      throw e
    }
  }

  const deleteQuestion = async (id: string) => {
    try {
      const { data, error } = await useFetch('/api/delete-question', {
        method: 'DELETE',
        body: { id },
      })

      if (error.value) {
        console.error('Erro na requisição:', error.value)
        throw new Error(error.value.message)
      }

      return data.value
    } catch (e) {
      console.error('Erro ao deletar pergunta:', e)
      throw e
    }
  }

  return {
    createQuestion,
    getQuestions,
    updateQuestion,
    deleteQuestion,
  }
}
