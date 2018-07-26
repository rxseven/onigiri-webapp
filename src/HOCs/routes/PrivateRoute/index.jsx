// Module dependencies
import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

// Helper functions
import { generateState } from 'helpers/state';

// Components and HOCs
import toJS from 'HOCs/state/toJS';

// Constants
import STATE_MODELS from 'constants/models/state';
import PATHS from 'constants/router/paths';

// Action creators and selectors
import { getAuth } from 'data/session/reducers';

// Declare default props
const defaultProps = {
  exact: false
};

// HOC
const PrivateRoute = ({
  component: Component,
  state: { data: { authorization } },
  exact,
  ...rest
}) => (
  <Route
    {...rest}
    exact={exact}
    render={props => (
      <Choose>
        <When condition={authorization}>
          <Component {...props} />
        </When>
        <Otherwise>
          <Redirect
            to={{
              pathname: PATHS.users.signin,
              state: { from: props.location }
            }}
          />
        </Otherwise>
      </Choose>
    )}
  />
);

// Specify default values for props
PrivateRoute.defaultProps = defaultProps;

// Map state to props
const mapStateToProps = state =>
  generateState(STATE_MODELS.immutable.setIn(['data', 'authorization'], getAuth(state)));

// Connect component to application state
const container = connect(mapStateToProps)(toJS(PrivateRoute));

// Module exports
export default container;