'use client';
import React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import AutoStoriesRoundedIcon from '@mui/icons-material/AutoStoriesRounded';
import HorizontalRuleRoundedIcon from '@mui/icons-material/HorizontalRuleRounded';

import { Box, CircularProgress, Divider, Grow, styled, Typography } from '@mui/material';

import { useCatalog } from '../hooks/useCatalog';

export const Categories = () => {
  const { categories, subcategories, loading } = useCatalog();

  const [value, setValue] = React.useState<string | null>('');

  const handleClick = (event: React.MouseEvent<HTMLSpanElement>) => {
    const target = event.target as HTMLSpanElement;
    //console.log(target.textContent);
    setValue(target.textContent);
  };
  console.log(value);

  const MiddleDivider = styled((props) => (
    <Divider orientation='horizontal' variant='middle' {...props} />
  ))(({}) => ({}));

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
        {loading ? (
          <Box pt={20} width={'320px'} sx={{ display: 'flex', justifyContent: 'center' }}>
            <CircularProgress color='primary' />
          </Box>
        ) : (
          categories.map((category) => (
            <Box key={category.id}>
              <Grow in={true} style={{ transformOrigin: '0 0 0' }} {...{ timeout: 1000 }}>
                <ListItemButton onClick={handleClick}>
                  <ListItemIcon>
                    <AutoStoriesRoundedIcon />
                  </ListItemIcon>
                  <ListItemText primary={category.name} />
                </ListItemButton>
              </Grow>
              <MiddleDivider />
              {subcategories.map((subcategory) => (
                <Box key={subcategory.id}>
                  {category.id === subcategory.categoryId && (
                    <Grow in={true} style={{ transformOrigin: '0 0 0' }} {...{ timeout: 1000 }}>
                      <List component='div' disablePadding>
                        <ListItemButton sx={{ pl: 4 }} onClick={handleClick}>
                          <ListItemIcon>
                            <HorizontalRuleRoundedIcon />
                          </ListItemIcon>
                          <ListItemText primary={subcategory.name} />
                        </ListItemButton>
                        <MiddleDivider />
                      </List>
                    </Grow>
                  )}
                </Box>
              ))}
            </Box>
          ))
        )}
      </List>
    </Box>
  );
};
