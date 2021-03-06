import React from 'react';
import Button from '@material-ui/core/Button';

const BgNoneBtn = ({ ...state }) => {

  const {
    children,
    ...other
  } = state;

  const  bgNoneBtn= {
    color:'#fff',
    fontSize: '13.3333px',
    margin: '1%',
    textDecoration: "none",
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