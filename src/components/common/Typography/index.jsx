// Module dependencies
import PropTypes from 'prop-types';
import exact from 'prop-types-exact';
import React from 'react';

// Companion files
import './styles.scss';

// Declare prop types and default props
const propTypes = exact({
  headline: {
    children: PropTypes.node.isRequired
  },
  subheadline: {
    children: PropTypes.node.isRequired
  }
});

// HL
export const HL = ({ children }) => <h2 styleName="headline">{children}</h2>;

// SHL
export const SHL = ({ children }) => <h3 styleName="subheadline">{children}</h3>;

// Specify prop types and default values for props
HL.propTypes = propTypes.headline;
SHL.propTypes = propTypes.subheadline;
