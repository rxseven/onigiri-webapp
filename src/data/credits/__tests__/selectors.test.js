// Module dependencies
import { fromJS } from 'immutable';

// Mock data
import mock from 'tests/mock';

// Selectors and state
import { getBalance, getCredits } from '../reducers';

// Source data
const source = {
  state: {
    domain: mock.data.domain.data.credits
  },
  store: mock.data.store
};

// Expected results
const expected = {
  state: {
    domain: {
      balance: fromJS(source.state.domain.balance),
      credits: fromJS(source.state.domain)
    }
  }
};

// Unit tests
describe('data/credits/selectors', () => {
  describe('Get credits state', () => {
    describe('getCredits', () => {
      it('should return the correct credits state', () => {
        // Mock data
        const state = source.store;
        const result = expected.state.domain.credits;

        // Assertions
        expect(getCredits(state)).toEqual(result);
      });
    });
  });

  describe('Get balance state', () => {
    describe('getBalance', () => {
      it('should return the correct session state', () => {
        // Mock data
        const state = source.store;
        const result = expected.state.domain.balance;

        // Assertions
        expect(getBalance(state)).toEqual(result);
      });
    });
  });
});
