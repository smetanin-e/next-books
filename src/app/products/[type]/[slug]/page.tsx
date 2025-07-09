import { Typography } from '@mui/material';
import React from 'react';
import { prisma } from '../../../../../prisma/prisma-client';

export default async function Test({
  params,
}: {
  params: Promise<{ slug: string; type: string }>;
}) {
  const { slug, type } = await params;

  async function testF() {
    try {
      if (type === 'subcategory') {
        const result = await prisma.subCategory.findUnique({
          where: { slug: slug },
          include: { books: true },
        });
        return result;
      } else if (type === 'category') {
        const result = await prisma.category.findUnique({
          where: { slug: slug },
          include: { books: true },
        });
        return result;
      } else if (type === 'tag') {
        const result = await prisma.tag.findUnique({
          where: { slug: slug },
          include: { books: true },
        });
        return result;
      }
    } catch (e) {
      console.log(e);
    }
  }

  const books = await testF();
  console.log(books);

  return (
    <Typography textAlign={'center'} mt={5}>
      {slug}
    </Typography>
  );
}
