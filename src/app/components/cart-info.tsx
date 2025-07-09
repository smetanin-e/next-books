import { Button, Paper, Stack, Typography } from '@mui/material';
import React from 'react';

export const CartInfo = () => {
  return (
    <Paper elevation={2} sx={{ flexShrink: 0, mb: 2 }}>
      <Stack spacing={2} p={2}>
        <Typography variant='body2'>
          Товаров - <b>3 шт.</b>
        </Typography>
        <Typography variant='body1'>
          Сумма к оплате: <b>1925 ₽</b>
        </Typography>
        <Button variant='contained' size='small'>
          Перейти к оформлению
        </Button>
      </Stack>
    </Paper>
  );
};
