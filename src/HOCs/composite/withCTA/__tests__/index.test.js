// Module dependencies
import { mount } from 'enzyme';
import React from 'react';

// HOCs and components
import { ButtonSet } from 'components/common/Buttons';
import Spinner from 'components/common/Spinner';
import Error from 'components/composite/Error';
import withCTA from '../index';

// Mock components
const Button = () => <button>Button</button>;

// Source data
const source = {
  props: {
    status: {
      error: null,
      fetched: false,
      loading: false
    }
  }
};

// Unit tests
describe('HOCs/composite/withCTA', () => {
  describe('withCTA', () => {
    it('should render a wrapped component when an asynchronous action has not started yet', () => {
      // Mock data
      const props = { ...source.props };

      // Create an enhanced component
      const Enhanced = withCTA(Button);

      // Full DOM rendering
      const wrapper = mount(<Enhanced {...props} />);

      // Assertions
      expect(wrapper.find(ButtonSet)).toExist();
      expect(wrapper.find(ButtonSet).find(Button)).toExist();
    });

    it('should NOT render a wrapped component when data is fetched', () => {
      // Mock data
      const props = {
        ...source.props,
        status: {
          ...source.props.status,
          fetched: true
        }
      };

      // Create an enhanced component
      const Enhanced = withCTA(Button);

      // Full DOM rendering
      const wrapper = mount(<Enhanced {...props} />);

      // Assertions
      expect(wrapper.find(ButtonSet).find(Button)).not.toExist();
    });

    it('should render a spinner when performing an asynchronous action', () => {
      // Mock data
      const props = {
        ...source.props,
        status: {
          ...source.props.status,
          loading: true
        }
      };

      // Create an enhanced component
      const Enhanced = withCTA(Button);

      // Full DOM rendering
      const wrapper = mount(<Enhanced {...props} />);

      // Assertions
      expect(wrapper.find(ButtonSet).find(Button)).toExist();
      expect(wrapper.find(ButtonSet).find(Spinner)).toExist();
    });

    it('should render an error message when failure occured', () => {
      // Mock data
      const props = {
        ...source.props,
        status: {
          ...source.props.status,
          error: { message: 'Sorry, something went wrong!' }
        }
      };

      // Create an enhanced component
      const Enhanced = withCTA(Button);

      // Full DOM rendering
      const wrapper = mount(<Enhanced {...props} />);

      // Assertions
      expect(wrapper.find(ButtonSet).find(Button)).toExist();
      expect(wrapper.find(Error)).toExist();
    });
  });
});
