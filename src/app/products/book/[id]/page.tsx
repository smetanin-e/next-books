import { Box, Breadcrumbs, Paper, Stack, Typography } from '@mui/material';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

import { BookGridContainer, StyledAboutContainer } from '@/styles/product-page';
import {
  ProductAbout,
  ProductActions,
  ProductCharacteristics,
  ProductImage,
  ProductRating,
  ProductReviews,
  RatingSummary,
  ReadMoreLink,
} from '@/app/components';

import { notFound } from 'next/navigation';
import { totalRating } from '@/lib/totalRating';
import { StyledContainer, StyledLink } from '@/styles';
import { prisma } from '../../../../../prisma/prisma-client';

export default async function Product({ params }: { params: Promise<{ id: number }> }) {
  const productId = (await params).id;
  const product = await prisma.book.findFirst({
    where: { id: Number(productId) },
    include: { rating: true },
  });

  const category = await prisma.category.findFirst({
    where: { id: product?.categoryId },
  });

  const subcategory = await prisma.subCategory.findFirst({
    where: { id: product?.subcategoryId },
  });

  if (!product) {
    return notFound();
  }
  const ratingInfo = totalRating(product.rating!);

  //xs-0 sm-600 md-900 lg-1200 xl-1536
  return (
    <>
      <h1>Details about product {productId}</h1>
      <StyledContainer>
        <Stack spacing={2} mb={2}>
          <Breadcrumbs separator={<KeyboardDoubleArrowRightIcon />} aria-label='breadcrumb'>
            <StyledLink href='/'>Главная</StyledLink>
            <StyledLink href={`/products/category/${category?.slug}`}>{category?.name}</StyledLink>
            <StyledLink href={`/products/subcategory/${subcategory?.slug}`}>
              {subcategory?.name}
            </StyledLink>
          </Breadcrumbs>
        </Stack>
        <Typography variant='h5' component='h1' paddingBlockEnd={2}>
          {product.title}
        </Typography>
        <RatingSummary ratingInfo={ratingInfo} />

        <BookGridContainer>
          <Box
            sx={{
              gridColumn: 'span 1',
              gridRow: 'span 3',
              display: 'flex',
              justifyContent: 'center',
              order: { lg: 1 },
            }}
          >
            <ProductImage maxWidth={273} heigth={420} src={product.imageUrl} />
          </Box>

          <Box
            sx={{
              width: '100%',
              gridColumn: { sm: 'span 2', xs: 'span 1' },
              gridRow: 'span 1',
              order: { lg: 2, sm: 4, xs: 3 },
            }}
          >
            <Paper elevation={3} sx={{ position: 'relative', p: 2 }}>
              <StyledAboutContainer>
                <ProductAbout about={product.description} />
              </StyledAboutContainer>

              <ReadMoreLink />
            </Paper>
          </Box>

          <Box
            sx={{
              width: '100%',
              gridColumn: { sm: 'span 2', xs: 'span 1' },
              gridRow: 'span 1',
              order: { lg: 4, sm: 5, xs: 4 },
            }}
          >
            <Paper elevation={3} sx={{ position: 'relative', p: 2 }}>
              <StyledAboutContainer>
                <ProductCharacteristics />
              </StyledAboutContainer>
              <ReadMoreLink />
            </Paper>
          </Box>

          <Box
            sx={{
              width: '100%',
              gridColumn: 'span 1',
              gridRow: 'span 1',
              order: { lg: 3, sm: 2, xs: 2 },
            }}
          >
            <ProductActions price={product.price} sale={product.sale} />
          </Box>

          <Box
            sx={{
              width: '100%',
              gridColumn: 'span 1',
              gridRow: 'span 1',
              order: { lg: 5, sm: 3, xs: 5 },
            }}
          >
            {product.rating != null && (
              <ProductRating ratingInfo={ratingInfo} rating={product.rating} />
            )}
          </Box>
        </BookGridContainer>

        <ProductReviews />
        <ProductAbout about={product.description} />
        <ProductCharacteristics />
      </StyledContainer>
    </>
  );
}
