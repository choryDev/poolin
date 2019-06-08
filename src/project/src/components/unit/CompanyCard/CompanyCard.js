import React from 'react';
import Card from '@material-ui/core/Card';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/styles';
import {color} from '../../../assets/styles/material/com/index'
import { Typography } from '../index'

const CompanyCard = ({ ...state }) => {

  const {
    children,
    className,
    title,
    headColor,
    icon,
    ...other
  } = state;

  const useStyles = makeStyles({
    cardCss:{
      borderTop: `4px solid ${headColor ? headColor : 'red'}`,
      display: 'inline-block',
      height: '80px',
      cursor: 'pointer',
      margin: ' 10px 15px 0 15px',
      padding: '15px 10px',
      position: 'relative',
      width: '260px',
    },
    iconWrap:{
      position: 'relative',
      marginTop: '14px',
      fontSize: '12px',
      display: 'flex',
    },
    iconCss:{
      position: 'absolute',
      bottom: '-15px',
      color: color.gray.weakGray,
    },
    iconText:{
      position: 'absolute',
      left: '15px',
      padding: '0',
      fontSize: '12px',
      }
  });

  const classes = useStyles();

  return (
  <Card className={classes.cardCss} {...other}>
        <Typography fontWeight={3}>
         {title}
        </Typography>
        <div className={classes.iconWrap}>
          <i className={classNames(classes.iconCss,
            icon ? icon : "fa fa-camera-retro")}/>
          <Typography fontWeight={3} className={classes.iconText}>
           {title}
          </Typography>
        </div>
        
    </Card>
  );
};
export default CompanyCard;