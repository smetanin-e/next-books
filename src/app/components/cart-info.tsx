import { Box, CircularProgress, Paper, Stack, Typography } from '@mui/material';
import React from 'react';

import ViewInArIcon from '@mui/icons-material/ViewInAr';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PercentIcon from '@mui/icons-material/Percent';
import { CartStateItem, totalSale } from '@/lib';

interface Props {
  totalQuantity: number;
  totalAmount: number;
  items: CartStateItem[];
  children: React.ReactNode;
  loading?: boolean;
}
export const CartInfo: React.FC<Props> = ({
  loading,
  items,
  totalQuantity,
  totalAmount,
  children,
}) => {
  const sale = totalSale(items);
  const delivery = 0;
  return (
    <Box
      flexShrink={0}
      sx={{
        minWidth: {
          md: '300px',
        },
      }}
    >
      <Paper elevation={2}>
        <Stack p={2} pb={0} spacing={1}>
          <Typography variant='body2'>
            Товаров - {loading ? <CircularProgress size={'10px'} /> : totalQuantity} шт.
          </Typography>

          <Stack direction={'row'} justifyContent={'space-between'}>
            <Typography component={'div'} display={'flex'} alignItems={'center'} gap={1}>
              <ViewInArIcon />
              Стоимость корзины
            </Typography>
            <Typography>
              {loading ? <CircularProgress sx={{ mr: 2 }} size={'15px'} /> : totalAmount + sale} ₽
            </Typography>
          </Stack>
          <Stack direction={'row'} justifyContent={'space-between'}>
            <Typography component={'div'} display={'flex'} alignItems={'center'} gap={1}>
              <LocalShippingIcon />
              Доставка
            </Typography>
            <Typography>
              {loading ? <CircularProgress sx={{ mr: 2 }} size={'15px'} /> : delivery} ₽
            </Typography>
          </Stack>
          {sale != 0 && (
            <Stack direction={'row'} justifyContent={'space-between'}>
              <Typography component={'div'} display={'flex'} alignItems={'center'} gap={1}>
                <PercentIcon />
                Скидка
              </Typography>
              <Typography>
                {loading ? <CircularProgress sx={{ mr: 2 }} size={'15px'} /> : `-${sale}`} ₽
              </Typography>
            </Stack>
          )}

          <Box pt={1}>
            <Typography variant='body2'>К оплате:</Typography>
            <Typography variant='h4' fontWeight={600}>
              {loading ? (
                <CircularProgress sx={{ mr: 2 }} size={'15px'} />
              ) : (
                totalAmount - sale + delivery
              )}{' '}
              ₽
            </Typography>
          </Box>
        </Stack>

        {children}
      </Paper>
    </Box>
  );
};
