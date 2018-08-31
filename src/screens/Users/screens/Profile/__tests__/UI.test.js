// Module dependencies
import { shallow } from 'enzyme';
import React from 'react';

// Mock data
import mock from 'tests/mock';

// Constants
import STATE_MODELS from 'constants/models/state';

// Components
import UI from '../UI';

// Source data
const source = {
  props: {
    actions: {
      credits: {
        getCredits: jest.fn()
      },
      modal: {
        openModal: jest.fn(),
        closeModal: jest.fn()
      },
      profile: {
        getProfile: jest.fn()
      },
      user: {
        deleteUser: jest.fn()
      }
    },
    history: undefined,
    location: {
      state: {
        from: '/'
      }
    },
    state: {
      data: {
        credits: mock.data.source.users.credits,
        interfaces: mock.data.source.interfaces.modal,
        profile: mock.data.source.users.profile.data
      },
      ui: {
        asynchronous: {
          delete: {
            profile: STATE_MODELS.model.asynchronous
          },
          get: {
            credits: STATE_MODELS.model.asynchronous,
            profile: STATE_MODELS.model.asynchronous
          }
        }
      }
    }
  }
};

// Unit tests
describe('screens/users/profile/UI', () => {
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
