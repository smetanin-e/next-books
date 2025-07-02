'use client';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  IconButton,
  Stack,
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import React from 'react';
import { ProductCardContainer } from '@/styles';

type BookType = {
  book: {
    imageUrl: string;
    title: string;
    price: string;
    sale?: number;
  };
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

          <Typography sx={{ flexGrow: 1 }} variant='body1' component='h2'>
            {book.title.length > 20 ? book.title.slice(0, 20) + '...' : book.title}
          </Typography>
        </CardContent>

        <CardActions sx={{ justifyContent: 'space-between' }}>
          <Button size='small'>в корзину</Button>
          <IconButton
            sx={{
              // position: 'absolute',
              // right: '8px',
              // top: '8px',
              zIndex: 2,
              bgcolor: '#fff',
            }}
            size='small'
          >
            <FavoriteIcon />
          </IconButton>
        </CardActions>
      </Card>
    </ProductCardContainer>
  );
};
