// Module dependencies
import cx from 'classnames';
import PropTypes from 'prop-types';
import exact from 'prop-types-exact';
import React from 'react';

// Constants
import CSS from 'constants/string/css';

// Companion files
import './styles.scss';

// Declare prop types and default props
const propTypes = exact({
  children: PropTypes.node.isRequired,
  end: PropTypes.bool,
  margin: PropTypes.string,
  options: PropTypes.string
});

const defaultProps = {
  end: false,
  margin: CSS.margin.MB04,
  options: null
};

// Component
const TipContainer = ({
  children, end, margin, options
}) => (
  <div className={cx(CSS.margin.MT04, !end && margin, options)} styleName="container">
    {children}
  </div>
);

// Specify prop types and default values for props
TipContainer.propTypes = propTypes;
TipContainer.defaultProps = defaultProps;

// Module exports
export default TipContainer;
