// Module dependencies
import { fromJS } from 'immutable';
import { mapKeys, omit } from 'lodash';

// Helper functions
import { fromJSOrdered } from 'helpers/state';

// Mock data
import mock from 'tests/mock';

// Action types
import { USER_RESET } from 'data/session/types';
import {
  SURVEY_DELETE_FAILURE,
  SURVEY_DELETE_REQUEST,
  SURVEY_DELETE_SUCCESS,
  SURVEY_REMOVE
} from '../../../../../types';
import {
  SURVEYS_GET_FAILURE,
  SURVEYS_GET_REQUEST,
  SURVEYS_GET_SUCCESS,
  SURVEYS_SELECT_MODE,
  SURVEYS_RESET_DATA
} from '../types';

// Reducers and state
import reducer, { initialState } from '../reducers';

// Constants
const UNKNOWN = 'UNKNOWN';

// Mock data
const listSource = mock.data.source.surveys.list.data;
const listItem = mock.data.payload.surveys.item.details.remove.request.id;

const listRemoved = {
  ...listSource,
  data: omit(listSource.data, listItem)
};

const listNormalized = fromJS({
  data: fromJSOrdered(mapKeys(listSource.data, '_id')),
  meta: fromJS(listSource.meta)
});

// Source data
const source = {
  payload: {
    item: {
      id: listItem
    },
    list: listNormalized
  },
  state: {
    initial: initialState,
    list: listNormalized
  }
};

// Expected results
const expected = {
  state: {
    initial: initialState,
    list: {
      current: listNormalized,
      removed: fromJS({
        data: fromJSOrdered(listRemoved.data),
        meta: fromJS(listRemoved.meta)
      })
    }
  }
};

// Unit tests
describe('screens/surveys/list/data/surveys/reducers', () => {
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
    describe('Remove survey from a list', () => {
      it('should handle SURVEY_DELETE_REQUEST action', () => {
        // Mock data
        const state = source.state.initial;
        const action = { type: SURVEY_DELETE_REQUEST };
        const result = expected.state.initial;

        // Assertions
        expect(reducer(state, action)).toEqual(result);
      });

      it('should handle SURVEY_DELETE_FAILURE action', () => {
        // Mock data
        const state = source.state.initial;
        const action = { type: SURVEY_DELETE_FAILURE };
        const result = expected.state.initial;

        // Assertions
        expect(reducer(state, action)).toEqual(result);
      });

      it('should handle SURVEY_DELETE_SUCCESS action', () => {
        // Mock data
        const state = source.state.list;
        const payload = source.payload.item.id;
        const action = { type: SURVEY_DELETE_SUCCESS, payload };
        const result = expected.state.list.removed;

        // Assertions
        expect(reducer(state, action)).toEqual(result);
      });

      it('should handle SURVEY_REMOVE action', () => {
        // Mock data
        const state = source.state.list;
        const payload = source.payload.item.id;
        const action = { type: SURVEY_REMOVE, payload };
        const result = expected.state.list.removed;

        // Assertions
        expect(reducer(state, action)).toEqual(result);
      });
    });

    describe('Get surveys', () => {
      it('should handle SURVEYS_GET_REQUEST action', () => {
        // Mock data
        const state = source.state.initial;
        const action = { type: SURVEYS_GET_REQUEST };
        const result = expected.state.initial;

        // Assertions
        expect(reducer(state, action)).toEqual(result);
      });

      it('should handle SURVEYS_GET_FAILURE action', () => {
        // Mock data
        const state = source.state.initial;
        const action = { type: SURVEYS_GET_FAILURE };
        const result = expected.state.initial;

        // Assertions
        expect(reducer(state, action)).toEqual(result);
      });

      it('should handle SURVEYS_GET_SUCCESS action', () => {
        // Mock data
        const state = source.state.initial;
        const payload = source.payload.list;
        const action = { type: SURVEYS_GET_SUCCESS, payload };
        const result = expected.state.list.current;

        // Assertions
        expect(reducer(state, action)).toEqual(result);
      });
    });

    describe('Reset state', () => {
      it('should handle USER_RESET action', () => {
        // Mock data
        const state = source.state.initial;
        const action = { type: USER_RESET };
        const result = expected.state.initial;

        // Assertions
        expect(reducer(state, action)).toEqual(result);
      });

      it('should handle SURVEYS_SELECT_MODE action', () => {
        // Mock data
        const state = source.state.initial;
        const action = { type: SURVEYS_SELECT_MODE };
        const result = expected.state.initial;

        // Assertions
        expect(reducer(state, action)).toEqual(result);
      });

      it('should handle SURVEYS_RESET_DATA action', () => {
        // Mock data
        const state = source.state.initial;
        const action = { type: SURVEYS_RESET_DATA };
        const result = expected.state.initial;

        // Assertions
        expect(reducer(state, action)).toEqual(result);
      });
    });
  });
});
