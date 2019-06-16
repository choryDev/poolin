import React from 'react';
import classNames from 'classnames';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import {color, font} from '../../../assets/styles/material/com/index';
import { makeStyles } from '@material-ui/styles';

const ThreeRadioButton = ({ ...state }) => {

  const {
    className,
    handleChanged,
    value,
    name,
    ...other
  } = state;

  const useStyles = makeStyles({
    defaultGroup:{
      flexDirection: 'row',
    },  
    defaultItem:{
      position: 'relative',
      margin: '0',
      '&>span:nth-child(2)':{
        position: 'absolute', 
        fontWeight: 500,
        fontSize: '12px',
      },
      '&>span:nth-child(1)':{
        padding: 0,
        visibility: 'hidden'
      },
      '&:nth-child(1)':{
        padding: '0px 31px 0px 5px',
        borderTopLeftRadius: '4px',
        borderBottomLeftRadius: '4px',
      },
      '&:nth-child(2)':{
        padding: '0px 30px 0px 6px',
      },
      '&:nth-child(3)':{
        padding: '0px 30px 0px 6px',
        borderTopRightRadius: '4px',
        borderBottomRightRadius: '4px',
      },
    },
    onItem:{
      backgroundColor: color.green.onGreen,
      borderColor: `${color.green.onGreen} !important`,
      '& svg': {color: color.green.onGreen},
      '& span': {color: '#fff !important'},
    },
    offItem:{
      backgroundColor: '#edeff0',
      borderColor: `${'#edeff0'} !important`,
      '& svg': { color: '#edeff0',
                 backgroundColor:'#edeff0'},
      '& span': { color: `${font.defaultFontColor} !important`},
      '&:hover':{
        transition: '.3s ease',
        backgroundColor : color.green.onGreen,
        borderColor: `${color.green.onGreen} !important`,
        '& svg': {color: color.green.onGreen,
                  backgroundColor:color.green.onGreen},
        '& span': {transition: '.3s ease',
                    color: '#fff !important',},
      }
  }
  })
  const classes = useStyles();
  return (
      <RadioGroup
          {...other}
          aria-label="RadioGroup"
          name={name}
          className={classNames(classes.defaultGroup,className)}
          value={value}
          onChange={handleChanged}>
          <FormControlLabel
            className={classNames(classes.defaultItem,
              value === "500-001" ? classes.onItem : classes.offItem)}
            value="500-001"
            control={<Radio />}
            label="Required" />
          <FormControlLabel
            className={classNames(classes.defaultItem,
              value === "500-002" ? classes.onItem : classes.offItem)}
            value="500-002"
            control={<Radio />}
            label="Optional" />
          <FormControlLabel
            className={classNames(classes.defaultItem,
              value === "500-003" ? classes.onItem : classes.offItem)}
            value="500-003"
            control={<Radio />}
            label="Disabled" />
        </RadioGroup>
  );
};

export default ThreeRadioButton;