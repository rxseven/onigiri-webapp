// @flow
// Module dependencies
import * as React from 'react';
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

// Static types
type Props = {
  component: React.ComponentType<any>,
  state: {
    data: {
      authorization: boolean
    }
  }
};

type Return = React.Element<typeof Route>;

// HOC
const AuthRoute = ({
  component: Component,
  state: { data: { authorization } },
  ...rest
}: Props): Return => (
  // flow-disable-next-line
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
