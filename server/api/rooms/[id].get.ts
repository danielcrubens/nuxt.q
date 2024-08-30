import { PrismaClient } from '@prisma/client'

     const prisma = new PrismaClient()

     export default defineEventHandler(async (event) => {
       const id = event.context.params.id
       const room = await prisma.room.findUnique({
         where: { id },
         include: { questions: true }
       })
       if (!room) {
         throw createError({
           statusCode: 404,
           statusMessage: 'Room not found',
         })
       }
       return room
     })