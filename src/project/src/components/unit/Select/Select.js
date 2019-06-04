import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import InputBase from '@material-ui/core/InputBase';
import Select1 from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import { color } from '../../../assets/styles/material/com/index'

const Type2 = withStyles(theme => ({
  input: {
    borderRadius: '4px',
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid rgba(0, 0, 0, 0.23)',
    fontSize: ".875rem",
    width: 'auto',
    padding: '6px 10px',
    color: '#868686',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
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
    '&:focus': {
      borderRadius: 4,
      borderWidth: '2px',
      borderColor: color.blue.default
      // boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase);
const BootstrapInput = withStyles(theme => ({
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    width: 'auto',
    padding: '10px 26px 10px 12px',
    color: '#868686',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
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
    '&:focus': {
      borderRadius: 4,
      borderColor: '#00d8d6',
      // boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase);

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    margin: 0,
  },
  bootstrapFormLabel: {
    fontSize: 18,
    top: theme.spacing.unit * -3,
  },
  selectItem:{
    fontSize: '.875rem',
    paddingTop: '7px',
    paddingBottom: '7px',
  }
});

const Select = ({ ...state }) => {
  const {
    classes,
    className,
    color,
    children,
    items,
    itemValue,
    // 받을 라벨
    label,
    labelClassName,
    fullWidth,
    type2,
    ...other
  } = state;

  return (
    <FormControl className={classes.root}>
      {!label ? null :
      <InputLabel
        htmlFor="customized-select1"
        className={classes.bootstrapFormLabel}>
        {label}
      </InputLabel>
      }
      <Select1
        value={itemValue}
        {...other}
        className={className ?  className : ""}
        input={type2 ?  <Type2/> : <BootstrapInput />}>
          {children ? 
           children :
            items === undefined ? [] : items.map((item, index) => (
              <MenuItem className="select-item" key={index} value={item.value ? item.value : index}>{item.name}</MenuItem>
            ))}
      </Select1>
    </FormControl>
  );
};

export default withStyles(styles)(Select);