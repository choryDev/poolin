import React from 'react';
import { Route } from 'react-router-dom';
import style from '../../assets/styles/header'
import {withStyles} from "@material-ui/core";
import classNames from 'classnames';
import {ENTRANCE, OVERVIEW, MyTasks} from '../../pages/index.async';

class Main extends React.Component {
  render() {
    const {classes} = this.props;
    return (
      <main
        className={classNames(classes.content, {
          [classes.contentShift]: this.props.open
        })} style={{ 
      }}>
        {/*<Route exact path="/" component={OVERVIEW} />*/}
         <Route exact path="/" component={ENTRANCE} />
         <Route exact path={`/:workspace_id/overview`} component={OVERVIEW} />
         <Route exact path={`/:workspace_id/calendar`} component={OVERVIEW} />
         <Route exact path={`/:workspace_id/my-tasks`} component={MyTasks} />
         <Route exact path={`/:workspace_id/inbox`} component={OVERVIEW} />
         <Route exact path={`/:workspace_id/reports`} component={OVERVIEW} />
      </main>
    )
  }
};

const MainComponent = withStyles(style, { withTheme: true })(Main);

export default MainComponent;