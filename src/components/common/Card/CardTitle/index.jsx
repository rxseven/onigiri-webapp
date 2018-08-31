// @flow
// Module dependencies
import cx from 'classnames';
import * as React from 'react';

// Static types
type Props = {
  children: React.Node,
  options: string
};

type Return = React.Element<'h5'>;

// Default props
const defaultProps = {
  options: ''
};

// Component
export const CardTitle = ({ children, options }: Props): Return => (
  <h5 className={cx('card-title', !!options && options)}>{children}</h5>
);

// Specify default values for props
CardTitle.defaultProps = defaultProps;

// Module exports
export default CardTitle;
