// API configuration
const API = {
  name: 'onigiri-api',
  host: process.env.REACT_APP_API_URL,
  routes: {
    payments: '/payments',
    users: '/users'
  }
};

export default {
  name: API.name,
  host: API.host,
  endpoints: {
    payments: {
      base: API.routes.payments,
      checkout: `${API.routes.payments}/checkout`
    },
    users: {
      base: API.routes.users,
      credits: `${API.routes.users}/credits`,
      profile: `${API.routes.users}/profile`,
      signin: `${API.routes.users}/signin`,
      signout: `${API.routes.users}/signout`,
      signup: `${API.routes.users}/signup`
    }
  }
};
