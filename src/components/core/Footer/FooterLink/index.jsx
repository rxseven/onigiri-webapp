// @flow
// Module dependencies
import * as React from 'react';
import { NavLink } from 'react-router-dom';

// Companion files
import styles from '../styles.scss';

// Static types
type Props = {
  children: string,
  to: string
};

type Return = React.Element<typeof NavLink>;

// Link
const FooterLink = ({ children, to }: Props): Return => (
  <NavLink activeClassName={styles.active} to={to}>
    {children}
  </NavLink>
);

// Module exports
export default FooterLink;
