// Module dependencies
import cx from 'classnames';
import PropTypes from 'prop-types';
import exact from 'prop-types-exact';
import React from 'react';

// Components and HOCs
import Layout from 'components/common/Layout';

// Constants
import CSS from 'constants/string/css';

// Declare prop types
const propTypes = exact({
  children: PropTypes.node.isRequired
});

// Component
const AuthLayout = ({ children }) => (
  <Layout size={cx(CSS.grid.col.SM08, CSS.grid.col.MD06, CSS.grid.col.LG05, CSS.grid.col.XL04)}>
    {children}
  </Layout>
);

// Specify prop types
AuthLayout.propTypes = propTypes;

// Module exports
export default AuthLayout;
