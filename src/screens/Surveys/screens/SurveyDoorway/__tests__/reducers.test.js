// Module dependencies
import { fromJS } from 'immutable';
import { createStore } from 'redux';

// Helper functions
import { getMock } from 'tests/helpers/mock';

// Mock data
import mock from 'tests/mock';

// Action types
import {
  LANDING_GET_FAILURE,
  LANDING_GET_REQUEST,
  LANDING_GET_SUCCESS,
  LANDING_RESET_DATA
} from '../data/landing/types';

// Reducers and state
import combineReducers, {
  asynchronous as asyncReducer,
  initialState,
  stateShape
} from '../reducers';

// Constants
const UNKNOWN = 'UNKNOWN';

// Create store
const store = createStore(combineReducers);

// Source data
const source = {
  state: {
    error: fromJS(mock.data.source.asynchronous.error),
    initial: initialState
  },
  store: store.getState()
};

// Expected results
const expected = {
  state: {
    asynchronous: {
      get: {
        landing: {
          error: fromJS({
            ...stateShape,
            get: {
              ...stateShape.get,
              landing: {
                ...stateShape.get.landing,
                error: mock.data.source.asynchronous.error
              }
            }
          }),
          loading: fromJS({
            ...stateShape,
            get: {
              ...stateShape.get,
              landing: {
                ...stateShape.get.landing,
                loading: mock.data.source.asynchronous.loading
              }
            }
          })
        }
      }
    },
    domain: mock.data.initial.getIn(['screens', 'surveys', 'doorway']),
    initial: initialState
  }
};

// Generate mock data
const genMock = domain => getMock(source.store, expected.state.domain, domain);

// Unit tests
describe('screens/surveys/doorway/reducers', () => {
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
      describe('Get recipients', () => {
        it('should handle LANDING_GET_REQUEST action', () => {
          // Mock data
          const state = source.state.initial;
          const action = { type: LANDING_GET_REQUEST };
          const result = expected.state.asynchronous.get.landing.loading;

          // Assertions
          expect(asyncReducer(state, action)).toEqual(result);
        });

        it('should handle LANDING_GET_FAILURE action', () => {
          // Mock data
          const state = source.state.initial;
          const payload = source.state.error;
          const action = { type: LANDING_GET_FAILURE, payload };
          const result = expected.state.asynchronous.get.landing.error;

          // Assertions
          expect(asyncReducer(state, action)).toEqual(result);
        });

        it('should handle LANDING_GET_SUCCESS action', () => {
          // Mock data
          const state = source.state.initial;
          const action = { type: LANDING_GET_SUCCESS };
          const result = expected.state.initial;

          // Assertions
          expect(asyncReducer(state, action)).toEqual(result);
        });
      });

      describe('Reset state', () => {
        it('should handle LANDING_RESET_DATA action', () => {
          // Mock data
          const state = source.state.initial;
          const action = { type: LANDING_RESET_DATA };
          const result = expected.state.initial;

          // Assertions
          expect(asyncReducer(state, action)).toEqual(result);
        });
      });
    });
  });

  describe('combineReducers', () => {
    it('should have "data" domain', () => {
      // Mock data
      const { state, result } = genMock(['data']);

      // Assertions
      expect(state).toEqual(result);
    });

    it('should have "ui" domain', () => {
      // Mock data
      const { state, result } = genMock(['ui']);

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
