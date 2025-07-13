import { StyledLink } from '@/styles';
import { Box, Button, Paper, Stack, Typography } from '@mui/material';
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
}
export const CartInfo: React.FC<Props> = ({ items, totalQuantity, totalAmount, children }) => {
  console.log(items);

  const sale = totalSale(items);
  return (
    // <Paper elevation={2} sx={{ flexShrink: 0, mb: 2 }}>
    //   <Stack spacing={2} p={2}>
    //     <Typography variant='body2'>
    //       Товаров - <b>{quantity} шт.</b>
    //     </Typography>
    //     <Typography variant='body1'>
    //       Сумма к оплате: <b>{amount} ₽</b>
    //     </Typography>
    //     <StyledLink href={'/checkout'}>
    //       <Button variant='contained' size='small'>
    //         Перейти к оформлению
    //       </Button>
    //     </StyledLink>
    //   </Stack>
    // </Paper>

    <Box flexShrink={0} minWidth={'300px'}>
      <Paper elevation={2}>
        <Stack p={2} spacing={1}>
          <Typography variant='body2'>Товаров - {totalQuantity} шт.</Typography>

          <Stack direction={'row'} justifyContent={'space-between'}>
            <Typography component={'div'} display={'flex'} alignItems={'center'} gap={1}>
              <ViewInArIcon />
              Стоимость корзины
            </Typography>
            <Typography>{totalAmount + sale} ₽</Typography>
          </Stack>
          <Stack direction={'row'} justifyContent={'space-between'}>
            <Typography component={'div'} display={'flex'} alignItems={'center'} gap={1}>
              <LocalShippingIcon />
              Доставка
            </Typography>
            <Typography>0 ₽</Typography>
          </Stack>
          <Stack direction={'row'} justifyContent={'space-between'}>
            <Typography component={'div'} display={'flex'} alignItems={'center'} gap={1}>
              <PercentIcon />
              Скидка
            </Typography>
            <Typography>-{sale} ₽</Typography>
          </Stack>
        </Stack>
        {children}
      </Paper>
    </Box>
  );
};
