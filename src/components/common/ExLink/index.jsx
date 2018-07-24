// Module dependencies
import cx from 'classnames';
import PropTypes from 'prop-types';
import exact from 'prop-types-exact';
import React, { Fragment } from 'react';

// Components and HOCs
import Icon from 'components/common/Icon';

// Companion files
import styles from './styles.scss';

// Declare prop types and default props
const propTypes = exact({
  button: PropTypes.string,
  children: PropTypes.node.isRequired,
  flat: PropTypes.bool,
  icon: PropTypes.bool,
  options: PropTypes.string,
  rel: PropTypes.string,
  replace: PropTypes.bool,
  to: PropTypes.string.isRequired
});

const defaultProps = {
  button: '',
  flat: false,
  icon: false,
  options: null,
  rel: 'noopener noreferrer',
  replace: false
};

// Component
const ExLink = ({
  button, children, flat, icon, options, rel, replace, to
}) => (
  <Fragment>
    <a
      className={cx(button && `btn btn-${button}`, flat && styles.flat, options)}
      href={to}
      rel={rel}
      target={replace ? '_self' : '_blank'}
    >
      {children}
      <If condition={icon}>
        <span className={styles.icon}>
          <Icon name="external-link" title="External link" />
        </span>
      </If>
    </a>
  </Fragment>
);

// Specify prop types and default values for props
ExLink.propTypes = propTypes;
ExLink.defaultProps = defaultProps;

// Module exports
export default ExLink;
