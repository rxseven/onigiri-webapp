// Module dependencies
import { mount, shallow } from 'enzyme';
import React from 'react';

// Components
import Avatar from '../index';

// Source data
const source = {
  props: {
    url: 'https://s.gravatar.com/avatar/id'
  }
};

// Unit tests
describe('components/common/Avatar', () => {
  describe('Default state', () => {
    it('should render without crashing', () => {
      // Shallow rendering
      const wrapper = shallow(<Avatar />);

      // Assertions
      expect(wrapper).toBeDefined();
    });

    it('should have "avatar" class', () => {
      // Mock data
      const result = 'avatar';

      // Shallow rendering
      const wrapper = shallow(<Avatar />);

      // Assertions
      expect(wrapper).toHaveClassName(result);
    });

    it('should contain <img> component', () => {
      // Shallow rendering
      const wrapper = shallow(<Avatar />);

      // Assertions
      expect(wrapper.find('img')).toExist();
    });
  });

  describe('Props and conditional rendering', () => {
    describe('"url"', () => {
      describe('Receiving prop', () => {
        it('should receive the correct prop', () => {
          // Mock data
          const props = { ...source.props };
          const result = { url: props.url };

          // Full DOM rendering
          const wrapper = mount(<Avatar {...props} />);

          // Assertions
          expect(result).toBeDefined();
          expect(wrapper).toHaveProp(result);
        });

        it('should specify an image URL', () => {
          // Mock data
          const props = { ...source.props };
          const result = { src: props.url };

          // Shallow rendering
          const wrapper = shallow(<Avatar {...props} />);

          // Assertions
          expect(wrapper.find('img')).toHaveProp(result);
        });
      });
    });
  });
});
