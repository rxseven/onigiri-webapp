// Mock data
import mock from 'tests/mock';

// Action creators and action types
import * as actions from '../actions';
import * as types from '../types';

// Unit tests
describe('screens/users/profile/data/profile/actions', () => {
  describe('Get user profile', () => {
    describe('getProfile', () => {
      it('should dispatch PROFILE_GET action', () => {
        // Mock data
        const result = {
          type: types.PROFILE_GET
        };

        // Assertions
        expect(actions.getProfile()).toEqual(result);
      });
    });

    describe('getProfileFailure', () => {
      it('should dispatch PROFILE_GET_FAILURE action and payload', () => {
        // Mock data
        const { error } = mock.data.source.asynchronous;
        const result = {
          payload: error,
          type: types.PROFILE_GET_FAILURE
        };

        // Assertions
        expect(actions.getProfileFailure(error)).toEqual(result);
      });
    });

    describe('getProfileRequest', () => {
      it('should dispatch PROFILE_GET_REQUEST action', () => {
        // Mock data
        const result = {
          type: types.PROFILE_GET_REQUEST
        };

        // Assertions
        expect(actions.getProfileRequest()).toEqual(result);
      });
    });

    describe('getProfileSuccess', () => {
      it('should dispatch PROFILE_GET_SUCCESS action and payload', () => {
        // Mock data
        const { data } = mock.data.payload.users.profile.response;
        const result = {
          payload: data,
          type: types.PROFILE_GET_SUCCESS
        };

        // Assertions
        expect(actions.getProfileSuccess(data)).toEqual(result);
      });
    });
  });
});
