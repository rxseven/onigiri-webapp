// Module dependencies
import cx from 'classnames';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link, NavLink, withRouter } from 'react-router-dom';
import Dropdown, { DropdownContent, DropdownTrigger } from 'react-simple-dropdown';

import { signOut } from '../../../data/session/actions';
import { getSession } from '../../../data/session/reducer';

import Avatar from '../../shared/base/Avatar';
import { Container } from '../../shared/base/Grid';
import Icon from '../../shared/base/Icon';
import Render from '../../shared/helpers/Render';

// Constants
import PATHS from '../../../constants/router/paths';

// Peer dependencies
import styles from './styles.scss';

// Component
class Navbar extends Component {
  // Sign-out handler
  onSignout = (event) => {
    // Prevent a browser from being refreshed
    event.preventDefault();

    // Sign out the current user
    this.props.actions.auth.signOut(() => {
      // TODO: 1. Create SignIn screen
      // TODO: 2. Navigate to sign-in screen after the event has been emitted

      // FIXME: Replace this temporary implementation with TODO No.2
      this.props.history.push({ pathname: PATHS.users.signup });
    });
  };

  // Dropdown handler
  onDropdownClick = () => {
    this.refs.dropdown.hide();
  };

  // Render user avatar
  renderAvatar = () => {
    // Variables
    const { authorization, user } = this.props.data.session;

    // View
    return (
      authorization &&
      user && (
        <div className="nav-item">
          <Dropdown ref="dropdown">
            <DropdownTrigger>
              <Avatar url={user.photo.url} />
            </DropdownTrigger>
            <DropdownContent>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="/" onClick={this.onSignout}>
                  <Icon name="account-logout" title="Log out" />
                  Log out
                </a>
              </div>
            </DropdownContent>
          </Dropdown>
        </div>
      )
    );
  };

  // Render brand
  renderBrand = () => (
    <Link className="navbar-brand" to={PATHS.root}>
      <div className={styles.logo}>
        <span className={styles.image} />
        <span>おにぎり</span>
      </div>
    </Link>
  );

  // Render nav links
  renderLinks = () => {
    // Variables
    const { authorization } = this.props.data.session;
    const { pathname } = this.props.location;
    const { signin, signup } = PATHS.users;

    // View
    return (
      <Render condition={!authorization && (pathname !== signin && pathname !== signup)}>
        <NavLink className={cx('navbar-item', 'nav-link', styles.link)} to={signin}>
          Sign in
        </NavLink>
      </Render>
    );
  };

  // Render nav links
  renderNav = () => (
    <div className="navbar-nav mr-auto">
      <NavLink className={cx('navbar-item', 'nav-link', styles.home)} exact to={PATHS.root}>
        <Icon name="home" title="Home" />
      </NavLink>
    </div>
  );

  // Render a component
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark fixed-top">
        <Container>
          {this.renderBrand()}
          <div className={styles.group}>
            {this.renderNav()}
            <div className={styles.meta}>
              {this.renderLinks()}
              {this.renderAvatar()}
            </div>
          </div>
        </Container>
      </nav>
    );
  }
}

// Map state to props
const mapStateToProps = state => ({
  data: {
    session: getSession(state)
  }
});

// Map dispatch to props
const mapDispatchToProps = dispatch => ({
  actions: {
    auth: bindActionCreators({ signOut }, dispatch)
  }
});

// Connect component to application state
const container = withRouter(connect(mapStateToProps, mapDispatchToProps)(Navbar));

// Module exports
export default container;
