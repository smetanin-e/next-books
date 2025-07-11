'use client';
import React from 'react';

import { Button, CardActions, IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useCartStore } from '@/store';

interface Props {
  className?: string;
  text: string;
  buttonVariant: 'outlined' | 'contained';
  itemId: number;
}

export const CardButtons: React.FC<Props> = ({ text, buttonVariant, itemId }: Props) => {
  const { loading, addCartItem } = useCartStore();

  const handleAddToCart = async () => {
    try {
      addCartItem({ bookId: itemId });
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <CardActions sx={{ justifyContent: 'space-between' }}>
      <Button onClick={handleAddToCart} variant={buttonVariant} size='small'>
        {text}
      </Button>

      <IconButton
        sx={{
          zIndex: 2,
          bgcolor: '#fff',
        }}
        size='small'
      >
        <FavoriteBorderIcon />
      </IconButton>
    </CardActions>
  );
};
