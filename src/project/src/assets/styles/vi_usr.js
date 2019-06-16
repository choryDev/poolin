import { color }from '../styles/material/com/index'

const styles = theme => ({
  marginTop10:{marginTop: '10px !important'},
  marginTop20:{marginTop: '20px !important'},
  marginTop25:{marginTop: '25px !important'},
  marginBtm10:{marginBottom: '10px !important'},
  marginBtm20:{marginBottom: '20px !important'},
  marginBtm30:{marginBottom: '30px !important'},
  fullWidth:{width: '100%'},
  modalRoot:{
  '&>div:nth-child(2)': {
      '&>div': {
        minWidth: '800px',
        minHeight: '350px'
      }
   }
  },
  VI_POL_102:{
    display: 'flex',
    flexDirection: 'column',
  },
  title:{
    height: '75px',
    display: 'flex',
    backgroundColor: color.gray.default
  },
  menu:{
    paddingTop: '20px',
    paddingBottom: '20px',
    width: '174px',
    backgroundColor: color.white.headerWhite,
  },
  menuIcon:{
    zIndex: 3,
    marginRight: '8px',
    width: '1.8rem',
    height: '1.8rem',
    padding: '.2rem',
    borderRadius: '50%',
    backgroundColor: color.white.headerWhite
  },
  offColor: {
    transition: '.3s ease',
    backgroundColor: color.white.headerWhite,
    color: color.gray.placeHoldGray,
    border: `2px solid ${color.gray.placeHoldGray}`
  },
  onColor: {
    transition: '.3s ease',
    color: '#fff',
    backgroundColor: color.green.onGreen,
    border: `2px solid ${color.green.onGreen}`
  },
  menuText:{
    marginBottom: '8px'
  },
  content:{
    width: '100%'
  },
  contentWrap:{
    display: 'flex',
    minHeight: '350px'
  },
  titleText:{
    lineHeight: '1.5'
  },
  addItemBtn: {
    display: 'block',
    fontSize: '0.75rem !important',
    margin: '0 !important',
    paddingLeft: '0',
  },
  footer:{
    margin: 0,
    backgroundColor: color.white.headerWhite,
    height: '73px',
    borderTop: '1px solid #eee',
    padding: '20px',
    width: '100%',
  },
  stepWrap:{
    padding: '20px',
    height: 'calc(100% - 73px)',
    overflow:'auto'
  },
  stepBtnH24:{
    padding: '3px 6px',
    fontSize: '.8rem'},
  stepBtn:{
    display: 'block',
    textTransform: 'none',
    color: '#fff',
    backgroundColor: color.skyBlue.default,
    '&:hover':{
      backgroundColor: `${color.skyBlue.hover} !important`
    } 
  }
}); 

export default styles;