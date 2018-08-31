// Module dependencies
import { shallow } from 'enzyme';
import React from 'react';

// Components
import { Navbar } from '../index';

// Source data
const source = {
  props: {
    location: {
      pathname: '/surveys'
    },
    state: {
      data: {
        session: {
          authorization: false,
          loading: {
            signin: false,
            verify: false
          },
          user: null
        }
      }
    }
  }
};

// Unit tests
describe('components/core/Navbar', () => {
  describe('Default state', () => {
    it('should render without crashing', () => {
      // Mock data
      const props = { ...source.props };

      // Shallow rendering
      const wrapper = shallow(<Navbar {...props} />);

      // Assertions
      expect(wrapper).toBeDefined();
    });
  });

  // TODO: Props and conditional rendering
});
