// Module dependencies
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Screens
import Home from '../screens/Home';

import SignUp from '../screens/Users/screens/SignUp';
import Welcome from '../screens/Users/screens/Welcome';

import NotFound from '../screens/NotFound';

// Route helpers
import AuthRoute from '../HOCs/AuthRoute';
import ReferralRoute from '../HOCs/ReferralRoute';

// Constants
import PATHS from '../constants/router/paths';

// Component
const Routes = () => (
  <Switch>
    <Route component={Home} exact path={PATHS.root} />

    <AuthRoute component={SignUp} path={PATHS.users.signup} />
    <ReferralRoute component={Welcome} path={PATHS.users.welcome} />

    <Route component={NotFound} />
  </Switch>
);

// Module exports
export default Routes;
