'use client'

import { Box, Container, IconButton, Stack, styled, Typography } from "@mui/material"
import Link from "next/link"

export const ActionsContainer  = styled(Stack)(({theme}) => ({

   [theme.breakpoints.down('md')]: {
          paddingBlockStart: '5px',
          background: '#cecece',
          position: 'fixed',
          bottom: 0,
          width: '100%',
          justifyContent: 'space-around',
          zIndex: 2,
        },

}))

export const ActionsTypography  = styled(Typography)(({theme}) => ({
   [theme.breakpoints.down('md')]: {
          display: 'none'
        },

}))

export const ActionIconButton  = styled(IconButton)(() => ({
    display: 'flex',
    flexDirection: 'column', 
    borderRadius: '2px',

}))


export const ProductCardContainer  = styled(Stack)(({theme}) => ({
    width:'100%', minWidth:'200px', position:'relative', height:'100%',
   [theme.breakpoints.down('md')]: {
          width:'166px',
          minWidth:'166px'
        },

}))

export const ImageContainer = styled(Box)({
    display:"flex", 
    justifyContent:"center",
    flexShrink:0 
});
export const StyledImage = styled('img')({

  width: '100%',
  objectFit: 'cover', 
});

export const StyledLink = styled(Link)({
 textDecoration: 'none',
 color: 'inherit'
 
//  "&:hover": {
//    background: 'red',
//   },
});

export const HoveredStack = styled(Stack)({
 
 transition: 'background-color 0.4s',
 "&:hover": {
   background: '#f3f3f3',
  },
});


export const StyledContainer  = styled(Container)(({theme}) => ({
    padding: '16px',
   [theme.breakpoints.down('md')]: {
          padding: '20px 10px',
        },

}))

