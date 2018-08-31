// Module dependencies
import cx from 'classnames';
import { mount, shallow } from 'enzyme';
import React from 'react';

// Helper functions
import { cssModule } from 'tests/helpers/assertions';

// Components
import Icon from '../index';

// Source data
const source = {
  class: {
    base: 'oi'
  },
  props: {
    disabled: false,
    options: '',
    text: false
  }
};

// Unit tests
describe('components/common/Icon', () => {
  describe('Default state', () => {
    it('should render without crashing', () => {
      // Shallow rendering
      const wrapper = shallow(<Icon />);

      // Assertions
      expect(wrapper).toBeDefined();
    });

    it('should have "oi" and "icon" classes', () => {
      // Mock data
      const result = cx(source.class.base, 'icon');

      // Shallow rendering
      const wrapper = shallow(<Icon />);

      // Assertions
      expect(result).toBeDefined();
      expect(wrapper).toHaveClassName(result);
    });
  });

  describe('Props and conditional rendering', () => {
    describe('"disabled"', () => {
      // Configuration
      const style = 'disabled';

      describe('Default prop', () => {
        it('should have default value for prop', () => {
          // Mock data
          const props = { ...source.props };
          const result = { disabled: props.disabled };

          // Full DOM rendering
          const wrapper = mount(<Icon />);

          // Assertions
          expect(result).toBeDefined();
          expect(wrapper).toHaveProp(result);
        });

        it('should NOT set "disabled" class by default', () => {
          // Mock data
          const result = style;

          // Shallow rendering
          const wrapper = shallow(<Icon />);

          // Assertions
          expect(cssModule(wrapper, result)).toBeFalsy();
        });
      });

      describe('Receiving prop', () => {
        // Configuration
        const disabled = true;

        it('should receive the correct prop', () => {
          // Mock data
          const props = { ...source.props, disabled };
          const result = { disabled: props.disabled };

          // Full DOM rendering
          const wrapper = mount(<Icon {...props} />);

          // Assertions
          expect(result).toBeDefined();
          expect(wrapper).toHaveProp(result);
        });

        it('should set "disabled" class', () => {
          // Mock data
          const props = { ...source.props, disabled };
          const result = style;

          // Shallow rendering
          const wrapper = shallow(<Icon {...props} />);

          // Assertions
          expect(cssModule(wrapper, result)).toBeTruthy();
        });
      });
    });

    describe('"name"', () => {
      // Configuration
      const name = 'fork';

      describe('Receiving prop', () => {
        it('should receive the correct prop', () => {
          // Mock data
          const props = { ...source.props, name };
          const result = { name: props.name };

          // Full DOM rendering
          const wrapper = mount(<Icon {...props} />);

          // Assertions
          expect(result).toBeDefined();
          expect(wrapper).toHaveProp(result);
        });

        it('should set "oi-fork" class', () => {
          // Mock data
          const props = { ...source.props, name };
          const result = cx(`${source.class.base}-${props.name}`);

          // Shallow rendering
          const wrapper = shallow(<Icon {...props} />);

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
          const wrapper = mount(<Icon />);

          // Assertions
          expect(result).toBeDefined();
          expect(wrapper).toHaveProp(result);
        });

        describe('Receiving prop', () => {
          // Configuration
          const options = 'css-style';

          it('should receive the correct prop', () => {
            // Mock data
            const props = { ...source.props, options };
            const result = { options: props.options };

            // Full DOM rendering
            const wrapper = mount(<Icon {...props} />);

            // Assertions
            expect(result).toBeDefined();
            expect(wrapper).toHaveProp(result);
          });

          it('should set additional CSS classes', () => {
            // Mock data
            const props = { ...source.props, options };
            const result = props.options;

            // Shallow rendering
            const wrapper = shallow(<Icon {...props} />);

            // Assertions
            expect(wrapper).toHaveClassName(result);
          });
        });
      });
    });

    describe('"text"', () => {
      // Configuration
      const style = {
        global: 'icon-inline',
        local: 'inline'
      };

      describe('Default prop', () => {
        it('should have default value for prop', () => {
          // Mock data
          const props = { ...source.props };
          const result = { text: props.text };

          // Full DOM rendering
          const wrapper = mount(<Icon />);

          // Assertions
          expect(result).toBeDefined();
          expect(wrapper).toHaveProp(result);
        });

        it('should NOT set an inline style by default', () => {
          // Mock data
          const result = style;

          // Shallow rendering
          const wrapper = shallow(<Icon />);

          // Assertions
          expect(wrapper).not.toHaveClassName(result.global);
          expect(cssModule(wrapper, result.local)).toBeFalsy();
        });
      });

      describe('Receiving prop', () => {
        // Configuration
        const text = true;

        it('should receive the correct prop', () => {
          // Mock data
          const props = { ...source.props, text };
          const result = { text: props.text };

          // Full DOM rendering
          const wrapper = mount(<Icon {...props} />);

          // Assertions
          expect(result).toBeDefined();
          expect(wrapper).toHaveProp(result);
        });

        it('should set an inline style', () => {
          // Mock data
          const props = { ...source.props, text };
          const result = style;

          // Shallow rendering
          const wrapper = shallow(<Icon {...props} />);

          // Assertions
          expect(wrapper).toHaveClassName(result.global);
          expect(cssModule(wrapper, result.local)).toBeTruthy();
        });
      });
    });

    describe('"title"', () => {
      // Configuration
      const title = 'GitHub';

      describe('Receiving prop', () => {
        it('should receive the correct prop', () => {
          // Mock data
          const props = { ...source.props, title };
          const result = { title: props.title };

          // Full DOM rendering
          const wrapper = mount(<Icon {...props} />);

          // Assertions
          expect(result).toBeDefined();
          expect(wrapper).toHaveProp(result);
        });
      });

      it('should render an icon with "title" property', () => {
        // Mock data
        const props = { ...source.props, title };
        const result = { title: props.title };

        // Shallow rendering
        const wrapper = shallow(<Icon {...props} />);

        // Assertions
        expect(wrapper).toHaveProp(result);
      });
    });
  });
});
