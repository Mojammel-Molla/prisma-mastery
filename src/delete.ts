import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const deleteData = async () => {
  //   //delete single post
  //   const singleDelete = await prisma.post.delete({
  //     where: {
  //       id: 1,
  //     },
  //   });
  //   console.log(singleDelete);
  // };
  // Update a multiple post
  const deleteMultiple = await prisma.post.deleteMany({
    where: {
      published: true,
    },
  });
  console.log(deleteMultiple);
};
deleteData();
