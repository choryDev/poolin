import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Avatar from '@material-ui/core/Avatar';
import { Typography } from '../index'
import Card from '@material-ui/core/Card';
import Brightness1 from '@material-ui/icons/Brightness1';

const PositionCard = ({ ...state }) => {

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
       padding: '12px',
       marginBottom: '8px'
     },
     Bright:{
       width: '.5rem',
       height: '.5rem',
       margin: '.5rem .5rem .5rem 0'
     },
     flex:{
      display: 'flex'
     },
     smallFont:{
      fontSize: '.5rem'
     },
     avatar:{
       width: '1.5rem',
       height: '1.5rem',
       marginRight: '4px'
     }
  });
  const classes = useStyles();
  const smallText=(content,color,fontWeight) => 
    <Typography
      className={classes.smallFont}
      variant="caption"
      color={color}
      fontWeight={fontWeight ? fontWeight : 2}>
      {content}
    </Typography>;

  return (
  <Card className={classes.cardRoot} {...other}>
      <div style={{flex: 1, marginBottom: '8px'}}>
        <div className={classes.flex}>
         <Brightness1
            className={classes.Bright}
            style={{color:'#6AD790'}}/>
          <Typography fontWeight={2}>
           {`Postion (${data.num})`}
        </Typography>
        </div>
        {smallText('Remote Location')}
      </div>
      <div style={{display: 'flex'}}>
        <div className={classes.flex} style={{width: '80%'}}>
           {data.pro.map((r,k)=>
            <Avatar 
              key={k}
              style={{backgroundColor: r.color}} 
              className={classes.avatar}>
              {smallText(r.name,'#fff',4)}
            </Avatar>
            )} 
        </div>
        <div style={{align : "right", width: '20%'}}>
          {smallText('Position or Pool')}
          {smallText(data.date)}
        </div>
      </div>
    </Card>
  );
};

export default PositionCard;