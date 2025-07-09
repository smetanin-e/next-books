import { Box, Divider, IconButton, Stack, Typography } from '@mui/material';
import React from 'react';

import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { ProductImage } from '../components';

interface Props {
  className?: string;
}

export const CartItem: React.FC<Props> = () => {
  return (
    <>
      <Stack direction={'row'} spacing={3}>
        <Stack direction={'row'} spacing={2} flexShrink={0}>
          <ProductImage
            heigth={120}
            src={
              'https://content.img-gorod.ru/pim/products/images/8d/14/0196ae94-8845-735f-ba96-5fe38c328d14.jpg?width=608&height=867&fit=bounds'
            }
          />
        </Stack>

        <Stack
          flexGrow={1}
          gap={2}
          justifyContent={'space-between'}
          sx={{ flexDirection: { md: 'row' } }}
        >
          <Stack spacing={2} justifyContent={'center'}>
            <Typography>Эли и Гастон. Дух осени</Typography>
            <Typography color='textSecondary'>Людовик Виллен, Селин Дереньокур</Typography>
          </Stack>

          <Stack direction={'row'} spacing={2} alignItems={'center'}>
            <IconButton size='small' sx={{ background: '#f3f3f3' }}>
              <AddIcon />
            </IconButton>
            <Typography textAlign={'center'} width={20} variant='body1'>
              12
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
              <Typography>6150 ₽</Typography>
              <Typography variant='body2' color='textSecondary'>
                20 шт. по 6150 ₽
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
