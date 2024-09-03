import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { id, password, roomCode, isRead } = body

  // Verificar se a senha corresponde à sala
  const room = await prisma.room.findUnique({
    where: { code: roomCode },
  });

  if (!room || room.password !== password) {
    return { success: false, error: 'Senha incorreta ou sala não encontrada' };
  }

  // Se a senha estiver correta, atualiza a pergunta
  await prisma.question.update({
    where: { id },
    data: { isRead },
  })

  return { success: true };
})