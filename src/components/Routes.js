// Module dependencies
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Screens
import Home from '../screens/Home';

import SignUp from '../screens/Users/screens/SignUp';

import NotFound from '../screens/NotFound';

// Constants
import PATHS from '../constants/router/paths';

// Component
const Routes = () => (
  <Switch>
    <Route component={Home} exact path={PATHS.root} />

    <Route component={SignUp} path={PATHS.users.signup} />

    <Route component={NotFound} />
  </Switch>
);

// Module exports
export default Routes;
