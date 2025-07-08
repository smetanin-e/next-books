import React from 'react';

import { Button, CardActions, IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

interface Props {
  className?: string;
  text: string;
  buttonVariant: 'outlined' | 'contained';
}

export const CardButtons: React.FC<Props> = ({ text, buttonVariant }: Props) => {
  return (
    <CardActions sx={{ justifyContent: 'space-between' }}>
      <Button variant={buttonVariant} size='small'>
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
      {/* <IconButton
        sx={{
          zIndex: 2,
          bgcolor: '#fff',
        }}
        size='small'
      >
        <FavoriteIcon color='error' />
      </IconButton> */}
    </CardActions>
  );
};
