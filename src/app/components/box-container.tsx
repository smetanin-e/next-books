'use client';
import { Stack, styled } from '@mui/material';
import React, { ReactNode } from 'react';

interface MainMobileContainerProps {
  children?: ReactNode;
}

const ProductsBoxContainer: React.FC<MainMobileContainerProps> = ({ children }) => {
  return (
    <Stack p={1} direction='row' gap={2} flexWrap='wrap'>
      {children}
    </Stack>
  );
};

export const BoxContainer = styled(ProductsBoxContainer)(() => ({}));
