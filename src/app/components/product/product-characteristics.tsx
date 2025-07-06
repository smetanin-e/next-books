import { Box, Stack, Typography } from '@mui/material';
import React from 'react';

export const ProductCharacteristics = () => {
  return (
    <Box maxWidth={'551px'}>
      <Typography variant='h6' paddingBlockEnd={1}>
        Характеристики
      </Typography>
      <Stack direction='row' display='grid' gridTemplateColumns='2fr 1fr' paddingBlockEnd={1}>
        <Typography variant='body2' color='textSecondary'>
          Артикул
        </Typography>
        <Typography variant='body2' color='textSecondary'>
          13354812
        </Typography>
      </Stack>
      <Stack direction='row' display='grid' gridTemplateColumns='2fr 1fr' paddingBlockEnd={1}>
        <Typography variant='body2' color='textSecondary'>
          Издательство
        </Typography>
        <Typography variant='body2' color='textSecondary'>
          Рипол-Классик
        </Typography>
      </Stack>
      <Stack direction='row' display='grid' gridTemplateColumns='2fr 1fr' paddingBlockEnd={1}>
        <Typography variant='body2' color='textSecondary'>
          Год издания
        </Typography>
        <Typography variant='body2' color='textSecondary'>
          2024
        </Typography>
      </Stack>
      <Stack direction='row' display='grid' gridTemplateColumns='2fr 1fr' paddingBlockEnd={1}>
        <Typography variant='body2' color='textSecondary'>
          Количество страниц
        </Typography>
        <Typography variant='body2' color='textSecondary'>
          480
        </Typography>
      </Stack>
    </Box>
  );
};
