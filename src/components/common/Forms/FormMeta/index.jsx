// Module dependencies
import PropTypes from 'prop-types';
import exact from 'prop-types-exact';
import React from 'react';

// Companion files
import './styles.scss';

// Declare prop types
const propTypes = exact({
  children: PropTypes.node.isRequired
});

// Component
const FormMeta = ({ children }) => (
  <div styleName="meta">
    <span styleName="context">{children}</span>
  </div>
);

// Specify prop types
FormMeta.propTypes = propTypes;

// Module exports
export default FormMeta;
