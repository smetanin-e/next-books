'use client';
import React from 'react';

import AutoStoriesRoundedIcon from '@mui/icons-material/AutoStoriesRounded';
import HorizontalRuleRoundedIcon from '@mui/icons-material/HorizontalRuleRounded';

import {
  Box,
  CircularProgress,
  Divider,
  Grow,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
  Typography,
} from '@mui/material';

import { useCatalog } from '../hooks/useCatalog';
import { useProductsParamStore } from '@/store/products-param';
import { StyledLink } from '@/styles';
import { useAppDrawerStore } from '@/store/appDrawer';

export const Categories = () => {
  const { categories, subcategories, loading } = useCatalog();

  const { value, setValue } = useProductsParamStore((state) => state);
  const { setDrawerOpen } = useAppDrawerStore((state) => state);

  //   const [value, setValue] = React.useState<string | null>('');

  const handleClick = (event: React.MouseEvent<HTMLSpanElement>) => {
    const target = event.target as HTMLSpanElement;
    //console.log(target.textContent);
    setValue(target.textContent);
    setDrawerOpen(false);
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
                <StyledLink href={`/test/category/${category.slug}`}>
                  <ListItemButton onClick={handleClick}>
                    <ListItemIcon>
                      <AutoStoriesRoundedIcon />
                    </ListItemIcon>
                    <ListItemText primary={category.name} />
                  </ListItemButton>
                </StyledLink>
              </Grow>
              <MiddleDivider />
              {subcategories.map((subcategory) => (
                <Box key={subcategory.id}>
                  {category.id === subcategory.categoryId && (
                    <Grow in={true} style={{ transformOrigin: '0 0 0' }} {...{ timeout: 1000 }}>
                      <StyledLink href={`/test/subcategory/${subcategory.slug}`}>
                        <List component='div' disablePadding>
                          <ListItemButton sx={{ pl: 4 }} onClick={handleClick}>
                            <ListItemIcon>
                              <HorizontalRuleRoundedIcon />
                            </ListItemIcon>
                            <ListItemText primary={subcategory.name} />
                          </ListItemButton>
                          <MiddleDivider />
                        </List>
                      </StyledLink>
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
