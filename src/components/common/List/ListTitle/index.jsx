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
const ListTitle = ({ children }) => <h4 styleName="title">{children}</h4>;

// Specify prop types
ListTitle.propTypes = propTypes;

// Module exports
export default ListTitle;
