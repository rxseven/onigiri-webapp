// Module dependencies
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import AuthRoute from '../HOCs/AuthRoute';
import Loadable from '../HOCs/Loadable';
import PrivateRoute from '../HOCs/PrivateRoute';
import ReferralRoute from '../HOCs/ReferralRoute';

// Constants
import PATHS from '../constants/router/paths';

// Screens
import SurveyList from '../screens/Surveys/screens/SurveyList';

const Home = Loadable(() => import('../screens/Home'));

const SurveyDetails = Loadable(() => import('../screens/Surveys/screens/SurveyDetails'));
const SurveyDoorway = Loadable(() => import('../screens/Surveys/screens/SurveyDoorway'));
const SurveyNew = Loadable(() => import('../screens/Surveys/screens/SurveyNew'));
const SurveySuccess = Loadable(() => import('../screens/Surveys/screens/SurveySuccess'));

const Farewell = Loadable(() => import('../screens/Users/screens/Farewell'));
const Profile = Loadable(() => import('../screens/Users/screens/Profile'));
const SignIn = Loadable(() => import('../screens/Users/screens/SignIn'));
const SignUp = Loadable(() => import('../screens/Users/screens/SignUp'));
const Welcome = Loadable(() => import('../screens/Users/screens/Welcome'));

const About = Loadable(() => import('../screens/About'));
const Me = Loadable(() => import('../screens/Me'));
const Privacy = Loadable(() => import('../screens/Policy/Privacy'));
const Terms = Loadable(() => import('../screens/Terms'));
const NotFound = Loadable(() => import('../screens/NotFound'));

// Component
const Routes = () => (
  <Switch>
    <Route component={Home} exact path={PATHS.root} />

    <PrivateRoute component={SurveyNew} exact path={PATHS.surveys.new} />
    <ReferralRoute
      component={SurveySuccess}
      path={PATHS.surveys.success}
      redirectTo={PATHS.surveys.list}
    />
    <Route component={SurveyDoorway} path={PATHS.surveys.doorway} />
    <PrivateRoute component={SurveyDetails} path={PATHS.surveys.details} />
    <PrivateRoute component={SurveyList} exact path={PATHS.surveys.list} />

    <PrivateRoute component={Profile} path={PATHS.users.profile} />
    <AuthRoute component={SignIn} path={PATHS.users.signin} />
    <AuthRoute component={SignUp} path={PATHS.users.signup} />
    <ReferralRoute component={Farewell} path={PATHS.users.farewell} />
    <ReferralRoute component={Welcome} path={PATHS.users.welcome} />

    <Route component={About} path={PATHS.static.about} />
    <Route component={Me} path={PATHS.static.me} />
    <Route component={Privacy} path={PATHS.static.privacy} />
    <Route component={Terms} path={PATHS.static.terms} />
    <Route component={NotFound} />
  </Switch>
);

// Module exports
export default Routes;
