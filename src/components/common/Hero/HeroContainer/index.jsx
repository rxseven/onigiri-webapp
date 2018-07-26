// Module dependencies
import PropTypes from 'prop-types';
import exact from 'prop-types-exact';
import React from 'react';

// Declare prop types
const propTypes = exact({
  children: PropTypes.node.isRequired
});

// Component
const HeroContainer = ({ children }) => <div className="jumbotron">{children}</div>;

// Specify prop types
HeroContainer.propTypes = propTypes;

// Module exports
export default HeroContainer;
