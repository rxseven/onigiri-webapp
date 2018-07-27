// Module dependencies
import PropTypes from 'prop-types';
import exact from 'prop-types-exact';
import React from 'react';

// Declare prop types and default props
const propTypes = exact({
  children: PropTypes.node.isRequired,
  end: PropTypes.bool
});

const defaultProps = {
  end: false
};

// Component
const FormStack = ({ children, end }) => <div className={!end && 'mb-3'}>{children}</div>;

// Specify prop types and default values for props
FormStack.propTypes = propTypes;
FormStack.defaultProps = defaultProps;

// Module exports
export default FormStack;
