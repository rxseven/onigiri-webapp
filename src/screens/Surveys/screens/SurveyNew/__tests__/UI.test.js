// Module dependencies
import { shallow } from 'enzyme';
import React from 'react';

// Components
import UI from '../UI';

// Source data
const source = {
  props: {}
};

// Unit tests
describe('screens/surveys/new/UI', () => {
  describe('Default state', () => {
    it('should render without crashing', () => {
      // Mock data
      const props = { ...source.props };

      // Shallow rendering
      const wrapper = shallow(<UI {...props} />);

      // Assertions
      expect(wrapper).toBeDefined();
    });
  });

  // TODO: Props and conditional rendering
});
