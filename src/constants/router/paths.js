// Base routes
const base = {
  surveys: '/surveys'
};

// Router paths
export default {
  root: '/',
  static: {
    about: '/about',
    privacy: '/privacy-policy',
    terms: '/terms'
  },
  surveys: {
    base: base.surveys,
    details: `${base.surveys}/:id`,
    list: base.surveys,
    new: `${base.surveys}/new`,
    success: `${base.surveys}/new/success`
  },
  users: {
    farewell: '/farewell',
    profile: '/profile',
    signin: '/signin',
    signup: '/signup',
    welcome: '/welcome'
  }
};
