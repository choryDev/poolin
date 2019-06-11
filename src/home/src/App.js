import React from 'react';

import { AppContainer } from 'react-hot-loader';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import MainComponent from 'components/internal/MainComponent';
import store from './store';

class AppComponent extends React.Component {
  render() {
    return (
      <AppContainer>
        <BrowserRouter>
          <Provider store={store}>
            <div>
              <MainComponent />
            </div>
          </Provider>
        </BrowserRouter>
      </AppContainer>
    );
  }
}

export default AppComponent;