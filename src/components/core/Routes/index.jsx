// @flow
// Module dependencies
import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

// Components and HOCs
import withLoadable from 'HOCs/common/withLoadable';
import AuthRoute from 'HOCs/routes/AuthRoute';
import PrivateRoute from 'HOCs/routes/PrivateRoute';
import ReferralRoute from 'HOCs/routes/ReferralRoute';

// Constants
import PATHS from 'constants/router/paths';

// Screens
import SurveyList from 'screens/Surveys/screens/SurveyList';

const Home = withLoadable(() => import('screens/Home'));
const SurveyDetails = withLoadable(() => import('screens/Surveys/screens/SurveyDetails'));
const SurveyDoorway = withLoadable(() => import('screens/Surveys/screens/SurveyDoorway'));
const SurveyNew = withLoadable(() => import('screens/Surveys/screens/SurveyNew'));
const SurveySuccess = withLoadable(() => import('screens/Surveys/screens/SurveySuccess'));
const Farewell = withLoadable(() => import('screens/Users/screens/Farewell'));
const Profile = withLoadable(() => import('screens/Users/screens/Profile'));
const SignIn = withLoadable(() => import('screens/Users/screens/SignIn'));
const SignUp = withLoadable(() => import('screens/Users/screens/SignUp'));
const Welcome = withLoadable(() => import('screens/Users/screens/Welcome'));
const About = withLoadable(() => import('screens/About'));
const Privacy = withLoadable(() => import('screens/Policy/Privacy'));
const Terms = withLoadable(() => import('screens/Terms'));
const NotFound = withLoadable(() => import('screens/NotFound'));

// Static types
type Return = React.Element<typeof Switch>;

// Component
const Routes = (): Return => (
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
    <Route component={Privacy} path={PATHS.static.privacy} />
    <Route component={Terms} path={PATHS.static.terms} />
    <Route component={NotFound} />
  </Switch>
);

// Module exports
export default Routes;
