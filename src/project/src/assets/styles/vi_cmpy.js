import color from '../styles/material/com/color'
const padding = 24;
const styles = theme => ({
  full:{
    width: '100%',
    height: '100%',
  },
  root:{
    height: '100%',
    flexDirection: 'column',
    display: 'flex',
  },
  flex:{
    display: 'flex'
  },
  wrap:{
    justifyContent:'space-around',
    display: 'flex',
    flex: 30
  },
  contantWrap:{
    padding: '24px',
    '&:nth-child(2)':{
      height: `calc(100% - ${padding}px) !important`,
    }
  },
  header:{
    display: 'flex',
    padding: '8px 24px 8px 24px',
    flex: 1
  },
  itemW:{
    height: `calc(100% - ${48}px)`,

    overflowY: 'auto',
    paddingRight: '24px',
   },
  contant:{
    padding: '16px 0 16px 24px',
    backgroundColor: color.white.headerWhite,
    boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)',
  },
  midcontant:{
    height: '50%',
    '&:nth-child(1)':{
      marginBottom: '24px'
    },
  },
  wrap003:{
    height: `calc(100% - ${48}px)`,
    overflowY: 'hidden',
    margin: '24px 33px',
    paddingRight: '15px',
    '&:hover':{
      paddingRight: '0',
      overflowY: 'auto',
     },
  },
  btn003:{
    height: '36px',
    textDecoration: "none",
  },
  checkOff:{
    color:color.gray.placeHoldGray
  },
  checkOn:{
    color: '#198652'
  },
  textWrap003:{
    width: 'calc(100% - 48px)', 
    borderBottom: `2px solid ${color.gray.placeHoldGray}`
  },
  Input003:{
    width: 'calc(100% - 80px)', 
  },
  widthWrap:{
    width: '30rem'
  }
}); 

export default styles;