'use client';

import React from 'react';
import { useClickAway, useDebounce } from 'react-use';
import CloseIcon from '@mui/icons-material/Close';
import { TextField, IconButton } from '@mui/material';
import { SearchContainer, SearchOverlay } from '@/styles/header';
import { SearchResultPrev } from './search-result-prev';
import { Api } from '../../../../services/api-clients';
import { Book } from '@prisma/client';

export const HeaderSearch = () => {
  const [value, setValue] = React.useState('');
  const [focus, setFocus] = React.useState(false);
  const [products, setProducts] = React.useState<Book[]>([]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value);
  };

  const cleareInput = () => {
    setValue('');
    setFocus(false);
    setProducts([]);
  };

  const ref = React.useRef(null);
  useClickAway(ref, () => setFocus(false));

  useDebounce(
    () => {
      Api.products.search(value).then((items) => setProducts(items));
    },
    500,
    [value],
  );

  return (
    <>
      {focus && <SearchOverlay />}

      <SearchContainer ref={ref}>
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
                    <IconButton onClick={cleareInput} aria-label='закрыть' color='primary'>
                      <CloseIcon />
                    </IconButton>
                  )}
                </>
              ),
            },
          }}
        />
        {focus && products.length > 0 && (
          <SearchResultPrev cleareInput={cleareInput} products={products} value={value} />
        )}
      </SearchContainer>
    </>
  );
};
