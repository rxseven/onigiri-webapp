// @flow
// Module dependencies
import cx from 'classnames';
import * as React from 'react';

// Component types
import ListGroupItem from '../ListGroupItem';

// Static types
type Props = {
  children: React.Element<typeof ListGroupItem>,
  margin: string
};

type Return = React.Element<'div'>;

// Default props
const defaultProps = {
  margin: ''
};

// Component
const ListGroupContainer = ({ children, margin }: Props): Return => (
  <div className={cx('list-group', !!margin && margin)}>{children}</div>
);

// Specify default values for props
ListGroupContainer.defaultProps = defaultProps;

// Module exports
export default ListGroupContainer;
