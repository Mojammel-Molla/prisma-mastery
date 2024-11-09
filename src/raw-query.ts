import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const rawQuery = async () => {
  const result = await prisma.$queryRaw`
    SELECT *
    FROM "posts" `;
  console.log(result);

  // deleting all table data
  // await prisma.$queryRaw`TRUNCATE TABLE "user" CASCADE`
};
rawQuery();
