// Module dependencies
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Container } from '../../shared/base/Grid';

// Constants
import PATHS from '../../../constants/router/paths';

// Peer dependencies
import styles from './styles.scss';

// Component
class Navbar extends Component {
  // Render brand
  renderBrand = () => (
    <Link className="navbar-brand" to={PATHS.root}>
      <div className={styles.logo}>
        <span className={styles.image} />
        <span>おにぎり</span>
      </div>
    </Link>
  );

  // Render component
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark fixed-top">
        <Container>{this.renderBrand()}</Container>
      </nav>
    );
  }
}

// Module exports
export default Navbar;
