// Constants
import STATE_MODELS from 'constants/models/state';

// Dummy data
export default {
  auth: {
    signin: {
      ui: {
        asynchronous: {
          post: STATE_MODELS.model.asynchronous
        },
        strategy: {
          type: 'local'
        }
      }
    },
    signup: {
      ui: {
        asynchronous: {
          post: STATE_MODELS.model.asynchronous
        }
      }
    },
    strategy: {
      local: { type: 'local' },
      oauth: { type: 'oauth' }
    }
  },
  credits: {
    balance: 15,
    lastCheckout: '2018-08-13T06:42:26.730Z'
  },
  info: {
    email: 'skywalker@rxseven.com',
    id: '5ae412c5b27d7c001410e46b',
    name: {
      firstName: 'Luke',
      lastName: 'Skywalker'
    },
    photo: {
      url: 'https://s.gravatar.com/avatar/ID?default=mm&size=200'
    }
  },
  profile: {
    data: {
      creationDate: '2018-04-28T06:19:36.170Z',
      email: 'skywalker@rxseven.com',
      gender: 'male',
      id: '"5ae412c5b27d7c001410e46b"',
      language: 'en_US',
      name: {
        firstName: 'Luke',
        lastName: 'Skywalker'
      },
      photo: {
        url: 'https://s.gravatar.com/avatar/ID?default=mm&size=200'
      },
      provider: 'local',
      role: 'tester',
      verified: false
    },
    ui: {
      asynchronous: {
        delete: {
          profile: {
            error: null,
            loading: false
          }
        },
        get: {
          credits: {
            error: null,
            loading: false
          },
          profile: {
            error: null,
            loading: false
          }
        },
        post: {
          checkout: {
            error: null,
            loading: false
          }
        }
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
