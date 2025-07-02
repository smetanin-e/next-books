
import { createTheme } from '@mui/material/styles';

const customTheme = createTheme({
  palette: {
    primary: {
      light: '#33ab9f',
      main: '#009688',
      dark: '#00695f',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
    
  },
   typography: {
    fontFamily: 'Nunito, sans-serif',
    allVariants: {
      color: '#555454', 
    },
  },
});

//555454

export default customTheme


