import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Avatar from '@material-ui/core/Avatar';
import { Typography } from '../index'
import Card from '@material-ui/core/Card';

const CandidateCard = ({ ...state }) => {

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
       padding: '12px',
       marginBottom: '8px'
     },
     Wrap:{
      display: 'flex',
      flexDirection: 'column',
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
       width: '2rem',
       height: '2rem',
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
    //이렇게 함수로 안만들면 데이터를 못 받아 봅니다.
  return (
    <Card className={classes.cardRoot} {...other}>
      <div
        style={{justifyContent: 'center',marginRight: '8px'}}
        className={classes.Wrap}>
        <Avatar 
          className={classes.avatar}
          style={{backgroundColor: data.color}} >
          <Typography
            variant="h6"
            color={'#fff'}
            fontWeight={2}>
            {'C'}
          </Typography>
        </Avatar>
      </div>
      <div style={{width: '100%'}}>
      <Typography
          variant="subtitle1"
          fontWeight={2}>
          {data.who}
        </Typography>
        {smallText(`Position project(${data.num})`,true)}
         </div>
      <div
        style={{justifyContent: 'flex-end', marginLeft: '8px', minWidth: '90px'}}
        className={classes.Wrap}>
        {smallText(`Due ${data.date}`)}
      </div>
    </Card>
  );
};

export default CandidateCard;