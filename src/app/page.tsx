import {
  Box,
  Container,
  Paper,
  ThemeProvider,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import React from 'react';
import CustomTheme from '@/styles/theme';

import { ProductCard } from './components';
import { BoxContainer } from './components/products-box-container';
import { SliderContainer } from './components/products-slider-container';
import { HomeContent } from './components/home-content';
import { prisma } from '../../prisma/prisma-client';

export default async function Home() {
  const tags = await prisma.tag.findMany({
    include: {
      books: {
        include: {
          tags: true,
        },
      },
    },
  });
  console.log(tags);

  return <HomeContent items={tags} />;
}
