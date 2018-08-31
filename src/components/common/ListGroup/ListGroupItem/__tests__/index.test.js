// Module dependencies
import { mount, shallow } from 'enzyme';
import React from 'react';
import { Link } from 'react-router-dom';

// Helper functions
import { mockRouter } from 'tests/helpers/mock';

// Mock data
import mock from 'tests/mock';

// Components
import ListGroupItem from '../index';

// Source data
const source = {
  props: {
    children: mock.data.source.content.children,
    link: 'http://www.rxseven.com'
  }
};

// Unit tests
describe('components/common/ListGroup/ListGroupItem', () => {
  describe('Default state', () => {
    it('should render without crashing', () => {
      // Mock data
      const props = { ...source.props };

      // Shallow rendering
      const wrapper = shallow(<ListGroupItem {...props} />);

      // Assertions
      expect(wrapper).toBeDefined();
    });

    it('should have "list-group-item" and "list-group-item-action" classes', () => {
      // Mock data
      const style = 'list-group-item list-group-item-action';
      const props = { ...source.props };
      const result = style;

      // Shallow rendering
      const wrapper = shallow(<ListGroupItem {...props} />);

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
          const wrapper = shallow(<ListGroupItem {...props} />);

          // Assertions
          expect(result).toBeDefined();
          expect(wrapper).toHaveProp(result);
        });

        it('should render the correct children', () => {
          // Mock data
          const props = { ...source.props };
          const result = props.children;

          // Shallow rendering
          const wrapper = shallow(<ListGroupItem {...props}>{props.children}</ListGroupItem>);

          // Assertions
          expect(wrapper).toContainReact(result);
        });
      });
    });

    describe('"link"', () => {
      describe('Receiving prop', () => {
        it('should receive the correct prop', () => {
          // Mock data
          const props = { ...source.props };
          const result = { link: props.link };
          const component = <ListGroupItem {...props} />;

          // Shallow rendering
          const wrapper = shallow(mockRouter(component));

          // Assertions
          expect(result).toBeDefined();
          expect(wrapper.dive()).toHaveProp(result);
        });

        it('should specify a link URL', () => {
          // Mock data
          const props = { ...source.props };
          const result = { to: props.link };
          const component = <ListGroupItem {...props} />;

          // Full DOM rendering
          const wrapper = mount(mockRouter(component));

          // Assertions
          expect(wrapper.find(Link)).toHaveProp(result);
        });
      });
    });
  });
});
