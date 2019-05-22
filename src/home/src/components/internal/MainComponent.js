import React from 'react';
import { Route } from 'react-router-dom';
import { Landing,
         Sign_001,
         Sign_002,
         Sign_003,
         Find_PW004} from '../../pages/index.async';

class Main extends React.Component {
  render() {
    return (
      <main>
        {/* <Route exact path="/" component={Landing} /> */}
        <Route exact path="/" component={Find_PW004} />
        <Route exact path="/home" component={Landing} />
        <Route exact path="/login" component={Sign_001} />
        <Route exact path="/join" component={Sign_002} />
        <Route exact path="/findpw" component={Sign_003} />
       
        <Route exact path="/Find_PW004" component={Find_PW004} />
      </main>
    )
  }
};

export default Main;