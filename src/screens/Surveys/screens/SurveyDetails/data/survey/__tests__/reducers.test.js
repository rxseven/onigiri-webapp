// Module dependencies
import { fromJS } from 'immutable';

// Mock data
import mock from 'tests/mock';

// Action types
import { USER_RESET } from 'data/session/types';
import {
  SURVEY_DELETE_FAILURE,
  SURVEY_DELETE_REQUEST,
  SURVEY_DELETE_SUCCESS
} from '../../../../../types';
import {
  RECIPIENTS_GET_FAILURE,
  RECIPIENTS_GET_REQUEST,
  RECIPIENTS_GET_SUCCESS,
  SURVEY_GET_FAILURE,
  SURVEY_GET_REQUEST,
  SURVEY_GET_SUCCESS,
  SURVEY_RESET_DATA,
  SURVEY_UPDATE_FAILURE,
  SURVEY_UPDATE_REQUEST,
  SURVEY_UPDATE_SUCCESS
} from '../types';

// Reducers and state
import reducer, { initialState } from '../reducers';

// Constants
const UNKNOWN = 'UNKNOWN';

// Source data
const source = {
  payload: {
    recipients: fromJS(mock.data.payload.surveys.item.recipients.response.normalized),
    survey: {
      update: fromJS(mock.data.payload.surveys.item.details.update.response)
    }
  },
  state: {
    initial: initialState,
    survey: fromJS(mock.data.source.surveys.item.details)
  }
};

// Expected results
const expected = {
  state: {
    initial: initialState,
    survey: {
      current: fromJS(mock.data.source.surveys.item.details),
      recipients: fromJS({
        ...mock.data.source.surveys.item.details,
        recipients: mock.data.payload.surveys.item.recipients.response.normalized
      }),
      updated: fromJS({
        ...mock.data.source.surveys.item.details,
        ...mock.data.payload.surveys.item.details.update.response
      })
    }
  }
};

// Unit tests
describe('screens/surveys/details/data/survey/reducers', () => {
  describe('Initial state', () => {
    it('should return the initial state', () => {
      // Assertions
      expect(reducer()).toBeNull();
    });

    it('should not affect the current state', () => {
      // Mock data
      const state = undefined;
      const action = { type: UNKNOWN };

      // Assertions
      expect(reducer(state, action)).toBeNull();
    });
  });

  describe('Update state', () => {
    describe('Get recipients', () => {
      it('should handle RECIPIENTS_GET_REQUEST action', () => {
        // Mock data
        const state = source.state.survey;
        const action = { type: RECIPIENTS_GET_REQUEST };
        const result = expected.state.survey.current;

        // Assertions
        expect(reducer(state, action)).toEqual(result);
      });

      it('should handle RECIPIENTS_GET_FAILURE action', () => {
        // Mock data
        const state = source.state.survey;
        const action = { type: RECIPIENTS_GET_FAILURE };
        const result = expected.state.survey.current;

        // Assertions
        expect(reducer(state, action)).toEqual(result);
      });

      it('should handle RECIPIENTS_GET_SUCCESS action', () => {
        // Mock data
        const state = source.state.survey;
        const payload = source.payload.recipients;
        const action = { type: RECIPIENTS_GET_SUCCESS, payload };
        const result = expected.state.survey.recipients;

        // Assertions
        expect(reducer(state, action)).toEqual(result);
      });
    });

    describe('Delete survey', () => {
      it('should handle SURVEY_DELETE_REQUEST action', () => {
        // Mock data
        const state = source.state.survey;
        const action = { type: SURVEY_DELETE_REQUEST };
        const result = expected.state.survey.current;

        // Assertions
        expect(reducer(state, action)).toEqual(result);
      });

      it('should handle SURVEY_DELETE_FAILURE action', () => {
        // Mock data
        const state = source.state.survey;
        const action = { type: SURVEY_DELETE_FAILURE };
        const result = expected.state.survey.current;

        // Assertions
        expect(reducer(state, action)).toEqual(result);
      });

      it('should handle SURVEY_DELETE_SUCCESS action', () => {
        // Mock data
        const state = source.state.initial;
        const action = { type: SURVEY_DELETE_SUCCESS };

        // Assertions
        expect(reducer(state, action)).toBeNull();
      });
    });

    describe('Get survey', () => {
      it('should handle SURVEY_GET_REQUEST action', () => {
        // Mock data
        const state = source.state.initial;
        const action = { type: SURVEY_GET_REQUEST };

        // Assertions
        expect(reducer(state, action)).toBeNull();
      });

      it('should handle SURVEY_GET_FAILURE action', () => {
        // Mock data
        const state = source.state.initial;
        const action = { type: SURVEY_GET_FAILURE };

        // Assertions
        expect(reducer(state, action)).toBeNull();
      });

      it('should handle SURVEY_GET_SUCCESS action', () => {
        // Mock data
        const state = source.state.initial;
        const payload = source.state.survey;
        const action = { type: SURVEY_GET_SUCCESS, payload };
        const result = expected.state.survey.current;

        // Assertions
        expect(reducer(state, action)).toEqual(result);
      });
    });

    describe('Update survey', () => {
      it('should handle SURVEY_UPDATE_REQUEST action', () => {
        // Mock data
        const state = source.state.initial;
        const action = { type: SURVEY_UPDATE_REQUEST };

        // Assertions
        expect(reducer(state, action)).toBeNull();
      });

      it('should handle SURVEY_UPDATE_FAILURE action', () => {
        // Mock data
        const state = source.state.initial;
        const action = { type: SURVEY_UPDATE_FAILURE };

        // Assertions
        expect(reducer(state, action)).toBeNull();
      });

      it('should handle SURVEY_UPDATE_SUCCESS action', () => {
        // Mock data
        const state = source.state.survey;
        const payload = source.payload.survey.update;
        const action = { type: SURVEY_UPDATE_SUCCESS, payload };
        const result = expected.state.survey.updated;

        // Assertions
        expect(reducer(state, action)).toEqual(result);
      });
    });

    describe('Reset state', () => {
      it('should handle SURVEY_RESET_DATA action', () => {
        // Mock data
        const state = source.state.initial;
        const action = { type: SURVEY_RESET_DATA };
        const result = expected.state.initial;

        // Assertions
        expect(reducer(state, action)).toEqual(result);
      });

      it('should handle USER_RESET action', () => {
        // Mock data
        const state = source.state.initial;
        const action = { type: USER_RESET };
        const result = expected.state.initial;

        // Assertions
        expect(reducer(state, action)).toEqual(result);
      });
    });
  });
});
