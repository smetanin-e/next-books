import { Box, Breadcrumbs, Container, Paper, Stack, Typography } from '@mui/material';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import Link from 'next/link';
// import { BookGridContainer, StyledAboutContainer } from '@/styles/bookPage';

// import { PriceInfo } from '@/components/share/BookPage/priceInfo';
// import { ImageContainer } from '@/components/share/BookPage/bookImage';
// import { BookAbout } from '@/components/share/BookPage/bookAbout';
// import { ReadMore } from '@/components/share/BookPage/readMore';
// import { BookCharacteristics } from '@/components/share/BookPage/bookCharacteristics';

// import { RatingSummary } from '@/components/share/BookPage/ratingSummary';
// import { BookReviews } from '@/components/share/BookPage/bookReviews';
// import { BookRating } from '@/components/share/BookPage/bookRating';
export default async function ProductsDetails({ params }: { params: Promise<{ id: number }> }) {
  const productId = (await params).id;
  const breadcrumbs = ['Главная', 'Детские книги', 'Сказки'];

  //xs-0 sm-600 md-900 lg-1200 xl-1536
  return (
    <>
      <h1>Details about product {productId}</h1>
      {/* <Container>
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
          Поднятие уровня в одиночку. Книга 8 (Solo Leveling). Новелла
        </Typography>
        <RatingSummary />

     
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
            <ImageContainer
              heigth={420}
              src={
                'https://content.img-gorod.ru/pim/products/images/8d/14/0196ae94-8845-735f-ba96-5fe38c328d14.jpg?width=608&height=867&fit=bounds'
              }
            />
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
                <BookAbout />
              </StyledAboutContainer>

              <ReadMore />
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
                <BookCharacteristics />
              </StyledAboutContainer>
              <ReadMore />
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
            <PriceInfo />
          </Box>

          <Box
            sx={{
              width: '100%',
              gridColumn: 'span 1',
              gridRow: 'span 1',
              order: { lg: 5, sm: 3, xs: 5 },
            }}
          >
            <BookRating />
          </Box>
        </BookGridContainer>

        <BookReviews />
        <BookAbout />
        <BookCharacteristics /> 
      </Container> */}
    </>
  );
}
