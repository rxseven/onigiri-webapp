// Module dependencies
import { shallow } from 'enzyme';
import React from 'react';

// Constants
import STATE_MODELS from 'constants/models/state';

// Components
import Checkout from '../index';

// Source data
const source = {
  props: {
    callback: jest.fn(),
    state: {
      ui: {
        asynchronous: {
          post: {
            checkout: STATE_MODELS.model.asynchronous
          }
        }
      }
    }
  }
};

// Unit tests
describe('screens/users/profile/components/Checkout', () => {
  describe('Default state', () => {
    it('should render without crashing', () => {
      // Mock data
      const props = { ...source.props };

      // Shallow rendering
      const wrapper = shallow(<Checkout {...props} />);

      // Assertions
      expect(wrapper).toBeDefined();
    });
  });

  // TODO: Props and conditional rendering
});
