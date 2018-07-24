// Module dependencies
import cx from 'classnames';
import PropTypes from 'prop-types';
import exact from 'prop-types-exact';
import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu';
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { action as toggleMenu, decorator as reduxMenu } from 'redux-burger-menu/immutable';

import { signOut } from 'data/session/actions';
import { getSession } from 'data/session/reducers';
import { getAsync } from 'data/interfaces/session/reducers';

import { generateState } from 'helpers/state';

import Avatar from 'components/common/Avatar';
import ExLink from 'components/common/ExLink';
import Icon from 'components/common/Icon';
import Text from 'components/common/Text';
import toJS from 'HOCs/state/toJS';

import HTML from 'constants/elements/html';
import STATE_MODELS from 'constants/models/state';
import PATHS from 'constants/router/paths';

// Companion files
import styles from './styles.scss';

// Local constants
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
  <NavLink activeClassName={cx('active', styles.active)} exact={exactPath} to={to}>
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
  renderHeader = ({ isAuth, user }) =>
    isAuth && (
      <NavLink activeClassName="active" className={styles.header} to={PATHS.users.profile}>
        <div className={styles.user}>
          <div className={styles.avatar}>
            <Avatar url={user.photo.url} />
          </div>
          <Text>{`${user.name.firstName} ${user.name.lastName}`}</Text>
        </div>
      </NavLink>
    );

  // Render navigation
  renderNav = ({ isAuth }) => (
    <ul className={styles.navigation}>
      <li>
        <MenuLink exact icon="home" title="Home" to={PATHS.root}>
          Home
        </MenuLink>
      </li>
      <If condition={isAuth}>
        <li>
          <MenuLink exact icon="list" title="Dashboard" to={PATHS.surveys.list}>
            Dashboard
          </MenuLink>
        </li>
      </If>
      <li>
        <MenuLink icon="info" title="About" to={PATHS.static.about}>
          About
        </MenuLink>
      </li>
      <li>
        <ExLink options="styles.icon" to="http://www.rxseven.com">
          <span className={styles.icon}>
            <Icon name="comment-square" title="Me" />
          </span>
          Me
        </ExLink>
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
      <li>
        <ExLink options="styles.icon" to="https://github.com/rxseven/onigiri-webapp">
          <span className={styles.icon}>
            <Icon name="fork" title="GitHub" />
          </span>
          View on GitHub
        </ExLink>
      </li>
    </ul>
  );

  // Render profile
  renderProfile = ({ asynchronous, isAuth, user }) => (
    <ul className={styles.navigation}>
      <Choose>
        <When condition={isAuth}>
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
              <Choose>
                <When condition={asynchronous.signout.loading}>
                  <span className={styles.leaving}>Logging out...</span>
                </When>
                <Otherwise>
                  <span>Log out</span>
                </Otherwise>
              </Choose>
            </button>
          </li>
        </When>
        <Otherwise>
          <li>
            <MenuLink icon="account-login" title="Privay" to={PATHS.users.signin}>
              Sign in
            </MenuLink>
          </li>
        </Otherwise>
      </Choose>
    </ul>
  );

  // Render component
  render() {
    // Variables
    const { data: { session: { authorization, user } }, ui: { asynchronous } } = this.props.state;
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
          {this.renderHeader({ isAuth, user })}
          {this.renderNav({ isAuth })}
          {this.renderProfile({ asynchronous, isAuth, user })}
        </div>
      </ExMenu>
    );
  }
}

// Map state to props
const mapStateToProps = state =>
  generateState(STATE_MODELS.immutable
    .setIn(['data', 'interfaces', 'menu'], state.get('burgerMenu'))
    .setIn(['data', 'session'], getSession(state))
    .setIn(['ui', 'asynchronous'], getAsync(state)));

// Map dispatch to props
const mapDispatchToProps = dispatch => ({
  actions: {
    auth: bindActionCreators({ signOut }, dispatch),
    menu: bindActionCreators({ toggleMenu }, dispatch)
  }
});

// Connect component to application state
const container = withRouter(connect(mapStateToProps, mapDispatchToProps)(toJS(UI)));

// Specify prop types and default values for props
MenuLink.propTypes = propTypes.navigation;
MenuLink.defaultProps = defaultProps.navigation;

// Module exports
export default container;
