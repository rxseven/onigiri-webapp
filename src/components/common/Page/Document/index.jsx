// Module dependencies
import PropTypes from 'prop-types';
import exact from 'prop-types-exact';

// Declare prop types
const propTypes = exact({
  children: PropTypes.node.isRequired
});

// Component
export const Document = ({ children }) => children;

// Specify prop types
Document.propTypes = propTypes;

// Module exports
export default Document;
