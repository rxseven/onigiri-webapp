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
const ListGroupText = ({ children }) => <p styleName="text">{children}</p>;

// Specify prop types
ListGroupText.propTypes = propTypes;

// Module exports
export default ListGroupText;
