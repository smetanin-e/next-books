import { Box, Button, Modal, Stack, TextField, Typography } from '@mui/material';
import React from 'react';

interface Props {
  className?: string;
}

export const Login: React.FC<Props> = () => {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 2,
  };

  return (
    <Modal
      open={true}
      //onClose={handleClose}
    >
      <Box sx={style}>
        <Typography variant='h6' component='h2' mb={2}>
          Авторизация
        </Typography>

        <Stack spacing={3} justifyContent={'center'} mb={3}>
          <TextField type='text' variant='outlined' size='small' label='Логин' />
          <TextField type='password' variant='outlined' size='small' label='Пароль' />

          <Button variant='contained'>Войти</Button>
        </Stack>

        <Stack direction={'row'} justifyContent={'end'}>
          <Button size='small'>Регистрация</Button>
        </Stack>
      </Box>
    </Modal>
  );
};
