// Module dependencies
import { shallow } from 'enzyme';
import React from 'react';

// Constants
import STATE_MODELS from 'constants/models/state';

// Components
import Form from '../index';

// Source data
const source = {
  props: {
    actions: {
      auth: {
        resetUI: jest.fn(),
        signUp: jest.fn()
      }
    },
    history: {},
    state: {
      ui: {
        asynchronous: {
          post: STATE_MODELS.model.asynchronous
        }
      }
    }
  }
};

// Unit tests
describe('screens/Users/SignUp/components/Form', () => {
  describe('Default state', () => {
    it('should render without crashing', () => {
      // Mock data
      const props = { ...source.props };

      // Shallow rendering
      const wrapper = shallow(<Form {...props} />);

      // Assertions
      expect(wrapper).toBeDefined();
    });
  });

  // TODO: Props and conditional rendering
});
