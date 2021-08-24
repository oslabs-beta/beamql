import { createTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#FFF',
    },
    secondary: {
      main: '#FFF',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: 'white',
    },
  },
});

theme.spacing(8)



export default theme;