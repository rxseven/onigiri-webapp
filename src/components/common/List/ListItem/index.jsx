// @flow
// Module dependencies
import cx from 'classnames';
import * as React from 'react';

// Component types
import ListContent from '../ListContent';
import ListLabel from '../ListLabel';

// Companion files
import './styles.scss';

// Static types
type Props = {
  children: React.Element<typeof ListContent> | React.Element<typeof ListLabel>,
  end: boolean,
  inline: boolean
};

type Return = React.Element<'div'>;

// Default props
const defaultProps = {
  end: false,
  inline: false
};

// Component
const ListItem = ({ children, end, inline }: Props): Return => (
  <div className={cx(!inline && 'block')} styleName={cx('item', end && 'end', !inline && 'block')}>
    {children}
  </div>
);

// Specify default values for props
ListItem.defaultProps = defaultProps;

// Module exports
export default ListItem;
