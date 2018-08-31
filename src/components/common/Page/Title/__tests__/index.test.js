// Module dependencies
import { mount, shallow } from 'enzyme';
import React from 'react';

// Components
import Title from '../index';

// Source data
const source = {
  props: {
    children: 'Onigiri Webapp'
  }
};

// Unit tests
describe('components/common/Page/Title', () => {
  describe('Default state', () => {
    it('should render without crashing', () => {
      // Shallow rendering
      const wrapper = shallow(<Title />);

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
          const wrapper = mount(<Title {...props} />);

          // Assertions
          expect(result).toBeDefined();
          expect(wrapper).toHaveProp(result);
        });

        it('should render the correct children', () => {
          // Mock data
          const props = { ...source.props };
          const result = props.children;

          // Shallow rendering
          const wrapper = shallow(<Title>{props.children}</Title>);

          // Assertions
          expect(wrapper.find('title')).toHaveText(result);
        });
      });
    });
  });
});
