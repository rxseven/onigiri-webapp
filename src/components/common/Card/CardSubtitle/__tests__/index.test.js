// Module dependencies
import { mount, shallow } from 'enzyme';
import React from 'react';

// Mock data
import mock from 'tests/mock';

// Components
import CardSubtitle from '../index';

// Source data
const source = {
  props: {
    bold: false,
    children: mock.data.source.content.children,
    options: ''
  }
};

// Unit tests
describe('components/common/Card/CardSubtitle', () => {
  describe('Default state', () => {
    it('should render without crashing', () => {
      // Shallow rendering
      const wrapper = shallow(<CardSubtitle />);

      // Assertions
      expect(wrapper).toBeDefined();
    });

    it('should have "card-title" class', () => {
      // Mock data
      const result = 'card-title';

      // Shallow rendering
      const wrapper = shallow(<CardSubtitle />);

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
          const wrapper = shallow(<CardSubtitle {...props} />);

          // Assertions
          expect(result).toBeDefined();
          expect(wrapper).toHaveProp(result);
        });

        it('should render the correct children', () => {
          // Mock data
          const props = { ...source.props };
          const result = props.children;

          // Shallow rendering
          const wrapper = shallow(<CardSubtitle {...props}>{props.children}</CardSubtitle>);

          // Assertions
          expect(wrapper).toContainReact(result);
        });
      });
    });

    describe('"bold"', () => {
      describe('Default prop', () => {
        it('should have default value for prop', () => {
          // Mock data
          const props = { ...source.props };
          const result = { bold: props.bold };

          // Full DOM rendering
          const wrapper = mount(<CardSubtitle />);

          // Assertions
          expect(result).toBeDefined();
          expect(wrapper).toHaveProp(result);
        });
      });

      describe('Receiving prop', () => {
        // Configuration
        const bold = true;

        it('should receive the correct prop', () => {
          // Mock data
          const props = { ...source.props, bold };
          const result = { bold: props.bold };

          // Full DOM rendering
          const wrapper = mount(<CardSubtitle {...props} />);

          // Assertions
          expect(result).toBeDefined();
          expect(wrapper).toHaveProp(result);
        });

        it('should set "font-weight-bold" class', () => {
          // Mock data
          const style = 'font-weight-bold';
          const props = { ...source.props, bold };
          const result = style;

          // Shallow rendering
          const wrapper = shallow(<CardSubtitle {...props} />);

          // Assertions
          expect(wrapper).toHaveClassName(result);
        });
      });
    });

    describe('"options"', () => {
      describe('Default prop', () => {
        it('should have default value for prop', () => {
          // Mock data
          const props = { ...source.props };
          const result = { options: props.options };

          // Full DOM rendering
          const wrapper = mount(<CardSubtitle {...props} />);

          // Assertions
          expect(result).toBeDefined();
          expect(wrapper).toHaveProp(result);
        });
      });

      describe('Receiving prop', () => {
        // Configuration
        const options = 'css-style';

        it('should receive the correct prop', () => {
          // Mock data
          const props = { ...source.props, options };
          const result = { options: props.options };

          // Full DOM rendering
          const wrapper = mount(<CardSubtitle {...props} />);

          // Assertions
          expect(result).toBeDefined();
          expect(wrapper).toHaveProp(result);
        });

        it('should set additional CSS classes', () => {
          // Mock data
          const props = { ...source.props, options };
          const result = props.options;

          // Shallow rendering
          const wrapper = shallow(<CardSubtitle {...props} />);

          // Assertions
          expect(wrapper).toHaveClassName(result);
        });
      });
    });
  });
});
