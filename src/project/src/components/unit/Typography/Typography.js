import React from 'react';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/styles';
import Typography1 from '@material-ui/core/Typography';
import { font } from '../../../assets/styles/material/com/index'

const Typography = ({ ...state }) => {

  const {
    children,
    className,
    variant,
    style,
    color,
    btnTextWeight,
    fontWeight,
    ...other
  } = state;

  const useStyles = makeStyles({
    defaultText:{
      textTransform: 'none',
      fontFamily: 'Source Sans Pro, sans-serif',
      fontWeight: btnTextWeight ? font.fontWeight[1] :
                     fontWeight ? font.fontWeight[fontWeight] :font.fontWeight[0],
      color: color ? color : font.defaultFontColor,
    }
  });
  const classes = useStyles();
  return (
      <Typography1
        {...other}
        style={style}
        variant={variant}
        className={classNames(className,classes.defaultText)}>
        {children}
      </Typography1>
  );
};

export default Typography;