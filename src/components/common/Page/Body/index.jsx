// Module dependencies
import PropTypes from 'prop-types';
import exact from 'prop-types-exact';

// Declare prop types
const propTypes = exact({
  children: PropTypes.node.isRequired
});

// Component
const Body = ({ children }) => children;

// Specify prop types
Body.propTypes = propTypes;

// Module exports
export default Body;
