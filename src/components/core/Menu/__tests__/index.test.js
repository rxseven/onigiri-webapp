// Module dependencies
import { shallow } from 'enzyme';
import React from 'react';

// Mock data
import mock from 'tests/mock';

// Constants
import STATE_MODELS from 'constants/models/state';

// Components
import Menu from '../index';

// Source data
const source = {
  props: {
    actions: {
      auth: {
        signOut: jest.fn()
      },
      menu: {
        toggleMenu: jest.fn()
      }
    },
    history: {},
    location: {},
    navigation: {
      exact: false
    },
    state: {
      data: {
        interfaces: {
          menu: {
            isOpen: false
          }
        },
        session: mock.data.source.users.session
      },
      ui: {
        asynchronous: {
          signout: STATE_MODELS.model.asynchronous
        }
      }
    }
  }
};

// Unit tests
describe('components/core/Menu', () => {
  describe('Default state', () => {
    it('should render without crashing', () => {
      // Mock data
      const props = { ...source.props };

      // Shallow rendering
      const wrapper = shallow(<Menu {...props} />);

      // Assertions
      expect(wrapper).toBeDefined();
    });
  });

  // TODO: Props and conditional rendering
});
