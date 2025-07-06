import React from 'react';

import { HomeContent } from './components/home-content';
import { prisma } from '../../prisma/prisma-client';

export default async function Home() {
  const tags = await prisma.tag.findMany({
    include: {
      books: true,
    },
  });
  console.log(tags);

  return <HomeContent items={tags} />;
}
