// Module dependencies
import { fromJS } from 'immutable';

// Mock data
import mock from 'tests/mock';

// Selectors and state
import { getUI, getAsync } from '../reducers';

// Source data
const source = {
  state: {
    domain: mock.data.domain.screens.surveys.new
  },
  store: mock.data.store
};

// Expected results
const expected = {
  state: {
    domain: {
      asynchronous: fromJS(source.state.domain.ui.asynchronous),
      ui: fromJS(source.state.domain.ui)
    }
  }
};

// Unit tests
describe('screens/surveys/new/selectors', () => {
  describe('Get UI state', () => {
    describe('getUI', () => {
      it('should return the correct UI state', () => {
        // Mock data
        const state = source.store;
        const result = expected.state.domain.ui;

        // Assertions
        expect(getUI(state)).toEqual(result);
      });
    });
  });

  describe('Get asynchronous state', () => {
    describe('getAsync', () => {
      it('should return the correct asynchronous state', () => {
        // Mock data
        const state = source.store;
        const result = expected.state.domain.asynchronous;

        // Assertions
        expect(getAsync(state)).toEqual(result);
      });
    });
  });
});
