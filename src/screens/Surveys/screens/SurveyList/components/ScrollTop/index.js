// Module dependencies
import React from 'react';
import ScrollToTop from 'react-scroll-up';

// Configuration
const options = {
  showUnder: 160,
  style: {
    bottom: 0,
    left: 0,
    position: 'absolute',
    right: 0
  }
};

// Component
const ScrollTop = () => <ScrollToTop {...options}>ScrollTop</ScrollToTop>;

// Module exports
export default ScrollTop;
