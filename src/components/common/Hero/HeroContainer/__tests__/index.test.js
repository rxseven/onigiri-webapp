// Module dependencies
import { mount, shallow } from 'enzyme';
import React from 'react';

// Mock data
import mock from 'tests/mock';

// Components
import HeroContainer from '../index';

// Source data
const source = {
  props: {
    children: mock.data.source.content.children
  }
};

// Unit tests
describe('components/common/Hero/HeroContainer', () => {
  describe('Default state', () => {
    it('should render without crashing', () => {
      // Shallow rendering
      const wrapper = shallow(<HeroContainer />);

      // Assertions
      expect(wrapper).toBeDefined();
    });

    it('should have "jumbotron" class', () => {
      // Mock data
      const style = 'jumbotron';
      const result = style;

      // Shallow rendering
      const wrapper = shallow(<HeroContainer />);

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
          const wrapper = mount(<HeroContainer {...props} />);

          // Assertions
          expect(result).toBeDefined();
          expect(wrapper).toHaveProp(result);
        });

        it('should render the correct children', () => {
          // Mock data
          const props = { ...source.props };
          const result = props.children;

          // Shallow rendering
          const wrapper = shallow(<HeroContainer>{props.children}</HeroContainer>);

          // Assertions
          expect(wrapper).toContainReact(result);
        });
      });
    });
  });
});
