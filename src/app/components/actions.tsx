'use client';

import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import { Badge, useMediaQuery, useTheme } from '@mui/material';
import { ActionsContainer, ActionsTypography, ActionIconButton, StyledLink } from '@/styles';
import { useAppDrawerStore, useCartStore } from '@/store';
import Link from 'next/link';
import { Login } from './@modal/login';
import { Registration } from './@modal/registration';

export const Actions = () => {
  const { getCartItems, totalQuantity } = useCartStore();
  const setDrawerOpen = useAppDrawerStore((state) => state.setDrawerOpen);
  const theme = useTheme();
  const match = useMediaQuery(theme.breakpoints.down('md'));
  const iconSize = match ? 'medium' : 'large';

  React.useEffect(() => {
    getCartItems();
  }, []);

  return (
    <ActionsContainer direction='row' spacing={2} pt={1}>
      {match && (
        <>
          <Link href={'/'}>
            <ActionIconButton aria-label='home'>
              <Badge color='primary'>
                <HomeIcon color='action' fontSize={iconSize} />
              </Badge>
            </ActionIconButton>
          </Link>

          <ActionIconButton aria-label='menu'>
            <Badge color='primary'>
              <MenuIcon color='action' fontSize={iconSize} onClick={() => setDrawerOpen(true)} />
            </Badge>
          </ActionIconButton>
        </>
      )}
      <StyledLink href={'/cart'}>
        <ActionIconButton aria-label='cart'>
          <Badge badgeContent={totalQuantity} color='primary'>
            <ShoppingCartIcon color='action' fontSize={iconSize} />
          </Badge>
          <ActionsTypography>Корзина</ActionsTypography>
        </ActionIconButton>
      </StyledLink>

      <ActionIconButton aria-label='favorite'>
        <Badge badgeContent={1} color='primary'>
          <FavoriteIcon color='action' fontSize={iconSize} />
        </Badge>
        <ActionsTypography>Избранное</ActionsTypography>
      </ActionIconButton>
      <ActionIconButton aria-label='profile'>
        <AccountCircleIcon color='action' fontSize={iconSize} />

        <ActionsTypography>Профиль</ActionsTypography>
      </ActionIconButton>
      <Registration />
    </ActionsContainer>
  );
};
