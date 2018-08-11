// @flow
// Module dependencies
import cx from 'classnames';
import * as React from 'react';

// Static types
type Props = {
  children: React.Node,
  options: string,
  type: string
};

type Return = React.Element<'div'>;

// Default props
const defaultProps = {
  options: '',
  type: 'danger'
};

// Component
const Alert = ({
  children, flat, options, type
}: Props): Return => {
  // Configuration
  const baseClass = 'alert';

  // View
  return (
    <div className={cx(baseClass, `${baseClass}-${type}`, !!options && options)} role="alert">
      {children}
    </div>
  );
};

// Specify default values for props
Alert.defaultProps = defaultProps;

// Module exports
export default Alert;
