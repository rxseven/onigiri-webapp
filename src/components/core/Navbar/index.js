// Module dependencies
import cx from 'classnames';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';

import { getSession } from '../../../data/session/reducer';

import Avatar from '../../shared/base/Avatar';
import { Container } from '../../shared/base/Grid';
import Icon from '../../shared/base/Icon';

// Constants
import PATHS from '../../../constants/router/paths';

// Peer dependencies
import styles from './styles.scss';

// Component
class Navbar extends Component {
  // Render user avatar
  renderAvatar = () => {
    const { authorization, user } = this.props.data.session;

    return (
      authorization &&
      user && (
        <div className="nav-item">
          <Avatar url={user.photo.url} />
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
            <div className={styles.meta}>{this.renderAvatar()}</div>
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

// Connect component to application state
const container = connect(mapStateToProps)(Navbar);

// Module exports
export default container;
