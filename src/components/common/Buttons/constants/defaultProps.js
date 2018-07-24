// Module dependencies
import CSS from 'constants/string/css';

// Default props
export default {
  button: {
    block: false,
    button: 'secondary',
    disabled: false,
    handler: null,
    icon: null,
    link: '#',
    title: 'Button',
    type: 'button',
    visibility: false
  },
  toolbar: {
    alignItem: 'center',
    justifyContent: 'between',
    marginBottom: CSS.margin.MB04
  }
};
