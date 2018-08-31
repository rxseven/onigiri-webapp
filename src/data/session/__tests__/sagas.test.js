// Module dependencies
import { fromJS } from 'immutable';
import { testSaga } from 'redux-saga-test-plan';

// Helper functions
import authHelper from 'helpers/authentication';
import { getError } from 'helpers/state';
import { callFunction } from 'helpers/utilities';
import { genData, genError } from 'tests/helpers/mock';

// Mock data
import mock from 'tests/mock';

// Services
import * as usersService from 'services/users';

// Sagas
import { deleteUser, getUser, oauthFacebook, oauthGoogle, signIn, signOut, signUp } from '../sagas';

// Action creators
import * as actions from '../actions';

// Source data
const source = {
  token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9',
  user: mock.data.source.users.info
};

// Unit tests
describe('data/session/sagas', () => {
  describe('Delete user account', () => {
    describe('deleteUser', () => {
      it('should delete user account and update the application state correctly', () => {
        // Mock functions
        const callback = jest.fn();

        // Assertions
        testSaga(deleteUser, { callback })
          // Start an assertion
          .next()

          // Inform reducers that the request started
          .put(actions.deleteUserRequest())
          .next()

          // Delete the current user account
          .call(usersService.deleteUser)
          .next()

          // Inform reducers that the request finished successfully
          .put(actions.deleteUserSuccess())
          .next()
          .put(actions.resetUser())
          .next()

          // Reset the current user session
          .call(authHelper.reset)
          .next()

          // Execute a callback
          .call(callFunction, callback)
          .next()

          // Done
          .isDone();
      });

      it('should handle failure case and update the application state correctly', () => {
        // Mock functions
        const callback = jest.fn();

        // Mock data
        const response = {
          response: {
            data: {
              error: { message: 'Something went wrong!' }
            },
            status: 422
          }
        };

        const data = genError(response);

        // Assertions
        testSaga(deleteUser, { callback })
          // Start an assertion
          .next()

          // Create a fake error
          .throw(response)

          // Convert plain JavaScript into Immutable object
          .call(fromJS, getError(data.plain))
          .next(data.immutable)

          // Inform reducers that the request failed
          .put(actions.deleteUserFailure(data.immutable))
          .next();
      });
    });
  });

  describe('Get user info', () => {
    describe('getUser', () => {
      it('should get user info and update the application state correctly', () => {
        // Mock data
        const response = {
          data: source.user
        };

        const data = genData(response.data);

        // Assertions
        testSaga(getUser)
          // Start an assertion
          .next()

          // Inform reducers that the request started
          .put(actions.getUserRequest())
          .next()

          // Get user info
          .call(usersService.getUser)

          // Retrieve data in a response and transform to an appropriate format
          .next(response)

          // Normalize data and convert plain JavaScript into Immutable object
          .call(fromJS, data.plain)
          .next(data.immutable)

          // Inform reducers that the request finished successfully
          .put(actions.getUserSuccess(data.immutable))
          .next()

          // Done
          .isDone();
      });

      it('should handle failure case and update the application state correctly', () => {
        // Mock data
        const response = {
          response: {
            data: 'Unauthorized',
            status: 401
          }
        };

        // Assertions
        testSaga(getUser)
          // Start an assertion
          .next()

          // Create a fake error
          .throw(response)

          // If unauthorized, remove an access token
          .call(authHelper.verify, 401)
          .next()

          // Inform reducers that the request failed
          .put(actions.getUserFailure());
      });
    });
  });

  describe('Sign in with Facebook', () => {
    describe('oauthFacebook', () => {
      it('should authenticate a user with Facebook account and update the application state correctly', () => {
        // Mock functions
        const callback = jest.fn();

        // Mock data
        const payload = {
          accessToken: 'mw4hbGciOiJ9jd59NiIsInR5cCI6Ikp02375'
        };

        const response = {
          data: {
            token: source.token,
            user: source.user
          },
          status: 201
        };

        const data = genData(response.data.user);

        // Assertions
        testSaga(oauthFacebook, { callback, payload })
          // Start an assertion
          .next()

          // Inform reducers that the request started
          .put(actions.oauthFacebookRequest())
          .next()

          // Sign in a user
          .call(usersService.oauthFacebook, payload.accessToken)

          // Retrieve data in a response and transform to an appropriate format
          .next(response)

          // Normalize data and convert plain JavaScript into Immutable object
          .call(fromJS, data.plain)
          .next(data.immutable)

          // Inform reducers that the request finished successfully
          .put(actions.oauthFacebookSuccess(data.immutable))
          .next()

          // Create a user session
          .call(authHelper.authorize, response.data.token)
          .next()

          // Execute a callback
          .call(callback, response.status)
          .next()

          // Done
          .isDone();
      });

      it('should handle failure case and update the application state correctly', () => {
        // Mock functions
        const callback = jest.fn();

        // Mock data
        const payload = undefined;

        const response = {
          response: {
            data: 'This email is already in use.',
            status: 403
          }
        };

        const data = genError(response);

        // Assertions
        testSaga(oauthFacebook, { callback, payload })
          // Start an assertion
          .next()

          // Create a fake error
          .throw(response)

          // Convert plain JavaScript into Immutable object
          .call(fromJS, getError(data.plain))
          .next(data.immutable)

          // Inform reducers that the request failed
          .put(actions.oauthFacebookFailure());
      });
    });
  });

  describe('Sign in with Google', () => {
    describe('oauthGoogle', () => {
      it('should authenticate a user with Google account and update the application state correctly', () => {
        // Mock functions
        const callback = jest.fn();

        // Mock data
        const payload = {
          accessToken: 'mw4hbGciOiJ9jd59NiIsInR5cCI6Ikp02375'
        };

        const response = {
          data: {
            token: source.token,
            user: source.user
          },
          status: 201
        };

        const data = genData(response.data.user);

        // Assertions
        testSaga(oauthGoogle, { callback, payload })
          // Start an assertion
          .next()

          // Inform reducers that the request started
          .put(actions.oauthGoogleRequest())
          .next()

          // Sign in a user
          .call(usersService.oauthGoogle, payload.accessToken)

          // Retrieve data in a response and transform to an appropriate format
          .next(response)

          // Normalize data and convert plain JavaScript into Immutable object
          .call(fromJS, data.plain)
          .next(data.immutable)

          // Inform reducers that the request finished successfully
          .put(actions.oauthGoogleSuccess(data.immutable))
          .next()

          // Create a user session
          .call(authHelper.authorize, response.data.token)
          .next()

          // Execute a callback
          .call(callback, response.status)
          .next()

          // Done
          .isDone();
      });

      it('should handle failure case and update the application state correctly', () => {
        // Mock functions
        const callback = jest.fn();

        // Mock data
        const payload = undefined;

        const response = {
          response: {
            data: 'This email is already in use.',
            status: 403
          }
        };

        const data = genError(response);

        // Assertions
        testSaga(oauthGoogle, { callback, payload })
          // Start an assertion
          .next()

          // Create a fake error
          .throw(response)

          // Convert plain JavaScript into Immutable object
          .call(fromJS, getError(data.plain))
          .next(data.immutable)

          // Inform reducers that the request failed
          .put(actions.oauthGoogleFailure());
      });
    });
  });

  describe('Sign in', () => {
    describe('signIn', () => {
      it('should sign in a user with password-based and update the application state correctly', () => {
        // Mock functions
        const callback = jest.fn();

        // Mock data
        const payload = {
          credentials: fromJS({
            email: 'skywalker@rxseven.com',
            password: 'R2D2s'
          })
        };

        const response = {
          data: {
            token: source.token,
            user: source.user
          }
        };

        const data = genData(response.data.user);

        // Assertions
        testSaga(signIn, { callback, payload })
          // Start an assertion
          .next()

          // Inform reducers that the request started
          .put(actions.signInRequest())
          .next()

          // Sign in a user
          .call(usersService.signIn, payload.credentials.toJS())

          // Retrieve data in a response and transform to an appropriate format
          .next(response)

          // Normalize data and convert plain JavaScript into Immutable object
          .call(fromJS, data.plain)
          .next(data.immutable)

          // Inform reducers that the request finished successfully
          .put(actions.signInSuccess(data.immutable))
          .next()

          // Create a user session
          .call(authHelper.authorize, response.data.token)
          .next()

          // Execute a callback
          .call(callFunction, callback)
          .next()

          // Done
          .isDone();
      });

      it('should handle failure case and update the application state correctly', () => {
        // Mock functions
        const callback = jest.fn();

        // Mock data
        const payload = undefined;

        const response = {
          response: {
            data: 'You have entered incorrect password',
            status: 401
          }
        };

        const data = genError(response);

        // Assertions
        testSaga(signIn, { callback, payload })
          // Start an assertion
          .next()

          // Create a fake error
          .throw(response)

          // Convert plain JavaScript into Immutable object
          .call(fromJS, getError(data.plain))
          .next(data.immutable)

          // Inform reducers that the request failed
          .put(actions.signInFailure());
      });
    });
  });

  describe('Sign out', () => {
    describe('signOut', () => {
      it('should reset a user session and update the application state correctly', () => {
        // Mock functions
        const callback = jest.fn();

        // Assertions
        testSaga(signOut, { callback })
          // Start an assertion
          .next()

          // Inform reducers that the request started
          .put(actions.signOutRequest())
          .next()

          // Sign out the current user
          .call(usersService.signOut)
          .next()

          // Inform reducers that the request finished successfully
          .put(actions.signOutSuccess())
          .next()

          // Clean up session state
          .put(actions.resetUser())
          .next()

          // Reset the current user session
          .call(authHelper.reset)
          .next()

          // Execute a callback
          .call(callFunction, callback)
          .next()

          // Done
          .isDone();
      });

      it('should handle failure case and update the application state correctly', () => {
        // Mock functions
        const callback = jest.fn();

        const response = {
          response: {
            data: 'Internal server error',
            status: 500
          }
        };

        const data = genError(response);

        // Assertions
        testSaga(signOut, { callback })
          // Start an assertion
          .next()

          // Create a fake error
          .throw(response)

          // Convert plain JavaScript into Immutable object
          .call(fromJS, getError(data.plain))
          .next(data.immutable)

          // Inform reducers that the request failed
          .put(actions.signOutFailure());
      });
    });
  });

  describe('Sign up', () => {
    describe('signUp', () => {
      it('should create a password-based account and update the application state correctly', () => {
        // Mock functions
        const callback = jest.fn();

        // Mock data
        const payload = {
          credentials: fromJS({
            email: 'skywalker@rxseven.com',
            firstName: 'Luke',
            lastName: 'Skywalker',
            password: 'R2D2s',
            passwordConfirm: 'R2D2s'
          })
        };

        const response = {
          data: {
            token: source.token,
            user: source.user
          }
        };

        const data = genData(response.data.user);

        // Assertions
        testSaga(signUp, { callback, payload })
          // Start an assertion
          .next()

          // Inform reducers that the request started
          .put(actions.signUpRequest())
          .next()

          // Create a password-based account
          .call(usersService.signUp, payload.credentials.toJS())

          // Retrieve data in a response and transform to an appropriate format
          .next(response)

          // Normalize data and convert plain JavaScript into Immutable object
          .call(fromJS, data.plain)
          .next(data.immutable)

          // Inform reducers that the request finished successfully
          .put(actions.signUpSuccess(data.immutable))
          .next()

          // Create a user session
          .call(authHelper.authorize, response.data.token)
          .next()

          // Execute a callback
          .call(callFunction, callback)
          .next()

          // Done
          .isDone();
      });

      it('should handle failure case and update the application state correctly', () => {
        // Mock functions
        const callback = jest.fn();

        // Mock data
        const payload = undefined;

        const response = {
          response: {
            data: 'This email is already in use.',
            status: 403
          }
        };

        const data = genError(response);

        // Assertions
        testSaga(signUp, { callback, payload })
          // Start an assertion
          .next()

          // Create a fake error
          .throw(response)

          // Convert plain JavaScript into Immutable object
          .call(fromJS, getError(data.plain))
          .next(data.immutable)

          // Inform reducers that the request failed
          .put(actions.signUpFailure());
      });
    });
  });
});
