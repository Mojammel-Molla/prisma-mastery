import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const interactiveTransaction = async () => {
  const result = await prisma.$transaction(async transactionClient => {
    //query 1
    const getAllPost = await transactionClient.post.findMany({
      where: {
        published: true,
      },
    });

    //query 2
    const counter = await transactionClient.user.count();

    //query 3
    const updateUser = await transactionClient.user.update({
      where: {
        id: 6,
      },
      data: {
        age: 25,
      },
    });
    return {
      getAllPost,
      counter,
      updateUser,
    };
  });
  console.log(result);
};

interactiveTransaction();
