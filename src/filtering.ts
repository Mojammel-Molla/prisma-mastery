import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const main = async () => {
  // //AND filtering
  // const andFiltering = await prisma.post.findMany({
  //   where: {
  //     AND: [
  //       {
  //         title: {
  //           contains: 'title',
  //         },
  //       },
  //       {
  //         published: true,
  //       },
  //     ],
  //   },
  // });
  // console.log('And Filtering', andFiltering);

  // //AND filtering
  // const orFiltering = await prisma.post.findMany({
  //   where: {
  //     OR: [
  //       {
  //         title: {
  //           contains: 'title',
  //         },
  //       },
  //       {
  //         published: true,
  //       },
  //     ],
  //   },
  // });
  // console.log('OR Filtering', orFiltering);

  //   //NOT filtering
  //   const notFiltering = await prisma.post.findMany({
  //     where: {
  //       NOT: [
  //         {
  //           title: {
  //             contains: 'This',
  //           },
  //         },
  //       ],
  //     },
  //   });
  //   console.log('Not Filtering', notFiltering);

  // //in filtering
  // const userNamesArray = ['user1', 'user2', 'user3'];
  // const userNamesByArray = await prisma.user.findMany({
  //   where: {
  //     username: {
  //       in: userNamesArray,
  //     },
  //   },
  // });
  // console.log('in Filtering', userNamesByArray);

  //inDepth filtering
  const inDepth = await prisma.user.findMany({
    where: {
      id: 1,
    },
    include: {
      post: {
        include: {
          post: {
            include: {
              category: true,
            },
          },
        },
      },
    },
  });
  console.dir(inDepth, { depth: Infinity });
};

main();
