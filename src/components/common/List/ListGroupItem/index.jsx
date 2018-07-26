// Module dependencies
import PropTypes from 'prop-types';
import exact from 'prop-types-exact';
import React from 'react';

// Declare prop types
const propTypes = exact({
  children: PropTypes.node.isRequired
});

// Component
const ListGroupItem = ({ children }) => <div>{children}</div>;

// Specify prop types
ListGroupItem.propTypes = propTypes;

// Module exports
export default ListGroupItem;
