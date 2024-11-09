import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const main = async () => {
  const avgAge = await prisma.user.aggregate({
    _avg: {
      age: true,
    },
    _max: {
      age: true,
    },
    _min: {
      age: true,
    },
    _sum: {
      age: true,
    },
    _count: {
      username: true,
    },
  });

  const countData = await prisma.user.count();
  console.log(countData);
  console.log(avgAge);
};
main();
