// Module dependencies
import { shallow } from 'enzyme';
import React from 'react';

// Mock data
import mock from 'tests/mock';

// Components
import CardFooter from '../index';

// Source data
const source = {
  props: {
    children: mock.data.source.content.children
  }
};

// Unit tests
describe('components/common/Card/CardFooter', () => {
  describe('Default state', () => {
    it('should render without crashing', () => {
      // Shallow rendering
      const wrapper = shallow(<CardFooter />);

      // Assertions
      expect(wrapper).toBeDefined();
    });

    it('should have "card-footer" and "text-muted" classes', () => {
      // Mock data
      const props = { ...source.props };
      const result = 'card-footer text-muted';

      // Shallow rendering
      const wrapper = shallow(<CardFooter>{props.children}</CardFooter>);

      // Assertions
      expect(wrapper).toHaveClassName(result);
    });
  });

  describe('Props and conditional rendering', () => {
    describe('"children"', () => {
      describe('Receiving prop', () => {
        it('should receive the correct prop', () => {
          // Mock data
          const props = { ...source.props };
          const result = { children: props.children };

          // Shallow rendering
          const wrapper = shallow(<CardFooter {...props} />);

          // Assertions
          expect(result).toBeDefined();
          expect(wrapper).toHaveProp(result);
        });

        it('should render the correct children', () => {
          // Mock data
          const props = { ...source.props };
          const result = props.children;

          // Shallow rendering
          const wrapper = shallow(<CardFooter>{props.children}</CardFooter>);

          // Assertions
          expect(wrapper).toContainReact(result);
        });
      });
    });
  });
});
