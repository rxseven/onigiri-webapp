// Module dependencies
import { mount, shallow } from 'enzyme';
import React from 'react';

// Mock data
import mock from 'tests/mock';

// Components
import ModalBody from '../index';

// Source data
const source = {
  props: {
    children: mock.data.source.content.children
  }
};

// Unit tests
describe('components/common/Modal/ModalBody', () => {
  describe('Default state', () => {
    it('should render without crashing', () => {
      // Shallow rendering
      const wrapper = shallow(<ModalBody />);

      // Assertions
      expect(wrapper).toBeDefined();
    });

    it('should have "modal-body" class', () => {
      // Mock data
      const style = 'modal-body';
      const result = style;

      // Shallow rendering
      const wrapper = shallow(<ModalBody />);

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
          const wrapper = mount(<ModalBody {...props} />);

          // Assertions
          expect(result).toBeDefined();
          expect(wrapper).toHaveProp(result);
        });

        it('should render the correct children', () => {
          // Mock data
          const props = { ...source.props };
          const result = props.children;

          // Shallow rendering
          const wrapper = shallow(<ModalBody>{props.children}</ModalBody>);

          // Assertions
          expect(wrapper).toContainReact(result);
        });
      });
    });
  });
});
