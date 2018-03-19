// Module dependencies
import React, { Component } from 'react';

import { Container } from '../../shared/base/Grid';

// Component
class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark fixed-top">
        <Container>Navbar component</Container>
      </nav>
    );
  }
}

// Module exports
export default Navbar;
