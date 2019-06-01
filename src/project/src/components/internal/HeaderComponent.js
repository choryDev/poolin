import React from 'react';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from '@material-ui/core/InputAdornment';
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
        search:''
      };
      this.handleChanged = this.handleChanged.bind(this);
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

  handleChanged=e=>{
    const {value, name} = e.target;
    this.setState({
      [name]: value
    })
  }
  
  render() {
    const { classes, handleOpen, workspace } = this.props;
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
            <Avatar
              className={classNames(classes.headerAvartar,{
                [classes.headerAvartarClose]: !this.props.open,
              })}
              style={{backgroundColor: 'red'}}>
                <Typography fontWeight={2} variant="body2" color="white">
                  My
                </Typography>
            </Avatar>
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
