// Constants
import STATE_MODELS from 'constants/models/state';

// Initial state
export default {
  credits: {
    balance: null,
    lastCheckout: null
  },
  features: {
    payments: {
      ui: {
        asynchronous: {
          post: STATE_MODELS.model.asynchronous
        }
      }
    }
  },
  interfaces: {
    modal: {
      isOpen: false
    },
    session: {
      asynchronous: {
        signout: STATE_MODELS.model.asynchronous
      }
    }
  },
  session: {
    authorization: false,
    loading: {
      signin: false,
      verify: false
    },
    user: null
  }
};
