// Module dependencies
import { fromJS } from 'immutable';
import { createStore } from 'redux';

// Helper functions
import { getMock } from 'tests/helpers/mock';

// Mock data
import mock from 'tests/mock';

// Action types
import { SIGNUP_FAILURE, SIGNUP_REQUEST, SIGNUP_SUCCESS } from 'data/session/types';
import { SIGNUP_RESET_UI } from '../types';

// Reducers and state
import combineReducers, { asynchronous as asyncReducer, stateShape } from '../reducers';

// Constants
const UNKNOWN = 'UNKNOWN';

// Create store
const store = createStore(combineReducers);

// Source data
const source = {
  state: {
    error: fromJS(mock.data.source.asynchronous.error),
    initial: fromJS(stateShape)
  },
  store: store.getState()
};

// Expected results
const expected = {
  state: {
    asynchronous: {
      post: {
        error: fromJS({
          ...stateShape,
          post: {
            ...stateShape.post,
            error: mock.data.source.asynchronous.error
          }
        }),
        loading: fromJS({
          ...stateShape,
          post: {
            ...stateShape.post,
            loading: mock.data.source.asynchronous.loading
          }
        })
      }
    },
    domain: mock.data.initial.getIn(['screens', 'users', 'signup']),
    initial: fromJS(stateShape)
  }
};

// Generate mock data
const genMock = domain => getMock(source.store, expected.state.domain, domain);

// Unit tests
describe('screens/users/signup/reducers', () => {
  describe('Asynchronous', () => {
    describe('Initial state', () => {
      it('should return the initial state', () => {
        // Mock data
        const result = expected.state.initial;

        // Assertions
        expect(asyncReducer()).toEqual(result);
      });

      it('should not affect the current state', () => {
        // Mock data
        const state = undefined;
        const action = { type: UNKNOWN };
        const result = expected.state.initial;

        // Assertions
        expect(asyncReducer(state, action)).toEqual(result);
      });
    });

    describe('Update state', () => {
      describe('Sign-up', () => {
        it('should handle SIGNUP_REQUEST action', () => {
          // Mock data
          const state = source.state.initial.asynchronous;
          const action = { type: SIGNUP_REQUEST };
          const result = expected.state.asynchronous.post.loading;

          // Assertions
          expect(asyncReducer(state, action)).toEqual(result);
        });

        it('should handle SIGNUP_FAILURE action', () => {
          // Mock data
          const state = source.state.initial.asynchronous;
          const payload = source.state.error;
          const action = { type: SIGNUP_FAILURE, payload };
          const result = expected.state.asynchronous.post.error;

          // Assertions
          expect(asyncReducer(state, action)).toEqual(result);
        });

        it('should handle SIGNUP_SUCCESS action', () => {
          // Mock data
          const state = source.state.initial.asynchronous;
          const action = { type: SIGNUP_SUCCESS };
          const result = expected.state.initial;

          // Assertions
          expect(asyncReducer(state, action)).toEqual(result);
        });
      });

      describe('Reset state', () => {
        it('should handle SIGNUP_RESET_UI action', () => {
          // Mock data
          const state = source.state.initial.asynchronous;
          const action = { type: SIGNUP_RESET_UI };
          const result = expected.state.initial;

          // Assertions
          expect(asyncReducer(state, action)).toEqual(result);
        });
      });
    });
  });

  describe('combineReducers', () => {
    it('should have "ui" domain', () => {
      // Mock data
      const { state, result } = genMock(['ui2']);

      // Assertions
      expect(state).toEqual(result);
    });

    it('should have "ui.asynchronous" domain', () => {
      // Mock data
      const { state, result } = genMock(['ui', 'asynchronous']);

      // Assertions
      expect(state).toEqual(result);
    });
  });
});
