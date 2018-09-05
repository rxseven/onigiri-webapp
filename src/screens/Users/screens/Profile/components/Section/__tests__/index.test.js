// Module dependencies
import { shallow } from 'enzyme';
import React from 'react';

// Mock data
import mock from 'tests/mock';

// Components
import { Section } from '../index';

// Source data
const source = {
  props: {
    actions: {
      modal: {
        closeModal: jest.fn()
      }
    },
    methods: {
      onCheckoutSuccess: jest.fn(),
      onDeleteAccountConfirm: jest.fn(),
      onDeleteAccountRequest: jest.fn()
    },
    state: {
      data: {
        credits: mock.data.source.users.credits,
        interfaces: mock.data.source.interfaces.modal,
        profile: mock.data.source.users.profile.data
      }
    },
    ui: {
      asynchronous: {}
    }
  }
};

// Unit tests
describe('screens/users/profile/components/Section', () => {
  describe('Default state', () => {
    it('should render without crashing', () => {
      // Mock data
      const props = { ...source.props };

      // Shallow rendering
      const wrapper = shallow(<Section {...props} />);

      // Assertions
      expect(wrapper).toBeDefined();
    });
  });

  // TODO: Props and conditional rendering
});
