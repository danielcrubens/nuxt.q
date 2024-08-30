import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { id } = body

  await prisma.question.delete({
    where: { id },
  })

  return { success: true }
})