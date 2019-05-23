import React from 'react';
import classNames from 'classnames';
import TextField from '@material-ui/core/TextField';
import com from '../../../assets/styles/material/common'
import { makeStyles } from '@material-ui/styles';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';
import red from '@material-ui/core/colors/red';


const Input = ({ ...state }) => {

  const {
    children,
    className,
    alert,
    readOnly,
    ...other
  } = state;

  const theme = createMuiTheme({
    palette: {
      primary: alert ? red : grey,
    },
    typography: { useNextVariants: true },
  });

  const useStyles = makeStyles({
    defaultInput:{
      fontFamily: 'montserrat',
      fontWeight: com.fontWeight,
      height: '50px',
      '&>div':{
        fontSize: '14px',
      }
    }
  })
  const classes = useStyles();
  return (
    <MuiThemeProvider theme={theme}>
      <TextField
        {...other}
        InputProps={{
            readOnly: readOnly ? true : false,
          }}
        className={classNames(className,classes.defaultInput)}
        margin="normal"
        variant="outlined"/>
  </MuiThemeProvider>
  );
};

export default Input;