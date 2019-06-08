import { font, color }from '../styles/material/com/index'
import { BgNoneBtn } from '../../components/unit';
const styles = theme => ({
  marginBtm10:{marginBottom: '10px !important'},
  modalRoot:{
  '&>div:nth-child(2)': {
      '&>div': {
        minWidth: '800px',
      }
   }
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
    backgroundColor: 'none',
    color: color.gray.placeHoldGray,
    border: `2px solid ${color.gray.placeHoldGray}`
  },
  onColor: {
    color: '#fff',
    backgroundColor: color.green.onGreen,
    border: `2px solid ${color.green.onGreen}`
  },
  menuText:{
    marginBottom: '8px'
  },
  dontTouch:{
    cursor: 'not-allowed',
  },
  hr:{
    zIndex: 2,
    position: 'absolute',
    margin: 0,
    height: '30px',
    width: '1px',
    backgroundColor: color.gray.placeHoldGray,
    border: `1.5px solid ${color.gray.placeHoldGray}`,
    top: '28px',
    left: '13px',
  },
  contentWrap:{
    display: 'flex'
  },
  content:{
    width: '100%',
    height: '780px',
    display: 'flex',
    flexDirection: 'column',
  },
  stepWrap:{
    padding: '20px',
    minHeight: '707px',
    overflow:'auto'
  },
  titleText:{
    lineHeight: '1.5',
    marginBottom: '30px !important',
  },
  subTitle:{
    margin: '25px 0 10px'
  },
  titleInput:{
    height: '40px !important',
    width: '400px',
    '& input': {
      fontSize: '18px !important',
      lineHeight: '1.5',
      //fontWeight: 300
    }
  },
  subInput: {
    width: '195px',
    '&:nth-child(1)':{
      marginRight: '10px'
    }
  },
  checkBox:{
    width: '15px',
    height: '15px',
    margin: '0 4px 0 0'
  },
  footer:{
    margin: 0,
    backgroundColor: color.white.headerWhite,
    height: '73px',
    borderTop: '1px solid #eee',
    padding: '20px',
    width: '100%',
  },
  stepBtn:{
    textTransform: 'none',
    color: '#fff',
    backgroundColor: color.skyBlue.default,
    '&:hover':{
      backgroundColor: `${color.skyBlue.hover} !important`
    } 
  }
}); 

export default styles;