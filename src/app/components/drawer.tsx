'use client';
import CloseIcon from '@mui/icons-material/Close';
import CustomTheme from '@/styles/theme';

import { Drawer, IconButton, ThemeProvider, useMediaQuery, useTheme } from '@mui/material';
import { Categories } from './categories';
import { HeaderLinks } from './header/header-links';
import { useAppDrawerStore } from '@/store/appDrawer';

export const AppDrawer = () => {
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

        {match && <HeaderLinks />}

        <Categories />
      </Drawer>
    </ThemeProvider>
  );
};
