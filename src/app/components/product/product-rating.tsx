import { Box, LinearProgress, Paper, Rating, Stack, Typography } from '@mui/material';
import React from 'react';

export const ProductRating = () => {
  const totalValue = 105;

  return (
    <Paper elevation={3} sx={{ height: '200px' }}>
      <Box p={2}>
        <Stack
          direction='row'
          spacing={2}
          alignItems='center'
          justifyContent='center'
          paddingBlockEnd={1}
        >
          <Typography variant='body2'>
            <b>4.4</b>
          </Typography>
          <Rating size='small' name='read-only' value={4.4} readOnly precision={0.5} />
          <Typography variant='body2'>
            <b>105</b> оценок
          </Typography>
        </Stack>

        <Stack direction='row' spacing={2} alignItems='center'>
          <Rating name='read-only' value={5} readOnly />
          <Box sx={{ width: '100%' }}>
            <LinearProgress variant='determinate' value={(70 / totalValue) * 100} />
          </Box>
          <Typography variant='body1' textAlign='center'>
            70
          </Typography>
        </Stack>
        <Stack direction='row' spacing={2} alignItems='center'>
          <Rating name='read-only' value={4} readOnly />
          <Box sx={{ width: '100%' }}>
            <LinearProgress variant='determinate' value={(19 / totalValue) * 100} />
          </Box>
          <Typography variant='body1' textAlign='center'>
            19
          </Typography>
        </Stack>
        <Stack direction='row' spacing={2} alignItems='center'>
          <Rating name='read-only' value={3} readOnly />
          <Box sx={{ width: '100%' }}>
            <LinearProgress variant='determinate' value={(11 / totalValue) * 100} />
          </Box>
          <Typography variant='body1' textAlign='center'>
            11
          </Typography>
        </Stack>
        <Stack direction='row' spacing={2} alignItems='center'>
          <Rating name='read-only' value={2} readOnly />
          <Box sx={{ width: '100%' }}>
            <LinearProgress variant='determinate' value={(3 / totalValue) * 100} />
          </Box>
          <Typography variant='body1' textAlign='center'>
            3
          </Typography>
        </Stack>
        <Stack direction='row' spacing={2} alignItems='center'>
          <Rating name='read-only' value={1} readOnly />
          <Box sx={{ width: '100%' }}>
            <LinearProgress variant='determinate' value={(2 / totalValue) * 100} />
          </Box>
          <Typography variant='body1' textAlign='center'>
            2
          </Typography>
        </Stack>
      </Box>
    </Paper>
  );
};
