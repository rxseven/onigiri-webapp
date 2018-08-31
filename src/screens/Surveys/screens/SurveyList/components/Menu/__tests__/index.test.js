// Module dependencies
import { shallow } from 'enzyme';
import React from 'react';

// Components
import Menu from '../index';

// Source data
const source = {
  props: {
    actions: {
      mode: jest.fn()
    },
    state: {
      mode: 'completed'
    }
  }
};

// Unit tests
describe('screens/surveys/list/components/Menu', () => {
  describe('Default state', () => {
    it('should render without crashing', () => {
      // Mock data
      const props = { ...source.props };

      // Shallow rendering
      const wrapper = shallow(<Menu {...props} />);

      // Assertions
      expect(wrapper).toBeDefined();
    });
  });

  // TODO: Props and conditional rendering
});
