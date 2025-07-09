'use client';

import React from 'react';
import { Box, Paper, Typography, useMediaQuery, useTheme } from '@mui/material';

import { Book } from '@prisma/client';
import { ProductCard } from '../components';
import { SliderContainer } from './slider-container';
import { BoxContainer } from './box-container';
import { StyledContainer } from '@/styles';

interface ItemsByTag {
  id: number;
  name: string;
  books: Book[];
}
interface Props {
  className?: string;
  items: ItemsByTag[];
}

export const HomeContent: React.FC<Props> = ({ items }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));
  //const Component = matches ? BoxContainer : SliderContainer;

  console.log(items);
  return (
    <StyledContainer>
      {items.map((item) => (
        <Box key={item.id}>
          <Typography variant='h4' component='h2' mb={2}>
            {item.name}
          </Typography>
          <Paper
            elevation={4}
            sx={{
              position: 'relative',
              marginBlockStart: '4px',
              marginBlockEnd: '30px',
              padding: {
                xs: '0px 0px',
                md: '40px 70px',
              },
            }}
          >
            {item.books.length > 4 && matches ? (
              <SliderContainer>
                {item.books.map((book) => (
                  <Box key={book.id} maxWidth='200px'>
                    <ProductCard book={book} />
                  </Box>
                ))}
              </SliderContainer>
            ) : (
              <BoxContainer>
                {item.books.map((book) => (
                  <Box key={book.id} maxWidth='200px'>
                    <ProductCard book={book} />
                  </Box>
                ))}
              </BoxContainer>
            )}
          </Paper>
        </Box>
      ))}
    </StyledContainer>
  );
};
