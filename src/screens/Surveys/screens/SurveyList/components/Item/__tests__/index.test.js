// Module dependencies
import { mount, shallow } from 'enzyme';
import React from 'react';

// Helper functions
import { mockRouter } from 'tests/helpers/mock';

// Mock data
import mock from 'tests/mock';

// Components
import Item from '../index';

// Source data
const source = {
  props: {
    state: {
      data: mock.data.source.surveys.list.item,
      mode: 'active'
    }
  }
};

// Unit tests
describe('screens/surveys/list/components/Item', () => {
  describe('Default state', () => {
    it('should render without crashing', () => {
      // Mock data
      const props = { ...source.props };

      // Shallow rendering
      const wrapper = shallow(<Item {...props} />);

      // Assertions
      expect(wrapper).toBeDefined();
    });
  });

  describe('Props and conditional rendering', () => {
    describe('"state"', () => {
      describe('.data', () => {
        describe('Receiving prop', () => {
          it('should receive the correct prop', () => {
            // Mock data
            const props = { ...source.props };
            const result = props.state.data;

            // Full DOM rendering
            const wrapper = mount(mockRouter(<Item {...props} />));

            // Assertions
            expect(result).toBeDefined();
            expect(wrapper.props().children.props.state.data).toEqual(result);
          });
        });
      });

      describe('.mode', () => {
        describe('Receiving prop', () => {
          it('should receive the correct prop', () => {
            // Mock data
            const props = { ...source.props };
            const result = props.state.mode;

            // Full DOM rendering
            const wrapper = mount(mockRouter(<Item {...props} />));

            // Assertions
            expect(result).toBeDefined();
            expect(wrapper.props().children.props.state.mode).toEqual(result);
          });
        });
      });
    });
  });

  // TODO: Conditional rendering
});
