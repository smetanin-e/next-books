import { Box, Paper, Stack, Typography } from '@mui/material';
import React from 'react';
import { fetchBooksFromParams } from '@/lib/fetchBooksFromParams';
import { StyledContainer } from '@/styles';
import { ProductCard } from '@/app/components';

export default async function Products({
  params,
}: {
  params: Promise<{ slug: string; type: string }>;
}) {
  const { slug, type } = await params;
  const { books, title } = await fetchBooksFromParams(type, slug);

  console.log(books);

  return (
    <StyledContainer>
      <Typography variant='h4' component='h2' mb={2}>
        {title}
      </Typography>
      <Paper
        elevation={4}
        sx={{
          position: 'relative',
          marginBlockStart: '4px',
          marginBlockEnd: '30px',
          padding: {
            xs: '10px 10px',
            md: '20px 12px',
          },
        }}
      >
        <Stack direction='row' gap={4} flexWrap='wrap'>
          {books?.map((item) => (
            <Box key={item.id} maxWidth='200px'>
              <ProductCard book={item} />
            </Box>
          ))}
        </Stack>
      </Paper>
    </StyledContainer>
  );
}
