import { Box, Divider, Skeleton, Stack } from '@mui/material';
import React from 'react';

export const CartItemSkeleton = () => {
  return (
    <>
      <Stack direction={'row'} spacing={3}>
        <Stack direction={'row'} spacing={2} flexShrink={0}>
          <Skeleton variant='rectangular' width={86} height={120} />
        </Stack>

        <Stack
          flexGrow={1}
          gap={2}
          justifyContent={'space-between'}
          alignItems={'center'}
          sx={{ flexDirection: { md: 'row' } }}
        >
          <Stack spacing={2} justifyContent={'center'}>
            <Skeleton variant='text' width={245} height={24} />
            <Skeleton variant='text' width={145} height={24} />
          </Stack>

          <Stack
            spacing={2}
            justifyContent={'space-between'}
            direction={'row'}
            alignItems={'center'}
          >
            <Skeleton variant='circular' width={26} height={26} />
            <Skeleton variant='text' width={24} height={40} />
            <Skeleton variant='circular' width={26} height={26} />
          </Stack>

          <Stack
            direction={'row'}
            spacing={2}
            justifyContent={'space-between'}
            alignItems={'center'}
          >
            <Box>
              <Skeleton variant='text' width={60} height={24} />
              <Skeleton variant='text' width={93} height={24} />
            </Box>

            <Skeleton variant='rectangular' width={15} height={20} />
          </Stack>
        </Stack>
      </Stack>
      <Divider />
    </>
  );
};
