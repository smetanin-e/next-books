'use client';
import React from 'react';
import { Actions } from '../components';
import { Box, useMediaQuery, useTheme } from '@mui/material';
import { StyledContainer } from '@/styles';

export const Footer = () => {
  const theme = useTheme();
  const match = useMediaQuery(theme.breakpoints.down('md'));
  const responseMargin = match ? 5 : 0;
  return (
    <Box component={'footer'} bgcolor='grey'>
      <StyledContainer>
        <Box position='relative' mb={responseMargin} sx={{ paddingBlock: '1rem' }}>
          Footer
        </Box>
      </StyledContainer>
      {match && <Actions />}
    </Box>
  );
};
