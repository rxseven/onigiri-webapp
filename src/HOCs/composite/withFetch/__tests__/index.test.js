// Module dependencies
import { mount } from 'enzyme';
import React from 'react';

// HOCs and components
import Spinner from 'components/common/Spinner';
import Error from 'components/composite/Error';
import withFetch from '../index';

// Mock components
const Post = () => <div>Post</div>;

// Source data
const source = {
  props: {
    status: {
      data: null,
      error: null,
      loading: false
    }
  }
};

// Unit tests
describe('HOCs/common/withFetch', () => {
  describe('withFetch', () => {
    it('should render nothing when an asynchronous action has not started yet', () => {
      // Mock data
      const props = { ...source.props };

      // Create an enhanced component
      const Enhanced = withFetch(Post);

      // Full DOM rendering
      const wrapper = mount(<Enhanced {...props} />);

      // Assertions
      expect(wrapper.find(Post)).not.toExist();
    });

    it('should render a wrapped component when data is fetch', () => {
      // Mock data
      const props = {
        ...source.props,
        status: {
          ...source.props.status,
          data: 'dummy data'
        }
      };

      // Create an enhanced component
      const Enhanced = withFetch(Post);

      // Full DOM rendering
      const wrapper = mount(<Enhanced {...props} />);

      // Assertions
      expect(wrapper.find(Post)).toExist();
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
      const Enhanced = withFetch(Post);

      // Full DOM rendering
      const wrapper = mount(<Enhanced {...props} />);

      // Assertions
      expect(wrapper.find(Spinner)).toExist();
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
      const Enhanced = withFetch(Post);

      // Full DOM rendering
      const wrapper = mount(<Enhanced {...props} />);

      // Assertions
      expect(wrapper.find(Error)).toExist();
    });
  });
});
