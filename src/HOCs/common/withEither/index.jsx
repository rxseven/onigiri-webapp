// Module dependencies
import React from 'react';

// With either
export const withEither = (condition, EitherComponent) => WrappedComponent => props => (
  <Choose>
    <When condition={condition(props)}>
      <EitherComponent {...props} />
    </When>
    <Otherwise>
      <WrappedComponent {...props} />
    </Otherwise>
  </Choose>
);

// Module exports
export default withEither;
