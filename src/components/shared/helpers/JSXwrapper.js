// Module dependencies
import PropTypes from 'prop-types';
import exact from 'prop-types-exact';

// Declare prop types
const propTypes = exact({
  children: PropTypes.node.isRequired
});

// Component
const JSXwrapper = ({ children }) => children;

// Specify prop types
JSXwrapper.propTypes = propTypes;

// Module exports
export default JSXwrapper;
