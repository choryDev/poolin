import { color, font }from '../styles/material/com/index'

const styles = theme => ({
  marginTop10: {
    marginTop: '10px !important'
  },
  marginTop20: {
    marginTop: '20px !important'
  },
  marginTop25: {
    marginTop: '25px !important'
  },
  marginBtm10: {
    marginBottom: '10px !important'
  },
  marginBtm20: {
    marginBottom: '20px !important'
  },
  marginBtm30: {
    marginBottom: '30px !important'
  },
  fullWidth: {
    width: '100%'
  },
  modalRoot:{
  '&>div:nth-child(2)': {
      '&>div': {
        minWidth: '800px',
        minHeight: '750px'
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
  hr:{
    zIndex: 0,
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
    display: 'flex',
    height: '675px'
  },
  content:{
    width: 'calc(100% - 174px)',
    display: 'flex',
    flexDirection: 'column',
  },
  stepWrap:{
    padding: '20px',
    height: 'calc(100% - 73px)',
    overflow:'auto'
  },
  titleText:{
    lineHeight: '1.5'
  },
  subTitle:{
    margin: '25px 0 10px'
  },
  titleInput:{
    flex: 1,
    '& input': {
      fontSize: '16px !important',
      lineHeight: '1.5',
      //fontWeight: 300
    }
  },
  subInput: {
    flex: 1,
    '&:nth-child(1)':{
      marginRight: '10px'
    }
  },
  checkBox:{
    width: '15px',
    height: '15px',
    margin: '0 4px 0 0'
  },
  item102:{
    height: '41px',
    paddingBottom: '10px',
    marginTop: '10px',
    display: 'flex',
    justifyContent: 'space-between',
    borderBottom: `1px solid ${color.gray.placeHoldGray}` 
  },
  emailInput:{
    outline: '0',
    borderRadius: '4px',
    backgroundColor: '#edeff0',
    color: '#68747e',
    lineHeight: '1.2px',
    width: '300px',
    cursor: 'default',
    height: '34px',
    textDecoration: 'none !important',
    resize: 'none',
    border: 0,
    padding: '6px 10px'
  },
  footer:{
    margin: 0,
    backgroundColor: color.white.headerWhite,
    height: '73px',
    borderTop: '1px solid #eee',
    padding: '20px',
    width: '100%',
  },
  //////////////subModal//////////////////////////
  subModal:{
    '&>div:nth-child(2)>div': {
        minWidth: '600px',
      }
   },
   subModalTitle:{
     '& h2':{
      color: font.defaultFontColor,
    }
   },
  rectIcon:{
    color: '#4c565c',
    margin: '4px',
    width: '1.5rem',
    height: '1.5rem',
  },
  stepBtnH24:{
    padding: '3px 6px',
    fontSize: '.8rem'},
  stepBtn:{
    textTransform: 'none',
    color: '#fff',
    backgroundColor: color.skyBlue.default,
    '&:hover':{
      backgroundColor: `${color.skyBlue.hover} !important`
    } 
  },
  subContent:{
    height:'600px',
  },
  InputChangeBtn:{
    width: '100%',
    minHeight: '50px',
    borderRadius: '4px',
    padding: '8px 4px',
    border: `1px solid ${color.gray.placeHoldGray}`,
  },
  icbInput: {
    margin: '4px',
    outline: '0',
    minWidth: '170px',
    maxWidth: 'calc(100% - 8px)',
    background: 'none',
    color: '#68747e',
    lineHeight: '1.2px',
    cursor: 'default',
    textDecoration: 'none !important',
    resize: 'none',
    border: 0,
    padding: '8px 10px',
    '&::placeholder': {
      color: color.gray.placeHoldGray
    },
  },
  icbText:{
    padding: 0,
    width: '125px',
    outline: '0',
    background: 'none',
    lineHeight: '1.2px',
    resize: 'none',
    border: 0,
    fontWeight: 400
  },
  icbButton:{
    padding: '8px 12px',
    verticalAlign: 'bottom',
    margin: '4px',
    width: '170px',
    height: '32px',
    display: 'inline-block',
    borderRadius: '50px',
    backgroundColor: color.white.headerWhite,
    border: `1px solid ${color.gray.placeHoldGray}`,
    '&>div':{
      color: color.gray.weakGray,
      '& input': {color: color.gray.weakGray},
      '& i':{cursor: 'pointer'},
      display: 'flex',
      justifyContent: 'space-between'
    },
    '&:hover':{
      borderColor: '#2196f3',
      '&>div':{
        color: '#2196f3',
        '& input': {color: '#2196f3'},
      }
    }
  },
});

export default styles;