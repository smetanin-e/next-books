import { Box, Breadcrumbs, Container, Paper, Stack, Typography } from '@mui/material';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import Link from 'next/link';
import { RatingSummary } from '@/app/components/product/rating-summary';
import { BookGridContainer, StyledAboutContainer } from '@/styles/product-page';
import { ProductImage } from '@/app/components/product/product-image';
import { ProductAbout } from '@/app/components/product/product-about';
import { ReadMoreLink } from '@/app/components/read-more-link';
import { ProductCharacteristics } from '@/app/components/product/product-characteristics';
import { PriceInfo } from '@/app/components/product/price-info';
import { ProductRating } from '@/app/components/product/product-rating';
import { ProductReviews } from '@/app/components/product/product-reviews';
import { prisma } from '../../../../prisma/prisma-client';
import { notFound } from 'next/navigation';
import { totalRating } from '@/ui/totalRating';

export default async function Product({ params }: { params: Promise<{ id: number }> }) {
  const productId = (await params).id;
  const product = await prisma.book.findFirst({
    where: { id: Number(productId) },
    include: { rating: true },
  });

  if (!product) {
    return notFound();
  }
  const ratingInfo = totalRating(product.rating!);
  console.log(ratingInfo);

  const breadcrumbs = ['Главная', 'Детские книги', 'Сказки'];

  //xs-0 sm-600 md-900 lg-1200 xl-1536
  return (
    <>
      <h1>Details about product {productId}</h1>
      <Container>
        <Stack spacing={2} mb={2}>
          <Breadcrumbs separator={<KeyboardDoubleArrowRightIcon />} aria-label='breadcrumb'>
            {breadcrumbs.map((item) => (
              <Link key={item} color='inherit' href='/'>
                {item}
              </Link>
            ))}
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
            <PriceInfo price={product.price} sale={product.sale} />
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
      </Container>
    </>
  );
}
