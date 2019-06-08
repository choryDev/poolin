import com from './common'
const landing = theme => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      position: 'absolute',
      right: '0',
      left: '0',
      bottom: '0',
      top: '0'
    },
    footer: {
        backgroundColor: '#2D3135',
        //position: 'fixed',
        //left: 0,
        //bottom: 0,
        width: '100%',
        flex:1,
        //height: '30%',
        color: 'white',
      },
      siteMap:{
        color: '#fff',
        position: 'fixed',
        left: '2%',
        bottom: '2%',
      },
      divMiddleWrap:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        flex: 2,
        paddingTop: 'auto',
        paddingBottom: 'auto',
        marginTop: '69px',
      },
      divMiddle: {
        //position: 'absolute',
        //bottom: '45%',
        //flex: 0.6,
        alignItems: 'center',
        //width: '99.4%',
        display: 'flex',
        flexDirection: 'column'
      },
      seDisplay1: {
        fontFamily: com.fontFamily1,
        marginTop:'4px',
        marginBottom:'4px',
        textAlign: 'center',
      },
      seDisplay2: {
        fontFamily: com.fontFamily1,
        marginTop: '6px',
        fontSize: '24px',
        
        textAlign: 'center',
        marginBottom: theme.spacing.unit * 5,
      },
      textField3: {
        height: '55px',
        margin: theme.spacing.unit,
        width: '700px',
        // '&$cssFocused $notchedOutline': {
        //     borderColor:'red',
        //   },
        
      },
      submitButton2: {
        textDecoration: "none",
        margin: theme.spacing.unit,
        marginLeft: theme.spacing.unit * 4,
        width: 120,
        height: '49px',
        color: '#fff',
        backgroundColor: '#2D3135',
        fontSize:'16px',
        '&:hover': {
          backgroundColor: 'rgba(0, 0, 0, 0.54)',
        },
      },
      seDisplay3: {
        fontFamily: com.fontFamily1,
        fontSize: '16px',
        lineHeight: '16px',
        textAlign: 'center',
        marginTop: theme.spacing.unit * 4,
        '& span': {
          fontWeight: 800,
          textDecoration: 'underline',
        },
        '& a':{
            color: 'black',
        }
      },
      seDisplay4: {
        fontFamily: com.fontFamily1,
        fontSize: '36px',
        lineHeight: '44px',
        textAlign: 'left',
        marginTop: theme.spacing.unit * 5,
      },
      sendEmailMsg:{
        marginTop: 0,
        marginLeft: '10px',
        position: 'absolute',
      },
      agreeText:{
        color: '#303538',
        textDecoration: 'underline !important',
        fontWeight:'600'
      },
      font:{
        fontFamily: com.fontFamily1,
        fontWeight: com.fontWeight,
      }
});

export default landing;
