import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { id, password, roomCode } = body;

  // Verificar se a senha corresponde à sala
  const room = await prisma.room.findUnique({
    where: { code: roomCode },
  });

  if (!room || room.password !== password) {
    return { success: false, error: 'Senha incorreta ou sala não encontrada' };
  }

  // Excluir a pergunta se a senha estiver correta
  await prisma.question.delete({
    where: { id },
  });

  return { success: true };
});
