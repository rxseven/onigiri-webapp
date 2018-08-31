// Dummy data
import users from '../dummy/users';

// Domain
export default {
  profile: {
    data: {
      profile: users.profile.data
    },
    ui: users.profile.ui
  },
  signin: users.auth.signin,
  signup: users.auth.signup
};
