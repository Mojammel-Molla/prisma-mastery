import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const main = async () => {
  //// fluent api
  // const result = await prisma.user
  //   .findUnique({
  //     where: {
  //       id: 1,
  //     },
  //   })
  //   .post();

  //include api
  const result = await prisma.user.findUnique({
    where: {
      id: 1,
    },
    include: {
      post: true,
    },
  });

  // console.log(result);

  //relational filtering
  const publishedPostUsers = await prisma.user.findMany({
    include: {
      post: {
        where: {
          published: true,
        },
      },
    },
  });
  console.dir(publishedPostUsers, { depth: Infinity });
};

main();
