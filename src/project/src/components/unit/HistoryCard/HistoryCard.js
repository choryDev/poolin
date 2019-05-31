import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Typography } from '../index'
import Brightness1 from '@material-ui/icons/Brightness1';

const HistoryCard = ({ ...state }) => {

  const {
    data,
    children,
    className,
    style,
    color,
    ...other
  } = state;

  const useStyles = makeStyles({
     cardRoot:{
       display: 'flex',
       padding: '0 0 12px 0',
     },
     Wrap:{
      display: 'flex',
      flexDirection: 'column',
     },
     Bright:{
       width: '.5rem',
       height: '.5rem',
       margin: '0'
     },
     flex:{
      display: 'flex'
     },
     smallFont:{
      fontSize: '.5rem'
     },
      line:{
        minHeight: '30px',
        borderLeft:'2px solid cyan',
        marginLeft: '3px',
        marginBottom: '5px',
      }
  });
  const classes = useStyles();
  const smallText=(content,flg) => 
    <Typography
      className={flg ? classes.smallFont : null}
      fontWeight={2}
      variant="caption">
      {content}
    </Typography>;
  const Text = (text,bold) =>
    <Typography
      style={{display: 'inline-block', lineHeight: '1rem'}}
      variant="body2"
      fontWeight={bold}>
      {text}
    </Typography>;
  const blank = ' ';
  return (
    <div className={classes.cardRoot} {...other}>
      <div style={{marginRight: '5px'}}>
      <Brightness1
        className={classes.Bright}
        style={{color:'#6AD790'}}/>
        <div className={classes.line}/>
      </div>
      <div style={{width: '100%'}}>
        <div style={{minHeight: '48px'}}>
          {Text(data.who,3)}
          {blank}
          {Text('moved',2)}
          {blank}
          {Text('HR Application',3)}
          {blank}
          {Text('from',2)}
          {blank}
          {Text('Software to Ios',3)}
        </div>
        <div>
         {smallText(`Due ${data.date}`, true)}
        </div>
      </div>
    </div>
  
  );
};

export default HistoryCard;