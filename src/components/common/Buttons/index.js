// Module dependencies
import cx from 'classnames';
import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

import Icon from '../Icon';

// Constants
import CSS from '../../../constants/string/css';

// Peer dependencies
import styles from './styles.scss';

// Declare prop types and default props
import propTypes from './constants/propTypes';
import defaultProps from './constants/defaultProps';

// Base button
export const Button = ({
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

// Button handler
export class ButtonHandler extends Component {
  // Click handler
  handleClick = () => {
    this.props.handler.onClick(this.props.value);
  };

  // Render a component
  render() {
    switch (this.props.type) {
      case 'button-list':
        return (
          <ButtonList {...this.props} handler={this.handleClick}>
            {this.props.children}
          </ButtonList>
        );
      default:
        return (
          <Button {...this.props} handler={this.handleClick}>
            {this.props.children}
          </Button>
        );
    }
  }
}

// List group item
export const ButtonList = ({
  active, children, handler, icon, title
}) => {
  // Configuration
  const baseClass = 'list-group-item';

  // View
  return (
    <button
      className={cx(baseClass, `${baseClass}-action`, styles.buttonList, { active })}
      onClick={handler}
      type="button"
    >
      {icon && <Icon name={icon} text title={title} />}
      <span className={styles.text}>{children}</span>
    </button>
  );
};

// Button set
export const ButtonSet = ({ children, options }) => (
  <div className={cx(styles.buttonSet, options)}>{children}</div>
);

// Button toolbar
export const ButtonToolbar = ({
  alignItem, children, justifyContent, label, marginBottom
}) => (
  <div
    aria-label={label}
    className={cx(
      `align-items-${alignItem}`,
      'btn-toolbar',
      `justify-content-${justifyContent}`,
      marginBottom
    )}
    role="toolbar"
  >
    {children}
  </div>
);

// Specify default values for props
Button.propTypes = propTypes.button;
ButtonGroup.propTypes = propTypes.group;
ButtonHandler.propTypes = propTypes.handler;
ButtonList.propTypes = propTypes.list;
ButtonSet.propTypes = propTypes.set;
ButtonToolbar.propTypes = propTypes.toolbar;

Button.defaultProps = defaultProps.button;
ButtonToolbar.defaultProps = defaultProps.toolbar;
