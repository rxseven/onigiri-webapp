// Module dependencies
import PropTypes from 'prop-types';
import exact from 'prop-types-exact';
import React from 'react';

// Declare prop types
const propTypes = exact({
  children: PropTypes.node.isRequired
});

// Component
const CardBody = ({ children }) => <div className="card-body">{children}</div>;

// Specify prop types
CardBody.propTypes = propTypes;

// Module exports
export default CardBody;
