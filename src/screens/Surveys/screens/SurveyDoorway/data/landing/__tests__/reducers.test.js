// Module dependencies
import { fromJS } from 'immutable';

// Mock data
import mock from 'tests/mock';

// Action types
import {
  LANDING_GET_FAILURE,
  LANDING_GET_REQUEST,
  LANDING_GET_SUCCESS,
  LANDING_RESET_DATA
} from '../types';

// Reducers and state
import reducer, { initialState } from '../reducers';

// Constants
const UNKNOWN = 'UNKNOWN';

// Source data
const source = {
  payload: {
    landing: fromJS(mock.data.payload.surveys.item.landing.response)
  },
  state: {
    initial: initialState,
    landing: fromJS(mock.data.source.surveys.item.landing)
  }
};

// Expected results
const expected = {
  state: {
    initial: initialState,
    landing: fromJS(mock.data.source.surveys.item.landing)
  }
};

// Unit tests
describe('screens/surveys/doorway/data/landing/reducers', () => {
  describe('Initial state', () => {
    it('should return the initial state', () => {
      // Mock data
      const result = expected.state.initial;

      // Assertions
      expect(reducer()).toEqual(result);
    });

    it('should not affect the current state', () => {
      // Mock data
      const state = source.state.initial;
      const action = { type: UNKNOWN };
      const result = expected.state.initial;

      // Assertions
      expect(reducer(state, action)).toEqual(result);
    });
  });

  describe('Update state', () => {
    describe('Get landing page URI', () => {
      it('should handle LANDING_GET_REQUEST action', () => {
        // Mock data
        const state = source.state.initial;
        const action = { type: LANDING_GET_REQUEST };
        const result = expected.state.initial;

        // Assertions
        expect(reducer(state, action)).toEqual(result);
      });

      it('should handle LANDING_GET_FAILURE action', () => {
        // Mock data
        const state = source.state.initial;
        const action = { type: LANDING_GET_FAILURE };
        const result = expected.state.initial;

        // Assertions
        expect(reducer(state, action)).toEqual(result);
      });

      it('should handle LANDING_GET_SUCCESS action', () => {
        // Mock data
        const state = source.state.initial;
        const payload = source.payload.landing;
        const action = { type: LANDING_GET_SUCCESS, payload };
        const result = expected.state.landing;

        // Assertions
        expect(reducer(state, action)).toEqual(result);
      });
    });

    describe('Reset state', () => {
      it('should handle LANDING_RESET_DATA action', () => {
        // Mock data
        const state = source.state.initial;
        const action = { type: LANDING_RESET_DATA };
        const result = expected.state.initial;

        // Assertions
        expect(reducer(state, action)).toEqual(result);
      });
    });
  });
});
