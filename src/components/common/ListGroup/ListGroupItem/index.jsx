// Module dependencies
import cx from 'classnames';
import PropTypes from 'prop-types';
import exact from 'prop-types-exact';
import React from 'react';
import { Link } from 'react-router-dom';

// Declare prop types
const propTypes = exact({
  children: PropTypes.node.isRequired,
  link: PropTypes.object.isRequired
});

// Component
const ListGroupItem = ({ children, link }) => {
  // Configuration
  const baseClass = 'list-group-item';

  // View
  return (
    <Link className={cx(baseClass, `${baseClass}-action`)} to={link}>
      {children}
    </Link>
  );
};

// Specify prop types
ListGroupItem.propTypes = propTypes;

// Module exports
export default ListGroupItem;
