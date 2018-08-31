// Module dependencies
import { fromJS } from 'immutable';

// Mock data
import mock from 'tests/mock';

// Reducers and state
import reducer, { initialState, setCredits } from '../reducers';

// Action types
import {
  CHECKOUT_FAILURE,
  CHECKOUT_REQUEST,
  CHECKOUT_SUCCESS,
  CREDITS_GET_FAILURE,
  CREDITS_GET_REQUEST,
  CREDITS_GET_SUCCESS,
  CREDITS_UPDATE,
  USER_RESET
} from '../types';

// Constants
const UNKNOWN = 'UNKNOWN';

// Source data
const source = {
  payload: {
    credits: fromJS(mock.data.payload.users.credits.get.response)
  },
  state: {
    balance: fromJS(mock.data.source.users.credits.balance),
    credits: fromJS(mock.data.source.users.credits)
  }
};

// Expected results
const expected = {
  state: {
    credits: {
      current: fromJS(mock.data.source.users.credits),
      updated: fromJS({
        ...mock.data.source.users.credits,
        balance: mock.data.payload.users.credits.get.response.balance
      })
    },
    initial: initialState
  }
};

// Unit tests
describe('data/credits/reducers', () => {
  describe('Set credits state', () => {
    describe('setCredits', () => {
      it('should return the correct credits state', () => {
        // Mock data
        const state = initialState;
        const payload = source.state.credits;
        const result = expected.state.credits.current;

        // Assertions
        expect(setCredits(state, payload)).toEqual(result);
      });
    });
  });

  describe('Initial state', () => {
    it('should return the initial state', () => {
      // Mock data
      const result = expected.state.initial;

      // Assertions
      expect(reducer()).toEqual(result);
    });

    it('should not affect the current state', () => {
      // Mock data
      const state = undefined;
      const action = { type: UNKNOWN };
      const result = expected.state.initial;

      // Assertions
      expect(reducer(state, action)).toEqual(result);
    });
  });

  describe('Update state', () => {
    describe('Checkout', () => {
      it('should handle CHECKOUT_REQUEST action', () => {
        // Mock data
        const state = initialState;
        const action = { type: CHECKOUT_REQUEST };
        const result = expected.state.initial;

        // Assertions
        expect(reducer(state, action)).toEqual(result);
      });

      it('should handle CHECKOUT_FAILURE action', () => {
        // Mock data
        const state = initialState;
        const action = { type: CHECKOUT_FAILURE };
        const result = expected.state.initial;

        // Assertions
        expect(reducer(state, action)).toEqual(result);
      });

      it('should handle CHECKOUT_SUCCESS action', () => {
        // Mock data
        const state = initialState;
        const payload = source.state.credits;
        const action = { type: CHECKOUT_SUCCESS, payload };
        const result = expected.state.credits.current;

        // Assertions
        expect(reducer(state, action)).toEqual(result);
      });
    });

    describe('Get credits', () => {
      it('should handle CREDITS_GET_REQUEST action', () => {
        // Mock data
        const state = initialState;
        const action = { type: CREDITS_GET_REQUEST };
        const result = expected.state.initial;

        // Assertions
        expect(reducer(state, action)).toEqual(result);
      });

      it('should handle CREDITS_GET_FAILURE action', () => {
        // Mock data
        const state = initialState;
        const action = { type: CREDITS_GET_FAILURE };
        const result = expected.state.initial;

        // Assertions
        expect(reducer(state, action)).toEqual(result);
      });

      it('should handle CREDITS_GET_SUCCESS action', () => {
        // Mock data
        const state = initialState;
        const payload = source.state.credits;
        const action = { type: CREDITS_GET_SUCCESS, payload };
        const result = expected.state.credits.current;

        // Assertions
        expect(reducer(state, action)).toEqual(result);
      });
    });

    describe('Update credits', () => {
      it('should handle CREDITS_UPDATE action', () => {
        // Mock data
        const state = source.state.credits;
        const payload = source.payload.credits;
        const action = { type: CREDITS_UPDATE, payload };
        const result = expected.state.credits.updated;

        // Assertions
        expect(reducer(state, action)).toEqual(result);
      });
    });

    describe('Reset state', () => {
      it('should handle USER_RESET action', () => {
        // Mock data
        const state = initialState;
        const action = { type: USER_RESET };
        const result = expected.state.initial;

        // Assertions
        expect(reducer(state, action)).toEqual(result);
      });
    });
  });
});
