// Module dependencies
import { shallow } from 'enzyme';
import React from 'react';

// Components
import Stickybar from '../index';

// Source data
const source = {
  props: {
    actions: undefined,
    state: {
      mode: 'completed',
      screenWidth: 320
    }
  }
};

// Unit tests
describe('screens/surveys/list/components/Stickybar', () => {
  describe('Default state', () => {
    it('should render without crashing', () => {
      // Mock data
      const props = { ...source.props };

      // Shallow rendering
      const wrapper = shallow(<Stickybar {...props} />);

      // Assertions
      expect(wrapper).toBeDefined();
    });
  });

  // TODO: Props and conditional rendering
});
