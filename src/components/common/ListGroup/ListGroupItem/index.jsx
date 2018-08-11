// @flow
// Module dependencies
import cx from 'classnames';
import * as React from 'react';
import { Link } from 'react-router-dom';

// Static types
type Props = {
  children: React.Node,
  link: {
    pathname: string,
    state: {
      fromList: boolean,
      mode: string
    }
  }
};

type Return = React.Element<typeof Link>;

// Component
const ListGroupItem = ({ children, link }: Props): Return => {
  // Configuration
  const baseClass = 'list-group-item';
  const to: any = link;

  // View
  return (
    <Link className={cx(baseClass, `${baseClass}-action`)} to={to}>
      {children}
    </Link>
  );
};

// Module exports
export default ListGroupItem;
