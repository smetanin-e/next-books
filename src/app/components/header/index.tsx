'use client';
import React from 'react';
import logo from '../../../../public/logo.png'; // ИСПРАВИТЬ
import { AppBar, Box, Container, ThemeProvider, useMediaQuery, useTheme } from '@mui/material';
import CustomTheme from '@/styles/theme';

import { HeaderContainer, HeaderLogo } from '@/styles/header';
import { HeaderSearch } from './header-search';
import { Actions } from '../actions';
import { HeaderNav } from './header-nav';
//import { AppDrawer } from '../drawer';

interface Props {
  className?: string;
}
//xs-0 sm-600 md-900 lg-1200 xl-1536
export const Header: React.FC<Props> = () => {
  const theme = useTheme();
  const match = useMediaQuery(theme.breakpoints.up('md'));
  const spacing = match ? 4 : 1;
  const responsePadding = match ? '150px' : '60px';
  return (
    <ThemeProvider theme={CustomTheme}>
      <Box paddingBlockEnd={responsePadding}>
        <AppBar
          sx={{ paddingBlock: '8px', mb: 1, zIndex: '20', width: '100%' }}
          color='inherit'
          position='fixed'
        >
          <Container>
            <HeaderContainer direction='row' spacing={spacing}>
              <Box>
                <HeaderLogo alt='logo' src={logo.src} />
              </Box>
              <HeaderSearch />
              {match && <Actions />}
            </HeaderContainer>

            <HeaderNav />
          </Container>
        </AppBar>
        {/* <AppDrawer /> */}
      </Box>
    </ThemeProvider>
  );
};
