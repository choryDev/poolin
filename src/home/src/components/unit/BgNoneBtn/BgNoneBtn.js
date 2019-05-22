import React from 'react';
import Button from '@material-ui/core/Button';
import classNames from 'classnames';

const BgNoneBtn = ({ ...state }) => {

  const {
    children,
    ...other
  } = state;

  const  bgNoneBtn= {
    color:'#fff',
    fontSize: '13.3333px',
    margin: '1%',
    '&:hover': {
      background: '#fff !important',
      color:'#2D3135',
    },
  }
  
  return (
    <Button
        { ...other}
        color="primary"
       
        style={bgNoneBtn}>
         {children}
    </Button>
  );
};

export default BgNoneBtn;