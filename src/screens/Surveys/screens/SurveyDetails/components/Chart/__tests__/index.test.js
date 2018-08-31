// Module dependencies
import { mount, shallow } from 'enzyme';
import React from 'react';

// Components
import Chart from '../index';

// Source data
const source = {
  props: {
    data: {
      no: 10,
      yes: 2
    }
  }
};

// Unit tests
describe('screens/surveys/details/components/Chart', () => {
  describe('Default state', () => {
    it('should render without crashing', () => {
      // Mock data
      const props = { ...source.props };

      // Shallow rendering
      const wrapper = shallow(<Chart {...props} />);

      // Assertions
      expect(wrapper).toBeDefined();
    });
  });

  describe('Props and conditional rendering', () => {
    describe('"data"', () => {
      describe('Receiving prop', () => {
        it('should receive the correct prop', () => {
          // Mock data
          const props = { ...source.props };
          const result = { data: props.data };

          // Full DOM rendering
          const wrapper = mount(<Chart {...props} />);

          // Assertions
          expect(result).toBeDefined();
          expect(wrapper).toHaveProp(result);
        });
      });
    });
  });

  // TODO: Conditional rendering
});
