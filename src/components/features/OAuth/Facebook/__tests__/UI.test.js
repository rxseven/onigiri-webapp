// Module dependencies
import { shallow } from 'enzyme';
import React from 'react';

// Components
import UI from '../UI';

// Source data
const source = {
  props: {
    actions: {
      auth: {
        oauthFailure: jest.fn(),
        oauthFacebook: jest.fn(),
        oauthRequest: jest.fn()
      }
    },
    history: {}
  }
};

// Unit tests
describe('components/features/OAuth/Facebook/UI', () => {
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
