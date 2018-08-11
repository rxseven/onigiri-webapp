// @flow
// Module dependencies
import cx from 'classnames';
import * as React from 'react';

// Static types
type Props = {
  children: React.Node,
  options: string
};

type Return = React.Element<'p'>;

// Declare default props
const defaultProps = {
  options: ''
};

// Component
const CardText = ({ children, options }: Props): Return => (
  <p className={cx('card-text', !!options && options)}>{children}</p>
);

// Specify default values for props
CardText.defaultProps = defaultProps;

// Module exports
export default CardText;
