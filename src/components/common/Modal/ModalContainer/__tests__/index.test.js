// Module dependencies
import { mount, shallow } from 'enzyme';
import React from 'react';

// Mock data
import mock from 'tests/mock';

// Components
import ModalContainer from '../index';

// Source data
const source = {
  props: {
    children: mock.data.source.content.children,
    onClose: jest.fn(),
    title: 'Testing Dialog',
    visibility: false
  }
};

// Unit tests
describe('components/common/Modal/ModalContainer', () => {
  describe('Default state', () => {
    it('should render without crashing', () => {
      // Shallow rendering
      const wrapper = shallow(<ModalContainer />);

      // Assertions
      expect(wrapper).toBeDefined();
    });

    it('should have "modal-dialog" class', () => {
      // Mock data
      const style = 'modal-dialog';
      const result = style;

      // Shallow rendering
      const wrapper = shallow(<ModalContainer />);

      // Assertions
      expect(wrapper).toHaveClassName(result);
    });
  });

  describe('Props and conditional rendering', () => {
    describe('"onClose"', () => {
      describe('Receiving prop', () => {
        it('should receive the correct prop', () => {
          // Mock data
          const props = { ...source.props };
          const result = { onClose: props.onClose };

          // Full DOM rendering
          const wrapper = mount(<ModalContainer {...props} />);

          // Assertions
          expect(result).toBeDefined();
          expect(wrapper).toHaveProp(result);
        });
      });
    });

    describe('"title"', () => {
      describe('Receiving prop', () => {
        it('should receive the correct prop', () => {
          // Mock data
          const props = { ...source.props };
          const result = { title: props.title };

          // Full DOM rendering
          const wrapper = mount(<ModalContainer {...props} />);

          // Assertions
          expect(result).toBeDefined();
          expect(wrapper).toHaveProp(result);
        });

        it('should render text title', () => {
          // Mock data
          const props = { ...source.props };
          const result = props.title;

          // Shallow rendering
          const wrapper = shallow(<ModalContainer {...props} />);

          // Assertions
          expect(wrapper.find('.modal-title')).toHaveText(result);
        });
      });
    });

    describe('"visibility"', () => {
      describe('Receiving prop', () => {
        // Configuration
        const visibility = true;

        it('should receive the correct prop', () => {
          // Mock data
          const props = { ...source.props, visibility };
          const result = { visibility: props.visibility };

          // Full DOM rendering
          const wrapper = mount(<ModalContainer {...props} />);

          // Assertions
          expect(result).toBeDefined();
          expect(wrapper).toHaveProp(result);
        });

        // TODO: Conditional rendering
      });
    });
  });

  describe('Interactions', () => {
    describe('Close modal', () => {
      it('should close a modal when the button is clicked', () => {
        // Mock data
        const props = { onClose: jest.fn() };

        // Shallow rendering
        const wrapper = shallow(<ModalContainer {...props} />);

        // Simulate user interaction
        wrapper
          .find('button.close')
          .at(0)
          .simulate('click');

        // Assertions
        expect(props.onClose).toHaveBeenCalled();
      });
    });
  });
});
