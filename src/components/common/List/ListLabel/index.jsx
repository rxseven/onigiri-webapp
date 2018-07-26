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
const ListLabel = ({ children }) => <div styleName="label">{children}</div>;

// Specify prop types
ListLabel.propTypes = propTypes;

// Module exports
export default ListLabel;
