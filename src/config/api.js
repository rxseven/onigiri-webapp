// API configuration
const API = {
  name: 'onigiri-api',
  host: process.env.REACT_APP_API_URL,
  routes: {
    users: '/users'
  }
};

export default {
  name: API.name,
  host: API.host,
  endpoints: {
    users: {
      base: API.routes.users,
      signup: `${API.routes.users}/signup`
    }
  }
};
