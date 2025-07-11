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
//import { useUIContext } from '@/context/ui';

export const Actions = () => {
  const { totalQuantity } = useCartStore();
  const setDrawerOpen = useAppDrawerStore((state) => state.setDrawerOpen);
  const theme = useTheme();
  const match = useMediaQuery(theme.breakpoints.down('md'));
  const iconSize = match ? 'medium' : 'large';
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
      <ActionIconButton aria-label='prifile'>
        <AccountCircleIcon color='action' fontSize={iconSize} />

        <ActionsTypography>Профиль</ActionsTypography>
      </ActionIconButton>
    </ActionsContainer>
  );
};
