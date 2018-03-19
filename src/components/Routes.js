// Module dependencies
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Screens
import Home from '../screens/Home';

// Constants
import PATHS from '../constants/router/paths';

// Component
const Routes = () => (
  <Switch>
    <Route component={Home} exact path={PATHS.root} />
  </Switch>
);

// Module exports
export default Routes;
