import { PrismaClient } from '@prisma/client';
import { create } from 'domain';

const prisma = new PrismaClient();

const batchTransaction = async () => {
  const createUser = prisma.user.create({
    data: {
      username: 'Abul',
      email: 'abul@example.com',
    },
  });
  const updateUser = prisma.user.update({
    where: {
      id: 5,
    },
    data: {
      age: 13,
    },
  });

  const [userData, updateData] = await prisma.$transaction([
    createUser,
    updateUser,
  ]);

  console.log(userData, updateData);
};

batchTransaction();
