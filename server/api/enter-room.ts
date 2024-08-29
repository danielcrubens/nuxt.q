import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { code } = body

  const room = await prisma.room.findUnique({
    where: { code },
  })

  if (!room) {
    throw createError({
      statusCode: 404,
      message: 'Essa sala não existe!',
    })
  }

  return { success: true }
})