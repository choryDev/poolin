import React from 'react';

import { AppContainer } from 'react-hot-loader';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import MainComponent from 'components/internal/MainComponent';
import HeaderConatainer from 'containers/internal/HeaderConatainer';
import LeftContainer from './containers/internal/LeftContainer';
import CssBaseline from '@material-ui/core/CssBaseline';
import store from './store';

import {inWorkspace} from './actions/behave/ConfigAction';
class AppComponent extends React.Component {
  state = {
    workspace: false,
    openMenu: true,
  };

  constructor(props){
    super(props)
    this.handleMenuOpen = this.handleMenuOpen.bind(this)
    this.handleWorkspace = this.handleWorkspace.bind(this)
    this.handleMenuClose = this.handleMenuClose.bind(this)

  }

  handleMenuOpen(){
    this.setState({
      openMenu: !this.state.openMenu
    })
  }

  handleMenuClose(){
    this.setState({
      openMenu: false
    })
  }
  
  handleWorkspace(){
    store.dispatch(inWorkspace(true))
  }

  render() {
    return (
      <AppContainer>
        <BrowserRouter>
          <Provider store={store}>
            <div style={{
              flexGrow: 1,
              height: '100%',
            }}>
              <CssBaseline />
              <HeaderConatainer open={this.state.openMenu}
                                handleOpen={this.handleMenuOpen}
                                close={this.handleMenuClose}
              />
              <LeftContainer open={this.state.openMenu}
                             handleOpen={this.handleMenuOpen}
                             close={this.handleMenuClose}
              />
              <MainComponent open={this.state.openMenu} handleWorkspace={this.handleWorkspace}/>
            </div>
          </Provider>
        </BrowserRouter>
      </AppContainer>
    );
  }
}

export default AppComponent;