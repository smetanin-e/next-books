'use client';
import { Card, CardMedia, CardContent, Typography, Stack } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import React from 'react';
import { ProductCardContainer } from '@/styles';
import { Book } from '@prisma/client';
import Link from 'next/link';
import { CardButtons } from '../components';

type BookType = {
  book: Book;
};

export const ProductCard = ({ book }: BookType) => {
  return (
    <ProductCardContainer>
      <Card
        variant='elevation'
        elevation={2}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          minHeight: '366px',
          mb: '5px',
        }}
      >
        <CardMedia component='img' height='200px' image={book.imageUrl} alt='image' />
        <CardContent sx={{ flexGrow: 1 }}>
          <Stack
            direction={'row'}
            alignItems={'center'}
            spacing={0} //2
            pb={1}
            flexWrap={'wrap'} //mobile
            justifyContent={'space-between'} //mobile
            sx={{ gap: '5px' }} //mobile
          >
            <Typography
              variant='h6'
              fontWeight='bold'
              fontSize={16} //18
              sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}
            >
              <AccountBalanceWalletIcon /> {book.price} ₽
            </Typography>

            {book.sale && (
              <>
                <Typography variant='body2' sx={{ textDecoration: 'line-through' }}>
                  420 ₽
                </Typography>
                <Stack
                  alignItems={'center'}
                  justifyContent={'center'}
                  bgcolor='#FE6564'
                  color='#fff'
                  p={'5px 5px'}
                  borderRadius={'5px'}
                >
                  <Typography fontSize={14} fontWeight={'bold'} lineHeight={1}>
                    -{book.sale}%
                  </Typography>
                </Stack>
              </>
            )}
          </Stack>
          <Link href={`/products/book/${book.id}`} style={{ textDecoration: 'none' }}>
            <Typography sx={{ flexGrow: 1 }} variant='body1' component='h2'>
              {book.title.length > 20 ? book.title.slice(0, 20) + '...' : book.title}
            </Typography>
          </Link>
        </CardContent>

        <CardButtons itemId={book.id} buttonVariant='outlined' text={'в корзину'} />
      </Card>
    </ProductCardContainer>
  );
};
