'use client';
import { HeaderList } from '@/styles/header';
import { Box, ListItemButton, ListItemText, Skeleton, Stack } from '@mui/material';
import React from 'react';
import { StyledLink } from '@/styles';
import { useTagsStore } from '@/store';

export const Menu = () => {
  const { tags, loading, getTags } = useTagsStore();
  React.useEffect(() => {
    getTags();
  }, []);

  return (
    <HeaderList>
      {loading ? (
        <Stack direction={'row'} spacing={8} sx={{ display: { xs: 'none', md: 'flex' } }}>
          <Skeleton variant='text' width={110} height={28} />
          <Skeleton variant='text' width={110} height={28} />
          <Skeleton variant='text' width={110} height={28} />
        </Stack>
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
