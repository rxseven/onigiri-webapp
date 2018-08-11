// @flow
// Module dependencies
import cx from 'classnames';
import * as React from 'react';

// Companion files
import './styles.scss';

// Static types
type Props = {
  children: React.Node,
  options: string
};

type Return = React.Element<'div'>;

// Default props
const defaultProps = {
  options: ''
};

// Component
const ButtonSet = ({ children, options }: Props): Return => (
  <div className={cx(!!options && options)} styleName="button-set">
    {children}
  </div>
);

// Specify default values for props
ButtonSet.defaultProps = defaultProps;

// Module exports
export default ButtonSet;
