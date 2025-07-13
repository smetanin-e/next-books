'use client';
import { useCartStore } from '@/store';
import {
  Badge,
  Box,
  Button,
  Container,
  IconButton,
  Paper,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import React from 'react';
import { CartInfo, ProductImage } from '../components';

import CloseIcon from '@mui/icons-material/Close';

import { CartContainer } from '@/styles/cart';
import { StyledContainer } from '@/styles';

export default function Checkout() {
  const { items, totalAmount, totalQuantity } = useCartStore();

  const [name, setName] = React.useState('Сметанин Евгений');
  const [email, setEmail] = React.useState('esmet91@yandex.ru');
  const [phone, setPhone] = React.useState('+79493492491');
  return (
    <StyledContainer>
      <CartContainer mb={2}>
        <Stack spacing={3} flexGrow={1}>
          <Paper elevation={2}>
            <Stack p={2}>
              <Typography variant='h5'>1. Товары</Typography>
              <Stack direction={'row'} spacing={2} overflow={'auto'} paddingBlockStart={2}>
                {items.map((item) => (
                  <Badge key={item.article} badgeContent={item.quantity} color='primary'>
                    <ProductImage heigth={80} src={item.imageUrl} />
                  </Badge>
                ))}
              </Stack>
            </Stack>
          </Paper>

          <Paper elevation={2}>
            <Stack spacing={2} p={2}>
              <Typography mb={2} variant='h5'>
                2. Получатель
              </Typography>
              <TextField
                value={name}
                onChange={(e) => setName(e.target.value)}
                size='small'
                variant='outlined'
                label='Фамилия имя'
                helperText={!name && 'Введите фамилию и имя'}
                error={!name}
                slotProps={{
                  input: {
                    endAdornment: (
                      <>
                        {name && (
                          <IconButton
                            onClick={() => setName('')}
                            aria-label='закрыть'
                            color='primary'
                          >
                            <CloseIcon />
                          </IconButton>
                        )}
                      </>
                    ),
                  },
                }}
              />
              <TextField
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                size='small'
                variant='outlined'
                label='Адрес электронной почты'
                helperText={!email && 'Введите адрес электронной почты'}
                error={!email}
              />
              <TextField
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                size='small'
                variant='outlined'
                label='Телефон'
                helperText={!phone && 'Введите номер телефона'}
                error={!phone}
              />
            </Stack>
          </Paper>

          <Paper elevation={2}>
            <Stack spacing={2} p={2}>
              <Typography mb={2} variant='h5'>
                3. Адрес доставки
              </Typography>
              <TextField size='small' variant='outlined' label='Введите адрес...' />

              <TextField id='comment' label='Комментарий' multiline rows={4} defaultValue='' />
            </Stack>
          </Paper>
        </Stack>

        <CartInfo items={items} totalAmount={totalAmount} totalQuantity={totalQuantity}>
          <Stack p={2} justifyContent={'center'}>
            <Box>
              <Typography variant='body2'>К оплате:</Typography>
              <Typography variant='h4' fontWeight={600}>
                {totalAmount} ₽
              </Typography>
            </Box>
            <Button variant='contained'>Оплатить</Button>
          </Stack>
        </CartInfo>
      </CartContainer>
    </StyledContainer>
  );
}
