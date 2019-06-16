import React from 'react';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from '@material-ui/core/InputAdornment';
import Divider from "@material-ui/core/Divider";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import Search from '@material-ui/icons/Search';
import classNames from 'classnames';
import Avatar from '@material-ui/core/Avatar';
import { Typography, Input } from '../unit/index';
import color from '../../assets/styles/material/com/color';
import UsrModal from '../../containers/VI_USR/VI_USR_ModalContainer';
class HeaderComponent extends React.Component {
  constructor(props) {
    super(props);
      this.state={
        search:'',
        anchorEl: null,
        usrModal:false,
      };
      this.handleChanged = this.handleChanged.bind(this);
      this.handleMenuOpen = this.handleMenuOpen.bind(this);
      this.handleMenuClose = this.handleMenuClose.bind(this);
  }


  componentDidMount() {

  }
  
  componentWillReceiveProps(nextProps, nextContext) {
    if(this.props.open !== nextProps.workspace && !nextProps.workspace){
      this.props.close();
    }
  }

  handleChanged(e){
    const {value, name} = e.target;
    this.setState({
      [name]: value
    })
  }
  
  handleMenuOpen(e){
    this.setState({ anchorEl: e.currentTarget})
  }

  handleMenuClose(){
    this.setState({anchorEl: null});
  } 

  handleModal(){
    this.setState({
      usrModal: !this.state.usrModal
    })
  }

  render() {
    const { classes, handleOpen, workspace } = this.props;
    const Menu_Item = (title,func) =>
      <MenuItem
        className={classes.MenuItem}
        onClick={func}>
        <Typography
          className={classes.textCenter}
        fontWeight={2} variant="body2">
         {title}
        </Typography>
      </MenuItem>;

    const DefaultHeader__Component = () =>
      <>
        <Typography
          className={classes.headerTitle} >
          {this.props.headerMainTitle}
        </Typography>
        <Input
          value={this.state.search}
          name='search'
          placeholder="Search"
          className={classes.headerInput}
          onChange={e => this.handleChanged(e)}
          inputRef={this.textInput}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search color={'primary'}/>
              </InputAdornment>
            ),
          }}/>
      </>;

    return (
      <div>
         {workspace ? 
             <AppBar
                position="fixed"
                className={classNames(classes.appBar, {
                  [classes.appBarShift]: this.props.open,
                })}>
                <Toolbar
                  className={classes.appBarHeight}
                  disableGutters={!this.props.open}>
                    <IconButton
                      color="inherit"
                      aria-label="Open drawer"
                      onClick={handleOpen}
                      className={classNames(classes.menuButton,classes.headerTitle, {
                        [classes.hide]: this.props.open,
                      })}>
                      <MenuIcon
                        style={{color: color.gray.weakGray}}/>
                    </IconButton>
                  {DefaultHeader__Component()}
                    <div style={{marginTop: '8px'}}>
                      <Avatar
                        className={classNames(classes.headerAvartar,{
                          [classes.headerAvartarClose]: !this.props.open,
                        })}
                        onClick={this.handleMenuOpen}
                        aria-owns={this.state.anchorEl ? 'simple-menu' : undefined}
                        aria-haspopup="true"
                        style={{backgroundColor: 'red'}}>
                          <Typography fontWeight={2} variant="body2" color="white">
                            My
                          </Typography>
                      </Avatar>
                      <Menu
                        className={classes.avatMenu}
                        id="simple-menu"
                        anchorEl={this.state.anchorEl}
                        open={Boolean(this.state.anchorEl)}
                         onClose={this.handleMenuClose}>
                          {Menu_Item('Profile')}
                          <Divider style={{backgroundColor: '#EAEAEA', height: '2px'}}/>
                          {Menu_Item('Create new workspace')}
                          {Menu_Item('Workspace Settings')}
                          <Divider style={{backgroundColor: '#EAEAEA', height: '2px'}}/>
                          {Menu_Item('User settings')}
                          {Menu_Item('Sign out')}
                      </Menu>
                    </div>
                </Toolbar>
              </AppBar>
       : <div></div>}
       {/* workspace를 받을때 보여지는 화면은 따로 상수로 빼면 안됩니다. */}
       <UsrModal
        open={this.state.usrModal}
        handleModal={()=>this.handleModal()}/>
      </div>
    )
  }
}
export default HeaderComponent;
