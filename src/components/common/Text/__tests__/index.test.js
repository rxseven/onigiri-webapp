// Module dependencies
import { mount, shallow } from 'enzyme';
import React from 'react';

// Components
import Text from '../index';

// Source data
const source = {
  props: {
    block: false,
    bold: false,
    children: <span>content</span>,
    lead: false,
    mute: false,
    options: '',
    secondary: false,
    small: false
  }
};

// Unit tests
describe('components/common/Text', () => {
  describe('Default state', () => {
    it('should render without crashing', () => {
      // Shallow rendering
      const wrapper = shallow(<Text />);

      // Assertions
      expect(wrapper).toBeDefined();
    });
  });

  describe('Props and conditional rendering', () => {
    describe('"block"', () => {
      // Configuration
      const style = 'text-block';

      describe('Default prop', () => {
        it('should have default value for prop', () => {
          // Mock data
          const props = { ...source.props };
          const result = { block: props.block };

          // Full DOM rendering
          const wrapper = mount(<Text />);

          // Assertions
          expect(result).toBeDefined();
          expect(wrapper).toHaveProp(result);
        });

        it('should render the correct element', () => {
          // Mock data
          const result = style;

          // Shallow rendering
          const wrapper = shallow(<Text />);

          // Assertions
          expect(wrapper).not.toHaveClassName(result);
        });
      });

      describe('Receiving prop', () => {
        // Configuration
        const block = true;

        it('should receive the correct prop', () => {
          // Mock data
          const props = { ...source.props, block };
          const result = { block: props.block };

          // Full DOM rendering
          const wrapper = mount(<Text {...props} />);

          // Assertions
          expect(result).toBeDefined();
          expect(wrapper).toHaveProp(result);
        });

        it('should set "text-block" class', () => {
          // Mock data
          const props = { ...source.props, block };
          const result = style;

          // Shallow rendering
          const wrapper = shallow(<Text {...props} />);

          // Assertions
          expect(wrapper).toHaveClassName(result);
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
          const wrapper = mount(<Text />);

          // Assertions
          expect(result).toBeDefined();
          expect(wrapper).toHaveProp(result);
        });

        it('should NOT render <strong> element', () => {
          // Shallow rendering
          const wrapper = shallow(<Text />);

          // Assertions
          expect(wrapper).not.toHaveTagName('strong');
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
          expect(result).toBeDefined();
          const wrapper = mount(<Text {...props} />);

          // Assertions
          expect(wrapper).toHaveProp(result);
        });

        it('should render <strong> element', () => {
          // Mock data
          const props = { ...source.props, bold };

          // Shallow rendering
          const wrapper = shallow(<Text {...props} />);

          // Assertions
          expect(wrapper).toHaveTagName('strong');
        });
      });

      describe('Other cases', () => {
        // Configuration
        const bold = true;

        it('should set "text-block" class', () => {
          // Mock data
          const style = 'text-block';
          const props = {
            ...source.props,
            block: true,
            bold
          };
          const result = style;

          // Shallow rendering
          const wrapper = shallow(<Text {...props} />);

          // Assertions
          expect(wrapper).toHaveClassName(result);
        });

        it('should set "text-secondary" class', () => {
          // Mock data
          const style = 'text-secondary';
          const props = {
            ...source.props,
            bold,
            secondary: true
          };
          const result = style;

          // Shallow rendering
          const wrapper = shallow(<Text {...props} />);

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
          const wrapper = mount(<Text {...props} />);

          // Assertions
          expect(result).toBeDefined();
          expect(wrapper).toHaveProp(result);
        });

        it('should render the correct children', () => {
          // Mock data
          const props = { ...source.props };
          const result = props.children;

          // Shallow rendering
          const wrapper = shallow(<Text>{props.children}</Text>);

          // Assertions
          expect(wrapper).toContainReact(result);
        });
      });
    });

    describe('"lead"', () => {
      describe('Default prop', () => {
        it('should have default value for prop', () => {
          // Mock data
          const props = { ...source.props };
          const result = { lead: props.lead };

          // Full DOM rendering
          const wrapper = mount(<Text />);

          // Assertions
          expect(result).toBeDefined();
          expect(wrapper).toHaveProp(result);
        });

        it('should NOT render <p> element by default', () => {
          // Mock data
          const style = 'p';
          const result = style;

          // Shallow rendering
          const wrapper = shallow(<Text />);

          // Assertions
          expect(wrapper).not.toHaveClassName(result);
          expect(wrapper).not.toHaveTagName(result);
        });

        it('should NOT set "lead" class by default', () => {
          // Mock data
          const style = 'lead';
          const result = style;

          // Shallow rendering
          const wrapper = shallow(<Text />);

          // Assertions
          expect(wrapper).not.toHaveClassName(result);
        });
      });

      describe('Receiving prop', () => {
        // Configuration
        const lead = true;

        it('should receive the correct prop', () => {
          // Mock data
          const props = { ...source.props, lead };
          const result = { lead: props.lead };

          // Full DOM rendering
          const wrapper = mount(<Text {...props} />);

          // Assertions
          expect(result).toBeDefined();
          expect(wrapper).toHaveProp(result);
        });

        it('should render <p> tag', () => {
          // Mock data
          const style = 'p';
          const props = { ...source.props, lead };
          const result = style;

          // Shallow rendering
          const wrapper = shallow(<Text {...props} />);

          // Assertions
          expect(wrapper).toHaveTagName(result);
        });

        it('should set "lead" class', () => {
          // Mock data
          const style = 'lead';
          const props = { ...source.props, lead };
          const result = style;

          // Shallow rendering
          const wrapper = shallow(<Text {...props} />);

          // Assertions
          expect(wrapper).toHaveClassName(result);
        });
      });
    });

    describe('"mute"', () => {
      describe('Default prop', () => {
        it('should have default value for prop', () => {
          // Mock data
          const props = { ...source.props };
          const result = { mute: props.mute };

          // Full DOM rendering
          const wrapper = mount(<Text />);

          // Assertions
          expect(result).toBeDefined();
          expect(wrapper).toHaveProp(result);
        });
      });

      describe('Receiving prop', () => {
        // Configuration
        const mute = true;

        it('should receive the correct prop', () => {
          // Mock data
          const props = { ...source.props, mute };
          const result = { mute: props.mute };

          // Full DOM rendering
          const wrapper = mount(<Text {...props} />);

          // Assertions
          expect(result).toBeDefined();
          expect(wrapper).toHaveProp(result);
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
          const wrapper = mount(<Text />);

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
          const wrapper = mount(<Text {...props} />);

          // Assertions
          expect(result).toBeDefined();
          expect(wrapper).toHaveProp(result);
        });

        it('should set additional CSS classes to a default case', () => {
          // Mock data
          const props = { ...source.props, options };
          const result = props.options;

          // Shallow rendering
          const wrapper = shallow(<Text {...props} />);

          // Assertions
          expect(wrapper).toHaveClassName(result);
        });
      });
    });

    describe('"small"', () => {
      describe('Default prop', () => {
        it('should have default value for prop', () => {
          // Mock data
          const props = { ...source.props };
          const result = { small: props.small };

          // Full DOM rendering
          const wrapper = mount(<Text />);

          // Assertions
          expect(result).toBeDefined();
          expect(wrapper).toHaveProp(result);
        });

        it('should NOT render <small> element', () => {
          // Mock data
          const style = 'small';
          const result = style;

          // Shallow rendering
          const wrapper = shallow(<Text />);

          // Assertions
          expect(wrapper).not.toHaveTagName(result);
        });
      });

      describe('Receiving prop', () => {
        // Configuration
        const small = true;

        it('should receive the correct prop', () => {
          // Mock data
          const props = { ...source.props, small };
          const result = { small: props.small };

          // Full DOM rendering
          const wrapper = mount(<Text {...props} />);

          // Assertions
          expect(result).toBeDefined();
          expect(wrapper).toHaveProp(result);
        });

        it('should render <small> element', () => {
          // Mock data
          const style = 'small';
          const props = { ...source.props, small };
          const result = style;

          // Shallow rendering
          const wrapper = shallow(<Text {...props} />);

          // Assertions
          expect(wrapper).toHaveTagName(result);
        });
      });

      describe('Other cases', () => {
        it('should set "text-mute" class if specified', () => {
          // Mock data
          const style = 'text-muted';
          const props = {
            ...source.props,
            mute: true,
            small: true
          };
          const result = style;

          // Shallow rendering
          const wrapper = shallow(<Text {...props} />);

          // Assertions
          expect(wrapper).toHaveClassName(result);
        });

        it('should set "text-secondary" class if specified', () => {
          // Mock data
          const style = 'text-secondary';
          const props = {
            ...source.props,
            secondary: true,
            small: true
          };
          const result = style;

          // Shallow rendering
          const wrapper = shallow(<Text {...props} />);

          // Assertions
          expect(wrapper).toHaveClassName(result);
        });

        it('should set additional CSS classes if specified', () => {
          // Mock data
          const props = {
            ...source.props,
            options: 'css-style',
            small: true
          };
          const result = props.options;

          // Shallow rendering
          const wrapper = shallow(<Text {...props} />);

          // Assertions
          expect(wrapper).toHaveClassName(result);
        });
      });
    });

    describe('"secondary"', () => {
      describe('Default prop', () => {
        it('should have default value for prop', () => {
          // Mock data
          const props = { ...source.props };
          const result = { secondary: props.secondary };

          // Full DOM rendering
          const wrapper = mount(<Text />);

          // Assertions
          expect(result).toBeDefined();
          expect(wrapper).toHaveProp(result);
        });
      });

      describe('Receiving prop', () => {
        // Configuration
        const secondary = true;

        it('should receive the correct prop', () => {
          // Mock data
          const props = { ...source.props, secondary };
          const result = { secondary: props.secondary };

          // Full DOM rendering
          const wrapper = mount(<Text {...props} />);

          // Assertions
          expect(result).toBeDefined();
          expect(wrapper).toHaveProp(result);
        });

        it('should set "text-secondary" class to a default case', () => {
          // Mock data
          const style = 'text-secondary';
          const props = { ...source.props, secondary };
          const result = style;

          // Shallow rendering
          const wrapper = shallow(<Text {...props} />);

          // Assertions
          expect(wrapper).toHaveClassName(result);
        });
      });
    });
  });
});
