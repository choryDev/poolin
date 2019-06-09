import color from '../styles/material/com/color'

const drawerWidth = 230;
const toolbarHeight = 72;
const styles = theme => ({
  root: {
    display: 'flex',
  },
  appBarHeight: {
    height: toolbarHeight
  },
  appBar: {
    backgroundColor: color.white.headerWhite,
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
   headerTitle:{
    display: 'inline-block'
  },
  headerAvartar: {
    width: '30px',
    height: '30px',
    marginTop: '25px',
    marginBottom: '25px',
    cursor: 'pointer'
  },
  headerAvartarClose: {
    marginRight: '16px'
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    backgroundColor: color.gray.default,
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    backgroundColor: color.gray.default,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing.unit * 7 + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 8 + 1,
    },
  },
  toolbarWrap: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDeriction: 'column'
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 8px 0 16px',
    minHeight: '72px',
    //...theme.mixins.toolbar,
  },
  headerInput: {
    marginLeft: 'auto',
    marginRight: '8px',
    '& input':{
      padding: '9px 14px',
    }
  },
  avatMenu:{
    '& div:nth-child(2)':{
      top: '56px !important',
      left: `calc(100% - ${200}px) !important`,
      right: '24px'
    }
  },
  textCenter:{
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  MenuItem:{
    padding: '8px 16px'
  },
  iconOpen:{
    color: '#fff',
    transition: 'all ease 2s 0s',
  },
  iconClose:{
    color: color.gray.offGray,
    transition: 'all ease 2s 0s',
  },
  toolbarItemOP:{
    color: '#fff',
    borderColor: '#fff',
     '&:hover':
      { backgroundColor: color.gray.hoverGray },
  },
  menuIcon:{
    width: '1.25rem',
    height: '1.25rem',
  },
  toolbarItem:{
    color: 'white',
    paddingTop: '6px',
    paddingBottom: '6px',
  },
  ProjectItem:{
    justifyContent: 'space-between',
    paddingRight: '8px'
  },
  ListWrap: {
    paddingTop: '0',
    paddingBottom: '32px'
  },
  iconBtn:{
    padding: '3px'
  },
  BrightBtn:{
    width: '.5em',
    margin: '.3rem',
    height: '.5em',
    marginRight: '16px',
  },
  bottomWrap:{
    padding: '16px',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
  invtBtn:{
    width: '100%',
    marginTop: '16px'
  },
  content: {
    marginTop: toolbarHeight,
    overflowX: 'auto',
    //overflowY: 'hidden',
    flexGrow: 1,
    height: `calc(100% - ${toolbarHeight}px)`,
    //backgroundColor: theme.palette.background.default,
    backgroundColor: '#fff',
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: 90 - 24,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: drawerWidth,
  },
});

export default styles;