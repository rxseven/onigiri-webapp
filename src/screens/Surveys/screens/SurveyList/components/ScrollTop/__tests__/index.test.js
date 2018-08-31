// Module dependencies
import { shallow } from 'enzyme';
import React from 'react';

// Components
import ScrollTop from '../index';

// Unit tests
describe('screens/surveys/list/components/ScrollTop', () => {
  describe('Default state', () => {
    it('should render without crashing', () => {
      // Shallow rendering
      const wrapper = shallow(<ScrollTop />);

      // Assertions
      expect(wrapper).toBeDefined();
    });
  });
});
