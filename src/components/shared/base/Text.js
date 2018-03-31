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
    small: false
  }
};

// Text
export default ({
  block, bold, children, lead, mute, options, small
}) => {
  if (lead) {
    return <p className="lead">{children}</p>;
  } else if (small) {
    return <small className={cx(mute && 'text-muted', options)}>{children}</small>;
  } else if (bold) {
    return <strong className={block && 'text-block'}>{children}</strong>;
  }
  return <span className={cx(block && 'text-block', options)}>{children}</span>;
};

// Specify prop types and default values for props
Text.propTypes = propTypes.text;
Text.defaultProps = defaultProps.text;
