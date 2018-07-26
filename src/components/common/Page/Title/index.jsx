// Module dependencies
import PropTypes from 'prop-types';
import exact from 'prop-types-exact';
import React from 'react';
import { Helmet } from 'react-helmet';

// Declare prop types
const propTypes = exact({
  children: PropTypes.string.isRequired
});

// Component
export const Title = ({ children }) => (
  <Helmet>
    <title>{children}</title>
  </Helmet>
);

// Specify prop types
Title.propTypes = propTypes;

// Module exports
export default Title;
