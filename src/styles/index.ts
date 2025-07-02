

import { IconButton, Stack, styled, Typography } from "@mui/material"

export const ActionsContainer  = styled(Stack)(({theme}) => ({

   [theme.breakpoints.down('md')]: {
          paddingBlockStart: '5px',
          background: '#cecece',
          position: 'fixed',
          bottom: 0,
          width: '100%',
          justifyContent: 'space-around',
          zIndex: 20,
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

