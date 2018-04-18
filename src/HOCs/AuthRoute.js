// Module dependencies
import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

import { getAuth } from '../data/session/reducer';

// Constants
import PATHS from '../constants/router/paths';

// HOC
const AuthRoute = ({ component: Component, state: { data: { authorization } }, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      <Choose>
        <When condition={!authorization}>
          <Component {...props} />
        </When>
        <Otherwise>
          <Redirect
            to={{
              pathname: PATHS.root,
              state: { from: props.location }
            }}
          />
        </Otherwise>
      </Choose>
    )}
  />
);

// Map state to props
const mapStateToProps = state => ({
  state: {
    data: {
      authorization: getAuth(state)
    }
  }
});

// Connect component to application state
const container = connect(mapStateToProps)(AuthRoute);

// Module exports
export default container;
