// Module dependencies
import { fromJS } from 'immutable';

// Mock data
import mock from 'tests/mock';

// Action types
import { CHECKOUT_FAILURE, CHECKOUT_REQUEST, CHECKOUT_SUCCESS, UNKNOWN } from 'data/credits/types';
import { USER_RESET } from 'data/session/types';

// Reducers and state
import { asynchronous as asyncReducer, initialState, stateShape } from '../reducers';

// Source data
const source = {
  state: {
    error: fromJS(mock.data.source.asynchronous.error),
    initial: initialState
  }
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
    initial: fromJS(stateShape)
  }
};

// Unit tests
describe('data/features/payments', () => {
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
    describe('Checkout', () => {
      it('should handle CHECKOUT_REQUEST action', () => {
        // Mock data
        const state = source.state.initial;
        const action = { type: CHECKOUT_REQUEST };
        const result = expected.state.asynchronous.post.loading;

        // Assertions
        expect(asyncReducer(state, action)).toEqual(result);
      });

      it('should handle CHECKOUT_FAILURE action', () => {
        // Mock data
        const state = source.state.initial;
        const payload = source.state.error;
        const action = { type: CHECKOUT_FAILURE, payload };
        const result = expected.state.asynchronous.post.error;

        // Assertions
        expect(asyncReducer(state, action)).toEqual(result);
      });

      it('should handle CHECKOUT_SUCCESS action', () => {
        // Mock data
        const state = source.state.initial;
        const action = { type: CHECKOUT_SUCCESS };
        const result = expected.state.initial;

        // Assertions
        expect(asyncReducer(state, action)).toEqual(result);
      });
    });

    describe('Reset state', () => {
      it('should handle USER_RESET action', () => {
        // Mock data
        const state = source.state.initial;
        const action = { type: USER_RESET };
        const result = expected.state.initial;

        // Assertions
        expect(asyncReducer(state, action)).toEqual(result);
      });
    });
  });
});
