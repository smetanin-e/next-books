'use client';
import { useProductsParamStore } from '@/store/products-param';
import { Typography } from '@mui/material';
import React from 'react';

interface Props {
  className?: string;
}

export const ProductsTitle: React.FC<Props> = () => {
  const { value } = useProductsParamStore((state) => state);
  return (
    <Typography variant='h3' component='h1' color='textPrimary' marginBlockEnd={3}>
      {value}
    </Typography>
  );
};
