import React from 'react';

import { AppContainer } from 'react-hot-loader';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import MainComponent from 'components/internal/MainComponent';
import HeaderConatainer from 'containers/internal/HeaderConatainer';
import LeftContainer from './containers/internal/LeftContainer';
import CssBaseline from '@material-ui/core/CssBaseline';
import store from './store';

class AppComponent extends React.Component {
  state = {
    openMenu: false
  };

  constructor(props){
    super(props)
    this.handleMenuOpen = this.handleMenuOpen.bind(this)
  }

  handleMenuOpen(){
    this.setState({
      openMenu: !this.state.openMenu
    })
  }

  render() {
    return (
      <AppContainer>
        <BrowserRouter>
          <Provider store={store}>
            <div>
              <CssBaseline />
              <HeaderConatainer open={this.state.openMenu}
                handleOpen={this.handleMenuOpen}
              />
              <LeftContainer open={this.state.openMenu}
                             handleOpen={this.handleMenuOpen}
              />
              <MainComponent open={this.state.openMenu}/>
            </div>
          </Provider>
        </BrowserRouter>
      </AppContainer>
    );
  }
}

export default AppComponent;