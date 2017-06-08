import React from 'react';
import { Router, browserHistory } from 'react-router';

import routes from './routes';
import App from './App';

export default function Root() {
  return (
    <Router
      component={App}
      history={browserHistory}
      routes={routes}
    />
  );
}
