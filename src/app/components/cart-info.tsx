import { Button, Paper, Stack, Typography } from '@mui/material';
import React from 'react';
interface Props {
  quantity: number;
  amount: number;
}
export const CartInfo: React.FC<Props> = ({ quantity, amount }) => {
  return (
    <Paper elevation={2} sx={{ flexShrink: 0, mb: 2 }}>
      <Stack spacing={2} p={2}>
        <Typography variant='body2'>
          Товаров - <b>{quantity} шт.</b>
        </Typography>
        <Typography variant='body1'>
          Сумма к оплате: <b>{amount} ₽</b>
        </Typography>
        <Button variant='contained' size='small'>
          Перейти к оформлению
        </Button>
      </Stack>
    </Paper>
  );
};
