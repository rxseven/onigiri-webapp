// Module dependencies
import PropTypes from 'prop-types';
import exact from 'prop-types-exact';
import React from 'react';

// Constants
import HTML from 'constants/elements/html';

// Declare prop types
const propTypes = exact({
  children: PropTypes.node.isRequired
});

// Component
const Body = ({ children }) => <div id={HTML.body}>{children}</div>;

// Specify prop types
Body.propTypes = propTypes;

// Module exports
export default Body;
