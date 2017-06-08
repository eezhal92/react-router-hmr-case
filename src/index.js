import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { match, Router, browserHistory } from 'react-router';

import Root from './Root';

const mountNode = document.getElementById('root');

const render = Component =>
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    mountNode
  );

render(Root);

if (module.hot) module.hot.accept('./Root', () => render(Root));
