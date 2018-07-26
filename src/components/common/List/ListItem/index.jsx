// Module dependencies
import cx from 'classnames';
import PropTypes from 'prop-types';
import exact from 'prop-types-exact';
import React from 'react';

// Companion files
import './styles.scss';

// Declare prop types and default props
const propTypes = exact({
  children: PropTypes.node.isRequired,
  end: PropTypes.bool,
  inline: PropTypes.bool
});

const defaultProps = {
  end: false,
  inline: false
};

// Component
const ListItem = ({ children, end, inline }) => (
  <div className={cx(!inline && 'block')} styleName={cx('item', end && 'end', !inline && 'block')}>
    {children}
  </div>
);

// Specify prop types and default values for props
ListItem.propTypes = propTypes;
ListItem.defaultProps = defaultProps;

// Module exports
export default ListItem;
