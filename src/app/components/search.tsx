'use client';

import React from 'react';
import { useClickAway, useDebounce } from 'react-use';
import CloseIcon from '@mui/icons-material/Close';
import { TextField, IconButton, Box } from '@mui/material';
import { SearchContainer, SearchOverlay } from '@/styles/header';
import { Api } from '../../../services/api-clients';
import { Book } from '@prisma/client';
import { SearchResult } from '../components';

export const Search = () => {
  const [value, setValue] = React.useState('');
  const [focused, setFocused] = React.useState(false);
  const [products, setProducts] = React.useState<Book[]>([]);
  const [loading, setLoading] = React.useState(true);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value);
  };

  const cleareInput = () => {
    setValue('');
    setFocused(false);
    setProducts([]);
  };

  const ref = React.useRef(null);
  useClickAway(ref, () => setFocused(false));

  useDebounce(
    async () => {
      try {
        setLoading(true);
        const response = await Api.products.search(value);
        setProducts(response);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    },
    500,
    [value],
  );
  return (
    <>
      {focused && <SearchOverlay />}

      <SearchContainer ref={ref}>
        <TextField
          sx={{ minWidth: '280px', background: '#fff' }}
          fullWidth
          size='small'
          label='Поиск'
          variant='outlined'
          value={value}
          onChange={handleInputChange}
          onFocus={() => setFocused(true)}
          slotProps={{
            input: {
              endAdornment: (
                <>
                  {value && (
                    <IconButton onClick={cleareInput} aria-label='закрыть' color='primary'>
                      <CloseIcon />
                    </IconButton>
                  )}
                </>
              ),
            },
          }}
        />
        {focused && (
          <SearchResult
            loading={loading}
            cleareInput={cleareInput}
            products={products}
            value={value}
          />
        )}
      </SearchContainer>
    </>
  );
};
