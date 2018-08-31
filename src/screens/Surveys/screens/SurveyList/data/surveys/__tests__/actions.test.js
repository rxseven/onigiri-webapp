// Mock data
import mock from 'tests/mock';

// Action creators and action types
import * as actions from '../actions';
import * as types from '../types';

// Unit tests
describe('screens/surveys/list/data/surveys/actions', () => {
  describe('Cancel getting surveys', () => {
    describe('cancelSurveys', () => {
      it('should dispatch SURVEYS_CANCEL action', () => {
        // Mock data
        const result = {
          type: types.SURVEYS_CANCEL
        };

        // Assertions
        expect(actions.cancelSurveys()).toEqual(result);
      });
    });

    describe('cancelSurveysFailure', () => {
      it('should dispatch SURVEYS_CANCEL_FAILURE action', () => {
        // Mock data
        const result = {
          type: types.SURVEYS_CANCEL_FAILURE
        };

        // Assertions
        expect(actions.cancelSurveysFailure()).toEqual(result);
      });
    });

    describe('cancelSurveysRequest', () => {
      it('should dispatch SURVEYS_CANCEL_REQUEST action', () => {
        // Mock data
        const result = {
          type: types.SURVEYS_CANCEL_REQUEST
        };

        // Assertions
        expect(actions.cancelSurveysRequest()).toEqual(result);
      });
    });

    describe('cancelSurveysSuccess', () => {
      it('should dispatch SURVEYS_CANCEL_SUCCESS action', () => {
        // Mock data
        const result = {
          type: types.SURVEYS_CANCEL_SUCCESS
        };

        // Assertions
        expect(actions.cancelSurveysSuccess()).toEqual(result);
      });
    });
  });

  describe('Get a list of surveys', () => {
    describe('getSurveys', () => {
      it('should dispatch SURVEYS_GET action, payload, and callback function', () => {
        // Mock data
        const query = mock.data.payload.surveys.list.query.list.request;
        const { callback } = mock.functions;
        const result = {
          callback,
          payload: { query },
          type: types.SURVEYS_GET
        };

        // Assertions
        expect(actions.getSurveys(query, callback)).toEqual(result);
      });
    });

    describe('getSurveysFailure', () => {
      it('should dispatch SURVEYS_GET_FAILURE action and payload', () => {
        // Mock data
        const { error } = mock.data.source.asynchronous;
        const result = {
          payload: error,
          type: types.SURVEYS_GET_FAILURE
        };

        // Assertions
        expect(actions.getSurveysFailure(error)).toEqual(result);
      });
    });

    describe('getSurveysRequest', () => {
      it('should dispatch SURVEYS_GET_REQUEST action', () => {
        // Mock data
        const result = {
          type: types.SURVEYS_GET_REQUEST
        };

        // Assertions
        expect(actions.getSurveysRequest()).toEqual(result);
      });
    });

    describe('getSurveysSuccess', () => {
      it('should dispatch SURVEYS_GET_SUCCESS action and payload', () => {
        // Mock data
        const { data } = mock.data.payload.surveys.list.query.list.response;
        const result = {
          payload: data,
          type: types.SURVEYS_GET_SUCCESS
        };

        // Assertions
        expect(actions.getSurveysSuccess(data)).toEqual(result);
      });
    });
  });

  describe('Reset data', () => {
    describe('resetData', () => {
      it('should dispatch SURVEYS_RESET_DATA action', () => {
        // Mock data
        const result = {
          type: types.SURVEYS_RESET_DATA
        };

        // Assertions
        expect(actions.resetData()).toEqual(result);
      });
    });
  });

  describe('Select list view mode', () => {
    describe('selectMode', () => {
      it('should dispatch SURVEYS_SELECT_MODE action', () => {
        // Mock data
        const query = mock.data.payload.surveys.list.query.mode.request;
        const result = {
          payload: query,
          type: types.SURVEYS_SELECT_MODE
        };

        // Assertions
        expect(actions.selectMode(query)).toEqual(result);
      });
    });
  });
});
