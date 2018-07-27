// Module dependencies
import PropTypes from 'prop-types';
import exact from 'prop-types-exact';
import React from 'react';

// Declare prop types and default props
const propTypes = exact({
  children: PropTypes.node.isRequired,
  size: PropTypes.string
});

const defaultProps = {
  size: 'col'
};

// Component
const Column = ({ children, size }) => <div className={size}>{children}</div>;

// Specify prop types and default values for props
Column.propTypes = propTypes;
Column.defaultProps = defaultProps;

// Module exports
export default Column;
