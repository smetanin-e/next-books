import { Box, IconButton, Paper, Rating, Stack, Typography } from '@mui/material';
import React from 'react';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';

export const Review = () => {
  return (
    <Box marginBlockEnd={3}>
      <Paper elevation={2} sx={{ p: 2, background: '#EDFFEC' }}>
        <Stack direction={'row'} justifyContent={'space-between'} spacing={2}>
          <Typography color='textSecondary'>Евгений</Typography>
          <Typography color='textSecondary'>28.06.2025</Typography>
        </Stack>
        <Box marginBlockEnd={2}>
          <Rating name='read-only' value={5} readOnly />
        </Box>

        <Typography variant='body1' mb={3}>
          Произведение точно не в стиле триллер, как и пишут во всех отзывах. Но не смотря на это
          оно мне понравилось, хоть и читала достаточно долго. Интересный сюжет и очень увлекательно
          наблюдать за развязкой в истории. Главная героиня журналистка и я в ней нашла отдушину,
          несмотря на некие недостатки. Рика за всю историю много чего осознает и учится на ошибках.
          Очень понравилась её дружба с Рейко и испытания в их дружбе, но дальше я уже не могу
          рассказывать. Читайте произведение и вы все узнаете...
        </Typography>
        <Stack spacing={3} direction={'row'} justifyContent={'end'}>
          <Stack direction={'row'} alignItems={'center'}>
            <IconButton>
              <ThumbUpIcon />
            </IconButton>
            <Typography variant='body1'>0</Typography>
          </Stack>

          <Stack direction={'row'} alignItems={'center'}>
            <IconButton>
              <ThumbDownAltIcon />
            </IconButton>
            <Typography variant='body1'>0</Typography>
          </Stack>
        </Stack>
      </Paper>
    </Box>
  );
};
