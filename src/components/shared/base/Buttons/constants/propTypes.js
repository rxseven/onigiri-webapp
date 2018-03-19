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
  },
  group: {
    children: PropTypes.node.isRequired,
    label: PropTypes.string,
    size: PropTypes.string
  },
  handler: {
    children: PropTypes.node,
    type: PropTypes.string
  },
  list: {
    active: PropTypes.bool,
    children: PropTypes.node.isRequired,
    handler: PropTypes.func,
    icon: PropTypes.string,
    title: PropTypes.string
  },
  set: {
    children: PropTypes.node.isRequired,
    options: PropTypes.string
  },
  toolbar: {
    alignItem: PropTypes.string,
    children: PropTypes.node.isRequired,
    justifyContent: PropTypes.string,
    label: PropTypes.string.isRequired,
    marginBottom: PropTypes.string
  }
});
