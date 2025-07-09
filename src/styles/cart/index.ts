'use client'

import { Box,  styled } from "@mui/material";

export const CartContainer = styled(Box)(({theme})=>({
    display:"flex", 
    justifyContent:"space-between",
     alignItems:'start',
     gap: '20px',
     [theme.breakpoints.down('md')]: {
       flexDirection: 'column',
       alignItems:'normal',
    }
}));