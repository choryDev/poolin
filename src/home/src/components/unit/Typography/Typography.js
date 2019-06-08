import React from 'react';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/styles';
import Typography1 from '@material-ui/core/Typography';
import com from '../../../assets/styles/material/common'

const Typography = ({ ...state }) => {

  const {
    children,
    className,
    variant,
    style,
    btnTextWeight,
    fontWeight,
    ...other
  } = state;

  const useStyles = makeStyles({
    defaultText:{
      textTransform: 'none',
      fontFamily: 'montserrat',
      fontWeight: btnTextWeight ? com.fontWeight[1] :
                     fontWeight ? com.fontWeight[fontWeight] :com.fontWeight[0],
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