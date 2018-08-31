// Module dependencies
import { shallow } from 'enzyme';
import React from 'react';

// Components
import Layout from '../index';

// Unit tests
describe('screens/Users/components/Layout', () => {
  describe('Default state', () => {
    it('should render without crashing', () => {
      // Shallow rendering
      const wrapper = shallow(<Layout />);

      // Assertions
      expect(wrapper).toBeDefined();
    });
  });

  // TODO: Props and conditional rendering
});
