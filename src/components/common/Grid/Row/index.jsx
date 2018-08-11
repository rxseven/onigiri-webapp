// @flow
// Module dependencies
import cx from 'classnames';
import * as React from 'react';

// Component types
import Column from '../Column';

// Static types
type Props = {
  alignment: string,
  children: React.Element<typeof Column>
};

type Return = React.Element<'div'>;

// Default props
const defaultProps = {
  alignment: ''
};

// Component
const Row = ({ alignment, children }: Props): Return => (
  <div className={cx('row', !!alignment && alignment)}>{children}</div>
);

// Specify default values for props
Row.defaultProps = defaultProps;

// Module exports
export default Row;
