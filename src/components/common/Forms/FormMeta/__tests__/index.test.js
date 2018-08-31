// Module dependencies
import { mount, shallow } from 'enzyme';
import React from 'react';

// Helper functions
import { cssModule } from 'tests/helpers/assertions';

// Mock data
import mock from 'tests/mock';

// Components
import FormMeta from '../index';

// Source data
const source = {
  props: {
    children: mock.data.source.content.children
  }
};

// Unit tests
describe('components/common/Form/FormMeta', () => {
  describe('Default state', () => {
    it('should render without crashing', () => {
      // Shallow rendering
      const wrapper = shallow(<FormMeta />);

      // Assertions
      expect(wrapper).toBeDefined();
    });

    it('should have "meta" class', () => {
      // Mock data
      const style = 'meta';
      const result = style;

      // Shallow rendering
      const wrapper = shallow(<FormMeta />);

      // Assertions
      expect(cssModule(wrapper, result)).toBeTruthy();
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
          const wrapper = mount(<FormMeta {...props} />);

          // Assertions
          expect(result).toBeDefined();
          expect(wrapper).toHaveProp(result);
        });

        it('should render the correct children', () => {
          // Mock data
          const props = { ...source.props };
          const result = props.children;

          // Shallow rendering
          const wrapper = shallow(<FormMeta>{props.children}</FormMeta>);

          // Assertions
          expect(wrapper).toContainReact(result);
        });
      });
    });
  });
});
