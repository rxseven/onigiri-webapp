// Module dependencies
import { fromJS } from 'immutable';

// State models
export default {
  immutable: {
    screen: fromJS({
      data: {},
      ui: {}
    })
  },
  model: {
    asynchronous: {
      error: null,
      loading: false
    }
  },
  pattern: {
    asynchronous: props => ({
      state: {
        ui: {
          asynchronous: {
            error: null,
            loading: false
          }
        }
      }
    })
  },
  wrapper: {
    asynchronous: props => ({
      state: {
        ui: {
          asynchronous: { ...props }
        }
      }
    })
  }
};
