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
const ListContent = ({ children }) => <div styleName="content">{children}</div>;

// Specify prop types
ListContent.propTypes = propTypes;

// Module exports
export default ListContent;
