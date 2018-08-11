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
const Wrapper = ({ children }: Props): Return => (
  <Layout size={cx(CSS.grid.col.MD08, CSS.grid.col.LG06)}>{children}</Layout>
);

// Module exports
export default Wrapper;
