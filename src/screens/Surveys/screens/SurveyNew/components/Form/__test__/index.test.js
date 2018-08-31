// Module dependencies
import { shallow } from 'enzyme';
import React from 'react';

// Mock data
import mock from 'tests/mock';

// Components
import Form from '../index';

// Source data
const source = {
  props: {
    actions: {
      credits: {
        getCredits: jest.fn()
      },
      modal: {
        closeModal: jest.fn(),
        openModal: jest.fn()
      }
    },
    history: {},
    location: {},
    onReview: jest.fn(),
    pristine: true,
    state: {
      data: {
        balance: mock.data.source.users.credits.balance,
        interfaces: {
          modal: mock.data.source.interfaces.modal
        }
      }
    }
  }
};

// Unit tests
describe('screens/surveys/new/components/Form', () => {
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
