// Module dependencies
import PropTypes from 'prop-types';
import exact from 'prop-types-exact';
import React from 'react';

// Declare prop types and default props
const propTypes = exact({
  children: PropTypes.node.isRequired
});

// Component
const ListGroup = ({ children }) => <div>{children}</div>;

// Specify prop types
ListGroup.propTypes = propTypes;

// Module exports
export default ListGroup;
