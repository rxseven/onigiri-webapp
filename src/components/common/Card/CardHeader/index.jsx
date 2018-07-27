// Module dependencies
import PropTypes from 'prop-types';
import exact from 'prop-types-exact';
import React from 'react';

// Declare prop types
const propTypes = exact({
  children: PropTypes.node.isRequired
});

// Component
const CardHeader = ({ children }) => <div className="card-header">{children}</div>;

// Specify prop types
CardHeader.propTypes = propTypes;

// Module exports
export default CardHeader;
