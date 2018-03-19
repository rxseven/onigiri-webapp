// Module dependencies
import PropTypes from 'prop-types';
import exact from 'prop-types-exact';
import React from 'react';

import Icon from '../Icon';
import JSXwrapper from '../../helpers/JSXwrapper';
import Render from '../../helpers/Render';

// Peer dependencies
import styles from './styles.scss';

// Declare prop types and default props
const propTypes = exact({
  children: PropTypes.node.isRequired,
  icon: PropTypes.bool,
  to: PropTypes.string.isRequired
});

const defaultProps = {
  icon: false
};

// Component
const ExLink = ({ children, icon, to }) => (
  <JSXwrapper>
    <a href={to} rel="noopener noreferrer" target="_blank">
      {children}
      <Render condition={icon}>
        <span className={styles.icon}>
          <Icon name="external-link" title="External link" />
        </span>
      </Render>
    </a>
  </JSXwrapper>
);

// Specify prop types and default values for props
ExLink.propTypes = propTypes;
ExLink.defaultProps = defaultProps;

// Module exports
export default ExLink;
