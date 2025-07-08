'use client';
import { HeaderList } from '@/styles/header';
import { Box, ListItemButton, ListItemText } from '@mui/material';
import React from 'react';
import { useTags } from '../hooks/useTags';
import { useProductsParamStore } from '@/store/products-param';
import { StyledLink } from '@/styles';

export const Menu = () => {
  const { tags, loading } = useTags();
  const { setValue } = useProductsParamStore((state) => state);

  const handleClick = (event: React.MouseEvent<HTMLSpanElement>) => {
    const target = event.target as HTMLSpanElement;
    //console.log(target.textContent);
    setValue(target.textContent);
  };
  return (
    <HeaderList>
      {loading ? (
        <Box>loading...</Box>
      ) : (
        tags.map((tag) => (
          <StyledLink key={tag.id} href={'/products'}>
            <ListItemButton sx={{ paddingBlock: 0 }} onClick={handleClick}>
              <ListItemText primary={tag.name} />
            </ListItemButton>
          </StyledLink>
        ))
      )}
      {/* <ListItemButton sx={{ paddingBlock: 0 }}>
        <ListItemText primary='Новинки' />
      </ListItemButton>
      <ListItemButton sx={{ paddingBlock: 0 }}>
        <ListItemText primary='Бестселлеры' />
      </ListItemButton>
      <ListItemButton sx={{ paddingBlock: 0 }}>
        <ListItemText primary='Специальные предложения' />
      </ListItemButton> */}
    </HeaderList>
  );
};
