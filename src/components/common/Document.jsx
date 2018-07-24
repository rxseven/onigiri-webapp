// Module dependencies
import PropTypes from 'prop-types';
import exact from 'prop-types-exact';
import React from 'react';
import { Helmet } from 'react-helmet';

// Declare prop types
const propTypes = exact({
  body: {
    children: PropTypes.node.isRequired
  },
  document: {
    children: PropTypes.node.isRequired
  },
  head: {
    children: PropTypes.node.isRequired
  },
  title: {
    children: PropTypes.string.isRequired
  }
});

// Body
export const Body = ({ children }) => children;

// Document
export const Document = ({ children }) => children;

// Head
export const Head = ({ children }) => children;

// Page title
export const Title = ({ children }) => (
  <Helmet>
    <title>{children}</title>
  </Helmet>
);

// Specify prop types
Body.propTypes = propTypes.body;
Document.propTypes = propTypes.document;
Head.propTypes = propTypes.head;
Title.propTypes = propTypes.title;
