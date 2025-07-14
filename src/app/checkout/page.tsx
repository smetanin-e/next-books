'use client';
import { useCartStore } from '@/store';
import { Badge, Box, Button, Paper, Skeleton, Stack, TextField, Typography } from '@mui/material';
import React from 'react';
import { AdressInput, CartInfo, CartInfoSkeleton, ProductImage } from '../components';

import { CartContainer } from '@/styles/cart';
import { StyledContainer } from '@/styles';

import { Controller, useForm } from 'react-hook-form';

type FormValues = {
  name: string;
  email: string;
  phone: string;
  adress: string;
  comment?: string;
};

export default function Checkout() {
  const { items, totalAmount, totalQuantity, loading } = useCartStore();

  const form = useForm<FormValues>({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      adress: '',
      comment: '',
    },
  });

  const { register, handleSubmit, formState } = form;
  const { errors } = formState;

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <StyledContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CartContainer mb={2}>
          <Stack spacing={3} flexGrow={1}>
            <Paper elevation={2}>
              <Stack p={2}>
                <Typography variant='h5'>1. Товары</Typography>

                <Stack direction={'row'} spacing={2} overflow={'auto'} paddingBlockStart={2}>
                  {loading
                    ? Array.from(new Array(4)).map((item, index) => (
                        <Skeleton key={index} variant='rectangular' width={55} height={80} />
                      ))
                    : items.map((item) => (
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
                  size='small'
                  variant='outlined'
                  type='text'
                  label='Фамилия имя'
                  {...register('name', {
                    required: 'Фамилия и имя получателя должны быть заполнены',
                  })}
                  error={!!errors.name}
                  helperText={errors.name?.message}
                />
                <TextField
                  size='small'
                  variant='outlined'
                  label='Адрес электронной почты'
                  type='email'
                  {...register('email', {
                    required: 'Адрес электронной почты обязателен',
                  })}
                  error={!!errors.email}
                  helperText={errors.email?.message}
                />
                <TextField
                  size='small'
                  variant='outlined'
                  label='Телефон'
                  type='tel'
                  {...register('phone', {
                    required: 'Номер телефона обязателен',
                  })}
                  error={!!errors.phone}
                  helperText={errors.phone?.message}
                />
              </Stack>
            </Paper>

            <Paper elevation={2}>
              <Stack spacing={2} p={2}>
                <Typography mb={2} variant='h5'>
                  3. Адрес доставки
                </Typography>
                <Box position={'relative'} pb={2}>
                  <Controller
                    control={form.control}
                    name='adress'
                    rules={{ required: 'Поле обязательно для заполнения' }}
                    render={({ field, fieldState }) => (
                      <>
                        <AdressInput onChange={field.onChange} />

                        {fieldState.error && (
                          <Typography
                            sx={{ position: 'absolute', paddingBlockStart: '4px' }}
                            variant='body2'
                            fontSize={12}
                            color='error'
                            pl={2}
                          >
                            {fieldState.error.message}
                          </Typography>
                        )}
                      </>
                    )}
                  />
                </Box>

                <TextField
                  id='comment'
                  label='Комментарий'
                  type='text'
                  multiline
                  rows={4}
                  {...register('comment')}
                />
              </Stack>
            </Paper>
          </Stack>
          {loading ? (
            <CartInfoSkeleton />
          ) : (
            <CartInfo items={items} totalAmount={totalAmount} totalQuantity={totalQuantity}>
              <Stack p={2} justifyContent={'center'}>
                <Button type='submit' variant='contained'>
                  Оплатить
                </Button>
              </Stack>
            </CartInfo>
          )}
        </CartContainer>
      </form>
    </StyledContainer>
  );
}
