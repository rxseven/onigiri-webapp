// Module dependencies
import PropTypes from 'prop-types';
import exact from 'prop-types-exact';
import React from 'react';

// Declare prop types
const propTypes = exact({
  container: {
    children: PropTypes.node.isRequired
  }
});

// Container
export const Container = ({ children }) => <div className="container">{children}</div>;

// Specify prop types
Container.propTypes = propTypes.container;
