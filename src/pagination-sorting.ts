import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const paginationSorting = async () => {
  const offSetData = await prisma.post.findMany({
    skip: 1,
    take: 2,
  });
  // console.log(offSetData);
  const cursorSetData = await prisma.post.findMany({
    skip: 1,
    take: 2,
    cursor: {
      id: 5,
    },
  });
  // console.log(cursorSetData);

  // sorting
  const sortedData = await prisma.post.findMany({
    orderBy: {
      id: 'desc',
    },
    where: {
      published: true,
    },
  });
  console.log(sortedData);
};

paginationSorting();
