import { Box, Button, IconButton, Stack, Typography } from '@mui/material';
import React from 'react';

import CheckIcon from '@mui/icons-material/Check';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { PriceContainer } from '@/styles/product-page';

export const PriceInfo = () => {
  return (
    <PriceContainer elevation={2}>
      <Box p={2}>
        <Typography
          color='success'
          variant='body2'
          display='flex'
          alignItems='center'
          gap={1}
          paddingBlockEnd={1}
        >
          <CheckIcon /> В наличии
        </Typography>

        <Stack direction={'row'} spacing={2} alignItems={'center'} paddingBlockEnd={2}>
          <Typography variant='body2' color='textDisabled' sx={{ textDecoration: 'line-through' }}>
            919 ₽
          </Typography>
          <Typography
            color='secondary'
            variant='body1'
            fontWeight='bold'
            fontSize={22} //18
            sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}
          >
            720 ₽ <AccountBalanceWalletIcon />
          </Typography>
          <Stack
            alignItems={'center'}
            justifyContent={'center'}
            bgcolor='#FE6564'
            color='#fff'
            p={'5px 5px'}
            borderRadius={'5px'}
          >
            <Typography fontSize={14} fontWeight={'bold'} lineHeight={1}>
              -35%
            </Typography>
          </Stack>
        </Stack>
        <Stack
          direction='row'
          spacing={1}
          justifyContent='space-between'
          sx={{ paddingBlockStart: { sm: '2rem' } }}
        >
          <Button size='small' variant='contained'>
            Добавить в корзину
          </Button>
          <IconButton
            sx={{
              zIndex: 2,
              bgcolor: '#cecece',
            }}
          >
            <FavoriteBorderIcon />
          </IconButton>
        </Stack>
      </Box>
    </PriceContainer>
  );
};
