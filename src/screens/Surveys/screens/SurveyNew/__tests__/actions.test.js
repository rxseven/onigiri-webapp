// Mock data
import mock from 'tests/mock';

// Action creators and action types
import * as actions from '../actions';
import * as types from '../types';

// Unit tests
describe('screens/surveys/new/actions', () => {
  describe('Create survey', () => {
    describe('createSurvey', () => {
      it('should dispatch SURVEY_CREATE action, payload, and callback function', () => {
        // Mock data
        const { callback } = mock.functions;
        const values = mock.data.payload.surveys.new.request;
        const result = {
          callback,
          payload: { values },
          type: types.SURVEY_CREATE
        };

        // Assertions
        expect(actions.createSurvey(values, callback)).toEqual(result);
      });
    });

    describe('createSurveyFailure', () => {
      it('should dispatch SURVEY_CREATE_FAILURE action and payload', () => {
        // Mock data
        const { error } = mock.data.source.asynchronous;
        const result = {
          payload: error,
          type: types.SURVEY_CREATE_FAILURE
        };

        // Assertions
        expect(actions.createSurveyFailure(error)).toEqual(result);
      });
    });

    describe('createSurveyRequest', () => {
      it('should dispatch SURVEY_CREATE_REQUEST action', () => {
        // Mock data
        const result = {
          type: types.SURVEY_CREATE_REQUEST
        };

        // Assertions
        expect(actions.createSurveyRequest()).toEqual(result);
      });
    });

    describe('createSurveySuccess', () => {
      it('should dispatch SURVEY_CREATE_SUCCESS action and payload', () => {
        // Mock data
        const data = mock.data.payload.surveys.new.response;
        const result = {
          payload: data,
          type: types.SURVEY_CREATE_SUCCESS
        };

        // Assertions
        expect(actions.createSurveySuccess(data)).toEqual(result);
      });
    });
  });

  describe('Reset UI state', () => {
    describe('resetUI', () => {
      it('should dispatch SURVEY_RESET_UI action', () => {
        // Mock data
        const result = {
          type: types.SURVEY_RESET_UI
        };

        // Assertions
        expect(actions.resetUI()).toEqual(result);
      });
    });
  });
});
