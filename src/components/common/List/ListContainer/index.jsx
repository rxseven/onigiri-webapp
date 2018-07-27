// Module dependencies
import PropTypes from 'prop-types';
import exact from 'prop-types-exact';
import React from 'react';

// Declare prop types
const propTypes = exact({
  children: PropTypes.node.isRequired
});

// Component
const ListContainer = ({ children }) => <div>{children}</div>;

// Specify prop types
ListContainer.propTypes = propTypes;

// Module exports
export default ListContainer;
