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
  //   // Update a multiple post
  //   const updateMultiple = await prisma.post.updateMany({
  //     where: {
  //       title: 'This is title 2',
  //     },
  //     data: {
  //       published: true,
  //     },
  //   });
  //   console.log(updateMultiple);

  // upsert a single post
  const postToUpdate = await prisma.post.upsert({
    where: {
      id: 8,
    },
    update: {
      published: true,
    },
    create: {
      title: 'This is title 3',
      content: 'This is content 3',
      authorName: 'This is author 3',
    },
  });
  console.log(postToUpdate);
};

updates();
