import { Box, Typography } from '@mui/material';
import React from 'react';
import { ReviewFilter } from './review-filter';
import { Review } from '../review';

export const ProductReviews = () => {
  return (
    <Box mb={4}>
      <Typography variant='h6' paddingBlockEnd={1} textAlign={'right'}>
        Отзывы
      </Typography>

      <ReviewFilter />

      <Review />
      <Review />
      <Review />
      <Review />
    </Box>
  );
};
