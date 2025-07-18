import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Modal,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import React from 'react';

interface Props {
  className?: string;
}

export const Registration: React.FC<Props> = () => {
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
  const [open, setOpen] = React.useState(true);
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <Typography variant='h6' component='h2' mb={1}>
          Регистрация
        </Typography>

        <Typography mb={1}>
          Пройдите регистрацию, чтобы совершать покупки и получать бонусы
        </Typography>

        <Stack spacing={2} justifyContent={'center'} mb={3}>
          <TextField type='text' variant='outlined' size='small' label='Адрес электронной почты' />
          <TextField type='password' variant='outlined' size='small' label='Пароль' />
          <TextField type='password' variant='outlined' size='small' label='Подтверждение пароля' />
          <FormControlLabel
            control={<Checkbox defaultChecked={false} />}
            label='Даю согласие на обработку персональных данных'
          />

          <Button onClick={handleClose} variant='contained'>
            Регистрация
          </Button>
        </Stack>
      </Box>
    </Modal>
  );
};
