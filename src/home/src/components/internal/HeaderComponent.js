import React from 'react';
import classNames from 'classnames';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

class HeaderComponent extends React.Component {
  state = {
  };

  constructor(props){
    super(props);
  }

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
          <Typography variant="h6" color="inherit">
             Login
          </Typography>
        </Button>
      </AppBar>
    )
  }
};
export default HeaderComponent;