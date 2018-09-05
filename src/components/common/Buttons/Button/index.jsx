// @flow
// Module dependencies
import cx from 'classnames';
import * as React from 'react';
import { Link } from 'react-router-dom';

// Components and HOCs
import Icon from 'components/common/Icon';

// Constants
import CSS from 'constants/string/css';

// Static types
type Props = {
  block: boolean,
  button: string,
  children: React.Node,
  disabled: boolean,
  handler: Function,
  icon: string,
  link: string,
  options: string,
  size: string,
  title: string,
  type: string
};

type Return = React.Element<'button'> | React.Element<typeof Link>;

// Default props
const defaultProps = {
  block: false,
  button: 'secondary',
  disabled: false,
  handler: undefined,
  icon: '',
  link: '#',
  options: '',
  size: '',
  title: 'Button',
  type: 'button'
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
  options,
  size,
  title,
  type
}: Props): Return => {
  // Configuration
  const baseClass = 'btn';

  const css = {
    button: cx(
      baseClass,
      block && `${baseClass}-block`,
      `${baseClass}-${button}`,
      !!size && `${baseClass}-${CSS.size[size]}`,
      !!options && options
    ),
    icon: { text: !!children }
  };

  const content = (
    <React.Fragment>
      <If condition={!!icon}>
        <Icon name={icon} text={css.icon.text} title={title} />
      </If>
      <If condition={!!children}>
        <span className={`${baseClass}-text`}>{children}</span>
      </If>
    </React.Fragment>
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

// Specify default values for props
Button.defaultProps = defaultProps;

// Module exports
export default Button;
