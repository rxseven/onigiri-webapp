// Module dependencies
import React from 'react';
import { Redirect, Route } from 'react-router-dom';

// Constants
import PATHS from 'constants/router/paths';

// Declare default props
const defaultProps = {
  exact: false,
  redirectTo: PATHS.root
};

// HOC
const ReferralRoute = ({
  component: Component, exact, location, redirectTo, ...rest
}) => {
  // Verify source route
  const { referrer } = location.state || { referrer: false };

  return (
    <Route
      {...rest}
      exact={exact}
      render={props => (
        <Choose>
          <When condition={referrer}>
            <Component {...props} />
          </When>
          <Otherwise>
            <Redirect
              to={{
                pathname: redirectTo,
                state: { from: props.location }
              }}
            />
          </Otherwise>
        </Choose>
      )}
    />
  );
};

// Specify default values for props
ReferralRoute.defaultProps = defaultProps;

// Module exports
export default ReferralRoute;
