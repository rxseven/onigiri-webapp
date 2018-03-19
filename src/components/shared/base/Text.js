// Module dependencies
import cx from 'classnames';
import PropTypes from 'prop-types';
import exact from 'prop-types-exact';
import React from 'react';

import JSXwrapper from '../helpers/JSXwrapper';

// Declare prop types and default props
const propTypes = exact({
  text: {
    children: PropTypes.node.isRequired,
    lead: PropTypes.bool,
    options: PropTypes.string,
    small: PropTypes.bool
  }
});

const defaultProps = {
  text: {
    lead: false,
    mute: false,
    options: null,
    small: false
  }
};

// Text
export default ({
  children, lead, mute, options, small
}) => (
  <JSXwrapper>
    {small ? (
      <small className={cx(mute && 'text-muted', options)}>{children}</small>
    ) : (
      <span className={cx(options)}>{children}</span>
    )}
    {lead && <p className="lead">{children}</p>}
  </JSXwrapper>
);

// Specify prop types and default values for props
Text.propTypes = propTypes.text;
Text.defaultProps = defaultProps.text;
