import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const { roomCode } = query

  try {
    // Verifica se a sala existe e obtém o ID da sala
    const room = await prisma.room.findUnique({
      where: { code: roomCode as string },
    })

    if (!room) {
      console.log('Sala não encontrada:', roomCode)
      return createError({
        statusCode: 404,
        statusMessage: 'Sala não encontrada',
      })
    }

    // Busca as perguntas associadas ao roomId da sala
    const questions = await prisma.question.findMany({
      where: { roomId: room.id },
      orderBy: { id: 'desc' },
    })

    return questions
  } catch (error) {
    console.error('Erro ao buscar perguntas:', error)
    return createError({
      statusCode: 500,
      statusMessage: 'Erro ao buscar perguntas',
    })
  }
})
