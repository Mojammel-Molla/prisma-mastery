import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient({
  log: [
    {
      emit: 'event',
      level: 'query',
    },
  ],
});

prisma.$on('query', e => {
  console.log('Query', e.query);
  console.log('Duration', e.duration);
  console.log('Time and Date', e.timestamp);
});

const main = async () => {
  const getAllPosts = await prisma.post.findMany();
  //  console.log(getAllPosts);
};

main();
