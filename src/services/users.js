// Module dependencies
import ajax from '../helpers/ajax';

// Constants
import API from '../config/api';

// Sign-up, register new user account
export const signUp = ({
  email, firstName, lastName, password
}) =>
  ajax({
    auth: false,
    data: {
      email,
      firstName,
      lastName,
      password
    },
    method: 'post',
    url: API.endpoints.users.signup
  });
