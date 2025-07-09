'use client';
import { HeaderList } from '@/styles/header';
import { Box, ListItemButton, ListItemText } from '@mui/material';
import React from 'react';
import { useTags } from '../../hooks/useTags';
import { StyledLink } from '@/styles';

export const Menu = () => {
  const { tags, loading } = useTags();

  return (
    <HeaderList>
      {loading ? (
        <Box>loading...</Box>
      ) : (
        tags.map((tag) => (
          <StyledLink key={tag.id} href={`/products/tag/${tag.slug}`}>
            <ListItemButton sx={{ paddingBlock: 0 }}>
              <ListItemText primary={tag.name} />
            </ListItemButton>
          </StyledLink>
        ))
      )}
    </HeaderList>
  );
};
