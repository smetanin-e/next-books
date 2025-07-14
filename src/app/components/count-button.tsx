import { CircularProgress, IconButton, Stack, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import React from 'react';
import { useCartStore, useCountButtonsBookId } from '@/store';

interface Props {
  id: number;
  quantity?: number;
  onClick?: (value: 'inctement' | 'decrement') => void;
}
//loading ? <CircularProgress sx={{ mr: 2 }} size={'15px'} /> :
export const CountButton: React.FC<Props> = ({ id, quantity, onClick }) => {
  const { loading } = useCartStore();
  const { cartItemId } = useCountButtonsBookId();
  console.log({ id, cartItemId });
  return (
    <Stack
      flexGrow={1}
      sx={{ justifyContent: { md: 'end' } }}
      direction={'row'}
      spacing={2}
      alignItems={'center'}
    >
      <IconButton
        onClick={() => onClick?.('decrement')}
        value='decrement'
        disabled={quantity === 1}
        size='small'
        sx={{ background: '#f3f3f3' }}
      >
        <RemoveIcon />
      </IconButton>
      <Typography textAlign={'center'} width={20} variant='body1'>
        {id === cartItemId && loading ? <CircularProgress size={'15px'} /> : quantity}
      </Typography>
      <IconButton
        onClick={() => onClick?.('inctement')}
        value='increment'
        size='small'
        sx={{ background: '#f3f3f3' }}
      >
        <AddIcon />
      </IconButton>
    </Stack>
  );
};
