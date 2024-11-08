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
        title: 'This is title 3',
        content: 'This is content 3',
        authorName: 'This is author 3',
      },
      {
        title: 'This is title 4',
        content: 'This is content 4',
        authorName: 'This is author 4',
      },
    ],
  });
  console.log(createMany);
};

main();
