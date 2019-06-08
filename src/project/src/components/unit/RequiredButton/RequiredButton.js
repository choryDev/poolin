import React from 'react';
import classNames from 'classnames';
import {color, font} from '../../../assets/styles/material/com/index';
import { makeStyles } from '@material-ui/styles';

const RequiredButton = ({ ...state }) => {

  const {
    className,
    value,
    name,
    children,
    ...other
  } = state;

  const useStyles = makeStyles({
    defaultBtn:{
      fontWeight: 500,
      fontSize: '12px',
      borderRadius: '4px',
      backgroundColor: color.green.onGreen,
      border: `1px solid ${color.green.onGreen}`,
      color: '#fff',
      cursor: 'pointer',
      outline: '0',
      '&:hover':{
        backgroundColor: '#5ec27a !important',
        borderColor: '#5ec27a !important',
      },
    },  
  })
  const classes = useStyles();
  return (
     <button
      {...other}
      className={classNames(classes.defaultBtn)}>
      {children}
     </button>
  );
};

export default RequiredButton;