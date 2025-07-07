import React from 'react';
import StarIcon from '@mui/icons-material/Star';
import MessageIcon from '@mui/icons-material/Message';
import { Stack, Typography } from '@mui/material';

interface Props {
  ratingInfo: {
    totalValue: number;
    totalCount: number;
  };
}
export const RatingSummary = ({ ratingInfo }: Props) => {
  return (
    <Stack direction={'row'} spacing={3} paddingBlockEnd={1}>
      <Stack direction={'row'} alignItems={'center'} spacing={1}>
        <StarIcon sx={{ color: '#FAAF00' }} />
        <Typography variant='body2'>
          <b>{ratingInfo.totalValue}</b> ({ratingInfo.totalCount})
        </Typography>
      </Stack>
      <Stack direction={'row'} alignItems={'center'} spacing={1}>
        <MessageIcon color='disabled' fontSize='small' />
        <Typography variant='body2'>
          отзывов (<b>20</b>)
        </Typography>
      </Stack>
    </Stack>
  );
};
