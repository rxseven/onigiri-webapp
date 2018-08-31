// Module dependencies
import { shallow } from 'enzyme';
import React from 'react';

// Components
import Footer from '../index';

// Unit tests
describe('components/core/Footer', () => {
  describe('Default state', () => {
    it('should render without crashing', () => {
      // Shallow rendering
      const wrapper = shallow(<Footer />);

      // Assertions
      expect(wrapper).toBeDefined();
    });
  });
});
