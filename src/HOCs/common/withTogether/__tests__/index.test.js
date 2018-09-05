// Module dependencies
import { mount } from 'enzyme';
import React from 'react';

// Components and HOCs
import withTogether from '../index';

// Mock components
const Button = () => <button>Button</button>;
const Error = () => <div>Error</div>;
const Spinner = () => <div>Loading...</div>;
const Wrapper = ({ children }) => <div>{children}</div>;

// Unit tests
describe('HOCs/common/withTogether', () => {
  describe('withTogether', () => {
    it('should render wrapped and enhanced components if a condition is "passed"', () => {
      // Mock data and functions
      const condition = props => props.loading;

      // Create an enhanced component
      const Enhanced = withTogether(condition, Spinner)(Button);

      // Full DOM rendering
      const wrapper = mount(<Enhanced loading />);

      // Assertions
      expect(wrapper.find(Button)).toExist();
      expect(wrapper.find(Spinner)).toExist();
    });

    it('should render a wrapped component if a condition is "failed"', () => {
      // Mock data and functions
      const condition = props => props.loading;

      // Create an enhanced component
      const Enhanced = withTogether(condition, Spinner)(Button);

      // Full DOM rendering
      const wrapper = mount(<Enhanced loading={false} />);

      // Assertions
      expect(wrapper.find(Button)).toExist();
      expect(wrapper.find(Spinner)).not.toExist();
    });

    it('should render a wrapper component if provided and if a condition is "passed"', () => {
      // Mock data and functions
      const condition = props => props.loading;

      // Create an enhanced component
      const Enhanced = withTogether(condition, Spinner, Wrapper)(Button);

      // Full DOM rendering
      const wrapper = mount(<Enhanced loading />);

      // Assertions
      expect(wrapper.find(Wrapper)).toExist();
      expect(wrapper.find(Wrapper).find(Button)).toExist();
      expect(wrapper.find(Wrapper).find(Spinner)).toExist();
    });

    it('should render a wrapper component if provided and if a condition is "failed"', () => {
      // Mock data and functions
      const condition = props => props.loading;

      // Create an enhanced component
      const Enhanced = withTogether(condition, Spinner, Wrapper)(Button);

      // Full DOM rendering
      const wrapper = mount(<Enhanced loading={false} />);

      // Assertions
      expect(wrapper.find(Wrapper)).toExist();
      expect(wrapper.find(Wrapper).find(Button)).toExist();
      expect(wrapper.find(Wrapper).find(Spinner)).not.toExist();
    });

    it('should render an enhanced component if "alert" property is set to "true"', () => {
      // Mock data and functions
      const condition = props => props.error;
      const alert = true;

      // Create an enhanced component
      const Enhanced = withTogether(condition, Error, Wrapper, alert)(Button);

      // Full DOM rendering
      const wrapper = mount(<Enhanced error />);

      // Assertions
      expect(wrapper.find(Wrapper).find(Button)).toExist();
      expect(wrapper.find(Wrapper).find(Error)).not.toExist();
      expect(wrapper.find(Error)).toExist();
    });
  });
});
