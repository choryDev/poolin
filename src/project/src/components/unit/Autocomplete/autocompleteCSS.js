const bordercolor = 'rgba(0, 0, 0, 0.23)';
const focusbodercolor = '#2196f3';
const fontcolor = '#4c565c';
const fontWeight = 400;
const styles = ( width = 195 ) => ({
  autoComplete:{
    width: `${width}px`,
    position: 'relative',
    fontWeight: fontWeight,
    color: fontcolor,
  },
  viewValue:{
    fontWeight: fontWeight,
    color: fontcolor,
    width: `${width}px`,
    zIndex: 2,
    display: 'block',
    borderRadius: '4px',
    padding: '8px 10px',
    transition: 'all .15s cubic-bezier(.68, -.55, .265, 1.55)',
    border: `1px solid ${bordercolor}`,
    backgroundColor: '#fff',
    position: 'relative',
    '&>input::placeholder':{
      color: 'black',
    },
    '&:hover':{
      cursor: 'pointer',
      backgroundColor: '#edeff0',
    },
    '&:focus' :{ 
      color: '#788594',
      border: `2px solid ${focusbodercolor}`,
      outline: 0,
      backgroundColor: '#fff',
      boxShadow: '0 3px 9px rgba(53, 53, 9, 0), 3px 4px 8px rgba(94, 114, 228, .1)',
      padding: '7px 9px',
   },
  },
  caretDown:{
    position: 'absolute',
    top: '10px',
    zIndex: '3',
    right: '8px',
    fontSize: '14px',
  },
  fullWidth:{
    width: '100%',
  },
  showSpan:{
    border: `1px solid ${bordercolor}`,
    zIndex: 4,
    marginTop: '8px',
    position: 'absolute',
    borderRadius: '4px',
  },
  inputarea:{
    borderRadius: '4px',
    width: `${width-1}px`,
    backgroundColor: '#fff',
    '& input':{
      fontWeight: fontWeight,
      color: fontcolor,
      border: '2px solid white',
      borderRadius: '4px',
      fontWeight: 200,
      width: `${width-17}px`,
      margin: '8px',
      padding: '6px 10px',
      lineHeight: '1.5rem',
      transition: 'all .15s cubic-bezier(.68, -.55, .265, 1.55)',
      boxShadow: '0 3px 2px rgba(233, 236, 239, .05)',
      '&:focus' :{
        color: fontcolor,
        border: `2px solid ${focusbodercolor}`,
        outline: 0,
        backgroundColor: '#fff',
        boxShadow: `0 3px 9px rgba(50, 50, 9, 0), 3px 4px 8px rgba(94, 114, 228, .1)`,
     },
     '&:hover':{
      cursor: `pointer`,
      backgroundColor: `#edeff0`,
    },
    },
  },
  scrollbeauti:{
    zIndex: 2,
    backgroundColor: 'white',
    paddingBottom: `.4rem`,
    borderRadius: `0 0 .4375rem .4375rem`,
    borderBottom: `1px solid ${bordercolor}`,
  },
  itemList:{
    display: 'flex',
    flexDirection: 'column',
    maxHeight: '8rem',
    overflowY: 'auto',
    overflowX: 'auto',
  },
  item:{
    fontWeight: fontWeight,
    fontSize: '.825rem',
    padding: '0 4px',
    borderRadius: '4px',
    lineHeight: '32px',
    color: 'rgba(0, 0, 0, 0.6)',
    backgroundColor: 'white',
    margin: '0 .75rem',
    '&:hover':{
      cursor: 'pointer',
      backgroundColor: '#edeff0',
    },
    '&:nth-last-child(1)':{
      marginBottom: '.5rem',
    },
  },
  bg:{
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    position: 'fixed',
    zIndex: 1,
  },
  defaultAutoComplete:{
    width: width,
    },
});

export default styles;