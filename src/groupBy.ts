import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const main = async () => {
  const groupPost = await prisma.post.groupBy({
    by: ['published'],
    _count: {
      title: true,
    },
    having: {
      authorId: {
        _sum: {
          gt: 2,
        },
      },
    },
  });

  console.log(groupPost);
};
main();
