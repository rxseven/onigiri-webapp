// @flow
// Module dependencies
import cx from 'classnames';
import * as React from 'react';

// Static types
type Props = {
  children: React.Node,
  end: boolean
};

type Return = React.Element<'div'>;

// Default props
const defaultProps = {
  end: false
};

// Component
const FormStack = ({ children, end }: Props): Return => (
  <div className={cx(!end && 'mb-3')}>{children}</div>
);

// Specify default values for props
FormStack.defaultProps = defaultProps;

// Module exports
export default FormStack;
