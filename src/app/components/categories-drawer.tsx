'use client';
import CloseIcon from '@mui/icons-material/Close';

import { Drawer, IconButton, useMediaQuery, useTheme } from '@mui/material';

import { useAppDrawerStore } from '@/store';
import { Categories, Menu } from '../components';

export const CategoriesDrawer = () => {
  const theme = useTheme();
  const match = useMediaQuery(theme.breakpoints.down('md'));
  const anchor = match ? 'top' : 'left';
  const { drawerOpen, setDrawerOpen } = useAppDrawerStore((state) => state);

  const toggleDrawer = (newOpen: boolean) => () => {
    setDrawerOpen(newOpen);
  };

  return (
    <Drawer
      anchor={anchor}
      open={drawerOpen}
      sx={{ position: 'relative' }}
      onClose={toggleDrawer(false)}
    >
      {drawerOpen && (
        <IconButton
          size='large'
          sx={{ position: 'absolute', top: '10px', right: '10px', zIndex: 2 }}
          onClick={() => setDrawerOpen(false)}
        >
          <CloseIcon />
        </IconButton>
      )}

      {match && <Menu />}

      <Categories />
    </Drawer>
  );
};
