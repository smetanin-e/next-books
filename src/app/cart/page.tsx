'use client';
import { StyledContainer } from '@/styles';
import { CartContainer } from '@/styles/cart';
import { Button, Stack, Typography } from '@mui/material';
import React from 'react';
import { CartInfo, CartItem } from '../components';
import { useCartStore } from '@/store';

export default function Cart() {
  const { getCartItems, items, totalAmount, updateItemsQuantity, removeCartItem } = useCartStore();

  React.useEffect(() => {
    getCartItems();
  }, []);

  const onClickCountButton = (id: number, quantity: number, type: 'inctement' | 'decrement') => {
    console.log({ id, quantity, type });
    const newQuantity = type === 'inctement' ? quantity + 1 : quantity - 1;
    updateItemsQuantity(id, newQuantity);
  };

  console.log(items);

  return (
    <StyledContainer>
      <Stack mb={3} direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
        <Typography variant='h4'>Корзина</Typography>
        <Button variant='text'>Очистить</Button>
      </Stack>
      <CartContainer>
        <Stack spacing={3} flexGrow={1}>
          {items &&
            items.map((item) => (
              <CartItem
                onClickRemoveItem={() => removeCartItem(item.id)}
                onClickCountButton={(type) => onClickCountButton(item.id, item.quantity, type)}
                key={item.id}
                item={item}
              />
            ))}
        </Stack>

        <CartInfo quantity={items.length} amount={totalAmount} />
      </CartContainer>
    </StyledContainer>
  );
}
