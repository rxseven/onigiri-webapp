// Mock data
import mock from 'tests/mock';

// Action creators and action types
import * as actions from '../actions';
import * as types from '../types';

// Unit tests
describe('data/session/actions', () => {
  describe('Delete user account', () => {
    describe('deleteUser', () => {
      it('should dispatch USER_DELETE action and callback function', () => {
        // Mock data
        const { callback } = mock.functions;
        const result = {
          callback,
          type: types.USER_DELETE
        };

        // Assertions
        expect(actions.deleteUser(callback)).toEqual(result);
      });
    });

    describe('deleteUserFailure', () => {
      it('should dispatch USER_DELETE_FAILURE action and payload', () => {
        // Mock data
        const { error } = mock.data.source.asynchronous;
        const result = {
          payload: error,
          type: types.USER_DELETE_FAILURE
        };

        // Assertions
        expect(actions.deleteUserFailure(error)).toEqual(result);
      });
    });

    describe('deleteUserRequest', () => {
      it('should dispatch USER_DELETE_REQUEST action', () => {
        // Mock data
        const result = {
          type: types.USER_DELETE_REQUEST
        };

        // Assertions
        expect(actions.deleteUserRequest()).toEqual(result);
      });
    });

    describe('deleteUserSuccess', () => {
      it('should dispatch USER_DELETE_SUCCESS action', () => {
        // Mock data
        const result = {
          type: types.USER_DELETE_SUCCESS
        };

        // Assertions
        expect(actions.deleteUserSuccess()).toEqual(result);
      });
    });
  });

  describe('Get user information', () => {
    describe('getUser', () => {
      it('should dispatch USER_GET action', () => {
        // Mock data
        const result = {
          type: types.USER_GET
        };

        // Assertions
        expect(actions.getUser()).toEqual(result);
      });
    });

    describe('getUserFailure', () => {
      it('should dispatch USER_GET_FAILURE action', () => {
        // Mock data
        const result = {
          type: types.USER_GET_FAILURE
        };

        // Assertions
        expect(actions.getUserFailure()).toEqual(result);
      });
    });

    describe('getUserRequest', () => {
      it('should dispatch USER_GET_REQUEST action', () => {
        // Mock data
        const result = {
          type: types.USER_GET_REQUEST
        };

        // Assertions
        expect(actions.getUserRequest()).toEqual(result);
      });
    });

    describe('getUserSuccess', () => {
      it('should dispatch USER_GET_SUCCESS action and payload', () => {
        // Mock data
        const data = mock.data.payload.users.info.response;
        const result = {
          payload: data,
          type: types.USER_GET_SUCCESS
        };

        // Assertions
        expect(actions.getUserSuccess(data)).toEqual(result);
      });
    });
  });

  describe('Sign-in with Facebook', () => {
    describe('oauthFacebook', () => {
      it('should dispatch OAUTH_FACEBOOK action, payload, and callback function', () => {
        // Mock data
        const { accessToken } = mock.data.payload.users.oauth.request;
        const { callback } = mock.functions;
        const result = {
          callback,
          payload: { accessToken },
          type: types.OAUTH_FACEBOOK
        };

        // Assertions
        expect(actions.oauthFacebook(accessToken, callback)).toEqual(result);
      });
    });

    describe('oauthFacebookFailure', () => {
      it('should dispatch OAUTH_FACEBOOK_FAILURE action and payload', () => {
        // Mock data
        const { error } = mock.data.source.asynchronous;
        const result = {
          payload: error,
          type: types.OAUTH_FACEBOOK_FAILURE
        };

        // Assertions
        expect(actions.oauthFacebookFailure(error)).toEqual(result);
      });
    });

    describe('oauthFacebookRequest', () => {
      it('should dispatch OAUTH_FACEBOOK_REQUEST action', () => {
        // Mock data
        const result = {
          type: types.OAUTH_FACEBOOK_REQUEST
        };

        // Assertions
        expect(actions.oauthFacebookRequest()).toEqual(result);
      });
    });

    describe('oauthFacebookSuccess', () => {
      it('should dispatch OAUTH_FACEBOOK_SUCCESS action and payload', () => {
        // Mock data
        const data = mock.data.payload.users.oauth.response;
        const result = {
          payload: data,
          type: types.OAUTH_FACEBOOK_SUCCESS
        };

        // Assertions
        expect(actions.oauthFacebookSuccess(data)).toEqual(result);
      });
    });
  });

  describe('Sign-in with Google', () => {
    describe('oauthGoogle', () => {
      it('should dispatch OAUTH_GOOGLE action, payload, and callback function', () => {
        // Mock data
        const { accessToken } = mock.data.payload.users.oauth.request;
        const { callback } = mock.functions;
        const result = {
          callback,
          payload: { accessToken },
          type: types.OAUTH_GOOGLE
        };

        // Assertions
        expect(actions.oauthGoogle(accessToken, callback)).toEqual(result);
      });
    });

    describe('oauthGoogleFailure', () => {
      it('should dispatch OAUTH_GOOGLE_FAILURE action and payload', () => {
        // Mock data
        const { error } = mock.data.source.asynchronous;
        const result = {
          payload: error,
          type: types.OAUTH_GOOGLE_FAILURE
        };

        // Assertions
        expect(actions.oauthGoogleFailure(error)).toEqual(result);
      });
    });

    describe('oauthGoogleRequest', () => {
      it('should dispatch OAUTH_GOOGLE_REQUEST action', () => {
        // Mock data
        const result = {
          type: types.OAUTH_GOOGLE_REQUEST
        };

        // Assertions
        expect(actions.oauthGoogleRequest()).toEqual(result);
      });
    });

    describe('oauthGoogleSuccess', () => {
      it('should dispatch OAUTH_GOOGLE_SUCCESS action and payload', () => {
        // Mock data
        const data = mock.data.payload.users.oauth.response;
        const result = {
          payload: data,
          type: types.OAUTH_GOOGLE_SUCCESS
        };

        // Assertions
        expect(actions.oauthGoogleSuccess(data)).toEqual(result);
      });
    });
  });

  describe('Sign-in with OAuth', () => {
    describe('oauthFailure', () => {
      it('should dispatch OAUTH_FAILURE action', () => {
        // Mock data
        const result = {
          type: types.OAUTH_FAILURE
        };

        // Assertions
        expect(actions.oauthFailure()).toEqual(result);
      });
    });

    describe('oauthRequest', () => {
      it('should dispatch OAUTH_REQUEST action', () => {
        // Mock data
        const result = {
          type: types.OAUTH_REQUEST
        };

        // Assertions
        expect(actions.oauthRequest()).toEqual(result);
      });
    });
  });

  describe('Reset user info', () => {
    describe('resetUser', () => {
      it('should dispatch USER_RESET action', () => {
        // Mock data
        const result = {
          type: types.USER_RESET
        };

        // Assertions
        expect(actions.resetUser()).toEqual(result);
      });
    });
  });

  describe('Sign-in', () => {
    describe('signIn', () => {
      it('should dispatch SIGNIN action, payload, and callback function', () => {
        // Mock data
        const credentials = mock.data.payload.users.signin.request;
        const { callback } = mock.functions;
        const result = {
          callback,
          payload: { credentials },
          type: types.SIGNIN
        };

        // Assertions
        expect(actions.signIn(credentials, callback)).toEqual(result);
      });
    });

    describe('signInFailure', () => {
      it('should dispatch SIGNIN_FAILURE action and payload', () => {
        // Mock data
        const { error } = mock.data.source.asynchronous;
        const result = {
          payload: error,
          type: types.SIGNIN_FAILURE
        };

        // Assertions
        expect(actions.signInFailure(error)).toEqual(result);
      });
    });

    describe('signInRequest', () => {
      it('should dispatch SIGNIN_REQUEST action', () => {
        // Mock data
        const result = {
          type: types.SIGNIN_REQUEST
        };

        // Assertions
        expect(actions.signInRequest()).toEqual(result);
      });
    });

    describe('signInSuccess', () => {
      it('should dispatch SIGNIN_SUCCESS action and payload', () => {
        // Mock data
        const data = mock.data.payload.users.signin.response;
        const result = {
          payload: data,
          type: types.SIGNIN_SUCCESS
        };

        // Assertions
        expect(actions.signInSuccess(data)).toEqual(result);
      });
    });
  });

  describe('Sign-out', () => {
    describe('signOut', () => {
      it('should dispatch SIGNOUT action and callback function', () => {
        // Mock data
        const { callback } = mock.functions;
        const result = {
          callback,
          type: types.SIGNOUT
        };

        // Assertions
        expect(actions.signOut(callback)).toEqual(result);
      });
    });

    describe('signOutFailure', () => {
      it('should dispatch SIGNOUT_FAILURE action and payload', () => {
        // Mock data
        const { error } = mock.data.source.asynchronous;
        const result = {
          payload: error,
          type: types.SIGNOUT_FAILURE
        };

        // Assertions
        expect(actions.signOutFailure(error)).toEqual(result);
      });
    });

    describe('signOutRequest', () => {
      it('should dispatch SIGNOUT_REQUEST action', () => {
        // Mock data
        const result = {
          type: types.SIGNOUT_REQUEST
        };

        // Assertions
        expect(actions.signOutRequest()).toEqual(result);
      });
    });

    describe('signOutSuccess', () => {
      it('should dispatch SIGNOUT_SUCCESS action', () => {
        // Mock data
        const result = {
          type: types.SIGNOUT_SUCCESS
        };

        // Assertions
        expect(actions.signOutSuccess()).toEqual(result);
      });
    });
  });

  describe('Sign-up', () => {
    describe('signUp', () => {
      it('should dispatch SIGNUP action, payload, and callback function', () => {
        // Mock data
        const credentials = mock.data.payload.users.signup.request;
        const { callback } = mock.functions;
        const result = {
          callback,
          payload: { credentials },
          type: types.SIGNUP
        };

        // Assertions
        expect(actions.signUp(credentials, callback)).toEqual(result);
      });
    });

    describe('signUpFailure', () => {
      it('should dispatch SIGNUP_FAILURE action and payload', () => {
        // Mock data
        const { error } = mock.data.source.asynchronous;
        const result = {
          payload: error,
          type: types.SIGNUP_FAILURE
        };

        // Assertions
        expect(actions.signUpFailure(error)).toEqual(result);
      });
    });

    describe('signUpRequest', () => {
      it('should dispatch SIGNUP_REQUEST action', () => {
        // Mock data
        const result = {
          type: types.SIGNUP_REQUEST
        };

        // Assertions
        expect(actions.signUpRequest()).toEqual(result);
      });
    });

    describe('signUpSuccess', () => {
      it('should dispatch SIGNUP_SUCCESS action and payload', () => {
        // Mock data
        const data = mock.data.payload.users.signup.response;
        const result = {
          payload: data,
          type: types.SIGNUP_SUCCESS
        };

        // Assertions
        expect(actions.signUpSuccess(data)).toEqual(result);
      });
    });
  });
});
