// Module dependencies
import { mount, shallow } from 'enzyme';
import React from 'react';

// Mock data
import mock from 'tests/mock';

// Components
import FormStack from '../index';

// Source data
const source = {
  props: {
    children: mock.data.source.content.children,
    end: false
  }
};

// Unit tests
describe('components/common/Form/FormStack', () => {
  describe('Default state', () => {
    it('should render without crashing', () => {
      // Shallow rendering
      const wrapper = shallow(<FormStack />);

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
          const wrapper = mount(<FormStack {...props} />);

          // Assertions
          expect(result).toBeDefined();
          expect(wrapper).toHaveProp(result);
        });

        it('should render the correct children', () => {
          // Mock data
          const props = { ...source.props };
          const result = props.children;

          // Shallow rendering
          const wrapper = shallow(<FormStack>{props.children}</FormStack>);

          // Assertions
          expect(wrapper).toContainReact(result);
        });
      });
    });

    describe('"end"', () => {
      describe('Default prop', () => {
        it('should have default value for prop', () => {
          // Mock data
          const props = { ...source.props };
          const result = { end: props.end };

          // Full DOM rendering
          const wrapper = mount(<FormStack />);

          // Assertions
          expect(result).toBeDefined();
          expect(wrapper).toHaveProp(result);
        });

        it('should have a bottom spacing by default', () => {
          // Mock data
          const style = 'mb-3';
          const result = style;

          // Shallow rendering
          const wrapper = shallow(<FormStack />);

          // Assertions
          expect(wrapper).toHaveClassName(result);
        });
      });

      describe('Receiving prop', () => {
        // Configuration
        const end = true;

        it('should receive the correct prop', () => {
          // Mock data
          const props = { ...source.props, end };
          const result = { end: props.end };

          // Full DOM rendering
          const wrapper = mount(<FormStack {...props} />);

          // Assertions
          expect(result).toBeDefined();
          expect(wrapper).toHaveProp(result);
        });

        it('should remove a bottom spacing (last child)', () => {
          // Mock data;
          const style = 'mb-3';
          const props = { ...source.props, end };
          const result = style;

          // Shallow rendering
          const wrapper = shallow(<FormStack {...props} />);

          // Assertions
          expect(wrapper).not.toHaveClassName(result);
        });
      });
    });
  });
});
