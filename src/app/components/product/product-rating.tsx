import {
  Box,
  LinearProgress,
  Paper,
  Rating as RatingContainer,
  Stack,
  Typography,
} from '@mui/material';
import { Rating } from '@prisma/client';

import React from 'react';

interface Props {
  rating: Rating;
  ratingInfo: {
    totalValue: number;
    totalCount: number;
  };
}

export const ProductRating = ({ rating, ratingInfo }: Props) => {
  //   ratingInfo.totalCount
  //   ratingInfo.totalValue

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
            <b>{ratingInfo.totalValue}</b>
          </Typography>
          <RatingContainer
            size='small'
            name='read-only'
            value={ratingInfo.totalCount}
            readOnly
            precision={0.5}
          />
          <Typography variant='body2'>
            оценок: <b>{ratingInfo.totalCount}</b>
          </Typography>
        </Stack>

        <Stack direction='row' spacing={2} alignItems='center'>
          <RatingContainer name='read-only' value={5} readOnly />
          <Box sx={{ width: '100%' }}>
            <LinearProgress
              variant='determinate'
              value={(rating.FIVE / ratingInfo.totalCount) * 100}
            />
          </Box>
          <Typography variant='body1' textAlign='center'>
            {rating.FIVE}
          </Typography>
        </Stack>
        <Stack direction='row' spacing={2} alignItems='center'>
          <RatingContainer name='read-only' value={4} readOnly />
          <Box sx={{ width: '100%' }}>
            <LinearProgress
              variant='determinate'
              value={(rating.FOUR / ratingInfo.totalCount) * 100}
            />
          </Box>
          <Typography variant='body1' textAlign='center'>
            {rating.FOUR}
          </Typography>
        </Stack>
        <Stack direction='row' spacing={2} alignItems='center'>
          <RatingContainer name='read-only' value={3} readOnly />
          <Box sx={{ width: '100%' }}>
            <LinearProgress
              variant='determinate'
              value={(rating.THREE / ratingInfo.totalCount) * 100}
            />
          </Box>
          <Typography variant='body1' textAlign='center'>
            {rating.THREE}
          </Typography>
        </Stack>
        <Stack direction='row' spacing={2} alignItems='center'>
          <RatingContainer name='read-only' value={2} readOnly />
          <Box sx={{ width: '100%' }}>
            <LinearProgress
              variant='determinate'
              value={(rating.TWO / ratingInfo.totalCount) * 100}
            />
          </Box>
          <Typography variant='body1' textAlign='center'>
            {rating.TWO}
          </Typography>
        </Stack>
        <Stack direction='row' spacing={2} alignItems='center'>
          <RatingContainer name='read-only' value={1} readOnly />
          <Box sx={{ width: '100%' }}>
            <LinearProgress
              variant='determinate'
              value={(rating.ONE / ratingInfo.totalCount) * 100}
            />
          </Box>
          <Typography variant='body1' textAlign='center'>
            {rating.ONE}
          </Typography>
        </Stack>
      </Box>
    </Paper>
  );
};
