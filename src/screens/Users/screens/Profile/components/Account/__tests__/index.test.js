// Module dependencies
import { shallow } from 'enzyme';
import React from 'react';

// Mock data
import mock from 'tests/mock';

// Constants
import STATE_MODELS from 'constants/models/state';

// Components
import Account from '../index';

// Source data
const source = {
  props: {
    actions: {
      closeModal: jest.fn(),
      deleteConfirm: jest.fn(),
      deleteRequest: jest.fn()
    },
    state: {
      data: {
        credits: mock.data.source.users.credits,
        interfaces: {
          modal: mock.data.source.interfaces.modal
        },
        profile: mock.data.source.users.profile.data
      },
      ui: {
        asynchronous: {
          delete: {
            profile: STATE_MODELS.model.asynchronous
          }
        }
      }
    }
  }
};

// Unit tests
describe('screens/users/profile/components/Account', () => {
  describe('Default state', () => {
    it('should render without crashing', () => {
      // Mock data
      const props = { ...source.props };

      // Shallow rendering
      const wrapper = shallow(<Account {...props} />);

      // Assertions
      expect(wrapper).toBeDefined();
    });
  });

  // TODO: Props and conditional rendering
});
