// Module dependencies
import { mount, shallow } from 'enzyme';
import React from 'react';
import { NavLink } from 'react-router-dom';

// Helper functions
import { mockRouter } from 'tests/helpers/mock';

// Mock data
import mock from 'tests/mock';

// Components
import FooterLink from '../index';

// Source data
const source = {
  props: {
    children: mock.data.source.content.children,
    to: 'http://www.rxseven.com'
  }
};

// Unit tests
describe('components/core/Footer/FooterLink', () => {
  describe('Default state', () => {
    it('should render without crashing', () => {
      // Mock data
      const props = { ...source.props };

      // Shallow rendering
      const wrapper = shallow(<FooterLink {...props} />);

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
          const component = <FooterLink {...props} />;

          // Full DOM rendering
          const wrapper = mount(mockRouter(component));

          // Assertions
          expect(result).toBeDefined();
          expect(wrapper.find(FooterLink)).toHaveProp(result);
        });

        it('should render the correct children', () => {
          // Mock data
          const props = { ...source.props };
          const result = { children: props.children };
          const component = <FooterLink {...props} />;

          // Full DOM rendering
          const wrapper = mount(mockRouter(component));

          // Assertions
          expect(wrapper.find(NavLink)).toHaveProp(result);
        });
      });
    });

    describe('"to"', () => {
      describe('Receiving prop', () => {
        it('should receive the correct prop', () => {
          // Mock data
          const props = { ...source.props };
          const result = { to: props.to };
          const component = <FooterLink {...props} />;

          // Full DOM rendering
          const wrapper = mount(mockRouter(component));

          // Assertions
          expect(result).toBeDefined();
          expect(wrapper.find(FooterLink)).toHaveProp(result);
        });

        it('should specify a link URL', () => {
          // Mock data
          const props = { ...source.props };
          const result = { to: props.to };
          const component = <FooterLink {...props} />;

          // Full DOM rendering
          const wrapper = mount(mockRouter(component));

          // Assertions
          expect(wrapper.find(NavLink)).toHaveProp(result);
        });
      });
    });
  });
});
