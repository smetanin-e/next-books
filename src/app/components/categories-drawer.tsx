'use client';
import CloseIcon from '@mui/icons-material/Close';
import CustomTheme from '@/styles/theme';

import { Drawer, IconButton, ThemeProvider, useMediaQuery, useTheme } from '@mui/material';

import { useAppDrawerStore } from '@/store/appDrawer';
import { Categories, Menu } from '../components';

export const CategoriesDrawer = () => {
  const theme = useTheme();
  const match = useMediaQuery(theme.breakpoints.down('md'));
  const anchor = match ? 'top' : 'left';
  const { drawerOpen, setDrawerOpen } = useAppDrawerStore((state) => state);

  return (
    <ThemeProvider theme={CustomTheme}>
      <Drawer anchor={anchor} open={drawerOpen} sx={{ position: 'relative' }}>
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
    </ThemeProvider>
  );
};
