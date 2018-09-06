// Module dependencies
import { mount } from 'enzyme';
import React from 'react';

// HOCs
import withMaybe from '../index';

// Mock components
const Component = () => <div>Component</div>;

// Unit tests
describe('HOCs/common/withMaybe', () => {
  describe('withMaybe', () => {
    it('should render a wrapped component if a condition is "passed"', () => {
      // Mock data and functions
      const condition = props => props.data;

      // Create an enhanced component
      const Enhanced = withMaybe(condition)(Component);

      // Full DOM rendering
      const wrapper = mount(<Enhanced data />);

      // Assertions
      expect(wrapper.find(Component)).not.toExist();
    });

    it('should render nothing if a condition is "failed"', () => {
      // Mock data and functions
      const condition = props => props.data;

      // Create an enhanced component
      const Enhanced = withMaybe(condition)(Component);

      // Full DOM rendering
      const wrapper = mount(<Enhanced data={false} />);

      // Assertions
      expect(wrapper.find(Component)).toExist();
    });
  });
});
