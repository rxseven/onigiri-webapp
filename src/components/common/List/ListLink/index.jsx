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
  children: PropTypes.node.isRequired,
  icon: PropTypes.bool,
  tag: PropTypes.string,
  to: PropTypes.string.isRequired,
  v: PropTypes.string
});

const defaultProps = {
  icon: false,
  tag: null,
  v: null
};

// Component
const ListLink = ({
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

// Specify prop types and default values for props
ListLink.propTypes = propTypes;
ListLink.defaultProps = defaultProps;

// Module exports
export default ListLink;
