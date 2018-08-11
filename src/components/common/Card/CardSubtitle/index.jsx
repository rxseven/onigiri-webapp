// @flow
// Module dependencies
import cx from 'classnames';
import * as React from 'react';

// Static type
type Props = {
  bold: boolean,
  children: React.Node,
  options: string
};

type Return = React.Element<'h6'>;

// Default props
const defaultProps = {
  bold: false,
  options: ''
};

// Component
const CardSubtitle = ({ bold, children, options }: Props): Return => (
  <h6 className={cx('card-title', bold && 'font-weight-bold', !!options && options)}>{children}</h6>
);

// Specify default values for props
CardSubtitle.defaultProps = defaultProps;

// Module exports
export default CardSubtitle;
