// Module dependencies
import { mount, shallow } from 'enzyme';
import React from 'react';

// Helper functions
import { cssModule } from 'tests/helpers/assertions';

// Mock data
import mock from 'tests/mock';

// Components
import TipContainer from '../index';

// Source data
const source = {
  props: {
    children: mock.data.source.content.children,
    end: false,
    margin: 'mb-4',
    options: ''
  }
};

// Unit tests
describe('components/common/Tip/TipContainer', () => {
  describe('Default state', () => {
    it('should render without crashing', () => {
      // Shallow rendering
      const wrapper = shallow(<TipContainer />);

      // Assertions
      expect(wrapper).toBeDefined();
    });

    it('should have "container" class', () => {
      // Mock data
      const style = 'container';
      const result = style;

      // Shallow rendering
      const wrapper = shallow(<TipContainer />);

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
          const wrapper = mount(<TipContainer {...props} />);

          // Assertions
          expect(result).toBeDefined();
          expect(wrapper).toHaveProp(result);
        });

        it('should render the correct children', () => {
          // Mock data
          const props = { ...source.props };
          const result = props.children;

          // Shallow rendering
          const wrapper = shallow(<TipContainer>{props.children}</TipContainer>);

          // Assertions
          expect(wrapper).toContainReact(result);
        });
      });
    });

    describe('"end"', () => {
      describe('Default prop', () => {
        it('should have default value for prop', () => {
          // Mock data
          const props = { ...source.props };
          const result = { end: props.end };

          // Full DOM rendering
          const wrapper = mount(<TipContainer />);

          // Assertions
          expect(result).toBeDefined();
          expect(wrapper).toHaveProp(result);
        });

        it('should NOT have a bottom spacing by default', () => {
          // Mock data
          const props = { ...source.props };
          const result = props.margin;

          // Shallow rendering
          const wrapper = shallow(<TipContainer />);

          // Assertions
          expect(wrapper).not.toHaveClassName(result);
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
          const wrapper = mount(<TipContainer {...props} />);

          // Assertions
          expect(result).toBeDefined();
          expect(wrapper).toHaveProp(result);
        });

        it('should have a bottom spacing by default', () => {
          // Mock data
          const props = { ...source.props, end };
          const result = props.margin;

          // Shallow rendering
          const wrapper = shallow(<TipContainer {...props} />);

          // Assertions
          expect(wrapper).toHaveClassName(result);
        });
      });
    });

    describe('"margin"', () => {
      describe('Default prop', () => {
        it('should have default value for prop', () => {
          // Mock data
          const props = { ...source.props };
          const result = { margin: props.margin };

          // Full DOM rendering
          const wrapper = mount(<TipContainer />);

          // Assertions
          expect(result).toBeDefined();
          expect(wrapper).toHaveProp(result);
        });

        it('should set "margin-bottom" property with "mb-4" value by default (last child only)', () => {
          // Mock data
          const props = {
            ...source.props,
            end: true
          };
          const result = props.margin;

          // Shallow rendering
          const wrapper = shallow(<TipContainer {...props} />);

          // Assertions
          expect(wrapper).toHaveClassName(result);
        });
      });

      describe('Receiving prop', () => {
        // Configuration
        const margin = 'mb-2';

        it('should receive the correct prop', () => {
          // Mock data
          const props = { ...source.props, margin };
          const result = { margin: props.margin };

          // Full DOM rendering
          const wrapper = mount(<TipContainer {...props} />);

          // Assertions
          expect(result).toBeDefined();
          expect(wrapper).toHaveProp(result);
        });

        it('should set "margin-bottom" property with "mb-2" value (last child only)', () => {
          // Mock data
          const props = {
            ...source.props,
            margin,
            end: true
          };
          const result = props.margin;

          // Shallow rendering
          const wrapper = shallow(<TipContainer {...props} />);

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
          const wrapper = mount(<TipContainer />);

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
          const wrapper = mount(<TipContainer {...props} />);

          // Assertions
          expect(result).toBeDefined();
          expect(wrapper).toHaveProp(result);
        });

        it('should set additional CSS classes', () => {
          // Mock data
          const props = { ...source.props, options };
          const result = props.options;

          // Shallow rendering
          const wrapper = shallow(<TipContainer {...props} />);

          // Assertions
          expect(wrapper).toHaveClassName(result);
        });
      });
    });
  });
});
