'use client';
import React from 'react';
import { Actions } from '../components';
import { Box, Container, ThemeProvider, useMediaQuery, useTheme } from '@mui/material';
import CustomTheme from '@/styles/theme';

export const Footer = () => {
  const theme = useTheme();
  const match = useMediaQuery(theme.breakpoints.down('md'));
  const responseMargin = match ? 5 : 0;
  return (
    <ThemeProvider theme={CustomTheme}>
      {' '}
      <footer style={{ backgroundColor: 'purple' }}>
        <Container>
          <Box position='relative' mb={responseMargin} sx={{ paddingBlock: '1rem' }}>
            Footer
          </Box>
        </Container>
        {match && <Actions />}
      </footer>
    </ThemeProvider>
  );
};
