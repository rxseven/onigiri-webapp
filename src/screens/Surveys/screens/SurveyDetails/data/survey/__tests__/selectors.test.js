// Module dependencies
import { fromJS } from 'immutable';

// Mock data
import mock from 'tests/mock';

// Selectors and state
import { getSurvey } from '../reducers';

// Source data
const source = {
  state: {
    domain: mock.data.source.surveys.item.details
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
describe('screens/surveys/details/data/survey/selectors', () => {
  describe('Get survey state', () => {
    describe('getSurvey', () => {
      it('should return the correct survey state', () => {
        // Mock data
        const state = source.store;
        const result = expected.state.domain;

        // Assertions
        expect(getSurvey(state)).toEqual(result);
      });
    });
  });
});
