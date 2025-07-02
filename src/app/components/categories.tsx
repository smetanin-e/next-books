'use client';
import React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import AutoStoriesRoundedIcon from '@mui/icons-material/AutoStoriesRounded';
import HorizontalRuleRoundedIcon from '@mui/icons-material/HorizontalRuleRounded';

import { Box, Divider, styled, Typography } from '@mui/material';
type CategoriesType = {
  [key: string]: string[];
};
const categories: CategoriesType = {
  ВСЕ: [],
  'Хобби и досуг': ['Документальная литература', 'Книги о путешествиях'],
  История: ['Документальная', 'Книги'],
};
const cats = Object.keys(categories);

export const Categories = () => {
  const [value, setValue] = React.useState<string | null>('');

  const handleClick = (event: React.MouseEvent<HTMLSpanElement>) => {
    const target = event.target as HTMLSpanElement;
    //console.log(target.textContent);
    setValue(target.textContent);
  };
  console.log(value);

  const MiddleDivider = styled((props) => (
    <Divider orientation='horizontal' variant='middle' {...props} />
  ))(({ theme }) => ({}));

  return (
    <Box
      pt={{
        sm: 1,
        md: 6,
      }}
    >
      <Typography variant='h5' component='h2' pl={2}>
        Категории
      </Typography>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }} component='nav'>
        {cats.map((category, idx) => (
          <Box key={category + idx}>
            <ListItemButton onClick={handleClick}>
              <ListItemIcon>
                <AutoStoriesRoundedIcon />
              </ListItemIcon>
              <ListItemText primary={category} />
            </ListItemButton>
            <MiddleDivider />
            {categories[category].length > 0 &&
              categories[category].map((subCategory: string, idx: number) => (
                <List key={idx} component='div' disablePadding>
                  <ListItemButton sx={{ pl: 4 }} onClick={handleClick}>
                    <ListItemIcon>
                      <HorizontalRuleRoundedIcon />
                    </ListItemIcon>
                    <ListItemText primary={subCategory} />
                  </ListItemButton>
                  <MiddleDivider />
                </List>
              ))}
          </Box>
        ))}
      </List>
    </Box>
  );
};
