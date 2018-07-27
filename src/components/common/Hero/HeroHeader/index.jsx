// Module dependencies
import PropTypes from 'prop-types';
import exact from 'prop-types-exact';
import React from 'react';

// Declare prop types
const propTypes = exact({
  children: PropTypes.node.isRequired
});

// Component
const HeroHeader = ({ children }) => <h1 className="jumbotron-headline">{children}</h1>;

// Specify prop types
HeroHeader.propTypes = propTypes;

// Module exports
export default HeroHeader;
