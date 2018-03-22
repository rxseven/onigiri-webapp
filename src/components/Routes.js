// Module dependencies
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Screens
import Home from '../screens/Home';

import SurveyNew from '../screens/Surveys/screens/SurveyNew';

import Farewell from '../screens/Users/screens/Farewell';
import Profile from '../screens/Users/screens/Profile';
import SignIn from '../screens/Users/screens/SignIn';
import SignUp from '../screens/Users/screens/SignUp';
import Welcome from '../screens/Users/screens/Welcome';

import NotFound from '../screens/NotFound';

// Route helpers
import AuthRoute from '../HOCs/AuthRoute';
import PrivateRoute from '../HOCs/PrivateRoute';
import ReferralRoute from '../HOCs/ReferralRoute';

// Constants
import PATHS from '../constants/router/paths';

// Component
const Routes = () => (
  <Switch>
    <Route component={Home} exact path={PATHS.root} />

    <PrivateRoute component={SurveyNew} exact path={PATHS.surveys.new} />

    <PrivateRoute component={Profile} path={PATHS.users.profile} />
    <AuthRoute component={SignIn} path={PATHS.users.signin} />
    <AuthRoute component={SignUp} path={PATHS.users.signup} />
    <ReferralRoute component={Farewell} path={PATHS.users.farewell} />
    <ReferralRoute component={Welcome} path={PATHS.users.welcome} />

    <Route component={NotFound} />
  </Switch>
);

// Module exports
export default Routes;
