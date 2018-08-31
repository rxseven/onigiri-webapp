// Module dependencies
import { shallow } from 'enzyme';
import React from 'react';

// Mock data
import mock from 'tests/mock';

// Components
import Credits from '../index';

// Source data
const source = {
  props: {
    callback: jest.fn(),
    state: {
      data: {
        credits: mock.data.source.users.credits
      }
    }
  }
};

// Unit tests
describe('screens/users/profile/components/Credits', () => {
  describe('Default state', () => {
    it('should render without crashing', () => {
      // Mock data
      const props = { ...source.props };

      // Shallow rendering
      const wrapper = shallow(<Credits {...props} />);

      // Assertions
      expect(wrapper).toBeDefined();
    });
  });

  // TODO: Props and conditional rendering
});
