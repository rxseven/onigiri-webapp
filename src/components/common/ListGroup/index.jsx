// Module dependencies
import cx from 'classnames';
import PropTypes from 'prop-types';
import exact from 'prop-types-exact';
import React from 'react';
import { Link } from 'react-router-dom';

// Companion files
import './styles.scss';

// Declare prop types and default props
const propTypes = exact({
  container: {
    children: PropTypes.node.isRequired,
    margin: PropTypes.string
  },
  headline: {
    children: PropTypes.node.isRequired
  },
  item: {
    children: PropTypes.node.isRequired,
    link: PropTypes.object.isRequired
  },
  text: {
    children: PropTypes.node.isRequired
  }
});

const defaultProps = {
  container: {
    margin: null
  }
};

// List group container
export const ListGroup = ({ children, margin }) => {
  // Configuration
  const baseClass = 'list-group';

  // View
  return <div className={cx(baseClass, margin)}>{children}</div>;
};

// List group headline
export const ListGroupHL = ({ children }) => <h5 styleName="headline">{children}</h5>;

// List group item
export const ListGroupItem = ({ children, link }) => {
  // Configuration
  const baseClass = 'list-group-item';

  // View
  return (
    <Link className={cx(baseClass, `${baseClass}-action`)} to={link}>
      {children}
    </Link>
  );
};

// List group text
export const ListGroupText = ({ children }) => <p styleName="text">{children}</p>;

// Specify prop types and default values for props
ListGroup.propTypes = propTypes.container;
ListGroupHL.propTypes = propTypes.headline;
ListGroupItem.propTypes = propTypes.item;
ListGroupText.propTypes = propTypes.text;

ListGroup.defaultProps = defaultProps.container;
