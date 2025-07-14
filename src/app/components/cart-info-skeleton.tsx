import { Box, Paper, Skeleton, Stack } from '@mui/material';
import React from 'react';

export const CartInfoSkeleton = ({}) => {
  return (
    <Box
      flexShrink={0}
      sx={{
        minWidth: {
          md: '300px',
        },
      }}
    >
      <Paper elevation={2}>
        <Stack p={2} pb={0} spacing={1}>
          <Box pb={1}> {<Skeleton variant='rectangular' width={200} height={20} />}</Box>

          <Stack spacing={2} pb={2}>
            {<Skeleton variant='rectangular' width={'100%'} height={30} />}
            {<Skeleton variant='rectangular' width={'100%'} height={30} />}
            {<Skeleton variant='rectangular' width={'100%'} height={30} />}
          </Stack>

          <Box pb={1}> {<Skeleton variant='rectangular' width={70} height={15} />}</Box>
          <Box pb={2}> {<Skeleton variant='rectangular' width={105} height={40} />}</Box>
        </Stack>
      </Paper>
    </Box>
  );
};
