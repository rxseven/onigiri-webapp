// Module dependencies
import { mount, shallow } from 'enzyme';
import React from 'react';

// Mock data
import mock from 'tests/mock';

// Components
import ButtonSet from '../index';

// Source data
const source = {
  props: {
    children: mock.data.source.content.children,
    options: ''
  }
};

// Unit tests
describe('components/common/Buttons/ButtonSet', () => {
  describe('Default state', () => {
    it('should render without crashing', () => {
      // Shallow rendering
      const wrapper = shallow(<ButtonSet />);

      // Assertions
      expect(wrapper).toBeDefined();
    });
  });

  describe('Props and conditional rendering', () => {
    describe('"children"', () => {
      describe('Receiving prop', () => {
        it('should receive the correct prop', () => {
          // Mock data
          const props = { ...source.props };
          const result = { children: props.children };

          // Full DOM rendering
          const wrapper = mount(<ButtonSet {...props} />);

          // Assertions
          expect(result).toBeDefined();
          expect(wrapper).toHaveProp(result);
        });

        it('should render the correct children', () => {
          // Mock data
          const props = { ...source.props };
          const result = props.children;

          // Shallow rendering
          const wrapper = shallow(<ButtonSet>{props.children}</ButtonSet>);

          // Assertions
          expect(wrapper).toContainReact(result);
        });
      });
    });

    describe('"options"', () => {
      describe('Default prop', () => {
        it('should have default value for prop', () => {
          // Mock data
          const props = { ...source.props };
          const result = { options: props.options };

          // Full DOM rendering
          const wrapper = mount(<ButtonSet {...props} />);

          // Assertions
          expect(result).toBeDefined();
          expect(wrapper).toHaveProp(result);
        });
      });

      describe('Receiving prop', () => {
        // Configuration
        const options = 'css-style';

        it('should receive the correct prop', () => {
          // Mock data
          const props = { ...source.props, options };
          const result = { options: props.options };

          // Full DOM rendering
          const wrapper = mount(<ButtonSet {...props} />);

          // Assertions
          expect(result).toBeDefined();
          expect(wrapper).toHaveProp(result);
        });

        it('should set additional CSS classes', () => {
          // Mock data
          const props = { ...source.props, options };
          const result = props.options;

          // Shallow rendering
          const wrapper = shallow(<ButtonSet {...props} />);

          // Assertions
          expect(wrapper).toHaveClassName(result);
        });
      });
    });
  });
});
