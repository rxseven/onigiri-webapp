// Module dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link, NavLink, withRouter } from 'react-router-dom';
import Dropdown, { DropdownContent, DropdownTrigger } from 'react-simple-dropdown';
import { action as toggleMenu } from 'redux-burger-menu/immutable';

// Helper functions
import { generateState } from 'helpers/state';

// Components and HOCs
import Avatar from 'components/common/Avatar';
import { Container } from 'components/common/Grid';
import Icon from 'components/common/Icon';
import toJS from 'HOCs/state/toJS';

// Constants
import STATE_MODELS from 'constants/models/state';
import PATHS from 'constants/router/paths';

// Action creators and selectors
import { signOut } from 'data/session/actions';
import { getSession } from 'data/session/reducers';
import { getAsync } from 'data/interfaces/session/reducers';

// Companion files
import './styles.scss';

// Component
class Navbar extends Component {
  // Sign-out handler
  onSignout = (event) => {
    // Prevent a browser from being refreshed
    event.preventDefault();

    // Sign out the current user
    this.props.actions.auth.signOut(() => {
      // Redirect to sign-in screen after the event has been emitted
      this.props.history.push({ pathname: PATHS.users.signin });
    });
  };

  // Dropdown handler
  onDropdownClick = () => {
    this.refs.dropdown.hide();
  };

  // Toggle menu
  onToggleMenu = () => {
    this.props.actions.menu.toggleMenu(true);
  };

  // Render user avatar
  renderAvatar = () => {
    // Variables
    const { authorization, user } = this.props.state.data.session;

    // View
    return (
      authorization &&
      user && (
        <div className="nav-item" styleName="avatar">
          <Dropdown ref="dropdown">
            <DropdownTrigger>
              <Avatar url={user.photo.url} />
            </DropdownTrigger>
            <DropdownContent>
              <div className="dropdown-menu">
                <Link
                  className="dropdown-item"
                  onClick={this.onDropdownClick}
                  to={PATHS.users.profile}
                >
                  <Icon name="cog" title="Profile" />
                  Credits &amp; Profile
                </Link>
                <a className="dropdown-item" href="/" onClick={this.onSignout}>
                  <Icon name="account-logout" title="Log out" />
                  <Choose>
                    <When condition={this.props.state.ui.asynchronous.signout.loading}>
                      <span styleName="leaving">Logging out...</span>
                    </When>
                    <Otherwise>
                      <span>Log out</span>
                    </Otherwise>
                  </Choose>
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
      <div styleName="logo">
        <span>おにぎり</span>
      </div>
    </Link>
  );

  // Render nav links
  renderLinks = () => {
    // Variables
    const { authorization } = this.props.state.data.session;
    const { pathname } = this.props.location;
    const { signin, signup } = PATHS.users;

    // View
    return (
      <If condition={!authorization && (pathname !== signin && pathname !== signup)}>
        <NavLink className="navbar-item nav-link" styleName="link" to={signin}>
          Sign in
        </NavLink>
      </If>
    );
  };

  // Render nav links
  renderNav = () => {
    // Variables
    const { authorization } = this.props.state.data.session;

    // View
    return (
      <div className="navbar-nav mr-auto">
        <If condition={!authorization}>
          <NavLink className="navbar-item nav-link" exact to={PATHS.root}>
            Home
          </NavLink>
        </If>
        <If condition={authorization}>
          <NavLink className="navbar-item nav-link" exact to={PATHS.surveys.list}>
            Dashboard
          </NavLink>
          <NavLink className="navbar-item nav-link" styleName="link" to={PATHS.surveys.new}>
            New Survey
          </NavLink>
        </If>
      </div>
    );
  };

  // Render a component
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark fixed-top">
        <Container>
          <button onClick={this.onToggleMenu} styleName="menu" type="button">
            <Icon name="menu" title="Menu" />
          </button>
          {this.renderBrand()}
          <div styleName="group">
            {this.renderNav()}
            <div styleName="meta">
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
const mapStateToProps = state =>
  generateState(STATE_MODELS.immutable
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
const container = withRouter(connect(mapStateToProps, mapDispatchToProps)(toJS(Navbar)));

// Module exports
export default container;