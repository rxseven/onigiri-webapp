// Mock data
import mock from 'tests/mock';

// Action creators and action types
import * as actions from '../actions';
import * as types from '../types';

// Unit tests
describe('screens/surveys/actions', () => {
  describe('Add and remove selected survey', () => {
    describe('addSelectedSurvey', () => {
      it('should dispatch SURVEY_SELECTED_ADD action and payload', () => {
        // Mock data
        const { id } = mock.data.payload.surveys.item.details.selected.request;
        const result = {
          payload: id,
          type: types.SURVEY_SELECTED_ADD
        };

        // Assertions
        expect(actions.addSelectedSurvey(id)).toEqual(result);
      });
    });

    describe('removeSelectedSurvey', () => {
      it('should dispatch SURVEY_SELECTED_REMOVE action', () => {
        // Mock data
        const result = {
          type: types.SURVEY_SELECTED_REMOVE
        };

        // Assertions
        expect(actions.removeSelectedSurvey()).toEqual(result);
      });
    });
  });

  describe('Delete survey', () => {
    describe('deleteSurvey', () => {
      it('should dispatch SURVEY_DELETE action', () => {
        // Mock data
        const { id } = mock.data.payload.surveys.item.details.delete.request;
        const { callback } = mock.functions;
        const result = {
          callback,
          payload: { id },
          type: types.SURVEY_DELETE
        };

        // Assertions
        expect(actions.deleteSurvey(id, callback)).toEqual(result);
      });
    });

    describe('deleteSurveyFailure', () => {
      it('should dispatch SURVEY_DELETE_FAILURE action and payload', () => {
        // Mock data
        const { error } = mock.data.source.asynchronous;
        const result = {
          payload: error,
          type: types.SURVEY_DELETE_FAILURE
        };

        // Assertions
        expect(actions.deleteSurveyFailure(error)).toEqual(result);
      });
    });

    describe('deleteSurveyRequest', () => {
      it('should dispatch SURVEY_DELETE_REQUEST action', () => {
        // Mock data
        const result = {
          type: types.SURVEY_DELETE_REQUEST
        };

        // Assertions
        expect(actions.deleteSurveyRequest()).toEqual(result);
      });
    });

    describe('deleteSurveySuccess', () => {
      it('should dispatch SURVEY_DELETE_SUCCESS action and payload', () => {
        // Mock data
        const data = mock.data.payload.surveys.item.details.delete.response;
        const result = {
          payload: data,
          type: types.SURVEY_DELETE_SUCCESS
        };

        // Assertions
        expect(actions.deleteSurveySuccess(data)).toEqual(result);
      });
    });
  });

  describe('Remove survey from its list', () => {
    describe('removeSurvey', () => {
      it('should dispatch SURVEY_REMOVE action and payload', () => {
        // Mock data
        const { id } = mock.data.payload.surveys.item.details.remove.request;
        const result = {
          payload: id,
          type: types.SURVEY_REMOVE
        };

        // Assertions
        expect(actions.removeSurvey(id)).toEqual(result);
      });
    });
  });
});
