// Base routes
const base = {
  surveys: '/surveys'
};

// Router paths
export default {
  root: '/',
  surveys: {
    base: base.surveys,
    new: `${base.surveys}/new`
  },
  users: {
    farewell: '/farewell',
    profile: '/profile',
    signin: '/signin',
    signup: '/signup',
    welcome: '/welcome'
  }
};
