// Module dependencies
import cx from 'classnames';
import PropTypes from 'prop-types';
import exact from 'prop-types-exact';
import React from 'react';

import { Column, Row } from 'components/common/Grid';

// Constants
import CSS from 'constants/string/css';

// Declare prop types and default props
const propTypes = exact({
  children: PropTypes.node.isRequired,
  size: PropTypes.string
});

const defaultProps = {
  size: cx(CSS.grid.col.MD10, CSS.grid.col.LG08)
};

// Component
const Layout = ({ children, size }) => (
  <Row alignment={CSS.flex.justify.SMC}>
    <Column size={size}>{children}</Column>
  </Row>
);

// Specify prop types and default values for props
Layout.propTypes = propTypes;
Layout.defaultProps = defaultProps;

// Module exports
export default Layout;
