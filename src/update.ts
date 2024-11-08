import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const updates = async () => {
  //   // Update a single post
  //   const postToUpdate = await prisma.post.update({
  //     where: {
  //       id: 1,
  //     },
  //     data: {
  //       published: true,
  //     },
  //   });
  //   console.log(postToUpdate);
  // };
  // Update a multiple post
  const updateMultiple = await prisma.post.updateMany({
    where: {
      title: 'This is title 2',
    },
    data: {
      published: true,
    },
  });
  console.log(updateMultiple);
};

updates();
