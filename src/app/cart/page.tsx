'use client';
import { StyledContainer } from '@/styles';
import { CartContainer } from '@/styles/cart';
import { Button, Stack, Typography } from '@mui/material';
import React from 'react';
import { CartInfo, CartItem } from '../components';
import { useCartStore } from '@/store';

export default function Cart() {
  const { fetchCartItems, items } = useCartStore();

  React.useEffect(() => {
    fetchCartItems();
  }, []);

  console.log(items);

  return (
    <StyledContainer>
      <Stack mb={3} direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
        <Typography variant='h4'>Корзина</Typography>
        <Button variant='text'>Очистить</Button>
      </Stack>
      <CartContainer>
        <Stack spacing={3} flexGrow={1}>
          {items && items.map((item) => <CartItem key={item.id} item={item} />)}
        </Stack>

        <CartInfo />
      </CartContainer>
    </StyledContainer>
  );
}
