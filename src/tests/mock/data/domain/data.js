// Constants
import STATE_MODELS from 'constants/models/state';

// Dummy data
import interfaces from '../dummy/interfaces';
import users from '../dummy/users';

// Domain
export default {
  credits: {
    balance: 20,
    lastCheckout: '2018-08-13T06:42:26.730Z'
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
    modal: interfaces.modal,
    session: interfaces.session
  },
  session: {
    authorization: true,
    loading: {
      signin: false,
      verify: false
    },
    user: users.info
  }
};
