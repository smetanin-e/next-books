import React from 'react';

import { HomeContent } from './components';
import { prisma } from '../../prisma/prisma-client';
import { Box, Typography } from '@mui/material';

export default async function Home() {
  const tags = await prisma.tag.findMany({
    include: {
      books: true,
    },
  });

  return <HomeContent items={tags} />;
}
