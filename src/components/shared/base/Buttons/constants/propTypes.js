// Module dependencies
import PropTypes from 'prop-types';
import exact from 'prop-types-exact';

// Prop types
export default exact({
  button: {
    button: PropTypes.string,
    children: PropTypes.node,
    disabled: PropTypes.bool,
    handler: PropTypes.func,
    icon: PropTypes.string,
    link: PropTypes.PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    size: PropTypes.string,
    title: PropTypes.string,
    type: PropTypes.string,
    visibility: PropTypes.bool
  }
});
