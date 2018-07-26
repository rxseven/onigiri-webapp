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
  container: {
    children: PropTypes.node.isRequired,
    end: PropTypes.bool,
    margin: PropTypes.string,
    options: PropTypes.string
  },
  header: {
    children: PropTypes.node.isRequired
  }
});

const defaultProps = {
  container: {
    end: false,
    margin: CSS.margin.MB04,
    options: null
  }
};

// Tip container
export const Tip = ({
  children, end, margin, options
}) => (
  <div className={cx(CSS.margin.MT04, !end && margin, options)} styleName="container">
    {children}
  </div>
);

// Tip header
export const TipHeader = ({ children }) => <h3 styleName="header">{children}</h3>;

// Specify prop types and default values for props
Tip.propTypes = propTypes.container;
TipHeader.propTypes = propTypes.header;

Tip.defaultProps = defaultProps.container;