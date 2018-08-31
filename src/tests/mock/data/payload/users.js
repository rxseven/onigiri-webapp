// Source data
import source from '../source';

// Constants
const token = 'TOKEN';
const credential = {
  email: 'skywalker@rxseven.com',
  password: 'R2D2s'
};

// Payload
export default {
  credits: {
    get: {
      request: {
        id: 'tok_1D3H7l2eZvKYlo2CAHp0sanx',
        object: 'token',
        card: {
          id: 'card_1D3H7l2eZvKYlo2CUUreureB',
          object: 'card',
          address_city: null,
          address_country: null,
          address_line1: null,
          address_line1_check: null,
          address_line2: null,
          address_state: null,
          address_zip: null,
          address_zip_check: null,
          brand: 'Visa',
          country: 'US',
          cvc_check: null,
          dynamic_last4: null,
          exp_month: 8,
          exp_year: 2019,
          fingerprint: 'Xt5EWLLDS7FJjR1c',
          funding: 'credit',
          last4: '4242',
          metadata: {},
          name: null,
          tokenization_method: null
        },
        client_ip: null,
        created: 1535262561,
        livemode: false,
        type: 'card',
        used: false
      },
      response: source.users.credits
    },
    update: {
      request: undefined,
      response: {
        credits: { balance: 5 },
        id: '5ae46e3c40ea63072f8a1c41'
      }
    }
  },
  info: {
    request: undefined,
    response: source.users.info
  },
  oauth: {
    request: { accessToken: token },
    response: source.users.info
  },
  payments: {
    checkout: {
      request: { token },
      response: source.users.credits
    }
  },
  profile: {
    request: undefined,
    response: source.users.profile.data
  },
  signin: {
    request: credential,
    response: source.users.info
  },
  signup: {
    request: {
      ...credential,
      firstName: 'Luke',
      lastName: 'Skywalker'
    },
    response: source.users.info
  }
};
