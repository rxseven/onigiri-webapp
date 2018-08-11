// @flow
// Module dependencies
import cx from 'classnames';
import * as React from 'react';
import { NavLink } from 'react-router-dom';

// Components and HOCs
import Icon from 'components/common/Icon';

// Companion files
import styles from '../styles.scss';

// Static types
type Props = {
  children: string,
  exact: boolean,
  icon: string,
  title: string,
  to: string
};

type Return = React.Element<typeof NavLink>;

// Default props
const defaultProps = {
  exact: false
};

// Component
const MenuLink = ({
  children, exact, icon, title, to
}: Props): Return => (
  <NavLink activeClassName={cx('active', styles.active)} exact={exact} to={to}>
    <span styleName="icon">
      <Icon name={icon} title={title} />
    </span>
    {children}
  </NavLink>
);

// Specify default values for props
MenuLink.defaultProps = defaultProps;

// Module exports
export default MenuLink;
