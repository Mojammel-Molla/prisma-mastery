import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const main = async () => {
  // find all
  const getAllPosts = await prisma.post.findMany();
  // console.log(getAllPosts);

  //findFirst and finsFirstOrThrow
  const findFirst = await prisma.post.findFirstOrThrow({
    where: {
      published: false,
    },
  });
  // console.log({ findFirst });

  //findUnique and findUniqueOrThrow
  const findUnique = await prisma.post.findUniqueOrThrow({
    where: {
      id: 2,
    },
  });
  console.log({ findUnique });
};

main();
