import com from './common'

const sign = theme => ({
    root: {
      backgroundColor: '#212529',
      display: 'flex',
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      // padding: 36,
      '& > div': {
        width: '100%',
        margin: 'auto',
        display: 'flex',
        // maxWidth: 1300,
        height: '100%',
        '& > div': {
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          padding: 128,
        }
      },
    },
    logo: {
      position: 'fixed',
      padding: 16,
      paddingLeft: 32,
      color: '#2D3135'
    },
    forgetWarp: {
      flex: .6,
      backgroundColor: 'white',
      '& button': {
        backgroundColor: '#363636',
        color: 'white !important',
        '&:hover':{
          backgroundColor: '#2D3135',
        }
      }
    },
    joinWarp: {
      backgroundColor: '#2D3135',
      color: 'white',
      flex: .4,
      '& *': {
        color: '333333 !important'
      },
      '& button':{
        paddingLeft: '25px',
        paddingRight: '25px',
        backgroundColor: '#fff',
        borderRadius: '50rem',
        border: '1px solid #fff',
        '&:hover':{
          backgroundColor: '#F2F2F2'
        },
        // '& span :hover':{
        //   color: '#fff'
        // }
      }

    },
    buttonWrapL: {
      display: 'flex',
      justifyContent: 'center',
      height: '7%',
      '& button': {
        borderRadius: '50rem',
        paddingLeft: '25px',
        paddingRight: '25px',
        '& hover': {
            color: '#2D3135',
        }        
      }
    },
    button002WarpR: {
      display: 'flex',
      justifyContent: 'center',
      minHeight: '7%',
      '& button': {
        borderRadius: '50rem',
        '& hover': {
            color: '#2D3135',
        }        
      }
    },
    buttonWarpR: {
        display: 'flex',
        justifyContent: 'center',
        minHeight: '7%',
      },
    subText: {
        color:'#767676',
    },
    helpType1: {
      color: '#009688',
    },
    helpType2: {
      color: '#FF0000',
    },
    centerText:{
        textAlign:'center',
    },
    idPwInput:{
        width: '50%',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    snsBtnWrap: {
        display: 'flex',
        marginTop: '40px',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    snsBtn: {
        marginLeft: '15px',
        marginRight: '15px',
        backgroundColor: '#fff !important',
        width: '70px',
        height: '70px',
    },
    loginAlert:{
      position: 'absolute',
      top: '-4px',
      left: '25%',
      color: 'red'
    },
    alertWrap:{
      position: 'relative'
    },
    agreeTextWrap:{
      justifyContent: 'center',
      marginBottom:'15px',
      marginTop: '15px', 
      display:'flex'
    },
    agreeText:{
      color: '#303538',
      textDecoration: 'underline !important',
      fontWeight:'600'
    },
    checkBox:{
      padding: 0
    },
    findPWWrap:{
      paddingTop: '128px',
      paddingBottom: '128px',
      paddingLeft: '30% !important',
      paddingRight: '30% !important',
      marginLeft: 'auto',
      marginRight: 'auto',
  },
  font:{
    fontFamily: 'montserrat',
    fontWeight: com.fontWeight,
  },
  marginTop0: {
    marginTop:'0'
  },
  sign002Input: {
    marginBottom: '10px',
    marginTop: '0'
  },
  form: {
    display: "flex",
     flexDirection: "column"
    }
  })
  
  export default sign;