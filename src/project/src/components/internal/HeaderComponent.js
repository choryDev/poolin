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
import color from '../../assets/styles/material/com/color'

class HeaderComponent extends React.Component {
  constructor(props) {
    super(props);
      this.state={
        search:'',
        anchorEl: null,
      };
      this.handleChanged = this.handleChanged.bind(this);
      this.handleMenuOpen = this.handleMenuOpen.bind(this);
      this.handleMenuClose = this.handleMenuClose.bind(this);
      this.textInput = React.createRef();
  }

  componentDidUpdate() {
    this.textInput.current.focus();
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

  render() {
    const { classes, handleOpen, workspace } = this.props;
    const AA =(title)=>
      <MenuItem
        className={classes.MenuItem}
        onClick={this.handleMenuClose}>
        <Typography
          className={classes.textCenter}
        fontWeight={2} variant="body2">
         {title}
        </Typography>
      </MenuItem>;
    const APP = () =>
      <AppBar
        position="fixed"
        className={classNames(classes.appBar, {
          [classes.appBarShift]: this.props.open,
        })}>
        <Toolbar 
          className={classes.appBarHeight}
          disableGutters={!this.props.open}>
          <div>
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
            <Typography
              className={classes.headerTitle}
              fontWeight={2} variant="h5" color="black">
              My DashBoard
            </Typography>
          </div>
          <div style={{display: 'flex'}}>
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
            <div>
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
                  {AA('Profile')}
                  <Divider style={{backgroundColor: '#EAEAEA', height: '2px'}}/>
                  {AA('Create new workspace')}
                  {AA('Workspace Settings')}
                  <Divider style={{backgroundColor: '#EAEAEA', height: '2px'}}/>
                  {AA('User settings')}
                  {AA('Sign out')}
              </Menu>
            </div>
            </div>
        </Toolbar>
      </AppBar>;

    return (
      <div>
        {workspace ? <APP /> : <div></div>}
      </div>
    )
  }
}
export default HeaderComponent;
