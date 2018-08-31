// Module dependencies
import { mount, shallow } from 'enzyme';
import React from 'react';

// Helper functions
import { cssModule } from 'tests/helpers/assertions';

// Mock data
import mock from 'tests/mock';

// Components
import SHL from '../index';

// Source data
const source = {
  props: {
    children: mock.data.source.content.children
  }
};

// Unit tests
describe('components/common/Typography/SHL', () => {
  describe('Default state', () => {
    it('should render without crashing', () => {
      // Shallow rendering
      const wrapper = shallow(<SHL />);

      // Assertions
      expect(wrapper).toBeDefined();
    });

    it('should have "subheadline" class', () => {
      // Mock data
      const style = 'subheadline';
      const result = style;

      // Shallow rendering
      const wrapper = shallow(<SHL />);

      // Assertions
      expect(cssModule(wrapper, result)).toBeTruthy();
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
          const wrapper = mount(<SHL {...props} />);

          // Assertions
          expect(result).toBeDefined();
          expect(wrapper).toHaveProp(result);
        });

        it('should render the correct children', () => {
          // Mock data
          const props = { ...source.props };
          const result = props.children;

          // Shallow rendering
          const wrapper = shallow(<SHL>{props.children}</SHL>);

          // Assertions
          expect(wrapper).toContainReact(result);
        });
      });
    });
  });
});
