import { Box, Typography } from '@mui/material';
import React from 'react';

export const ReadMoreLink = () => {
  return (
    <Box
      sx={{
        cursor: 'pointer',
        zIndex: 3,
        position: 'absolute',
        left: '50%',
        bottom: '10px',
        translate: '-50%',
      }}
    >
      <Typography variant='body2' color='info'>
        Подробнее
      </Typography>
    </Box>
  );
};
