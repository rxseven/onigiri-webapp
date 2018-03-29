// Module dependencies
import cx from 'classnames';
import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu';
import { NavLink, withRouter } from 'react-router-dom';
import { decorator as reduxMenu } from 'redux-burger-menu';

import Icon from '../../shared/base/Icon';

// Constants
import HTML from '../../../constants/elements/html';

// Peer dependencies
import styles from './styles.scss';

// Extended Menu component
const ExMenu = reduxMenu(Menu);

// Link micro component
const MenuLink = ({
  children, icon, title, to
}) => (
  <NavLink activeClassName={cx('is-active', styles.active)} to={to}>
    <span className={styles.icon}>
      <Icon name={icon} title={title} />
    </span>
    {children}
  </NavLink>
);

// Component
class UI extends Component {
  render() {
    // Options
    const menuOptions = {
      customBurgerIcon: false,
      customCrossIcon: false,
      outerContainerId: HTML.wrapper,
      pageWrapId: HTML.body,
      width: '85%'
    };

    // View
    return (
      <ExMenu {...menuOptions}>
        <div>Menu component</div>
      </ExMenu>
    );
  }
}

// Module exports
export default withRouter(UI);
