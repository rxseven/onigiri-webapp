// Module dependencies
import { shallow } from 'enzyme';
import React from 'react';

// Components
import Header from '../index';

// Unit tests
describe('components/core/Header', () => {
  describe('Default state', () => {
    it('should render without crashing', () => {
      // Shallow rendering
      const wrapper = shallow(<Header />);

      // Assertions
      expect(wrapper).toBeDefined();
    });
  });
});
