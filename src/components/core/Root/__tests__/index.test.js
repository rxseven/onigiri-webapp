// Module dependencies
import { shallow } from 'enzyme';
import React from 'react';

// Helper functions
import { mockStore } from 'tests/helpers/mock';

// Components
import Root from '../index';

// Source data
const source = {
  store: mockStore()
};

// Unit tests
describe('components/core/Root', () => {
  describe('Default state', () => {
    it('should connect to the application state', () => {
      // Shallow rendering
      const wrapper = shallow(<Root store={source.store} />);

      // Assertions
      expect(wrapper).toBeDefined();
    });
  });
});
