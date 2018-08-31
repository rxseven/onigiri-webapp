// Module dependencies
import { shallow } from 'enzyme';
import React from 'react';

// Helper functions
import { mockStore } from 'tests/helpers/mock';

// Components
import Root from 'components/core/Root';

// Source data
const source = {
  store: mockStore()
};

// Unit tests
describe('Project starting point', () => {
  describe('Default state', () => {
    it('should render without crashing', () => {
      // Shallow rendering
      const wrapper = shallow(<Root store={source.store} />);

      // Assertions
      expect(wrapper).toBeDefined();
    });
  });
});
