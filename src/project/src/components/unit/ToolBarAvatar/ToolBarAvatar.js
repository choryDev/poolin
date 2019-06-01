import React from 'react';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/styles';
import Avatar from '@material-ui/core/Avatar';
import { font } from '../../../assets/styles/material/com/index'

const ToolBarAvatar = ({ ...state }) => {

  const {
    children,
    className,
    style,
    color,
    ...other
  } = state;

  const useStyles = makeStyles({
    defaultCss:{
      width: '20px',
      height: '20px',
      borderRadius: '25%',
      backgroundColor: color ? color :'#3C55B3',
    }
  });
  const classes = useStyles();
  return (
      <Avatar
        {...other}
        style={style}
        className={classNames(className,classes.defaultCss)}>
        {children}
        </Avatar>
  );
};

export default ToolBarAvatar;