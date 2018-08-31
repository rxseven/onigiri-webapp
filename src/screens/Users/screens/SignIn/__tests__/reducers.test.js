// Module dependencies
import { fromJS } from 'immutable';
import { createStore } from 'redux';

// Helper functions
import { getMock } from 'tests/helpers/mock';

// Mock data
import mock from 'tests/mock';

// Action types
import {
  OAUTH_FACEBOOK_FAILURE,
  OAUTH_FACEBOOK_REQUEST,
  OAUTH_FACEBOOK_SUCCESS,
  OAUTH_GOOGLE_FAILURE,
  OAUTH_GOOGLE_REQUEST,
  OAUTH_GOOGLE_SUCCESS,
  OAUTH_FAILURE,
  OAUTH_REQUEST,
  SIGNIN_FAILURE,
  SIGNIN_REQUEST,
  SIGNIN_SUCCESS
} from 'data/session/types';
import { SIGNIN_RESET_UI } from '../types';

// Reducers and state
import combineReducers, {
  asynchronous as asyncReducer,
  stateShape,
  strategy as strategyReducer
} from '../reducers';

// Constants
const UNKNOWN = 'UNKNOWN';

// Create store
const store = createStore(combineReducers);

// Source data
const source = {
  state: {
    error: fromJS(mock.data.source.asynchronous.error),
    initial: {
      asynchronous: fromJS(stateShape.asynchronous),
      strategy: fromJS(stateShape.strategy)
    }
  },
  store: store.getState()
};

// Expected results
const expected = {
  state: {
    asynchronous: {
      post: {
        error: fromJS({
          ...stateShape.asynchronous,
          post: {
            ...stateShape.asynchronous.post,
            error: mock.data.source.asynchronous.error
          }
        }),
        failure: fromJS({
          ...stateShape.asynchronous,
          post: {
            ...stateShape.asynchronous.post,
            error: undefined
          }
        }),
        loading: fromJS({
          ...stateShape.asynchronous,
          post: {
            ...stateShape.asynchronous.post,
            loading: mock.data.source.asynchronous.loading
          }
        })
      }
    },
    strategy: {
      local: fromJS(mock.data.source.users.auth.strategy.local),
      oauth: fromJS(mock.data.source.users.auth.strategy.oauth)
    },
    domain: mock.data.initial.getIn(['screens', 'users', 'signin']),
    initial: {
      asynchronous: fromJS(stateShape.asynchronous),
      strategy: fromJS(stateShape.strategy)
    }
  }
};

// Generate mock data
const genMock = domain => getMock(source.store, expected.state.domain, domain);

// Unit tests
describe('screens/users/signin/reducers', () => {
  describe('Asynchronous', () => {
    describe('Initial state', () => {
      it('should return the initial state', () => {
        // Mock data
        const result = expected.state.initial.asynchronous;

        // Assertions
        expect(asyncReducer()).toEqual(result);
      });

      it('should not affect the current state', () => {
        // Mock data
        const state = undefined;
        const action = { type: UNKNOWN };
        const result = expected.state.initial.asynchronous;

        // Assertions
        expect(asyncReducer(state, action)).toEqual(result);
      });
    });

    describe('Update state', () => {
      describe('Authentication', () => {
        describe('Request', () => {
          it('should handle OAUTH_FACEBOOK_REQUEST action', () => {
            // Mock data
            const state = source.state.initial.asynchronous;
            const action = { type: OAUTH_FACEBOOK_REQUEST };
            const result = expected.state.asynchronous.post.loading;

            // Assertions
            expect(asyncReducer(state, action)).toEqual(result);
          });

          it('should handle OAUTH_GOOGLE_REQUEST action', () => {
            // Mock data
            const state = source.state.initial.asynchronous;
            const action = { type: OAUTH_GOOGLE_REQUEST };
            const result = expected.state.asynchronous.post.loading;

            // Assertions
            expect(asyncReducer(state, action)).toEqual(result);
          });

          it('should handle OAUTH_REQUEST action', () => {
            // Mock data
            const state = source.state.initial.asynchronous;
            const action = { type: OAUTH_REQUEST };
            const result = expected.state.asynchronous.post.loading;

            // Assertions
            expect(asyncReducer(state, action)).toEqual(result);
          });

          it('should handle SIGNIN_REQUEST action', () => {
            // Mock data
            const state = source.state.initial.asynchronous;
            const action = { type: SIGNIN_REQUEST };
            const result = expected.state.asynchronous.post.loading;

            // Assertions
            expect(asyncReducer(state, action)).toEqual(result);
          });
        });

        describe('Failure', () => {
          it('should handle OAUTH_FACEBOOK_FAILURE action', () => {
            // Mock data
            const state = source.state.initial.asynchronous;
            const payload = source.state.error;
            const action = { type: OAUTH_FACEBOOK_FAILURE, payload };
            const result = expected.state.asynchronous.post.error;

            // Assertions
            expect(asyncReducer(state, action)).toEqual(result);
          });

          it('should handle OAUTH_GOOGLE_FAILURE action', () => {
            // Mock data
            const state = source.state.initial.asynchronous;
            const payload = source.state.error;
            const action = { type: OAUTH_GOOGLE_FAILURE, payload };
            const result = expected.state.asynchronous.post.error;

            // Assertions
            expect(asyncReducer(state, action)).toEqual(result);
          });

          it('should handle OAUTH_FAILURE action', () => {
            // Mock data
            const state = source.state.initial.asynchronous;
            const action = { type: OAUTH_FAILURE };
            const result = expected.state.asynchronous.post.failure;

            // Assertions
            expect(asyncReducer(state, action)).toEqual(result);
          });

          it('should handle SIGNIN_FAILURE action', () => {
            // Mock data
            const state = source.state.initial.asynchronous;
            const payload = source.state.error;
            const action = { type: SIGNIN_FAILURE, payload };
            const result = expected.state.asynchronous.post.error;

            // Assertions
            expect(asyncReducer(state, action)).toEqual(result);
          });
        });

        describe('Success', () => {
          it('should handle OAUTH_FACEBOOK_SUCCESS action', () => {
            // Mock data
            const state = source.state.initial.asynchronous;
            const action = { type: OAUTH_FACEBOOK_SUCCESS };
            const result = expected.state.initial.asynchronous;

            // Assertions
            expect(asyncReducer(state, action)).toEqual(result);
          });

          it('should handle OAUTH_GOOGLE_SUCCESS action', () => {
            // Mock data
            const state = source.state.initial.asynchronous;
            const action = { type: OAUTH_GOOGLE_SUCCESS };
            const result = expected.state.initial.asynchronous;

            // Assertions
            expect(asyncReducer(state, action)).toEqual(result);
          });

          it('should handle SIGNIN_SUCCESS action', () => {
            // Mock data
            const state = source.state.initial.asynchronous;
            const action = { type: SIGNIN_SUCCESS };
            const result = expected.state.initial.asynchronous;

            // Assertions
            expect(asyncReducer(state, action)).toEqual(result);
          });
        });
      });

      describe('Reset state', () => {
        it('should handle SIGNIN_RESET_UI action', () => {
          // Mock data
          const state = source.state.initial.asynchronous;
          const action = { type: SIGNIN_RESET_UI };
          const result = expected.state.initial.asynchronous;

          // Assertions
          expect(asyncReducer(state, action)).toEqual(result);
        });
      });
    });
  });

  describe('Strategy', () => {
    describe('Initial state', () => {
      it('should return the initial state', () => {
        // Mock data
        const result = expected.state.initial.strategy;

        // Assertions
        expect(strategyReducer()).toEqual(result);
      });

      it('should not affect the current state', () => {
        // Mock data
        const state = undefined;
        const action = { type: UNKNOWN };
        const result = expected.state.initial.strategy;

        // Assertions
        expect(strategyReducer(state, action)).toEqual(result);
      });
    });

    describe('Update state', () => {
      describe('Authentication', () => {
        it('should handle SIGNIN_REQUEST action', () => {
          // Mock data
          const state = source.state.initial.strategy;
          const action = { type: SIGNIN_REQUEST };
          const result = expected.state.strategy.local;

          // Assertions
          expect(strategyReducer(state, action)).toEqual(result);
        });

        it('should handle OAUTH_REQUEST action', () => {
          // Mock data
          const state = source.state.initial.strategy;
          const action = { type: OAUTH_REQUEST };
          const result = expected.state.strategy.oauth;

          // Assertions
          expect(strategyReducer(state, action)).toEqual(result);
        });
      });

      describe('Reset state', () => {
        it('should handle SIGNIN_RESET_UI action', () => {
          // Mock data
          const state = source.state.initial.strategy;
          const action = { type: SIGNIN_RESET_UI };
          const result = expected.state.initial.strategy;

          // Assertions
          expect(strategyReducer(state, action)).toEqual(result);
        });
      });
    });
  });

  describe('combineReducers', () => {
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

    it('should have "ui.strategy" domain', () => {
      // Mock data
      const { state, result } = genMock(['ui', 'strategy']);

      // Assertions
      expect(state).toEqual(result);
    });
  });
});
