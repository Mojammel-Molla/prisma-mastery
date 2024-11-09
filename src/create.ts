import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const main = async () => {
  // //createOne
  // const createOne = await prisma.post.create({
  //   data: {
  //     title: 'This is title 2',
  //     content: 'This is content 2',
  //     authorName: 'This is author 2',
  //   },
  // });

  // console.log(createOne);

  const createMany = await prisma.post.createMany({
    data: [
      {
        title: 'This is title 5',
        content: 'This is content 5',
        authorName: 'This is author 5',
      },
      {
        title: 'This is title 6',
        content: 'This is content 6',
        authorName: 'This is author 6',
      },
      {
        title: 'This is title 7',
        content: 'This is content 7',
        authorName: 'This is author 7',
      },
    ],
  });
  console.log(createMany);
};

main();
