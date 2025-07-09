import { StyledContainer } from '@/styles';
import { CartContainer } from '@/styles/cart';
import { Button, Stack, Typography } from '@mui/material';
import React from 'react';
import { CartInfo, CartItem } from '../components';

export default async function Cart() {
  return (
    <StyledContainer>
      <Stack mb={3} direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
        <Typography variant='h4'>Корзина</Typography>
        <Button variant='text'>Очистить</Button>
      </Stack>
      <CartContainer>
        <Stack spacing={3} flexGrow={1}>
          <CartItem />
          <CartItem />
          <CartItem />
        </Stack>

        <CartInfo />
      </CartContainer>
    </StyledContainer>
  );
}
