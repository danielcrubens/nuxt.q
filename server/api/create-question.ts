import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { content, roomCode,   } = body
  console.log('Recebido pedido para criar pergunta:', { content, roomCode  })

  try {
    const room = await prisma.room.findUnique({
      where: { code: roomCode },
    })

    if (!room) {
      console.log('Sala não encontrada:', roomCode)
      return createError({
        statusCode: 404,
        statusMessage: 'Sala não encontrada',
      })
    }
    const question = await prisma.question.create({
      data: {
        content,
        roomId: room.id, 
      },
    })

    console.log('Pergunta criada com sucesso:', question)
    return question
  } catch (error) {
    console.error('Erro ao criar pergunta:', error)
    return createError({
      statusCode: 500,
      statusMessage: 'Erro ao criar pergunta',
    })
  }
  
})