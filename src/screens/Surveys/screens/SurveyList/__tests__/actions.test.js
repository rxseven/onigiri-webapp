// Mock data
import mock from 'tests/mock';

// Action creators and action types
import * as actions from '../actions';
import * as types from '../types';

// Unit tests
describe('screens/surveys/list/actions', () => {
  describe('Save pagination query', () => {
    describe('savePagination', () => {
      it('should dispatch SURVEYS_SAVE_PAGINATION action', () => {
        // Mock data
        const query = mock.data.payload.surveys.list.view.pagination.request;
        const result = {
          payload: query,
          type: types.SURVEYS_SAVE_PAGINATION
        };

        // Assertions
        expect(actions.savePagination(query)).toEqual(result);
      });
    });
  });
});
