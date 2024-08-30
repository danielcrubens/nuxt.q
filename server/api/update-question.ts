import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { id, isRead } = body

  const question = await prisma.question.update({
    where: { id },
    data: { isRead },
  })

  return question
})