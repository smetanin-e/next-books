import { Typography } from '@mui/material';
import React from 'react';

interface ProductAboutProps {
  about: string;
}

export const ProductAbout = ({ about }: ProductAboutProps) => {
  return (
    <>
      <Typography variant='h6' paddingBlockEnd={1}>
        О товаре
      </Typography>
      <Typography variant='body2' paddingBlockEnd={1}>
        {about}
      </Typography>
    </>
  );
};
