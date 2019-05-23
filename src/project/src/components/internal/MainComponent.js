import React from 'react';
import { Route } from 'react-router-dom';
import style from '../../assets/styles/header'
import {HOME, ENTRANCE} from '../../pages/index.async';
import {withStyles} from "@material-ui/core";
import classNames from 'classnames';

class Main extends React.Component {
  render() {
    const {classes} = this.props;
    return (
      <main
        className={classNames(classes.content, {
          [classes.contentShift]: this.props.open
        })} style={{
      }}>
        <div className={classes.toolbar} />
        <Route exact path="/" component={ENTRANCE} />
        <Route exact path="/ws" component={HOME} />
      </main>
    )
  }
};

const MainComponent = withStyles(style, { withTheme: true })(Main);

export default MainComponent;