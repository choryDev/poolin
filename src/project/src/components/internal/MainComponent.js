import React from 'react';
import { Route } from 'react-router-dom';
import style from '../../assets/styles/header'
import {withStyles} from "@material-ui/core";
import classNames from 'classnames';
import {HOME, ENTRANCE,VI_CMPY_001,VI_CMPY_003} from '../../pages/index.async';

class Main extends React.Component {
  render() {
    const {classes} = this.props;
    return (
      <main
        className={classNames(classes.content, {
          [classes.contentShift]: this.props.open
        })} style={{ 
      }}>
        <Route exact path="/" component={VI_CMPY_003} />
        {/* <Route exact path="/" component={ENTRANCE} /> */}
        <Route exact path="/VI_CMPY_001" component={VI_CMPY_001} />
        <Route exact path="/VI_CMPY_001" component={VI_CMPY_003} />
        <Route exact path="/ws" component={HOME} />
      </main>
    )
  }
};

const MainComponent = withStyles(style, { withTheme: true })(Main);

export default MainComponent;