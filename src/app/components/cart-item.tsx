import { Box, Divider, IconButton, Stack, Typography } from '@mui/material';
import React from 'react';

import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { ProductImage } from '../components';
import { CartStateItem } from '@/lib';

interface Props {
  className?: string;
  item: CartStateItem;
}

export const CartItem: React.FC<Props> = ({ item }) => {
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

          <Stack
            flexGrow={1}
            sx={{ justifyContent: { md: 'end' } }}
            direction={'row'}
            spacing={2}
            alignItems={'center'}
          >
            <IconButton size='small' sx={{ background: '#f3f3f3' }}>
              <AddIcon />
            </IconButton>
            <Typography textAlign={'center'} width={20} variant='body1'>
              {item.quantity}
            </Typography>

            <IconButton size='small' sx={{ background: '#f3f3f3' }}>
              <RemoveIcon />
            </IconButton>
          </Stack>

          <Stack
            alignItems={'center'}
            direction={'row'}
            spacing={2}
            justifyContent={'space-between'}
          >
            <Box>
              <Typography>{item.quantity * item.price} ₽</Typography>
              <Typography variant='body2' color='textSecondary'>
                {item.quantity} шт. по {item.price} ₽
              </Typography>
            </Box>

            <IconButton size='small'>
              <DeleteOutlineIcon />
            </IconButton>
          </Stack>
        </Stack>
      </Stack>
      <Divider />
    </>
  );
};
