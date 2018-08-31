// Module dependencies
import { shallow } from 'enzyme';
import React from 'react';

// Mock data
import mock from 'tests/mock';

// Constants
import STATE_MODELS from 'constants/models/state';

// Components
import Form from '../index';

// Source data
const source = {
  props: {
    actions: {
      surveys: {
        createSurvey: jest.fn(),
        resetUI: jest.fn()
      }
    },
    history: {},
    onCancel: jest.fn(),
    state: {
      data: {
        form: mock.data.payload.surveys.new.request
      },
      ui: {
        asynchronous: {
          post: STATE_MODELS.model.asynchronous
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
