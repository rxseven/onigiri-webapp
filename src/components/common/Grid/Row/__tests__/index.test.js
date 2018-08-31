// Module dependencies
import { mount, shallow } from 'enzyme';
import React from 'react';

// Mock data
import mock from 'tests/mock';

// Components
import Row from '../index';

// Source data
const source = {
  props: {
    alignment: '',
    children: mock.data.source.content.children
  }
};

// Unit tests
describe('components/common/Grid/Row', () => {
  describe('Default state', () => {
    it('should render without crashing', () => {
      // Shallow rendering
      const wrapper = shallow(<Row />);

      // Assertions
      expect(wrapper).toBeDefined();
    });

    it('should have "row" class', () => {
      // Mock data
      const style = 'row';
      const result = style;

      // Shallow rendering
      const wrapper = shallow(<Row />);

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
          const wrapper = mount(<Row {...props} />);

          // Assertions
          expect(result).toBeDefined();
          expect(wrapper).toHaveProp(result);
        });

        it('should render the correct children', () => {
          // Mock data
          const props = { ...source.props };
          const result = props.children;

          // Shallow rendering
          const wrapper = shallow(<Row>{props.children}</Row>);

          // Assertions
          expect(wrapper).toContainReact(result);
        });
      });
    });
  });

  describe('"alignment"', () => {
    describe('Default prop', () => {
      it('should have default value for prop', () => {
        // Mock data
        const props = { ...source.props };
        const result = { alignment: props.alignment };

        // Full DOM rendering
        const wrapper = mount(<Row />);

        // Assertions
        expect(result).toBeDefined();
        expect(wrapper).toHaveProp(result);
      });
    });

    describe('Receiving prop', () => {
      // Configuration
      const alignment = 'justify-content-sm-center';

      it('should receive the correct prop', () => {
        // Mock data
        const props = { ...source.props, alignment };
        const result = { alignment: props.alignment };

        // Full DOM rendering
        const wrapper = mount(<Row {...props} />);

        // Assertions
        expect(result).toBeDefined();
        expect(wrapper).toHaveProp(result);
      });

      it('should set "alignment" style', () => {
        // Mock data
        const props = { ...source.props, alignment };
        const result = alignment;

        // Shallow rendering
        const wrapper = shallow(<Row {...props} />);

        // Assertions
        expect(wrapper).toHaveClassName(result);
      });
    });
  });
});
