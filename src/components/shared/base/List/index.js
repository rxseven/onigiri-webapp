// Module dependencies
import cx from 'classnames';
import PropTypes from 'prop-types';
import exact from 'prop-types-exact';
import React from 'react';

import ExLink from '../ExLink';

// Peer dependencies
import styles from './styles.scss';

// Declare prop types and default props
const propTypes = exact({
  container: {
    children: PropTypes.node.isRequired
  },
  content: {
    children: PropTypes.node.isRequired
  },
  item: {
    children: PropTypes.node.isRequired,
    end: PropTypes.bool,
    inline: PropTypes.string
  },
  label: {
    children: PropTypes.node.isRequired
  },
  link: {
    children: PropTypes.node.isRequired,
    to: PropTypes.string.isRequired,
    v: PropTypes.string
  }
});

const defaultProps = {
  item: {
    end: false,
    inline: false
  },
  link: {
    v: null
  }
};

// List container
export const List = ({ children }) => <div className={styles.list}>{children}</div>;

// List content
export const ListContent = ({ children }) => <div className={styles.content}>{children}</div>;

// List item
export const ListItem = ({ children, end, inline }) => (
  <div className={cx(styles.item, end && styles.end, !inline && styles.block)}>{children}</div>
);

// List label
export const ListLabel = ({ children }) => <div className={styles.label}>{children}</div>;

// List link
export const ListLink = ({ children, to, v }) => (
  <span className={styles.link}>
    <ExLink to={to}>{children}</ExLink>
    {v && <code>v{v}</code>}
  </span>
);

// Specify prop types and default values for props
List.propTypes = propTypes.container;
ListLink.propTypes = propTypes.link;

ListLink.defaultProps = defaultProps.link;
