// Module dependencies
import cx from 'classnames';
import PropTypes from 'prop-types';
import exact from 'prop-types-exact';
import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu';
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { action as toggleMenu, decorator as reduxMenu } from 'redux-burger-menu';

import { signOut } from '../../../data/session/actions';
import { getSession } from '../../../data/session/reducer';

import Avatar from '../../shared/base/Avatar';
import Icon from '../../shared/base/Icon';
import Text from '../../shared/base/Text';
import Render from '../../shared/helpers/Render';

// Constants
import HTML from '../../../constants/elements/html';
import PATHS from '../../../constants/router/paths';

// Peer dependencies
import styles from './styles.scss';

// Constants
const MENU_OPEN = 'menu-open';

// Extended Menu component
const ExMenu = reduxMenu(Menu);

// Declare prop types and default props
const propTypes = exact({
  navigation: {
    children: PropTypes.node.isRequired,
    exact: PropTypes.bool,
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired
  }
});

const defaultProps = {
  navigation: {
    exact: false
  }
};

// Link micro component
const MenuLink = ({
  children, exact: exactPath, icon, title, to
}) => (
  <NavLink activeClassName={cx('is-active', styles.active)} exact={exactPath} to={to}>
    <span className={styles.icon}>
      <Icon name={icon} title={title} />
    </span>
    {children}
  </NavLink>
);

// Component
class UI extends Component {
  // After updating occurs
  componentDidUpdate(prevProps) {
    // Close off-canvas menu
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.onToggleMenu();
    }

    // Toggle overflow content
    if (this.props.state.data.interfaces.menu.isOpen) {
      document.body.classList.add(MENU_OPEN);
    } else {
      document.body.classList.remove(MENU_OPEN);
    }
  }

  // Toggle menu
  onToggleMenu = () => {
    this.props.actions.menu.toggleMenu(false);
  };

  // Sign-out handler
  onSignout = (event) => {
    // Prevent a browser from being refreshed
    event.preventDefault();

    // Sign out the current user
    this.props.actions.auth.signOut(() => {
      // Close off-canvas menu
      this.onToggleMenu();

      // Redirect to sign-in screen after the event has been emitted
      this.props.history.push({ pathname: PATHS.users.signin });
    });
  };

  // Render header
  renderHeader = (isAuth, user) =>
    isAuth && (
      <div className={styles.header}>
        <div className={styles.user}>
          <div className={styles.avatar}>
            <Avatar url={user.photo.url} />
          </div>
          <Text>{`${user.name.firstName} ${user.name.lastName}`}</Text>
        </div>
      </div>
    );

  // Render navigation
  renderNav = isAuth => (
    <ul className={styles.navigation}>
      <Render condition={isAuth}>
        <li>
          <MenuLink exact icon="list" title="Dashboard" to={PATHS.surveys.list}>
            Dashboard
          </MenuLink>
        </li>
      </Render>
      <li>
        <MenuLink icon="info" title="About" to={PATHS.static.about}>
          About
        </MenuLink>
      </li>
      <li>
        <MenuLink icon="comment-square" title="Me" to={PATHS.static.me}>
          Me
        </MenuLink>
      </li>
      <li>
        <MenuLink icon="file" title="Terms" to={PATHS.static.terms}>
          Terms
        </MenuLink>
      </li>
      <li>
        <MenuLink icon="shield" title="Privay" to={PATHS.static.privacy}>
          Privacy
        </MenuLink>
      </li>
    </ul>
  );

  // Render profile
  renderProfile = (isAuth, user) =>
    isAuth && (
      <ul className={styles.navigation}>
        <li>
          <MenuLink icon="cog" title="Credits &amp; Profile" to={PATHS.users.profile}>
            Credits &amp; Profile
          </MenuLink>
        </li>
        <li>
          <button className={styles.signout} onClick={this.onSignout} type="button">
            <span className={styles.icon}>
              <Icon name="account-logout" title="Log out" />
            </span>
            Log out
          </button>
        </li>
      </ul>
    );

  // Render component
  render() {
    // Variables
    const { session: { authorization, user } } = this.props.state.data;
    const isAuth = authorization && user;

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
        <div>
          {this.renderHeader(isAuth, user)}
          {this.renderNav(isAuth)}
          {this.renderProfile(isAuth, user)}
        </div>
      </ExMenu>
    );
  }
}

// Map state to props
const mapStateToProps = state => ({
  state: {
    data: {
      interfaces: {
        menu: state.burgerMenu
      },
      session: getSession(state)
    }
  }
});

// Map dispatch to props
const mapDispatchToProps = dispatch => ({
  actions: {
    auth: bindActionCreators({ signOut }, dispatch),
    menu: bindActionCreators({ toggleMenu }, dispatch)
  }
});

// Connect component to application state
const container = withRouter(connect(mapStateToProps, mapDispatchToProps)(UI));

// Specify prop types and default values for props
MenuLink.propTypes = propTypes.navigation;
MenuLink.defaultProps = defaultProps.navigation;

// Module exports
export default container;
