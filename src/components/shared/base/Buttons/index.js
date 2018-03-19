// Module dependencies
import cx from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';

import JSXwrapper from '../../helpers/JSXwrapper';
import Icon from '../Icon';

// Constants
import CSS from '../../../../constants/string/css';

// Peer dependencies
import styles from './styles.scss';

// Declare prop types and default props
import propTypes from './constants/propTypes';
import defaultProps from './constants/defaultProps';

// Base button
export const Button = ({
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
      `${baseClass}-${button}`,
      size && `${baseClass}-${CSS.size[size]}`,
      visibility
    ),
    icon: { text: !!children }
  };

  const content = (
    <JSXwrapper>
      {icon && <Icon name={icon} text={css.icon.text} title={title} />}
      {children && <span className={`${baseClass}-text`}>{children}</span>}
    </JSXwrapper>
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

// Button group
export const ButtonGroup = ({ children, label, size }) => {
  // Configuration
  const baseClass = 'btn-group';

  // View
  return (
    <div
      aria-label={label}
      className={cx(baseClass, size && `${baseClass}-${CSS.size[size]}`)}
      role="group"
    >
      {children}
    </div>
  );
};

// Button set
export const ButtonSet = ({ children, options }) => (
  <div className={cx(styles.buttonSet, options)}>{children}</div>
);

// Specify default values for props
Button.propTypes = propTypes.button;
ButtonGroup.propTypes = propTypes.group;
ButtonSet.propTypes = propTypes.set;

Button.defaultProps = defaultProps.button;
