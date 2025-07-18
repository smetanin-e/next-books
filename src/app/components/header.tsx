'use client';
import React from 'react';
import logo from '../../../public/logo.png'; // ИСПРАВИТЬ
import { AppBar, Container, Typography, useMediaQuery, useTheme } from '@mui/material';

import { HeaderContainer, HeaderLayout, HeaderLogo } from '@/styles/header';

import Link from 'next/link';
import { Actions, Navigation, Search } from '../components';
import { useSearchParams } from 'next/navigation';
import toast, { Toaster } from 'react-hot-toast';

interface Props {
  className?: string;
}
//xs-0 sm-600 md-900 lg-1200 xl-1536
export const Header: React.FC<Props> = () => {
  const theme = useTheme();
  const match = useMediaQuery(theme.breakpoints.up('md'));

  const params = useSearchParams();

  React.useEffect(() => {
    if (params.has('paid')) {
      toast.success('Заказ успешно оплачен!');
    }
  }, []);

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
      <Typography component={'div'}>
        <Toaster toastOptions={{ duration: 2000 }} />
      </Typography>
    </HeaderLayout>
  );
};
