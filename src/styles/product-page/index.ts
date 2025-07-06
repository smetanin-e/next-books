'use client'

import { Box, Paper, styled } from "@mui/material";



export const StyledAboutContainer = styled(Box)({
   
  height: '168px', 
  overflow: 'hidden',
  position: 'relative',
    '&::after': {
    content: '""', // Обязательный параметр для псевдоэлемента
    position: 'absolute',
    zIndex: 2,
    width: '100%',
    height: '90px',
    background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 100%)',
    bottom: 0,
    left: 0
    }
  
});

export const BookGridContainer = styled(Box)({
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(273px, 1fr))',
    gap: '20px',
    marginBlockEnd:'40px',
}); 

export const PriceContainer = styled(Paper)(({theme}) => ({
    height: '200px',
    [theme.breakpoints.down('sm')]: {
        height: 'auto'
    }
}))