// Module dependencies
import { fromJS } from 'immutable';

// Mock data
import mock from 'tests/mock';

// Selectors and state
import { getSurveys } from '../reducers';

// Source data
const source = {
  state: {
    domain: mock.data.domain.screens.surveys.list.data.surveys
  },
  store: mock.data.store
};

// Expected results
const expected = {
  state: {
    domain: fromJS(source.state.domain)
  }
};

// Unit tests
describe('screens/surveys/list/data/surveys/selectors', () => {
  describe('Get surveys state', () => {
    describe('getSurveys', () => {
      it('should return the correct surveys state', () => {
        // Mock data
        const state = source.store;
        const result = expected.state.domain;

        // Assertions
        expect(getSurveys(state)).toEqual(result);
      });
    });
  });
});
