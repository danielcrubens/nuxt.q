export const useQuestion = () => {
  const createQuestion = async (content: string, roomCode: string) => {
    try {
      const response = await useFetch('/api/create-question', {
        method: 'POST',
        body: { content, roomCode },
      })
      return response
    } catch (error) {
      console.error('Erro ao criar pergunta:', error)
      throw error
    }
  }

  const getQuestions = async (roomCode: string) => {
    try {
      const { data, error } = await useFetch('/api/get-questions', {
        params: { roomCode },
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

  const updateQuestion = async (params: { id: string; isRead: boolean; roomCode: string; password: string }) => {
    try {
      const { data, error } = await useFetch('/api/update-question', {
        method: 'PUT',
        body: params,
      })

      if (error.value) {
        console.error('Erro na requisição:', error.value)
        throw new Error(error.value.message || 'Erro ao atualizar pergunta')
      }

      if (!data.value.success) {
        throw new Error(data.value.error || 'Falha ao atualizar pergunta')
      }

      return data.value
    } catch (e) {
      console.error('Erro ao atualizar pergunta:', e)
      throw e
    }
  }

  const deleteQuestion = async (params: { id?: string; content?: string; roomCode: string }) => {
    const { data, error } = await useFetch('/api/delete-question', {
      method: 'DELETE',
      body: params,
    })

    if (error.value) {
      console.error('Erro ao deletar pergunta:', error.value)
      throw new Error(error.value.message || 'Falha ao excluir pergunta')
    }

    if (!data.value?.success) {
      throw new Error(data.value?.error || 'Falha ao excluir pergunta')
    }

    return data.value
  }

  return {
    createQuestion,
    getQuestions,
    updateQuestion,
    deleteQuestion,
  }
}
