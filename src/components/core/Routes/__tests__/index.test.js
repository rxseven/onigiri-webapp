// Module dependencies
import { shallow } from 'enzyme';
import React from 'react';

// Components
import Routes from '../index';

// Unit tests
describe('components/core/Routes', () => {
  describe('Default state', () => {
    it('should render without crashing', () => {
      // Shallow rendering
      const wrapper = shallow(<Routes />);

      // Assertions
      expect(wrapper).toBeDefined();
    });
  });

  // TODO: Conditional rendering
});
