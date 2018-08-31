// Module dependencies
import { shallow } from 'enzyme';
import React from 'react';

// Components
import Component from '../index';

// Unit tests
describe('screens/NotFound', () => {
  describe('Default state', () => {
    it('should render without crashing', () => {
      // Shallow rendering
      const wrapper = shallow(<Component />);

      // Assertions
      expect(wrapper).toBeDefined();
    });
  });
});
