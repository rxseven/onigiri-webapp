// Module dependencies
import cx from 'classnames';
import PropTypes from 'prop-types';
import exact from 'prop-types-exact';
import React from 'react';

// Constants
import CSS from 'constants/string/css';

// Declare prop types and default props
const propTypes = exact({
  alignment: PropTypes.string,
  background: PropTypes.string,
  children: PropTypes.node.isRequired,
  end: PropTypes.bool,
  marginBottom: PropTypes.string,
  options: PropTypes.string,
  text: PropTypes.string
});

const defaultProps = {
  end: false,
  marginBottom: CSS.margin.MB04,
  options: null
};

// Component
const CardContainer = ({
  alignment, background, children, end, marginBottom, options, text
}) => (
  <div
    className={cx(
      'card',
      alignment && `${alignment}`,
      background && `bg-${background}`,
      !end && marginBottom,
      options,
      text && `text-${text}`
    )}
  >
    {children}
  </div>
);

// Specify prop types and default values for props
CardContainer.propTypes = propTypes;
CardContainer.defaultProps = defaultProps;

// Module exports
export default CardContainer;
