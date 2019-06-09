import React from 'react';
import { makeStyles } from '@material-ui/styles';
import CheckboxM from '@material-ui/core/Checkbox';
import comcolor from '../../../assets/styles/material/com/color'
import classNames from 'classnames';

const Checkbox = ({ ...state }) => {

  const {
    children,
    className,
    checked,
    color,
    ...other
  } = state;

  const useStyles = makeStyles({
    default:{
      padding: 0
    },
    checkedColor:{
      '& svg': {
        color: color ? color : comcolor.skyBlue.default,
       },
    }
 });
 
 const classes = useStyles();
  return (
    <CheckboxM
        
        className={classNames(classes.default,
          checked ?
           className ? null : classes.checkedColor
            : null
        )}
        { ...other}
    />
  );
};

export default Checkbox;