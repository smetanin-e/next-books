'use client';
import { StyledContainer, StyledLink } from '@/styles';
import { CartContainer } from '@/styles/cart';
import { Box, Button, Stack, Typography } from '@mui/material';
import React from 'react';
import { CartInfo, CartItem } from '../components';
import { useCartStore, useCountButtonsBookId } from '@/store';

export default function Cart() {
  const {
    loading,
    getCartItems,
    items,
    totalAmount,
    totalQuantity,
    updateItemsQuantity,
    removeCartItem,
  } = useCartStore();

  React.useEffect(() => {
    getCartItems();
  }, []);

  const { setCartItemId } = useCountButtonsBookId();

  const onClickCountButton = (id: number, quantity: number, type: 'inctement' | 'decrement') => {
    console.log({ id, quantity, type });
    const newQuantity = type === 'inctement' ? quantity + 1 : quantity - 1;
    setCartItemId(id);
    updateItemsQuantity(id, newQuantity);
  };

  return (
    <>
      {totalAmount === 0 ? (
        <Box>Корзина пустая</Box>
      ) : (
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
            <CartInfo
              loading={loading}
              items={items}
              totalQuantity={totalQuantity}
              totalAmount={totalAmount}
            >
              <StyledLink href={'/checkout'}>
                <Stack p={2} justifyContent={'center'}>
                  <Button variant='contained' size='small'>
                    Перейти к оформлению
                  </Button>
                </Stack>
              </StyledLink>
            </CartInfo>
          </CartContainer>
        </StyledContainer>
      )}
    </>
  );
}
