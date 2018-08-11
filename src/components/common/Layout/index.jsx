// @flow
// Module dependencies
import cx from 'classnames';
import * as React from 'react';

// Components and HOCs
import { Column, Row } from 'components/common/Grid';

// Constants
import CSS from 'constants/string/css';

// Static type
type Props = {
  children: React.Node,
  size: string
};

type Return = React.Element<typeof Row>;

// Default props
const defaultProps = {
  size: cx(CSS.grid.col.MD10, CSS.grid.col.LG08)
};

// Component
const Layout = ({ children, size }: Props): Return => (
  <Row alignment={CSS.flex.justify.SMC}>
    <Column size={size}>{children}</Column>
  </Row>
);

// Specify default values for props
Layout.defaultProps = defaultProps;

// Module exports
export default Layout;
