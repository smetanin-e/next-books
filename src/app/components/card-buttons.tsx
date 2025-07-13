'use client';
import React from 'react';

import { Button, CardActions, IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useCartStore } from '@/store';
import { StyledLink } from '@/styles';

interface Props {
  className?: string;
  text: string;
  buttonVariant: 'outlined' | 'contained';
  itemId: number;
}

export const CardButtons: React.FC<Props> = ({ text, buttonVariant, itemId }: Props) => {
  const { items, addCartItem } = useCartStore();

  const itemInCart = items.some((item) => item.article === itemId);

  const handleAddToCart = async () => {
    try {
      addCartItem({ bookId: itemId });
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <CardActions sx={{ justifyContent: 'space-between' }}>
      {itemInCart ? (
        <StyledLink href={'/cart'}>
          <Button variant='contained' size='small'>
            оформить
          </Button>
        </StyledLink>
      ) : (
        <Button onClick={handleAddToCart} variant={buttonVariant} size='small'>
          {text}
        </Button>
      )}

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
