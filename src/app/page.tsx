import React from 'react';

import { HomeContent } from './components';
import { prisma } from '../../prisma/prisma-client';

export default async function Home() {
  const tags = await prisma.tag.findMany({
    include: {
      books: true,
    },
  });

  return <HomeContent items={tags} />;
}
