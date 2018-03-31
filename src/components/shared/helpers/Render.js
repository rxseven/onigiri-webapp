// Module dependencies
import PropTypes from 'prop-types';
import exact from 'prop-types-exact';

// Declare prop types and default props
const propTypes = exact({
  children: PropTypes.node.isRequired,
  condition: PropTypes.any
});

const defaultProps = {
  condition: false
};

// Component
const Render = ({ children, condition }) => (condition ? children : null);

// Specify prop types and default values for props
Render.propTypes = propTypes;
Render.defaultProps = defaultProps;

// Module exports
export default Render;
