// Module dependencies
import { mount, shallow } from 'enzyme';
import React from 'react';

// Mock data
import mock from 'tests/mock';

// Components
import ButtonGroup from '../index';

// Source data
const source = {
  class: {
    base: 'btn-group'
  },
  props: {
    children: mock.data.source.content.children,
    label: '',
    size: ''
  }
};

// Unit tests
describe('components/common/Buttons/ButtonGroup', () => {
  describe('Default state', () => {
    it('should render without crashing', () => {
      // Shallow rendering
      const wrapper = shallow(<ButtonGroup />);

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
          const wrapper = mount(<ButtonGroup {...props} />);

          // Assertions
          expect(result).toBeDefined();
          expect(wrapper).toHaveProp(result);
        });

        it('should render the correct children', () => {
          // Mock data
          const props = { ...source.props };
          const result = props.children;

          // Shallow rendering
          const wrapper = shallow(<ButtonGroup>{props.children}</ButtonGroup>);

          // Assertions
          expect(wrapper).toContainReact(result);
        });
      });
    });

    describe('"label"', () => {
      describe('Receiving prop', () => {
        // Configuration
        const label = 'Close';

        it('should receive the correct prop', () => {
          // Mock data
          const props = { ...source.props, label };
          const result = { label: props.label };

          // Full DOM rendering
          const wrapper = mount(<ButtonGroup {...props} />);

          // Assertions
          expect(result).toBeDefined();
          expect(wrapper).toHaveProp(result);
        });

        it('should have the correct "aria-label" property', () => {
          // Mock data
          const props = { ...source.props, label };
          const result = { 'aria-label': props.label };

          // Shallow rendering
          const wrapper = shallow(<ButtonGroup {...props} />);

          // Assertions
          expect(wrapper).toHaveProp(result);
        });
      });
    });

    describe('"size"', () => {
      describe('Default prop', () => {
        it('should have default value for prop', () => {
          // Mock data
          const props = { ...source.props };
          const result = { size: props.size };

          // Full DOM rendering
          const wrapper = mount(<ButtonGroup {...props} />);

          // Assertions
          expect(result).toBeDefined();
          expect(wrapper).toHaveProp(result);
        });

        it('should NOT render a component with "size" style', () => {
          // Mock data
          const style = source.class.base;
          const result = `${style}-sm`;

          // Shallow rendering
          const wrapper = shallow(<ButtonGroup />);

          // Assertions
          expect(wrapper).not.toHaveClassName(result);
        });
      });

      describe('Receiving prop', () => {
        // Configuration
        const size = 'small';

        it('should receive the correct prop', () => {
          // Mock data
          const props = { ...source.props, size };
          const result = `${source.class.base}-sm`;

          // Shallow rendering
          const wrapper = shallow(<ButtonGroup {...props} />);

          // Assertions
          expect(result).toBeDefined();
          expect(wrapper).toHaveClassName(result);
        });

        it('should render a component with "size" style', () => {
          // Mock data
          const style = source.class.base;
          const props = { ...source.props, size };
          const result = `${style}-sm`;

          // Shallow rendering
          const wrapper = shallow(<ButtonGroup {...props} />);

          // Assertions
          expect(wrapper).toHaveClassName(result);
        });
      });
    });
  });
});
