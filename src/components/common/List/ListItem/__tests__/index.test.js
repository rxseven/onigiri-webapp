// Module dependencies
import { mount, shallow } from 'enzyme';
import React from 'react';

// Helper functions
import { cssModule } from 'tests/helpers/assertions';

// Mock data
import mock from 'tests/mock';

// Components
import ListItem from '../index';

// Source data
const source = {
  props: {
    children: mock.data.source.content.children,
    end: false,
    inline: false
  }
};

// Unit tests
describe('components/common/List/ListItem', () => {
  describe('Default state', () => {
    it('should render without crashing', () => {
      // Shallow rendering
      const wrapper = shallow(<ListItem />);

      // Assertions
      expect(wrapper).toBeDefined();
    });

    it('should have "item" class', () => {
      // Mock data
      const style = 'item';
      const result = style;

      // Shallow rendering
      const wrapper = shallow(<ListItem />);

      // Assertions
      expect(cssModule(wrapper, result)).toBeTruthy();
    });
  });

  describe('Props and conditional rendering', () => {
    describe('"end"', () => {
      // Configuration
      const style = 'end';

      describe('Default prop', () => {
        it('should have default value for prop', () => {
          // Mock data
          const props = { ...source.props };
          const result = { end: props.end };

          // Full DOM rendering
          const wrapper = mount(<ListItem />);

          // Assertions
          expect(result).toBeDefined();
          expect(wrapper).toHaveProp(result);
        });

        it('should NOT set "end" class by default', () => {
          // Mock data
          const result = style;

          // Shallow rendering
          const wrapper = shallow(<ListItem />);

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
          const wrapper = mount(<ListItem {...props} />);

          // Assertions
          expect(result).toBeDefined();
          expect(wrapper).toHaveProp(result);
        });

        it('should set (override) "end" class', () => {
          // Mock data
          const props = { ...source.props, end };
          const result = style;

          // Shallow rendering
          const wrapper = shallow(<ListItem {...props} />);

          // Assertions
          expect(cssModule(wrapper, result)).toBeTruthy();
        });
      });
    });

    describe('"inline"', () => {
      // Configuration
      const style = 'block';

      describe('Default prop', () => {
        it('should have default value for prop', () => {
          // Mock data
          const props = { ...source.props };
          const result = { inline: props.inline };

          // Full DOM rendering
          const wrapper = mount(<ListItem />);

          // Assertions
          expect(result).toBeDefined();
          expect(wrapper).toHaveProp(result);
        });

        it('should set "block" class by default', () => {
          // Mock data
          const result = style;

          // Shallow rendering
          const wrapper = shallow(<ListItem />);

          // Assertions
          expect(wrapper).toHaveClassName(result);
          expect(cssModule(wrapper, result)).toBeTruthy();
        });
      });

      describe('Receiving prop', () => {
        // Configuration
        const inline = true;

        it('should receive the correct prop', () => {
          // Mock data
          const props = { ...source.props, inline };
          const result = { inline: props.inline };

          // Full DOM rendering
          const wrapper = mount(<ListItem {...props} />);

          // Assertions
          expect(result).toBeDefined();
          expect(wrapper).toHaveProp(result);
        });

        it('should NOT set "block" class', () => {
          // Mock data
          const props = { ...source.props, inline };
          const result = style;

          // Shallow rendering
          const wrapper = shallow(<ListItem {...props} />);

          // Assertions
          expect(wrapper).not.toHaveClassName(result);
          expect(cssModule(wrapper, result)).toBeFalsy();
        });
      });
    });
  });
});
