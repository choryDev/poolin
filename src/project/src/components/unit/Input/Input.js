import React from 'react';
import classNames from 'classnames';
import TextField from '@material-ui/core/TextField';
import {font} from '../../../assets/styles/material/com/index'
import { makeStyles } from '@material-ui/styles';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';

const Input = ({ ...state }) => {

  const {
    children,
    className,
    color,
    type,
    readOnly,
    ...other
  } = state;

  const theme = createMuiTheme({
    palette: {
      primary: color ? color : grey,
    },
    typography: { useNextVariants: true },
  });

  const useStyles = makeStyles({
    defaultInput:{
      height: '50px',
      '& input':{
        fontFamily: font.fontFamily1,
        fontWeight: font.fontWeight[2],
        color: font.defaultFontColor,
        '&::placeholder': {
          fontWeight: font.fontWeight[2],
          color: 'black'
        }
      },
      '&>div':{
        fontSize: '14px',
      }
    },
    sm:{
      margin: 0,
      height: '34px',
      padding: 0
    }
  })
  const classes = useStyles();
  return (
    <MuiThemeProvider theme={theme}>
      <TextField
        {...other}
        className={classNames(className,classes.defaultInput,
          type ? classes[type] : null)}
        margin="normal"
        variant="outlined"/>
  </MuiThemeProvider>
  );
};

export default Input;