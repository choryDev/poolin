import color from '../styles/material/com/color'
const padding = 24;
const styles = theme => ({
root:{
  '& div:nth-child(2)>div': {
    maxWidth: '800px',
   }
  },
  title:{
    display: 'flex',
    backgroundColor: color.gray.default
  },
  menu:{
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
    color: color.gray.placeHoldGray,
    border: `2px solid ${color.gray.placeHoldGray}`
  },
  onColor: {
    color: color.green.onGreen,
    border: `2px solid ${color.green.onGreen}`
  },
  menuText:{
    marginBottom: '8px'
  },
  hr:{
    zIndex: 2,
    position: 'absolute',
    margin: 0,
    height: '30px',
    width: '1px',
    border: `1.5px solid ${color.gray.placeHoldGray}`,
    top: '28px',
    left: '13px',
    '&:nth-child(6)':{
      border: 'none'
    }
  }
}); 

export default styles;