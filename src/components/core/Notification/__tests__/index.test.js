// Module dependencies
import { shallow } from 'enzyme';
import React from 'react';

// Components
import Notification from '../index';

// Unit tests
describe('components/core/Notification', () => {
  describe('Default state', () => {
    it('should render without crashing', () => {
      // Shallow rendering
      const wrapper = shallow(<Notification />);

      // Assertions
      expect(wrapper).toBeDefined();
    });
  });
});
