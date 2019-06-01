import color from '../styles/material/com/color'

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  appBarHeight: {
    height: '72px'
  },
  appBar: {
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
    minHeight: '36px',
    //...theme.mixins.toolbar,
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
  toolbarItem:{
    color: 'white',
    paddingTop: '6px',
    paddingBottom: '6px',
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
    overflowX: 'auto',
    flexGrow: 1,
    height: '100%',
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