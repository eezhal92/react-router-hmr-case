import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { match, Router, browserHistory } from 'react-router';

import App from './App';
import routes from './routes';

const mountNode = document.getElementById('root');

const render = () => {
  match({
    history: browserHistory,
    routes,
  }, (error, redirectLocation, renderProps) => {
    ReactDOM.render(
      <AppContainer>
        <Router {...renderProps} />
      </AppContainer>,
      mountNode,
    );
  });
};

render();

if (module.hot) {
  module.hot.accept('./App', render);
}
