// Module dependencies
import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

import { getAuth } from '../data/session/reducer';

// Constants
import PATHS from '../constants/router/paths';

// Declare default props
const defaultProps = {
  exact: false
};

// HOC
const PrivateRoute = ({
  component: Component, data: { authorization }, exact, ...rest
}) => (
  <Route
    {...rest}
    exact={exact}
    render={props =>
      (authorization ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: PATHS.users.signin,
            state: { from: props.location }
          }}
        />
      ))
    }
  />
);

// Specify default values for props
PrivateRoute.defaultProps = defaultProps;

// Map state to props
const mapStateToProps = state => ({
  data: {
    authorization: getAuth(state)
  }
});

// Connect component to application state
const container = connect(mapStateToProps)(PrivateRoute);

// Module exports
export default container;
