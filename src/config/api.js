// API configuration
const API = {
  name: 'onigiri-api',
  host: process.env.REACT_APP_API_URL,
  routes: {
    payments: '/payments',
    surveys: '/surveys',
    users: '/users'
  }
};

export default {
  name: API.name,
  host: API.host,
  query: {
    surveys: {
      list: {
        limit: 5
      }
    }
  },
  endpoints: {
    payments: {
      base: API.routes.payments,
      checkout: `${API.routes.payments}/checkout`
    },
    surveys: {
      base: API.routes.surveys
    },
    users: {
      base: API.routes.users,
      credits: `${API.routes.users}/credits`,
      oauth: {
        facebook: `${API.routes.users}/oauth/facebook`
      },
      profile: `${API.routes.users}/profile`,
      signin: `${API.routes.users}/signin`,
      signout: `${API.routes.users}/signout`,
      signup: `${API.routes.users}/signup`
    }
  }
};
