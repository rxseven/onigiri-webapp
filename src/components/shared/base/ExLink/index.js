// Module dependencies
import cx from 'classnames';
import PropTypes from 'prop-types';
import exact from 'prop-types-exact';
import React from 'react';

import Icon from '../Icon';
import JSXwrapper from '../../helpers/JSXwrapper';

// Peer dependencies
import styles from './styles.scss';

// Declare prop types and default props
const propTypes = exact({
  button: PropTypes.string,
  children: PropTypes.node.isRequired,
  flat: PropTypes.bool,
  icon: PropTypes.bool,
  replace: PropTypes.bool,
  to: PropTypes.string.isRequired
});

const defaultProps = {
  button: '',
  flat: false,
  icon: false,
  replace: false
};

// Component
const ExLink = ({
  button, children, flat, icon, replace, to
}) => (
  <JSXwrapper>
    <a
      className={cx(button && `btn btn-${button}`, flat && styles.flat)}
      href={to}
      rel="noopener noreferrer"
      target={replace ? '_self' : '_blank'}
    >
      {children}
      <If condition={icon}>
        <span className={styles.icon}>
          <Icon name="external-link" title="External link" />
        </span>
      </If>
    </a>
  </JSXwrapper>
);

// Specify prop types and default values for props
ExLink.propTypes = propTypes;
ExLink.defaultProps = defaultProps;

// Module exports
export default ExLink;
