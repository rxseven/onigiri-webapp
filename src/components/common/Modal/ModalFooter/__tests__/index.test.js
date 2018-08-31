// Module dependencies
import { mount, shallow } from 'enzyme';
import React from 'react';

// Mock data
import mock from 'tests/mock';

// Components
import ModalFooter from '../index';

// Source data
const source = {
  props: {
    children: mock.data.source.content.children
  }
};

// Unit tests
describe('components/common/Modal/ModalFooter', () => {
  describe('Default state', () => {
    it('should render without crashing', () => {
      // Shallow rendering
      const wrapper = shallow(<ModalFooter />);

      // Assertions
      expect(wrapper).toBeDefined();
    });

    it('should have "modal-footer" class', () => {
      // Mock data
      const style = 'modal-footer';
      const result = style;

      // Shallow rendering
      const wrapper = shallow(<ModalFooter />);

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
          const wrapper = mount(<ModalFooter {...props} />);

          // Assertions
          expect(result).toBeDefined();
          expect(wrapper).toHaveProp(result);
        });

        it('should render the correct children', () => {
          // Mock data
          const props = { ...source.props };
          const result = props.children;

          // Shallow rendering
          const wrapper = shallow(<ModalFooter>{props.children}</ModalFooter>);

          // Assertions
          expect(wrapper).toContainReact(result);
        });
      });
    });
  });
});
