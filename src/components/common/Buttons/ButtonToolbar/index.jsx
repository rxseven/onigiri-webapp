// @flow
// Module dependencies
import cx from 'classnames';
import * as React from 'react';

// Constants
import CSS from 'constants/string/css';

// Static types
type Props = {
  alignItem: string,
  children: React.Node,
  justifyContent: string,
  label: string,
  marginBottom: string
};

type Return = React.Element<'div'>;

// Default props
const defaultProps = {
  alignItem: 'center',
  justifyContent: 'between',
  marginBottom: CSS.margin.MB04
};

// Component
const ButtonToolbar = ({
  alignItem,
  children,
  justifyContent,
  label,
  marginBottom
}: Props): Return => (
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
ButtonToolbar.defaultProps = defaultProps;

// Module exports
export default ButtonToolbar;
