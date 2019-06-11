import React from 'react';
import Button from '@material-ui/core/Button';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/styles';

const BgNoneBtn = ({ ...state }) => {

  const {
    children,
    color,
    hoverColor,
    className,
    ...other
  } = state;

  const  useStyles = makeStyles({
    bgNoneBtn:{
    color: color ? color : '#fff',
    fontSize: '13.3333px',
    margin: '1%',
    textTransform: 'none',
    '&:hover': {
      background: '#fff !important',
      color: hoverColor ? hoverColor: '#2D3135',
      }
    },
  });
  const classes = useStyles();
  return (
    <Button
        { ...other}
        color="primary"
        className={classNames(className,classes.bgNoneBtn)}>
         {children}
    </Button>
  );
};

export default BgNoneBtn;