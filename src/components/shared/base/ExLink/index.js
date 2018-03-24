// Module dependencies
import cx from 'lodash';
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
  button: PropTypes.string,
  children: PropTypes.node.isRequired,
  icon: PropTypes.bool,
  replace: PropTypes.bool,
  to: PropTypes.string.isRequired
});

const defaultProps = {
  icon: false
};

// Component
const ExLink = ({
  button, children, icon, to, replace
}) => (
  <JSXwrapper>
    <a
      className={cx(button && `btn btn-${button}`)}
      href={to}
      rel="noopener noreferrer"
      target={replace ? '_self' : '_blank'}
    >
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
