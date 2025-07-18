'use client';
import { Box, Button, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';

import { Menu } from '../components';
import { useAppDrawerStore } from '@/store';

export const Navigation = () => {
  const setDrawerOpen = useAppDrawerStore((state) => state.setDrawerOpen);

  const theme = useTheme();
  const match = useMediaQuery(theme.breakpoints.up('md'));
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      {match && (
        <Button
          variant='text'
          color='primary'
          endIcon={<MenuIcon style={{ fontSize: '28px' }} />}
          onClick={() => setDrawerOpen(true)}
        >
          Категории
        </Button>
      )}

      {match && <Menu />}
    </Box>
  );
};
