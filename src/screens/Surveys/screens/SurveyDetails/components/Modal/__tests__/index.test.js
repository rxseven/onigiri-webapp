// Module dependencies
import { mount, shallow } from 'enzyme';
import React from 'react';

// Constants
import STATE_MODELS from 'constants/models/state';

// Components
import Modal from '../index';

// Source data
const source = {
  props: {
    actions: {
      close: jest.fn(),
      confirm: jest.fn()
    },
    state: {
      ui: {
        asynchronous: STATE_MODELS.model.asynchronous,
        visibility: false
      }
    }
  }
};

// Unit tests
describe('screens/surveys/details/components/Modal', () => {
  describe('Default state', () => {
    it('should render without crashing', () => {
      // Mock data
      const props = { ...source.props };

      // Shallow rendering
      const wrapper = shallow(<Modal {...props} />);

      // Assertions
      expect(wrapper).toBeDefined();
    });
  });

  describe('Props and conditional rendering', () => {
    describe('"actions"', () => {
      describe('.close', () => {
        describe('Receiving prop', () => {
          it('should receive the correct prop', () => {
            // Mock data
            const props = { ...source.props };
            const result = props.actions.close;

            // Full DOM rendering
            const wrapper = mount(<Modal {...props} />);

            // Assertions
            expect(result).toBeDefined();
            expect(wrapper.props().actions.close).toEqual(result);
          });
        });
      });

      describe('.confirm', () => {
        describe('Receiving prop', () => {
          it('should receive the correct prop', () => {
            // Mock data
            const props = { ...source.props };
            const result = props.actions.confirm;

            // Full DOM rendering
            const wrapper = mount(<Modal {...props} />);

            // Assertions
            expect(result).toBeDefined();
            expect(wrapper.props().actions.confirm).toEqual(result);
          });
        });
      });
    });

    describe('"state"', () => {
      describe('.ui', () => {
        describe('.asynchronous', () => {
          describe('Receiving prop', () => {
            it('should receive the correct prop', () => {
              // Mock data
              const props = { ...source.props };
              const result = props.state.ui.asynchronous;

              // Full DOM rendering
              const wrapper = mount(<Modal {...props} />);

              // Assertions
              expect(result).toBeDefined();
              expect(wrapper.props().state.ui.asynchronous).toEqual(result);
            });
          });
        });

        describe('.visibility', () => {
          describe('Receiving prop', () => {
            it('should receive the correct prop', () => {
              // Mock data
              const props = { ...source.props };
              const result = props.state.ui.visibility;

              // Full DOM rendering
              const wrapper = mount(<Modal {...props} />);

              // Assertions
              expect(result).toBeDefined();
              expect(wrapper.props().state.ui.visibility).toEqual(result);
            });
          });
        });
      });
    });
  });

  // TODO: Conditional rendering
});
