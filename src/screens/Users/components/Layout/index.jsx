// @flow
// Module dependencies
import cx from 'classnames';
import * as React from 'react';

// Components and HOCs
import Layout from 'components/common/Layout';

// Constants
import CSS from 'constants/string/css';

// Static types
type Props = { children: React.Node };
type Return = React.Element<typeof Layout>;

// Component
const AuthLayout = ({ children }: Props): Return => (
  <Layout size={cx(CSS.grid.col.SM08, CSS.grid.col.MD06, CSS.grid.col.LG05, CSS.grid.col.XL04)}>
    {children}
  </Layout>
);

// Module exports
export default AuthLayout;
