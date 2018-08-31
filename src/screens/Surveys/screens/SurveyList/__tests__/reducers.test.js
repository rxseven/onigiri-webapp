// Module dependencies
import { fromJS } from 'immutable';
import { createStore } from 'redux';

// Helper functions
import { getMock } from 'tests/helpers/mock';

// Mock data
import mock from 'tests/mock';

// Action types
import { USER_RESET } from 'data/session/types';
import { SURVEY_SELECTED_ADD, SURVEY_SELECTED_REMOVE } from '../../../types';
import {
  SURVEYS_GET_FAILURE,
  SURVEYS_GET_REQUEST,
  SURVEYS_GET_SUCCESS,
  SURVEYS_SELECT_MODE
} from '../data/surveys/types';
import { SURVEYS_RESET_VIEW, SURVEYS_SAVE_PAGINATION } from '../types';

// Reducers and state
import combineReducers, {
  asynchronous as asyncReducer,
  stateShape,
  view as viewReducer
} from '../reducers';

// Constants
const UNKNOWN = 'UNKNOWN';

// Create store
const store = createStore(combineReducers);

// Source data
const source = {
  payload: {
    view: {
      mode: mock.data.payload.surveys.list.query.mode.request,
      pagination: mock.data.payload.surveys.list.view.pagination.request,
      track: mock.data.payload.surveys.list.view.selected.request
    }
  },
  state: {
    error: fromJS(mock.data.source.asynchronous.error),
    initial: {
      asynchronous: fromJS(stateShape.asynchronous),
      view: fromJS(stateShape.view)
    },
    view: {
      track: fromJS({
        ...mock.data.source.surveys.list.view,
        selected: mock.data.payload.surveys.list.view.selected.request
      })
    }
  },
  store: store.getState()
};

// Expected results
const expected = {
  state: {
    asynchronous: {
      get: {
        error: fromJS({
          ...stateShape.asynchronous,
          get: {
            ...stateShape.asynchronous.get,
            error: mock.data.source.asynchronous.error
          }
        }),
        loaded: fromJS({
          ...stateShape.asynchronous,
          get: {
            ...stateShape.asynchronous.get,
            loaded: true
          }
        }),
        loading: fromJS({
          ...stateShape.asynchronous,
          get: {
            ...stateShape.asynchronous.get,
            loading: mock.data.source.asynchronous.loading
          }
        })
      }
    },
    view: {
      current: fromJS(mock.data.source.surveys.list.view),
      mode: fromJS({
        ...mock.data.source.surveys.list.view,
        ...mock.data.payload.surveys.list.query.mode.request
      }),
      pagination: fromJS({
        ...mock.data.source.surveys.list.view,
        pagination: mock.data.payload.surveys.list.view.pagination.request
      }),
      track: fromJS({
        ...mock.data.source.surveys.list.view,
        selected: mock.data.payload.surveys.list.view.selected.request
      })
    },
    domain: mock.data.initial.getIn(['screens', 'surveys', 'list']),
    initial: {
      asynchronous: fromJS(stateShape.asynchronous),
      view: fromJS(stateShape.view)
    }
  }
};

// Generate mock data
const genMock = domain => getMock(source.store, expected.state.domain, domain);

// Unit tests
describe('screens/surveys/list/reducers', () => {
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
      describe('Get surveys', () => {
        it('should handle SURVEYS_GET_REQUEST action', () => {
          // Mock data
          const state = source.state.initial.asynchronous;
          const action = { type: SURVEYS_GET_REQUEST };
          const result = expected.state.asynchronous.get.loading;

          // Assertions
          expect(asyncReducer(state, action)).toEqual(result);
        });

        it('should handle SURVEYS_GET_FAILURE action', () => {
          // Mock data
          const state = source.state.initial.asynchronous;
          const payload = source.state.error;
          const action = { type: SURVEYS_GET_FAILURE, payload };
          const result = expected.state.asynchronous.get.error;

          // Assertions
          expect(asyncReducer(state, action)).toEqual(result);
        });

        it('should handle SURVEYS_GET_SUCCESS action', () => {
          // Mock data
          const state = source.state.initial.asynchronous;
          const action = { type: SURVEYS_GET_SUCCESS };
          const result = expected.state.asynchronous.get.loaded;

          // Assertions
          expect(asyncReducer(state, action)).toEqual(result);
        });
      });

      describe('Reset state', () => {
        it('should handle USER_RESET action', () => {
          // Mock data
          const state = source.state.initial.asynchronous;
          const action = { type: USER_RESET };
          const result = expected.state.initial.asynchronous;

          // Assertions
          expect(asyncReducer(state, action)).toEqual(result);
        });

        it('should handle SURVEYS_RESET_VIEW action', () => {
          // Mock data
          const state = source.state.initial.asynchronous;
          const action = { type: SURVEYS_RESET_VIEW };
          const result = expected.state.initial.asynchronous;

          // Assertions
          expect(asyncReducer(state, action)).toEqual(result);
        });
      });
    });
  });

  describe('View', () => {
    describe('Initial state', () => {
      it('should return the initial state', () => {
        // Mock data
        const result = expected.state.initial.view;

        // Assertions
        expect(viewReducer()).toEqual(result);
      });

      it('should not affect the current state', () => {
        // Mock data
        const state = undefined;
        const action = { type: UNKNOWN };
        const result = expected.state.initial.view;

        // Assertions
        expect(viewReducer(state, action)).toEqual(result);
      });
    });

    describe('Update state', () => {
      describe('Save pagination query', () => {
        it('should handle SURVEYS_SAVE_PAGINATION action', () => {
          // Mock data
          const state = source.state.initial.view;
          const payload = source.payload.view.pagination;
          const action = { type: SURVEYS_SAVE_PAGINATION, payload };
          const result = expected.state.view.pagination;

          // Assertions
          expect(viewReducer(state, action)).toEqual(result);
        });
      });

      describe('Change mode', () => {
        it('should handle SURVEYS_SELECT_MODE action', () => {
          // Mock data
          const state = source.state.initial.view;
          const payload = source.payload.view.mode;
          const action = { type: SURVEYS_SELECT_MODE, payload };
          const result = expected.state.view.mode;

          // Assertions
          expect(viewReducer(state, action)).toEqual(result);
        });
      });

      describe('Track survey', () => {
        it('should handle SURVEY_SELECTED_ADD action', () => {
          // Mock data
          const state = source.state.initial.view;
          const payload = source.payload.view.track;
          const action = { type: SURVEY_SELECTED_ADD, payload };
          const result = expected.state.view.track;

          // Assertions
          expect(viewReducer(state, action)).toEqual(result);
        });
      });

      describe('Untrack survey', () => {
        it('should handle SURVEY_SELECTED_REMOVE action', () => {
          // Mock data
          const state = source.state.view.track;
          const action = { type: SURVEY_SELECTED_REMOVE };
          const result = expected.state.initial.view;

          // Assertions
          expect(viewReducer(state, action)).toEqual(result);
        });
      });

      describe('Reset state', () => {
        it('should handle USER_RESET action', () => {
          // Mock data
          const state = source.state.initial.view;
          const action = { type: USER_RESET };
          const result = expected.state.initial.view;

          // Assertions
          expect(viewReducer(state, action)).toEqual(result);
        });

        it('should handle SURVEYS_RESET_VIEW action', () => {
          // Mock data
          const state = source.state.initial.view;
          const action = { type: SURVEYS_RESET_VIEW };
          const result = expected.state.initial.view;

          // Assertions
          expect(viewReducer(state, action)).toEqual(result);
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
