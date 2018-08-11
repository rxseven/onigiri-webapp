// @flow
// Module dependencies
import * as React from 'react';
import { Helmet } from 'react-helmet';

// Static types
type Props = { children: string };
type Return = React.Element<typeof Helmet>;

// Component
export const Title = ({ children }: Props): Return => (
  <Helmet>
    <title>{children}</title>
  </Helmet>
);

// Module exports
export default Title;
