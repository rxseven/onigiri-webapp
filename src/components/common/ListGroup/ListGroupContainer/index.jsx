// Module dependencies
import cx from 'classnames';
import PropTypes from 'prop-types';
import exact from 'prop-types-exact';
import React from 'react';

// Declare prop types and default props
const propTypes = exact({
  children: PropTypes.node.isRequired,
  margin: PropTypes.string
});

const defaultProps = {
  margin: null
};

// Component
const ListGroupContainer = ({ children, margin }) => (
  <div className={cx('list-group', margin)}>{children}</div>
);

// Specify prop types and default values for props
ListGroupContainer.propTypes = propTypes;
ListGroupContainer.defaultProps = defaultProps;

// Module exports
export default ListGroupContainer;
