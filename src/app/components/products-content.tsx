'use client';
import React from 'react';
import { Box, Container, Paper, Stack, Typography, ThemeProvider } from '@mui/material';
import { ProductCard } from '../components';
import CustomTheme from '@/styles/theme';

import { useProductsParamStore } from '@/store/products-param';
import { Book } from '@prisma/client';

interface Props {
  className?: string;
  items: Book[];
}

export const ProductsContent: React.FC<Props> = ({ items }) => {
  const { value } = useProductsParamStore((state) => state);
  return (
    <ThemeProvider theme={CustomTheme}>
      <Container>
        <Typography pt={2} variant='h3' component='h1' color='textPrimary' marginBlockEnd={3}>
          {value}
        </Typography>

        <Paper
          elevation={4}
          sx={{
            position: 'relative',
            marginBlockStart: '4px',
            marginBlockEnd: '30px',
            padding: {
              xs: '0px 1px',
              md: '20px 12px',
            },
          }}
        >
          <Stack direction='row' gap={4} flexWrap='wrap'>
            {items.map((item) => (
              <Box key={item.id} maxWidth='200px'>
                <ProductCard book={item} />
              </Box>
            ))}
          </Stack>
        </Paper>
      </Container>
    </ThemeProvider>
  );
};
