// Module dependencies
import { fromJS } from 'immutable';

// Mock data
import mock from 'tests/mock';

// Action types
import { SIGNOUT_FAILURE, SIGNOUT_REQUEST, SIGNOUT_SUCCESS, UNKNOWN } from 'data/session/types';

// Reducers and state
import { asynchronous as asyncReducer, initialState, stateShape } from '../reducers';

// Input data
const data = {
  asynchronous: {
    error: fromJS(mock.data.source.asynchronous.error),
    initial: initialState
  }
};

// Expected results
const expected = {
  asynchronous: {
    error: fromJS({
      ...stateShape,
      signout: {
        ...stateShape.signout,
        error: mock.data.source.asynchronous.error
      }
    }),
    initial: initialState,
    loading: fromJS({
      ...stateShape,
      signout: {
        ...stateShape.signout,
        loading: true
      }
    })
  }
};

// Unit tests
describe('data/interfaces/session', () => {
  describe('Initial state', () => {
    it('should return the initial state', () => {
      // Mock data
      const result = expected.asynchronous.initial;

      // Assertions
      expect(asyncReducer()).toEqual(result);
    });

    it('should not affect the current state', () => {
      // Mock data
      const state = undefined;
      const action = { type: UNKNOWN };
      const result = expected.asynchronous.initial;

      // Assertions
      expect(asyncReducer(state, action)).toEqual(result);
    });
  });

  describe('Update state', () => {
    describe('Sign-out', () => {
      it('should handle SIGNOUT_REQUEST action', () => {
        // Mock data
        const state = data.asynchronous.initial;
        const action = { type: SIGNOUT_REQUEST };
        const result = expected.asynchronous.loading;

        // Assertions
        expect(asyncReducer(state, action)).toEqual(result);
      });

      it('should handle SIGNOUT_FAILURE action', () => {
        // Mock data
        const state = data.asynchronous.initial;
        const payload = data.asynchronous.error;
        const action = { type: SIGNOUT_FAILURE, payload };
        const result = expected.asynchronous.error;

        // Assertions
        expect(asyncReducer(state, action)).toEqual(result);
      });

      it('should handle SIGNOUT_SUCCESS action', () => {
        // Mock data
        const state = data.asynchronous.initial;
        const action = { type: SIGNOUT_SUCCESS };
        const result = expected.asynchronous.initial;

        // Assertions
        expect(asyncReducer(state, action)).toEqual(result);
      });
    });
  });
});
