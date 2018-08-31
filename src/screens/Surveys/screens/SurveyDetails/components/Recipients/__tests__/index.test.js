// Module dependencies
import { mount, shallow } from 'enzyme';
import React from 'react';

// Mock data
import mock from 'tests/mock';

// Constants
import STATE_MODELS from 'constants/models/state';

// Components
import Recipients from '../index';

// Source data
const source = {
  props: {
    actions: {
      getRecipients: jest.fn()
    },
    state: {
      data: mock.data.source.surveys.item.recipients.normalized,
      ui: {
        asynchronous: STATE_MODELS.model.asynchronous
      }
    }
  }
};

// Unit tests
describe('screens/surveys/details/components/Recipients', () => {
  describe('Default state', () => {
    it('should render without crashing', () => {
      // Mock data
      const props = { ...source.props };

      // Shallow rendering
      const wrapper = shallow(<Recipients {...props} />);

      // Assertions
      expect(wrapper).toBeDefined();
    });
  });

  describe('Props and conditional rendering', () => {
    describe('"actions"', () => {
      describe('.getRecipients', () => {
        describe('Receiving prop', () => {
          it('should receive the correct prop', () => {
            // Mock data
            const props = { ...source.props };
            const result = props.actions.getRecipients;

            // Full DOM rendering
            const wrapper = mount(<Recipients {...props} />);

            // Assertions
            expect(result).toBeDefined();
            expect(wrapper.props().actions.getRecipients).toEqual(result);
          });
        });
      });
    });

    describe('"state"', () => {
      describe('.data', () => {
        describe('Receiving prop', () => {
          it('should receive the correct prop', () => {
            // Mock data
            const props = { ...source.props };
            const result = props.state.data;

            // Full DOM rendering
            const wrapper = mount(<Recipients {...props} />);

            // Assertions
            expect(result).toBeDefined();
            expect(wrapper.props().state.data).toEqual(result);
          });
        });
      });

      describe('.ui', () => {
        describe('.asynchronous', () => {
          describe('Receiving prop', () => {
            it('should receive the correct prop', () => {
              // Mock data
              const props = { ...source.props };
              const result = props.state.ui.asynchronous;

              // Full DOM rendering
              const wrapper = mount(<Recipients {...props} />);

              // Assertions
              expect(result).toBeDefined();
              expect(wrapper.props().state.ui.asynchronous).toEqual(result);
            });
          });
        });
      });
    });
  });

  // TODO: Conditional rendering
});
