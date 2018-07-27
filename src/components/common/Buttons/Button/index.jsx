// Module dependencies
import cx from 'classnames';
import PropTypes from 'prop-types';
import exact from 'prop-types-exact';
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

// Components and HOCs
import Icon from 'components/common/Icon';

// Constants
import CSS from 'constants/string/css';

// Declare prop types and default props
const propTypes = exact({
  block: PropTypes.bool,
  button: PropTypes.string,
  children: PropTypes.node,
  disabled: PropTypes.bool,
  handler: PropTypes.func,
  icon: PropTypes.string,
  link: PropTypes.PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  size: PropTypes.string,
  title: PropTypes.string,
  type: PropTypes.string,
  visibility: PropTypes.bool
});

const defaultProps = {
  block: false,
  button: 'secondary',
  disabled: false,
  handler: null,
  icon: null,
  link: '#',
  title: 'Button',
  type: 'button',
  visibility: false
};

// Component
const Button = ({
  block,
  button,
  children,
  disabled,
  handler,
  icon,
  link,
  size,
  title,
  type,
  visibility
}) => {
  // Configuration
  const baseClass = 'btn';

  const css = {
    button: cx(
      baseClass,
      block && `${baseClass}-block`,
      `${baseClass}-${button}`,
      size && `${baseClass}-${CSS.size[size]}`,
      visibility
    ),
    icon: { text: !!children }
  };

  const content = (
    <Fragment>
      {icon && <Icon name={icon} text={css.icon.text} title={title} />}
      {children && <span className={`${baseClass}-text`}>{children}</span>}
    </Fragment>
  );

  const properties = { className: css.button, disabled, type };

  // View
  switch (type) {
    case 'link':
      return (
        <Link {...properties} to={link}>
          {content}
        </Link>
      );
    case 'submit':
      return <button {...properties}>{content}</button>;
    default:
      return (
        <button {...properties} onClick={handler}>
          {content}
        </button>
      );
  }
};

// Specify prop types and default values for props
Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

// Module exports
export default Button;
