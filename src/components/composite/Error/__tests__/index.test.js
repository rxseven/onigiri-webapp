// Module dependencies
import { mount, shallow } from 'enzyme';
import React from 'react';

// Components
import Alert from 'components/common/Alert';
import Error from '../index';

// Source data
const source = {
  props: {
    alert: {
      message: 'Something went wrong!'
    }
  }
};

// Unit tests
describe('components/composite/Error', () => {
  describe('Default state', () => {
    it('should render without crashing', () => {
      // Mock data
      const props = { ...source.props };

      // Shallow rendering
      const wrapper = shallow(<Error {...props} />);

      // Assertions
      expect(wrapper).toBeDefined();
    });
  });

  describe('Props and conditional rendering', () => {
    describe('"alert"', () => {
      describe('Receiving prop', () => {
        it('should receive the correct prop', () => {
          // Mock data
          const props = { ...source.props };
          const result = { alert: props.alert };

          // Full DOM rendering
          const wrapper = mount(<Error {...props} />);

          // Assertions
          expect(result).toBeDefined();
          expect(wrapper).toHaveProp(result);
        });

        it('should render an error message', () => {
          // Mock data
          const props = { ...source.props };
          const result = props.alert.message;

          // Shallow rendering
          const wrapper = shallow(<Error {...props} />);

          // Assertions
          expect(wrapper.find(Alert).dive()).toIncludeText(result);
        });
      });
    });
  });
});
