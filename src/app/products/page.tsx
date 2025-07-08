import { Box, Paper, Stack } from '@mui/material';
import { prisma } from '../../../prisma/prisma-client';
import { ProductCard, ProductsTitle } from '../components';
import { StyledContainer } from '@/styles';

export default async function Products() {
  const books = await prisma.book.findMany();
  return (
    <StyledContainer>
      <ProductsTitle />
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
          {books.map((item) => (
            <Box key={item.id} maxWidth='200px'>
              <ProductCard book={item} />
            </Box>
          ))}
        </Stack>
      </Paper>
    </StyledContainer>
  );
}
