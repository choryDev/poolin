import React from 'react';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MenuIcon from '@material-ui/icons/Menu';
import classNames from 'classnames';

class HeaderComponent extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {

    const { classes, theme, handleOpen } = this.props;

    return (
      <AppBar
        position="fixed"
        className={classNames(classes.appBar, {
          [classes.appBarShift]: this.props.open,
        })}
      >
        <Toolbar disableGutters={!this.props.open}>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            onClick={handleOpen}
            className={classNames(classes.menuButton, {
              [classes.hide]: this.props.open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" noWrap>
            Mini variant drawer
          </Typography>
        </Toolbar>
      </AppBar>
    )
  }
}
export default HeaderComponent;
