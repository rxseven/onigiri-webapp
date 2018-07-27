// Module dependencies
import cx from 'classnames';
import PropTypes from 'prop-types';
import exact from 'prop-types-exact';
import React from 'react';

// Components and HOCs
import Icon from 'components/common/Icon';

// Companion files
import './styles.scss';

// Declare prop types
const propTypes = exact({
  active: PropTypes.bool,
  children: PropTypes.node.isRequired,
  handler: PropTypes.func,
  icon: PropTypes.string,
  title: PropTypes.string
});

// Component
const ButtonList = ({
  active, children, handler, icon, title
}) => {
  // Configuration
  const baseClass = 'list-group-item';

  // View
  return (
    <button
      className={cx(baseClass, `${baseClass}-action`, { active })}
      onClick={handler}
      styleName="button-list"
      type="button"
    >
      {icon && <Icon name={icon} text title={title} />}
      <span styleName="text">{children}</span>
    </button>
  );
};

// Specify prop types
ButtonList.propTypes = propTypes;

// Module exports
export default ButtonList;
