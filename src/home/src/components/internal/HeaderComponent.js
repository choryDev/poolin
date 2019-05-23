import React from 'react';
import classNames from 'classnames';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import {Atag, Typography} from '../unit/index';

class HeaderComponent extends React.Component {

  render(){
    const {classes} = this.props;
    return (
      <AppBar
        className={classNames(classes.appBar, classes.appBarShift)} >
        <Toolbar disableGutters>
          <Typography variant="h6" color="inherit" className={classes.flex}>
            ASSI
          </Typography>
        </Toolbar>
          <Button color="primary" className={classNames(classes.button,classes.bgNoneBtn)}>
          <Atag 
            href="/login">
            <Typography
              btnTextWeight
              style={{color: '#fff'}}
              variant="h6">
               Login
            </Typography>
            </Atag>
          </Button>
       
      </AppBar>
    )
  }
};
export default HeaderComponent;