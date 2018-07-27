// Module dependencies
import cx from 'classnames';
import PropTypes from 'prop-types';
import exact from 'prop-types-exact';
import React from 'react';

// Declare prop types and default props
const propTypes = exact({
  text: {
    block: PropTypes.bool,
    bold: PropTypes.bool,
    children: PropTypes.node.isRequired,
    lead: PropTypes.bool,
    options: PropTypes.string,
    secondary: PropTypes.bool,
    small: PropTypes.bool
  }
});

const defaultProps = {
  text: {
    block: false,
    bold: false,
    lead: false,
    mute: false,
    options: null,
    secondary: false,
    small: false
  }
};

// Text
export default ({
  block, bold, children, lead, mute, options, secondary, small
}) => {
  const css = secondary && 'text-secondary';

  if (lead) {
    return <p className="lead">{children}</p>;
  } else if (small) {
    return <small className={cx(css, mute && 'text-muted', options)}>{children}</small>;
  } else if (bold) {
    return <strong className={cx(block && 'text-block', css)}>{children}</strong>;
  }
  return <span className={cx(block && 'text-block', css, options)}>{children}</span>;
};

// Specify prop types and default values for props
Text.propTypes = propTypes.text;
Text.defaultProps = defaultProps.text;
