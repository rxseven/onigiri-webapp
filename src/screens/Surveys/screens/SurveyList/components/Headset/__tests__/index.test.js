// Module dependencies
import { shallow } from 'enzyme';
import React from 'react';

// Components
import Headset from '../index';

// Unit tests
describe('screens/surveys/list/components/Headset', () => {
  describe('Default state', () => {
    it('should render without crashing', () => {
      // Shallow rendering
      const wrapper = shallow(<Headset />);

      // Assertions
      expect(wrapper).toBeDefined();
    });
  });
});
