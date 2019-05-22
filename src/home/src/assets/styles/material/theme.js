import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

const theme = createMuiTheme({
  palette: {
  //   primary: {
  //     // light: will be calculated from palette.primary.main,
  //     main: '#246A7F',
  //     // dark: will be calculated from palette.primary.main,
  //     // contrastText: will be calculated to contrast with palette.primary.main
  //   },
  //   secondary: {
  //     main: '#F2E2A9',
  //     // dark: will be calculated from palette.secondary.main,
  //   },
  //   textPrimary: {
  //     main: blueGrey[700],
  //     contrastText: blueGrey[700]
  //   }
    yellow: {
      light: '#f4e7ba',
      main: '#F2E2A9',
      dark: '#a99e76',
      contrastText: '#6C6868',
    },
    green: {
      light: '#4f8798',
      main: '#246A7F',
      dark: '#194a58',
      contrastText: '#fff',
    },
    lightGreen: {
      light: '#33ab9f',
      main: '#009688',
      dark: '#00695f',
      contrastText: '#fff',
    },
    white: {
      light: '#ffffff',
      main: '#ffffff',
      dark: '#b2b2b2',
      contrastText: '#000',
    }
  },
  typography: {
    useNextVariants: true,
    // fontWeightMedium: 500,
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    // color: '#6C6868'
    color: '#B2EBF4'
  }
});

export default theme;