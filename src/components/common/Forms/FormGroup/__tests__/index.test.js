// Module dependencies
import { mount, shallow } from 'enzyme';
import React from 'react';

// Helper functions
import { cssModule } from 'tests/helpers/assertions';

// Mock data
import mock from 'tests/mock';

// Components
import FormGroup from '../index';

// Source data
const source = {
  props: {
    children: mock.data.source.content.children,
    end: false
  }
};

// Unit tests
describe('components/common/Form/FormGroup', () => {
  describe('Default state', () => {
    it('should render without crashing', () => {
      // Shallow rendering
      const wrapper = shallow(<FormGroup />);

      // Assertions
      expect(wrapper).toBeDefined();
    });

    it('should have "form-group" class', () => {
      // Mock data
      const style = 'form-group';
      const result = style;

      // Shallow rendering
      const wrapper = shallow(<FormGroup />);

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
          const wrapper = mount(<FormGroup {...props} />);

          // Assertions
          expect(result).toBeDefined();
          expect(wrapper).toHaveProp(result);
        });

        it('should render the correct children', () => {
          // Mock data
          const props = { ...source.props };
          const result = props.children;

          // Shallow rendering
          const wrapper = shallow(<FormGroup>{props.children}</FormGroup>);

          // Assertions
          expect(wrapper).toContainReact(result);
        });
      });
    });

    describe('"end"', () => {
      // Configuration
      const style = 'end';

      describe('Default prop', () => {
        it('should have default value for prop', () => {
          // Mock data
          const props = { ...source.props };
          const result = { end: props.end };

          // Full DOM rendering
          const wrapper = mount(<FormGroup />);

          // Assertions
          expect(result).toBeDefined();
          expect(wrapper).toHaveProp(result);
        });

        it('should NOT set "end" class by default', () => {
          // Mock data
          const result = style;

          // Shallow rendering
          const wrapper = shallow(<FormGroup />);

          // Assertions
          expect(cssModule(wrapper, result)).toBeFalsy();
        });
      });

      describe('Receiving prop', () => {
        // Configuration
        const end = true;

        it('should receive the correct prop', () => {
          // Mock data
          const props = { ...source.props, end };
          const result = { end: props.end };

          // Full DOM rendering
          const wrapper = mount(<FormGroup {...props} />);

          // Assertions
          expect(result).toBeDefined();
          expect(wrapper).toHaveProp(result);
        });

        it('should set (override) "end" class', () => {
          // Mock data
          const props = { ...source.props, end };
          const result = style;

          // Shallow rendering
          const wrapper = shallow(<FormGroup {...props} />);

          // Assertions
          expect(cssModule(wrapper, result)).toBeTruthy();
        });
      });
    });
  });
});
