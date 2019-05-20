import React from 'react';
import { Route } from 'react-router-dom';
import {Landing} from '../../pages/index.async';

class Main extends React.Component {
  render() {
    return (
      <main>
        <Route exact path="/" component={Landing} />
      </main>
    )
  }
};

export default Main;