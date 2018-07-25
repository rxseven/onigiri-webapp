// Module dependencies
import cx from 'classnames';
import PropTypes from 'prop-types';
import exact from 'prop-types-exact';
import React from 'react';

// Components and HOCs
import ExLink from 'components/common/ExLink';

// Companion files
import './styles.scss';

// Declare prop types and default props
const propTypes = exact({
  container: {
    children: PropTypes.node.isRequired
  },
  content: {
    children: PropTypes.node.isRequired
  },
  group: {
    children: PropTypes.node.isRequired
  },
  groupItem: {
    children: PropTypes.node.isRequired
  },
  item: {
    children: PropTypes.node.isRequired,
    end: PropTypes.bool,
    inline: PropTypes.bool
  },
  label: {
    children: PropTypes.node.isRequired
  },
  link: {
    children: PropTypes.node.isRequired,
    icon: PropTypes.bool,
    tag: PropTypes.string,
    to: PropTypes.string.isRequired,
    v: PropTypes.string
  },
  title: {
    children: PropTypes.node.isRequired
  }
});

const defaultProps = {
  item: {
    end: false,
    inline: false
  },
  link: {
    icon: false,
    tag: null,
    v: null
  }
};

// List container
export const List = ({ children }) => <div>{children}</div>;

// List content
export const ListContent = ({ children }) => <div styleName="content">{children}</div>;

// List group
export const ListGroup = ({ children }) => <div>{children}</div>;

// List group item
export const ListGroupItem = ({ children }) => <div>{children}</div>;

// List item
export const ListItem = ({ children, end, inline }) => (
  <div styleName={cx('item', end && 'end', !inline && 'block')}>{children}</div>
);

// List label
export const ListLabel = ({ children }) => <div styleName="label">{children}</div>;

// List link
export const ListLink = ({
  children, icon, tag, to, v
}) => (
  <span styleName={cx((tag || v) && 'version')}>
    <ExLink icon={icon} to={to}>
      {children}
    </ExLink>
    {tag && <code>{tag}</code>}
    {v && <code>v{v}</code>}
  </span>
);

// List title
export const ListTitle = ({ children }) => <h4 styleName="title">{children}</h4>;

// Specify prop types and default values for props
List.propTypes = propTypes.container;
ListContent.propTypes = propTypes.content;
ListGroup.propTypes = propTypes.group;
ListGroupItem.propTypes = propTypes.groupItem;
ListItem.propTypes = propTypes.item;
ListLabel.propTypes = propTypes.label;
ListLink.propTypes = propTypes.link;
ListTitle.propTypes = propTypes.title;

ListItem.defaultProps = defaultProps.item;
ListLink.defaultProps = defaultProps.link;
