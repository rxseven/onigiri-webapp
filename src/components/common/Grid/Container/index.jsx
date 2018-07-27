// Module dependencies
import PropTypes from 'prop-types';
import exact from 'prop-types-exact';
import React from 'react';

// Declare prop types
const propTypes = exact({
  children: PropTypes.node.isRequired
});

// Component
const Container = ({ children }) => <div className="container">{children}</div>;

// Specify prop types
Container.propTypes = propTypes;

// Module exports
export default Container;
