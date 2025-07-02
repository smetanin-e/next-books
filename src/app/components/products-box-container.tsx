import { Stack, styled } from '@mui/material';
import React, { ReactNode } from 'react';

interface MainMobileContainerProps {
  children?: ReactNode;
}

export const ProductsBoxContainer: React.FC<MainMobileContainerProps> = ({ children }) => {
  return (
    <Stack direction='row' gap={2} flexWrap='wrap'>
      {children}
    </Stack>
  );
};

export const BoxContainer = styled(ProductsBoxContainer)(() => ({}));
