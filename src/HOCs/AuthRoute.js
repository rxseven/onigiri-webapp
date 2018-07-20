// Module dependencies
import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

import { generateState } from '../helpers/data';
import toJS from '../HOCs/toJS';
import { getAuth } from '../data/session/reducers';

// Constants
import STATE_MODELS from '../constants/models/state';
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
const mapStateToProps = state =>
  generateState(STATE_MODELS.immutable.setIn(['data', 'authorization'], getAuth(state)));

// Connect component to application state
const container = connect(mapStateToProps)(toJS(AuthRoute));

// Module exports
export default container;
