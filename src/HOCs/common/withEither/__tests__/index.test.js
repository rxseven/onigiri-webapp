// Module dependencies
import { mount } from 'enzyme';
import React from 'react';

// HOCs
import withEither from '../index';

// Mock components
const Component = () => <div>Component</div>;
const Spinner = () => <div>Loading...</div>;

// Unit tests
describe('HOCs/common/withEither', () => {
  describe('withEither', () => {
    it('should render an enhanced component if a condition is "passed"', () => {
      // Mock data and functions
      const condition = props => props.loading;

      // Create an enhanced component
      const Enhanced = withEither(condition, Spinner)(Component);

      // Full DOM rendering
      const wrapper = mount(<Enhanced loading />);

      // Assertions
      expect(wrapper.find(Spinner)).toExist();
      expect(wrapper.find(Component)).not.toExist();
    });

    it('should render a wrapped component if a condition is "failed"', () => {
      // Mock data and functions
      const condition = props => props.loading;

      // Create an enhanced component
      const Enhanced = withEither(condition, Spinner)(Component);

      // Full DOM rendering
      const wrapper = mount(<Enhanced loading={false} />);

      // Assertions
      expect(wrapper.find(Component)).toExist();
      expect(wrapper.find(Spinner)).not.toExist();
    });
  });
});
