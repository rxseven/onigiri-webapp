// Module dependencies
import PropTypes from 'prop-types';

// Prop types
export default {
  model: {
    asynchronous: PropTypes.shape({
      error: PropTypes.oneOfType([
        PropTypes.shape({
          message: PropTypes.string
        }),
        PropTypes.bool
      ]),
      loading: PropTypes.bool
    })
  },
  pattern: {
    asynchronous: props => ({
      state: PropTypes.shape({
        ui: PropTypes.shape({
          asynchronous: PropTypes.shape({
            error: PropTypes.oneOfType([
              PropTypes.shape({
                message: PropTypes.string
              }),
              PropTypes.bool
            ]),
            loading: PropTypes.bool
          })
        })
      })
    })
  },
  wrapper: {
    asynchronous: props => ({
      state: PropTypes.shape({
        ui: PropTypes.shape({
          asynchronous: PropTypes.shape({ ...props })
        })
      })
    })
  }
};
