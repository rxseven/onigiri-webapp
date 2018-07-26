// Module dependencies
import cx from 'classnames';
import PropTypes from 'prop-types';
import exact from 'prop-types-exact';
import React from 'react';

// Companion files
import './styles.scss';

// Declare prop types and default props
const propTypes = exact({
  children: PropTypes.node.isRequired,
  end: PropTypes.bool
});

const defaultProps = {
  end: false
};

// Component
const FormGroup = ({ children, end }) => (
  <div className="form-group" styleName={cx(end && 'end')}>
    {children}
  </div>
);

// Specify prop types and default values for props
FormGroup.propTypes = propTypes;
FormGroup.defaultProps = defaultProps;

// Module exports
export default FormGroup;
