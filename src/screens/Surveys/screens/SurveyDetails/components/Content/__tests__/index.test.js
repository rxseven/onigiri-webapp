// Module dependencies
import { mount, shallow } from 'enzyme';
import React from 'react';

// Mock data
import mock from 'tests/mock';

// Constants
import STATE_MODELS from 'constants/models/state';

// Components
import Content from '../index';

// Source data
const source = {
  props: {
    actions: {},
    state: {
      data: {
        ...mock.data.source.surveys.item.details,
        recipients: mock.data.source.surveys.item.recipients.normalized
      },
      ui: {
        asynchronous: {
          delete: {
            survey: STATE_MODELS.model.asynchronous
          },
          get: {
            recipients: STATE_MODELS.model.asynchronous,
            survey: STATE_MODELS.model.asynchronous
          },
          patch: {
            survey: STATE_MODELS.model.asynchronous
          }
        }
      }
    }
  }
};

// Unit tests
describe('screens/surveys/details/components/Content', () => {
  describe('Default state', () => {
    it('should render without crashing', () => {
      // Mock data
      const props = { ...source.props };

      // Shallow rendering
      const wrapper = shallow(<Content {...props} />);

      // Assertions
      expect(wrapper).toBeDefined();
    });
  });

  describe('Props and conditional rendering', () => {
    describe('"actions"', () => {
      describe('{ }', () => {
        describe('Receiving prop', () => {
          it('should receive the correct prop', () => {
            // Mock data
            const props = { ...source.props };
            const result = { actions: props.actions };

            // Full DOM rendering
            const wrapper = mount(<Content {...props} />);

            // Assertions
            expect(result).toBeDefined();
            expect(wrapper).toHaveProp(result);
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
            const wrapper = mount(<Content {...props} />);

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
              const wrapper = mount(<Content {...props} />);

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
