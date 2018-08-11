// @flow
// Module dependencies
import cx from 'classnames';
import * as React from 'react';

// Constants
import CSS from 'constants/string/css';

// Static types
type Props = {
  children: React.Node,
  label: string,
  size: string
};

type Return = React.Element<'div'>;

// Default props
const defaultProps = {
  size: ''
};

// Component
const ButtonGroup = ({ children, label, size }: Props): Return => {
  // Configuration
  const baseClass = 'btn-group';

  // View
  return (
    <div
      aria-label={label}
      className={cx(baseClass, !!size && `${baseClass}-${CSS.size[size]}`)}
      role="group"
    >
      {children}
    </div>
  );
};

// Specify default values for props
ButtonGroup.defaultProps = defaultProps;

// Module exports
export default ButtonGroup;
