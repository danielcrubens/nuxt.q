import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

function generateRoomCode() {
  return Math.floor(100000 + Math.random() * 900000).toString()
}

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { password } = body

  let code
  let room

  do {
    code = generateRoomCode()
    try {
      room = await prisma.room.create({
        data: {
          code,
          password,
        },
      })
      break
    } catch (error) {
      if (error.code !== 'P2002') {
        throw error
      }
      // If we get a unique constraint error, we'll try again with a new code
    }
  } while (true)

  return { id: room.id, code: room.code }
})