// @flow
// Module dependencies
import * as React from 'react';

// Static types
type Props = {
  children: React.Node,
  size: string
};

type Return = React.Element<'div'>;

// Default props
const defaultProps = {
  size: 'col'
};

// Component
const Column = ({ children, size }: Props): Return => <div className={size}>{children}</div>;

// Specify default values for props
Column.defaultProps = defaultProps;

// Module exports
export default Column;
