// Module dependencies
import PropTypes from 'prop-types';
import exact from 'prop-types-exact';
import React from 'react';

// Declare prop types
const propTypes = exact({
  children: PropTypes.node.isRequired
});

// Component
const CardFooter = ({ children }) => <div className="card-footer text-muted">{children}</div>;

// Specify prop types
CardFooter.propTypes = propTypes;

// Module exports
export default CardFooter;
