'use client';
import React from 'react';
import logo from '../../../public/logo.png'; // ИСПРАВИТЬ
import { AppBar, Container, useMediaQuery, useTheme } from '@mui/material';

import { HeaderContainer, HeaderLayout, HeaderLogo } from '@/styles/header';

import Link from 'next/link';
import { Actions, Navigation, Search } from '../components';

//import { AppDrawer } from '../drawer';

interface Props {
  className?: string;
}
//xs-0 sm-600 md-900 lg-1200 xl-1536
export const Header: React.FC<Props> = () => {
  const theme = useTheme();
  const match = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <HeaderLayout>
      <AppBar
        sx={{ paddingBlock: '8px', mb: 1, zIndex: '20', width: '100%' }}
        color='inherit'
        position='fixed'
      >
        <Container>
          <HeaderContainer direction='row'>
            <Link href={'/'}>
              <HeaderLogo alt='logo' src={logo.src} />
            </Link>
            <Search />
            {match && <Actions />}
          </HeaderContainer>

          <Navigation />
        </Container>
      </AppBar>
    </HeaderLayout>
  );
};
