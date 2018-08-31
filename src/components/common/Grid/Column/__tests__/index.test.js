// Module dependencies
import { mount, shallow } from 'enzyme';
import React from 'react';

// Mock data
import mock from 'tests/mock';

// Components
import Column from '../index';

// Source data
const source = {
  props: {
    children: mock.data.source.content.children,
    size: 'col'
  }
};

// Unit tests
describe('components/common/Grid/Column', () => {
  describe('Default state', () => {
    it('should render without crashing', () => {
      // Shallow rendering
      const wrapper = shallow(<Column />);

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
          const wrapper = mount(<Column {...props} />);

          // Assertions
          expect(result).toBeDefined();
          expect(wrapper).toHaveProp(result);
        });

        it('should render the correct children', () => {
          // Mock data
          const props = { ...source.props };
          const result = props.children;

          // Shallow rendering
          const wrapper = shallow(<Column>{props.children}</Column>);

          // Assertions
          expect(wrapper).toContainReact(result);
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
          const wrapper = mount(<Column />);

          // Assertions
          expect(result).toBeDefined();
          expect(wrapper).toHaveProp(result);
        });

        it('should have "col" class by default', () => {
          // Mock data
          const props = { ...source.props };
          const result = props.size;

          // Shallow rendering
          const wrapper = shallow(<Column />);

          // Assertions
          expect(wrapper).toHaveClassName(result);
        });
      });

      describe('Receiving prop', () => {
        // Configuration
        const size = 'col-sm-12';

        it('should receive the correct prop', () => {
          // Mock data
          const props = { ...source.props, size };
          const result = { size: props.size };

          // Full DOM rendering
          const wrapper = mount(<Column {...props} />);

          // Assertions
          expect(result).toBeDefined();
          expect(wrapper).toHaveProp(result);
        });

        it('should set (override) "size" style', () => {
          // Mock data
          const props = { ...source.props, size };
          const result = size;

          // Shallow rendering
          const wrapper = shallow(<Column {...props} />);

          // Assertions
          expect(wrapper).toHaveClassName(result);
        });
      });
    });
  });
});
