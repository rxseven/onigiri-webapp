// Module dependencies
import React from 'react';

import Fragment from 'components/common/Fragment';

// Component
const withTogether = (
  condition,
  Together,
  Wrapper = Fragment,
  alert = false
) => WrappedComponent => props => (
  <Choose>
    <When condition={condition(props)}>
      <If condition={alert}>
        <Together {...props} />
      </If>
      <Wrapper>
        <WrappedComponent {...props} />
        <If condition={!alert}>
          <Together {...props} />
        </If>
      </Wrapper>
    </When>
    <Otherwise>
      <Wrapper>
        <WrappedComponent {...props} />
      </Wrapper>
    </Otherwise>
  </Choose>
);

// Module exports
export default withTogether;
