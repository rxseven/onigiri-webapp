// Module dependencies
import { mount, shallow } from 'enzyme';
import React from 'react';

// Mock data
import mock from 'tests/mock';

// Components
import ListGroupContainer from '../index';

// Source data
const source = {
  props: {
    children: mock.data.source.content.children,
    margin: ''
  }
};

// Unit tests
describe('components/common/ListGroup/ListGroupContainer', () => {
  describe('Default state', () => {
    it('should render without crashing', () => {
      // Shallow rendering
      const wrapper = shallow(<ListGroupContainer />);

      // Assertions
      expect(wrapper).toBeDefined();
    });

    it('should have "list-group" class', () => {
      // Mock data
      const style = 'list-group';
      const result = style;

      // Shallow rendering
      const wrapper = shallow(<ListGroupContainer />);

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

          // Full DOM rendering
          const wrapper = mount(<ListGroupContainer {...props} />);

          // Assertions
          expect(result).toBeDefined();
          expect(wrapper).toHaveProp(result);
        });

        it('should render the correct children', () => {
          // Mock data
          const props = { ...source.props };
          const result = props.children;

          // Shallow rendering
          const wrapper = shallow(<ListGroupContainer>{props.children}</ListGroupContainer>);

          // Assertions
          expect(wrapper).toContainReact(result);
        });
      });
    });

    describe('"margin"', () => {
      describe('Default prop', () => {
        it('should have default value for prop', () => {
          // Mock data
          const props = { ...source.props };
          const result = { margin: props.margin };

          // Full DOM rendering
          const wrapper = mount(<ListGroupContainer />);

          // Assertions
          expect(result).toBeDefined();
          expect(wrapper).toHaveProp(result);
        });

        it('should NOT set "margin" class', () => {
          // Mock data
          const style = 'mb-4';
          const result = style;

          // Shallow rendering
          const wrapper = shallow(<ListGroupContainer />);

          // Assertions
          expect(wrapper).not.toHaveClassName(result);
        });
      });

      describe('Receiving prop', () => {
        // Configuration
        const margin = 'mb-4';

        it('should receive the correct prop', () => {
          // Mock data
          const props = { ...source.props, margin };
          const result = { margin: props.margin };

          // Full DOM rendering
          const wrapper = mount(<ListGroupContainer {...props} />);

          // Assertions
          expect(result).toBeDefined();
          expect(wrapper).toHaveProp(result);
        });

        it('should set "margin" class', () => {
          // Mock data
          const props = { ...source.props, margin };
          const result = props.margin;

          // Shallow rendering
          const wrapper = shallow(<ListGroupContainer {...props} />);

          // Assertions
          expect(wrapper).toHaveClassName(result);
        });
      });
    });
  });
});
