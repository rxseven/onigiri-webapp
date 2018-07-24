// Module dependencies
import cx from 'classnames';
import PropTypes from 'prop-types';
import exact from 'prop-types-exact';
import React from 'react';

// Peer dependencies
import styles from './styles.scss';

// Declare prop types and default props
const propTypes = exact({
  disabled: PropTypes.bool,
  name: PropTypes.string.isRequired,
  options: PropTypes.string,
  text: PropTypes.bool,
  title: PropTypes.string.isRequired
});

const defaultProps = {
  disabled: false,
  text: false
};

// Component
const Icon = ({
  disabled, name, options, text, title
}) => {
  // Configuration
  const baseClass = 'oi';

  // View
  return (
    <span
      aria-hidden="true"
      className={cx(
        baseClass,
        `${baseClass}-${name}`,
        'icon',
        disabled && styles.disabled,
        options,
        text && `icon-inline ${styles.inline}`
      )}
      title={title}
    />
  );
};

// Specify prop types and default values for props
Icon.propTypes = propTypes;
Icon.defaultProps = defaultProps;

// Module exports
export default Icon;
