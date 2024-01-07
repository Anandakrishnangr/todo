import { createTheme } from '@mui/material/styles';

// Define your custom color sets
const primaryColors = {
  main: '#2196f3',
  light: '#64b5f6',
  dark: '#1565c0',
  contrastText: '#fff',
};

const secondaryColors = {
  main: '#ff9800',
  light: '#ffd54f',
  dark: '#f57c00',
  contrastText: '#000',
};

// Create your custom theme
const theme = createTheme({
  palette: {
    primary: primaryColors,
    secondary: secondaryColors,
  },
});

export default theme;
