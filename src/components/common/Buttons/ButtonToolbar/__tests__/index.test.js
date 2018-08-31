// Module dependencies
import { mount, shallow } from 'enzyme';
import React from 'react';

// Mock data
import mock from 'tests/mock';

// Components
import ButtonToolbar from '../index';

// Source data
const source = {
  class: {
    base: 'btn-group'
  },
  props: {
    alignItem: 'center',
    children: mock.data.source.content.children,
    justifyContent: 'between',
    label: 'Toolbar',
    marginBottom: 'mb-4'
  }
};

// Unit tests
describe('components/common/Buttons/ButtonToolbar', () => {
  describe('Default state', () => {
    it('should render without crashing', () => {
      // Shallow rendering
      const wrapper = shallow(<ButtonToolbar />);

      // Assertions
      expect(wrapper).toBeDefined();
    });
  });

  describe('Props and conditional rendering', () => {
    describe('"alignItem"', () => {
      describe('Default prop', () => {
        it('should have default value for prop', () => {
          // Mock data
          const props = { ...source.props };
          const result = { alignItem: props.alignItem };

          // Full DOM rendering
          const wrapper = mount(<ButtonToolbar {...props} />);

          // Assertions
          expect(result).toBeDefined();
          expect(wrapper).toHaveProp(result);
        });

        it('should set default CSS class', () => {
          // Mock data
          const props = { ...source.props };
          const result = `align-items-${props.alignItem}`;

          // Shallow rendering
          const wrapper = shallow(<ButtonToolbar {...props} />);

          // Assertions
          expect(wrapper).toHaveClassName(result);
        });
      });

      describe('Receiving prop', () => {
        // Configuration
        const alignItem = 'left';

        it('should receive the correct prop', () => {
          // Mock data
          const props = { ...source.props, alignItem };
          const result = { alignItem: props.alignItem };

          // Full DOM rendering
          const wrapper = mount(<ButtonToolbar {...props} />);

          // Assertions
          expect(result).toBeDefined();
          expect(wrapper).toHaveProp(result);
        });

        it('should set the correct CSS class', () => {
          // Mock data
          const props = { ...source.props, alignItem };
          const result = `align-items-${props.alignItem}`;

          // Shallow rendering
          const wrapper = shallow(<ButtonToolbar {...props} />);

          // Assertions
          expect(wrapper).toHaveClassName(result);
        });
      });
    });

    describe('"children"', () => {
      describe('Receiving prop', () => {
        it('should receive the correct prop', () => {
          // Mock data
          const props = { ...source.props };
          const result = { children: props.children };

          // Full DOM rendering
          const wrapper = mount(<ButtonToolbar {...props} />);

          // Assertions
          expect(result).toBeDefined();
          expect(wrapper).toHaveProp(result);
        });

        it('should render the correct children', () => {
          // Mock data
          const props = { ...source.props };
          const result = props.children;

          // Shallow rendering
          const wrapper = shallow(<ButtonToolbar>{props.children}</ButtonToolbar>);

          // Assertions
          expect(wrapper).toContainReact(result);
        });
      });
    });

    describe('"justifyContent"', () => {
      describe('Default prop', () => {
        it('should have default value for prop', () => {
          // Mock data
          const props = { ...source.props };
          const result = { justifyContent: props.justifyContent };

          // Full DOM rendering
          const wrapper = mount(<ButtonToolbar {...props} />);

          // Assertions
          expect(result).toBeDefined();
          expect(wrapper).toHaveProp(result);
        });

        it('should set default CSS class', () => {
          // Mock data
          const props = { ...source.props };
          const result = `justify-content-${props.justifyContent}`;

          // Shallow rendering
          const wrapper = shallow(<ButtonToolbar {...props} />);

          // Assertions
          expect(wrapper).toHaveClassName(result);
        });
      });

      describe('Receiving prop', () => {
        // Configuration
        const justifyContent = 'flex-start';

        it('should receive the correct prop', () => {
          // Mock data
          const props = { ...source.props, justifyContent };
          const result = { justifyContent: props.justifyContent };

          // Full DOM rendering
          const wrapper = mount(<ButtonToolbar {...props} />);

          // Assertions
          expect(result).toBeDefined();
          expect(wrapper).toHaveProp(result);
        });

        it('should set the correct CSS class', () => {
          // Mock data
          const props = { ...source.props, justifyContent };
          const result = `justify-content-${props.justifyContent}`;

          // Shallow rendering
          const wrapper = shallow(<ButtonToolbar {...props} />);

          // Assertions
          expect(wrapper).toHaveClassName(result);
        });
      });
    });

    describe('"label"', () => {
      describe('Receiving prop', () => {
        it('should receive the correct prop', () => {
          // Mock data
          const props = { ...source.props };
          const result = { label: props.label };

          // Full DOM rendering
          const wrapper = mount(<ButtonToolbar {...props} />);

          // Assertions
          expect(result).toBeDefined();
          expect(wrapper).toHaveProp(result);
        });

        it('should have the correct "aria-label" property', () => {
          // Mock data
          const props = { ...source.props };
          const result = { 'aria-label': props.label };

          // Shallow rendering
          const wrapper = shallow(<ButtonToolbar {...props} />);

          // Assertions
          expect(wrapper).toHaveProp(result);
        });
      });
    });

    describe('"marginBottom"', () => {
      describe('Default prop', () => {
        it('should have default value for prop', () => {
          // Mock data
          const props = { ...source.props };
          const result = { marginBottom: props.marginBottom };

          // Full DOM rendering
          const wrapper = mount(<ButtonToolbar {...props} />);

          // Assertions
          expect(result).toBeDefined();
          expect(wrapper).toHaveProp(result);
        });

        it('should set default CSS class', () => {
          // Mock data
          const props = { ...source.props };
          const result = props.marginBottom;

          // Shallow rendering
          const wrapper = shallow(<ButtonToolbar {...props} />);

          // Assertions
          expect(wrapper).toHaveClassName(result);
        });
      });

      describe('Receiving prop', () => {
        // Configuration
        const marginBottom = 'mb-2';

        it('should receive the correct prop', () => {
          // Mock data
          const props = { ...source.props, marginBottom };
          const result = { marginBottom: props.marginBottom };

          // Full DOM rendering
          const wrapper = mount(<ButtonToolbar {...props} />);

          // Assertions
          expect(result).toBeDefined();
          expect(wrapper).toHaveProp(result);
        });

        it('should set the correct CSS class', () => {
          // Mock data
          const props = { ...source.props, marginBottom };
          const result = props.marginBottom;

          // Shallow rendering
          const wrapper = shallow(<ButtonToolbar {...props} />);

          // Assertions
          expect(wrapper).toHaveClassName(result);
        });
      });
    });
  });
});
