// Module dependencies
import { mount, shallow } from 'enzyme';
import React from 'react';

// Mock data
import mock from 'tests/mock';

// Components
import Alert from '../index';

// Source data
const source = {
  class: {
    base: 'alert'
  },
  props: {
    children: mock.data.source.content.children,
    options: '',
    type: ''
  }
};

// Unit tests
describe('components/common/Alert', () => {
  describe('Default state', () => {
    it('should render without crashing', () => {
      // Shallow rendering
      const wrapper = shallow(<Alert />);

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

          // Shallow rendering
          const wrapper = shallow(<Alert {...props} />);

          // Assertions
          expect(result).toBeDefined();
          expect(wrapper).toHaveProp(result);
        });

        it('should render the correct children', () => {
          // Mock data
          const props = { ...source.props };
          const result = props.children;

          // Shallow rendering
          const wrapper = shallow(<Alert>{props.children}</Alert>);

          // Assertions
          expect(wrapper).toContainReact(result);
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
          const wrapper = mount(<Alert />);

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
          const wrapper = mount(<Alert {...props} />);

          // Assertions
          expect(result).toBeDefined();
          expect(wrapper).toHaveProp(result);
        });

        it('should set additional CSS classes', () => {
          // Mock data
          const props = { ...source.props, options };
          const result = props.options;

          // Shallow rendering
          const wrapper = shallow(<Alert {...props} />);

          // Assertions
          expect(wrapper).toHaveClassName(result);
        });
      });
    });

    describe('"type"', () => {
      describe('Default prop', () => {
        it('should have default value for prop', () => {
          // Mock data
          const result = { type: 'danger' };

          // Full DOM rendering
          const wrapper = mount(<Alert />);

          // Assertions
          expect(result).toBeDefined();
          expect(wrapper).toHaveProp(result);
        });

        it('should render "danger" type by default', () => {
          // Mock data
          const result = `${source.class.base}-danger`;

          // Shallow rendering
          const wrapper = shallow(<Alert />);

          // Assertions
          expect(wrapper).toHaveClassName(result);
        });
      });

      describe('Receiving prop', () => {
        // Configuration
        const type = 'warning';

        it('should receive the correct prop', () => {
          // Mock data
          const props = { ...source.props, type };
          const result = { type: props.type };

          // Full DOM rendering
          const wrapper = mount(<Alert {...props} />);

          // Assertions
          expect(result).toBeDefined();
          expect(wrapper).toHaveProp(result);
        });

        it('should render "warning" type', () => {
          // Mock data
          const props = { ...source.props, type };
          const result = `${source.class.base}-${props.type}`;

          // Shallow rendering
          const wrapper = shallow(<Alert {...props} />);

          // Assertions
          expect(wrapper).toHaveClassName(result);
        });
      });
    });
  });
});
