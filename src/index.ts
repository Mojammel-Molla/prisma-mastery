import { PrismaClient, UserRole } from '@prisma/client';
import { create } from 'domain';
import { connect } from 'http2';

const prisma = new PrismaClient();

const main = async () => {
  //// create user
  // const createUser = await prisma.user.create({
  //   data: {
  //     username: 'user2',
  //     email: 'user2@example.com',
  //     role: UserRole.user,
  //   },
  // });

  // console.log(createUser);

  //   //create profile
  //   const createProfile = await prisma.profile.create({
  //     data: {
  //       bio: 'This is a bio or user 4',
  //       userId: 4,
  //     },
  //   });

  //   console.log(createProfile);

  // //create category
  // const createCategory = await prisma.category.create({
  //   data: {
  //     name: 'MySQL',
  //   },
  // });

  // console.log(createCategory);

  //create post
  const createPost = await prisma.post.create({
    data: {
      title: 'This is post title 5',
      content: 'This is post content 5',
      authorId: 1,
      post: {
        create: [
          // categoryId: 3,

          // category: {
          //   connect: {
          //     id: 1,
          //   },
          // },
          {
            categoryId: 1,
          },
          {
            categoryId: 2,
          },
          {
            categoryId: 3,
          },
        ],
      },
    },
    include: {
      post: true,
    },
  });

  console.log(createPost);
};

main();
