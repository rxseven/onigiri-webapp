// Module dependencies
import { mount, shallow } from 'enzyme';
import React from 'react';

// Mock data
import mock from 'tests/mock';

// Components
import { Column, Row } from 'components/common/Grid';
import Layout from '../index';

// Source data
const source = {
  props: {
    children: mock.data.source.content.children,
    size: 'col-md-10 col-lg-8'
  }
};

// Unit tests
describe('components/common/Layout', () => {
  describe('Default state', () => {
    it('should render without crashing', () => {
      // Shallow rendering
      const wrapper = shallow(<Layout />);

      // Assertions
      expect(wrapper).toBeDefined();
    });

    it('should contain the correct layout structure', () => {
      // Shallow rendering
      const wrapper = shallow(<Layout />);

      // Assertions
      expect(wrapper.find(Row)).toHaveLength(1);
      expect(wrapper.find(Row).find(Column)).toHaveLength(1);
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
          const wrapper = mount(<Layout {...props} />);

          // Assertions
          expect(result).toBeDefined();
          expect(wrapper).toHaveProp(result);
        });

        it('should render the correct children', () => {
          // Mock data
          const props = { ...source.props };
          const result = props.children;

          // Shallow rendering
          const wrapper = shallow(<Layout>{props.children}</Layout>);

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
          const wrapper = mount(<Layout {...props} />);

          // Assertions
          expect(result).toBeDefined();
          expect(wrapper).toHaveProp(result);
        });

        it('should render "size" property with "col-md-10 col-lg-8" value by default', () => {
          // Mock data
          const props = { ...source.props };
          const result = { size: props.size };

          // Full DOM rendering
          const wrapper = mount(<Layout />);

          // Assertions
          expect(wrapper).toHaveProp(result);
        });
      });

      describe('Receiving prop', () => {
        // Configuration
        const size = 'col-md-8 col-lg-6';

        it('should receive the correct prop', () => {
          // Mock data
          const props = { ...source.props, size };
          const result = { size: props.size };

          // Full DOM rendering
          const wrapper = mount(<Layout {...props} />);

          // Assertions
          expect(result).toBeDefined();
          expect(wrapper).toHaveProp(result);
        });

        it('should render "size" property with "col-md-8 col-lg-6" value', () => {
          // Mock data
          const props = { ...source.props, size };
          const result = { size: props.size };

          // Shallow rendering
          const wrapper = shallow(<Layout {...props} />);

          // Assertions
          expect(wrapper.find(Column)).toHaveProp(result);
        });
      });
    });
  });
});
