// Module dependencies
import PropTypes from 'prop-types';
import exact from 'prop-types-exact';
import React from 'react';

// Declare prop types
const propTypes = exact({
  body: { children: PropTypes.node.isRequired },
  container: { children: PropTypes.node.isRequired },
  header: { children: PropTypes.node.isRequired }
});

// Hero container
export const Hero = ({ children }) => <div className="jumbotron">{children}</div>;

// Hero body
export const HeroBody = ({ children }) => children;

// Hero header
export const HeroHeader = ({ children }) => <h1 className="jumbotron-headline">{children}</h1>;

// Specify prop types
Hero.propTypes = propTypes.container;
HeroBody.propTypes = propTypes.body;
HeroHeader.propTypes = propTypes.header;
