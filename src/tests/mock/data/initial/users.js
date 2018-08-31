// Constants
import STATE_MODELS from 'constants/models/state';

// Source data
import source from '../source';

// Initial state
export default {
  profile: {
    data: {
      profile: null
    },
    ui: source.users.profile.ui
  },
  signin: {
    ui: {
      asynchronous: {
        post: STATE_MODELS.model.asynchronous
      },
      strategy: {
        type: null
      }
    }
  },
  signup: {
    ui: {
      asynchronous: {
        post: STATE_MODELS.model.asynchronous
      }
    }
  }
};
