'use client';

import React from 'react';
import { useClickAway } from 'react-use';
import CloseIcon from '@mui/icons-material/Close';
import { TextField, IconButton, Box, Grow, Typography, Paper } from '@mui/material';
export const HeaderSearch = () => {
  const [value, setValue] = React.useState('');
  const [focus, setFocus] = React.useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value);
  };

  const handleCloseInput = () => {
    setValue('');
    setFocus(false);
  };

  const ref = React.useRef(null);
  useClickAway(ref, () => {
    setFocus(false);
  });

  return (
    <Box ref={ref} flexGrow={1} position={'relative'}>
      <TextField
        sx={{ minWidth: '280px', background: '#fff' }}
        fullWidth
        size='small'
        label='Поиск'
        variant='outlined'
        value={value}
        onChange={handleInputChange}
        onFocus={() => setFocus(true)}
        slotProps={{
          input: {
            endAdornment: (
              <>
                {value && (
                  <IconButton onClick={handleCloseInput} aria-label='закрыть' color='primary'>
                    <CloseIcon />
                  </IconButton>
                )}
              </>
            ),
          },
        }}
      />

      <Box zIndex={1} position={'absolute'} top={'100%'} left={0} width={'100%'}>
        {value && (
          <Paper elevation={2} sx={{ mt: 1, p: 1 }}>
            <Grow in={!!value}>
              <Typography>123</Typography>
            </Grow>

            <Grow
              in={!!value}
              style={{ transformOrigin: '0 0 0' }}
              {...(!!value ? { timeout: 1000 } : {})}
            >
              <Typography>321</Typography>
            </Grow>
          </Paper>
        )}
      </Box>
    </Box>
  );
};
