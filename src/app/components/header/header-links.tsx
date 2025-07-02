import { HeaderList } from '@/styles/header';
import { ListItemButton, ListItemText } from '@mui/material';
import React from 'react';

export const HeaderLinks = () => {
  return (
    <HeaderList>
      <ListItemButton sx={{ paddingBlock: 0 }}>
        <ListItemText primary='Новинки' />
      </ListItemButton>
      <ListItemButton sx={{ paddingBlock: 0 }}>
        <ListItemText primary='Бестселлеры' />
      </ListItemButton>
      <ListItemButton sx={{ paddingBlock: 0 }}>
        <ListItemText primary='Специальные предложения' />
      </ListItemButton>
    </HeaderList>
  );
};
