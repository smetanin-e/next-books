import { Box, Divider, IconButton, Stack, Typography } from '@mui/material';
import React from 'react';

import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { CountButton, ProductImage } from '../components';
import { CartStateItem } from '@/lib';

interface Props {
  className?: string;
  item: CartStateItem;
  onClickCountButton?: (type: 'inctement' | 'decrement') => void;
  onClickRemoveItem?: () => void;
}

export const CartItem: React.FC<Props> = ({ item, onClickCountButton, onClickRemoveItem }) => {
  return (
    <>
      <Stack direction={'row'} spacing={3}>
        <Stack direction={'row'} spacing={2} flexShrink={0}>
          <ProductImage heigth={120} src={item.imageUrl} />
        </Stack>

        <Stack
          flexGrow={1}
          gap={2}
          justifyContent={'space-between'}
          sx={{ flexDirection: { md: 'row' } }}
        >
          <Stack spacing={2} justifyContent={'center'}>
            <Typography>{item.title}</Typography>
            <Typography color='textSecondary'>{item.author}</Typography>
          </Stack>
          <CountButton id={item.id} onClick={onClickCountButton} quantity={item.quantity} />

          <Stack
            alignItems={'center'}
            direction={'row'}
            spacing={2}
            justifyContent={'space-between'}
          >
            <Box>
              <Typography>{item.totalPrice} ₽</Typography>
              <Typography variant='body2' color='textSecondary'>
                {item.quantity} шт. по {item.price} ₽
              </Typography>
            </Box>

            <IconButton onClick={onClickRemoveItem} size='small'>
              <DeleteOutlineIcon />
            </IconButton>
          </Stack>
        </Stack>
      </Stack>
      <Divider />
    </>
  );
};
