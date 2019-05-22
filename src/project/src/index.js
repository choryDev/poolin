import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const appElement = document.getElementById('root');

const render = Component => {
  ReactDOM.render(
    <Component />,
    appElement
  );

}

render(App);

if (module.hot) {
  module.hot.accept('/', () => { render(App) })
}