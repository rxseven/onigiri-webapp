// Module dependencies
import React from 'react';

// With maybe
const withMaybe = condition => WrappedComponent => props => (
  <If condition={!condition(props)}>
    <WrappedComponent {...props} />
  </If>
);

// Module exports
export default withMaybe;
