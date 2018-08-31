// Module dependencies
import mock from 'tests/mock';

// Action creators and action types
import * as actions from '../actions';
import * as types from '../types';

// Unit tests
describe('screens/surveys/data/survey/actions', () => {
  describe('Get survey', () => {
    describe('getSurvey', () => {
      it('should dispatch SURVEY_GET action, payload, and callback function', () => {
        // Mock data
        const { id } = mock.data.payload.surveys.item.details.data.request;
        const { callback } = mock.functions;
        const result = {
          callback,
          payload: { id },
          type: types.SURVEY_GET
        };

        // Assertions
        expect(actions.getSurvey(id, callback)).toEqual(result);
      });
    });

    describe('getSurveyFailure', () => {
      it('should dispatch SURVEY_GET_FAILURE action and payload', () => {
        // Mock data
        const { error } = mock.data.source.asynchronous;
        const result = {
          payload: error,
          type: types.SURVEY_GET_FAILURE
        };

        // Assertions
        expect(actions.getSurveyFailure(error)).toEqual(result);
      });
    });

    describe('getSurveyRequest', () => {
      it('should dispatch SURVEY_GET_REQUEST action', () => {
        // Mock data
        const result = {
          type: types.SURVEY_GET_REQUEST
        };

        // Assertions
        expect(actions.getSurveyRequest()).toEqual(result);
      });
    });

    describe('getSurveySuccess', () => {
      it('should dispatch SURVEY_GET_SUCCESS action and payload', () => {
        // Mock data
        const data = mock.data.payload.surveys.item.details.data.response;
        const result = {
          payload: data,
          type: types.SURVEY_GET_SUCCESS
        };

        // Assertions
        expect(actions.getSurveySuccess(data)).toEqual(result);
      });
    });
  });

  describe('Get recipients', () => {
    describe('getRecipients', () => {
      it('should dispatch RECIPIENTS_GET action and payload', () => {
        // Mock data
        const { id } = mock.data.payload.surveys.item.recipients.request;
        const result = {
          payload: { id },
          type: types.RECIPIENTS_GET
        };

        // Assertions
        expect(actions.getRecipients(id)).toEqual(result);
      });
    });

    describe('getRecipientsFailure', () => {
      it('should dispatch RECIPIENTS_GET_FAILURE action and payload', () => {
        // Mock data
        const { error } = mock.data.source.asynchronous;
        const result = {
          payload: error,
          type: types.RECIPIENTS_GET_FAILURE
        };

        // Assertions
        expect(actions.getRecipientsFailure(error)).toEqual(result);
      });
    });

    describe('getRecipientsRequest', () => {
      it('should dispatch RECIPIENTS_GET_REQUEST action', () => {
        // Mock data
        const result = {
          type: types.RECIPIENTS_GET_REQUEST
        };

        // Assertions
        expect(actions.getRecipientsRequest()).toEqual(result);
      });
    });

    describe('getRecipientsSuccess', () => {
      it('should dispatch RECIPIENTS_GET_SUCCESS action and payload', () => {
        // Mock data
        const data = mock.data.payload.surveys.item.recipients.response.raw;
        const result = {
          payload: data,
          type: types.RECIPIENTS_GET_SUCCESS
        };

        // Assertions
        expect(actions.getRecipientsSuccess(data)).toEqual(result);
      });
    });
  });

  describe('Reset data', () => {
    describe('resetData', () => {
      it('should dispatch SURVEY_RESET_DATA action', () => {
        // Mock data
        const result = {
          type: types.SURVEY_RESET_DATA
        };

        // Assertions
        expect(actions.resetData()).toEqual(result);
      });
    });
  });

  describe('Update survey', () => {
    describe('updateSurvey', () => {
      it('should dispatch SURVEY_UPDATE action and payload', () => {
        // Mock data
        const { id, values } = mock.data.payload.surveys.item.details.update.request;
        const result = {
          payload: { id, values },
          type: types.SURVEY_UPDATE
        };

        // Assertions
        expect(actions.updateSurvey(id, values)).toEqual(result);
      });
    });

    describe('updateSurveyFailure', () => {
      it('should dispatch SURVEY_UPDATE_FAILURE action and payload', () => {
        // Mock data
        const { error } = mock.data.source.asynchronous;
        const result = {
          payload: error,
          type: types.SURVEY_UPDATE_FAILURE
        };

        // Assertions
        expect(actions.updateSurveyFailure(error)).toEqual(result);
      });
    });

    describe('updateSurveyRequest', () => {
      it('should dispatch SURVEY_UPDATE_REQUEST action', () => {
        // Mock data
        const result = {
          type: types.SURVEY_UPDATE_REQUEST
        };

        // Assertions
        expect(actions.updateSurveyRequest()).toEqual(result);
      });
    });

    describe('updateSurveySuccess', () => {
      it('should dispatch SURVEY_UPDATE_SUCCESS action and payload', () => {
        // Mock data
        const data = mock.data.payload.surveys.item.details.update.response;
        const result = {
          payload: data,
          type: types.SURVEY_UPDATE_SUCCESS
        };

        // Assertions
        expect(actions.updateSurveySuccess(data)).toEqual(result);
      });
    });
  });
});
