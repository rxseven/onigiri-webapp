// Module dependencies
import { shallow } from 'enzyme';
import React from 'react';

// Components
import Sidebar from '../index';

// Source data
const source = {
  props: {
    actions: undefined,
    state: {
      isSticky: false,
      css: {},
      mode: 'completed',
      screenWidth: 320
    }
  }
};

// Unit tests
describe('screens/surveys/list/components/Sidebar', () => {
  describe('Default state', () => {
    it('should render without crashing', () => {
      // Mock data
      const props = { ...source.props };

      // Shallow rendering
      const wrapper = shallow(<Sidebar {...props} />);

      // Assertions
      expect(wrapper).toBeDefined();
    });
  });

  // TODO: Props and conditional rendering
});
