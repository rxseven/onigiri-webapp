// Module dependencies
import { fromJS } from 'immutable';

// Mock data
import mock from 'tests/mock';

// Action types
import { USER_RESET } from 'data/session/types';
import { PROFILE_GET_FAILURE, PROFILE_GET_REQUEST, PROFILE_GET_SUCCESS } from '../types';

// Reducers and state
import reducer, { initialState } from '../reducers';

// Constants
const UNKNOWN = 'UNKNOWN';

// Source data
const source = {
  state: {
    initial: initialState,
    profile: fromJS(mock.data.source.users.profile.data)
  }
};

// Expected results
const expected = {
  state: {
    initial: initialState,
    profile: fromJS(mock.data.source.users.profile.data)
  }
};

// Unit tests
describe('screens/users/profile/data/profile/reducers', () => {
  describe('Initial state', () => {
    it('should return the initial state', () => {
      // Assertions
      expect(reducer()).toBeNull();
    });

    it('should not affect the current state', () => {
      // Mock data
      const state = undefined;
      const action = { type: UNKNOWN };

      // Assertions
      expect(reducer(state, action)).toBeNull();
    });
  });

  describe('Update state', () => {
    describe('Get user profile', () => {
      it('should handle PROFILE_GET_REQUEST action', () => {
        // Mock data
        const state = source.state.initial;
        const action = { type: PROFILE_GET_REQUEST };

        // Assertions
        expect(reducer(state, action)).toBeNull();
      });

      it('should handle PROFILE_GET_FAILURE action', () => {
        // Mock data
        const state = source.state.initial;
        const action = { type: PROFILE_GET_FAILURE };

        // Assertions
        expect(reducer(state, action)).toBeNull();
      });

      it('should handle PROFILE_GET_SUCCESS action', () => {
        // Mock data
        const state = source.state.initial;
        const payload = source.state.profile;
        const action = { type: PROFILE_GET_SUCCESS, payload };
        const result = expected.state.profile;

        // Assertions
        expect(reducer(state, action)).toEqual(result);
      });

      it('should handle USER_RESET action', () => {
        // Mock data
        const state = source.state.initial;
        const action = { type: USER_RESET };

        // Assertions
        expect(reducer(state, action)).toBeNull();
      });
    });
  });
});
