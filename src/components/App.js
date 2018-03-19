// Module dependencies
import React from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter as Router } from 'react-router-dom';
import { LastLocationProvider } from 'react-router-last-location';

import Routes from './Routes';

// Component
const App = () => (
  <Router>
    <LastLocationProvider>
      <Routes />
    </LastLocationProvider>
  </Router>
);

// Module exports
export default hot(module)(App);
