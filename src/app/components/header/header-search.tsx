import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { TextField, IconButton } from '@mui/material';
export const HeaderSearch = () => {
  return (
    <TextField
      sx={{ minWidth: '280px', background: '#fff' }}
      fullWidth
      size='small'
      id='outlined-basic'
      label='Поиск'
      variant='outlined'
      slotProps={{
        input: {
          endAdornment: (
            <IconButton aria-label='закрыть' color='primary'>
              <CloseIcon />
            </IconButton>
          ),
        },
      }}
    />
  );
};
