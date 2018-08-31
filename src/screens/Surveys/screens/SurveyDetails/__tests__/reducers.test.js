// Module dependencies
import { fromJS } from 'immutable';
import { createStore } from 'redux';

// Helper functions
import { getMock } from 'tests/helpers/mock';

// Mock data
import mock from 'tests/mock';

// Action types
import {
  SURVEY_DELETE_FAILURE,
  SURVEY_DELETE_REQUEST,
  SURVEY_DELETE_SUCCESS
} from '../../../types';
import {
  RECIPIENTS_GET_FAILURE,
  RECIPIENTS_GET_REQUEST,
  RECIPIENTS_GET_SUCCESS,
  SURVEY_GET_FAILURE,
  SURVEY_GET_REQUEST,
  SURVEY_GET_SUCCESS,
  SURVEY_UPDATE_FAILURE,
  SURVEY_UPDATE_REQUEST,
  SURVEY_UPDATE_SUCCESS
} from '../data/survey/types';

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
      delete: {
        survey: {
          error: fromJS({
            ...stateShape,
            delete: {
              ...stateShape.delete,
              survey: {
                ...stateShape.delete.survey,
                error: mock.data.source.asynchronous.error
              }
            }
          }),
          loading: fromJS({
            ...stateShape,
            delete: {
              ...stateShape.delete,
              survey: {
                ...stateShape.delete.survey,
                loading: mock.data.source.asynchronous.loading
              }
            }
          })
        }
      },
      get: {
        recipients: {
          error: fromJS({
            ...stateShape,
            get: {
              ...stateShape.get,
              recipients: {
                ...stateShape.get.recipients,
                error: mock.data.source.asynchronous.error
              }
            }
          }),
          loading: fromJS({
            ...stateShape,
            get: {
              ...stateShape.get,
              recipients: {
                ...stateShape.get.recipients,
                loading: mock.data.source.asynchronous.loading
              }
            }
          })
        },
        survey: {
          error: fromJS({
            ...stateShape,
            get: {
              ...stateShape.get,
              survey: {
                ...stateShape.get.survey,
                error: mock.data.source.asynchronous.error
              }
            }
          }),
          loading: fromJS({
            ...stateShape,
            get: {
              ...stateShape.get,
              survey: {
                ...stateShape.get.survey,
                loading: mock.data.source.asynchronous.loading
              }
            }
          })
        }
      },
      patch: {
        survey: {
          error: fromJS({
            ...stateShape,
            patch: {
              ...stateShape.patch,
              survey: {
                ...stateShape.patch.survey,
                error: mock.data.source.asynchronous.error
              }
            }
          }),
          loading: fromJS({
            ...stateShape,
            patch: {
              ...stateShape.patch,
              survey: {
                ...stateShape.patch.survey,
                loading: mock.data.source.asynchronous.loading
              }
            }
          })
        }
      }
    },
    domain: mock.data.initial.getIn(['screens', 'surveys', 'details']),
    initial: initialState
  }
};

// Generate mock data
const genMock = domain => getMock(source.store, expected.state.domain, domain);

// Unit tests
describe('screens/surveys/details/reducers', () => {
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
        it('should handle RECIPIENTS_GET_REQUEST action', () => {
          // Mock data
          const state = source.state.initial;
          const action = { type: RECIPIENTS_GET_REQUEST };
          const result = expected.state.asynchronous.get.recipients.loading;

          // Assertions
          expect(asyncReducer(state, action)).toEqual(result);
        });

        it('should handle RECIPIENTS_GET_FAILURE action', () => {
          // Mock data
          const state = source.state.initial;
          const payload = source.state.error;
          const action = { type: RECIPIENTS_GET_FAILURE, payload };
          const result = expected.state.asynchronous.get.recipients.error;

          // Assertions
          expect(asyncReducer(state, action)).toEqual(result);
        });

        it('should handle RECIPIENTS_GET_SUCCESS action', () => {
          // Mock data
          const state = source.state.initial;
          const action = { type: RECIPIENTS_GET_SUCCESS };
          const result = expected.state.initial;

          // Assertions
          expect(asyncReducer(state, action)).toEqual(result);
        });
      });

      describe('Delete survey', () => {
        it('should handle SURVEY_DELETE_REQUEST action', () => {
          // Mock data
          const state = source.state.initial;
          const action = { type: SURVEY_DELETE_REQUEST };
          const result = expected.state.asynchronous.delete.survey.loading;

          // Assertions
          expect(asyncReducer(state, action)).toEqual(result);
        });

        it('should handle SURVEY_DELETE_FAILURE action', () => {
          // Mock data
          const state = source.state.initial;
          const payload = source.state.error;
          const action = { type: SURVEY_DELETE_FAILURE, payload };
          const result = expected.state.asynchronous.delete.survey.error;

          // Assertions
          expect(asyncReducer(state, action)).toEqual(result);
        });

        it('should handle SURVEY_DELETE_SUCCESS action', () => {
          // Mock data
          const state = source.state.initial;
          const action = { type: SURVEY_DELETE_SUCCESS };
          const result = expected.state.initial;

          // Assertions
          expect(asyncReducer(state, action)).toEqual(result);
        });
      });

      describe('Get survey', () => {
        it('should handle SURVEY_GET_REQUEST action', () => {
          // Mock data
          const state = source.state.initial;
          const action = { type: SURVEY_GET_REQUEST };
          const result = expected.state.asynchronous.get.survey.loading;

          // Assertions
          expect(asyncReducer(state, action)).toEqual(result);
        });

        it('should handle SURVEY_GET_FAILURE action', () => {
          // Mock data
          const state = source.state.initial;
          const payload = source.state.error;
          const action = { type: SURVEY_GET_FAILURE, payload };
          const result = expected.state.asynchronous.get.survey.error;

          // Assertions
          expect(asyncReducer(state, action)).toEqual(result);
        });

        it('should handle SURVEY_GET_SUCCESS action', () => {
          // Mock data
          const state = source.state.initial;
          const action = { type: SURVEY_GET_SUCCESS };
          const result = expected.state.initial;

          // Assertions
          expect(asyncReducer(state, action)).toEqual(result);
        });
      });

      describe('Update survey', () => {
        it('should handle SURVEY_UPDATE_REQUEST action', () => {
          // Mock data
          const state = source.state.initial;
          const action = { type: SURVEY_UPDATE_REQUEST };
          const result = expected.state.asynchronous.patch.survey.loading;

          // Assertions
          expect(asyncReducer(state, action)).toEqual(result);
        });

        it('should handle SURVEY_UPDATE_FAILURE action', () => {
          // Mock data
          const state = source.state.initial;
          const payload = source.state.error;
          const action = { type: SURVEY_UPDATE_FAILURE, payload };
          const result = expected.state.asynchronous.patch.survey.error;

          // Assertions
          expect(asyncReducer(state, action)).toEqual(result);
        });

        it('should handle SURVEY_UPDATE_SUCCESS action', () => {
          // Mock data
          const state = source.state.initial;
          const action = { type: SURVEY_UPDATE_SUCCESS };
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
