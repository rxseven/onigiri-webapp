// Module dependencies
import { mount, shallow } from 'enzyme';
import React from 'react';

// Mock data
import mock from 'tests/mock';

// Components
import CardContainer from '../index';

// Source data
const source = {
  props: {
    alignment: '',
    background: '',
    children: mock.data.source.content.children,
    end: false,
    marginBottom: 'mb-4',
    options: '',
    text: ''
  }
};

// Unit tests
describe('components/common/Card/CardContainer', () => {
  describe('Default state', () => {
    it('should render without crashing', () => {
      // Shallow rendering
      const wrapper = shallow(<CardContainer />);

      // Assertions
      expect(wrapper).toBeDefined();
    });
  });

  describe('Props and conditional rendering', () => {
    describe('"alignment"', () => {
      describe('Default prop', () => {
        it('should have default value for prop', () => {
          // Mock data
          const props = { ...source.props };
          const result = { alignment: props.alignment };

          // Full DOM rendering
          const wrapper = mount(<CardContainer />);

          // Assertions
          expect(result).toBeDefined();
          expect(wrapper).toHaveProp(result);
        });
      });

      describe('Receiving prop', () => {
        // Configuration
        const alignment = 'text-center';

        it('should receive the correct prop', () => {
          // Mock data
          const props = { ...source.props, alignment };
          const result = { alignment: props.alignment };

          // Full DOM rendering
          const wrapper = mount(<CardContainer {...props} />);

          // Assertions
          expect(result).toBeDefined();
          expect(wrapper).toHaveProp(result);
        });

        it('should set "alignment" style', () => {
          // Mock data
          const props = { ...source.props, alignment };
          const result = `${props.alignment}`;

          // Shallow rendering
          const wrapper = shallow(<CardContainer {...props} />);

          // Assertions
          expect(wrapper).toHaveClassName(result);
        });
      });
    });

    describe('"background"', () => {
      describe('Default prop', () => {
        it('should have default value for prop', () => {
          // Mock data
          const props = { ...source.props };
          const result = { background: props.background };

          // Full DOM rendering
          const wrapper = mount(<CardContainer />);

          // Assertions
          expect(result).toBeDefined();
          expect(wrapper).toHaveProp(result);
        });
      });

      describe('Receiving prop', () => {
        // Configuration
        const background = 'light';

        it('should receive the correct prop', () => {
          // Mock data
          const props = { ...source.props, background };
          const result = { background: props.background };

          // Full DOM rendering
          const wrapper = mount(<CardContainer {...props} />);

          // Assertions
          expect(result).toBeDefined();
          expect(wrapper).toHaveProp(result);
        });

        it('should set "background" style', () => {
          // Mock data
          const props = { ...source.props, background };
          const result = `bg-${props.background}`;

          // Shallow rendering
          const wrapper = shallow(<CardContainer {...props} />);

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
          const wrapper = mount(<CardContainer {...props} />);

          // Assertions
          expect(result).toBeDefined();
          expect(wrapper).toHaveProp(result);
        });

        it('should render the correct children', () => {
          // Mock data
          const props = { ...source.props };
          const result = props.children;

          // Shallow rendering
          const wrapper = shallow(<CardContainer>{props.children}</CardContainer>);

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
          const wrapper = mount(<CardContainer />);

          // Assertions
          expect(result).toBeDefined();
          expect(wrapper).toHaveProp(result);
        });

        it('should have a bottom spacing by default', () => {
          // Mock data
          const props = { ...source.props };
          const result = props.marginBottom;

          // Shallow rendering
          const wrapper = shallow(<CardContainer />);

          // Assertions
          expect(wrapper).toHaveClassName(result);
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
          const wrapper = mount(<CardContainer {...props} />);

          // Assertions
          expect(result).toBeDefined();
          expect(wrapper).toHaveProp(result);
        });

        it('should remove a bottom spacing (last child)', () => {
          // Mock data;
          const props = { ...source.props, end };
          const result = props.marginBottom;

          // Shallow rendering
          const wrapper = shallow(<CardContainer {...props} />);

          // Assertions
          expect(wrapper).not.toHaveClassName(result);
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
          const wrapper = mount(<CardContainer />);

          // Assertions
          expect(result).toBeDefined();
          expect(wrapper).toHaveProp(result);
        });

        it('should have a bottom spacing by default', () => {
          // Mock data
          const props = { ...source.props };
          const result = props.marginBottom;

          // Shallow rendering
          const wrapper = shallow(<CardContainer />);

          // Assertions
          expect(wrapper).toHaveClassName(result);
        });

        describe('Receiving prop', () => {
          // Configuration
          const marginBottom = 'mb-2';

          it('should receive the correct prop', () => {
            // Mock data
            const props = { ...source.props, marginBottom };
            const result = { marginBottom: props.marginBottom };

            // Full DOM rendering
            const wrapper = mount(<CardContainer {...props} />);

            // Assertions
            expect(result).toBeDefined();
            expect(wrapper).toHaveProp(result);
          });

          it('should set (override) "margin-bottom" style', () => {
            // Mock data
            const props = { ...source.props, marginBottom };
            const result = props.marginBottom;

            // Shallow rendering
            const wrapper = shallow(<CardContainer {...props} />);

            // Assertions
            expect(wrapper).toHaveClassName(result);
          });
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
          const wrapper = mount(<CardContainer {...props} />);

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
            const wrapper = mount(<CardContainer {...props} />);

            // Assertions
            expect(result).toBeDefined();
            expect(wrapper).toHaveProp(result);
          });

          it('should set additional CSS classes', () => {
            // Mock data
            const props = { ...source.props, options };
            const result = props.options;

            // Shallow rendering
            const wrapper = shallow(<CardContainer {...props} />);

            // Assertions
            expect(wrapper).toHaveClassName(result);
          });
        });
      });
    });

    describe('"text"', () => {
      describe('Default prop', () => {
        it('should have default value for prop', () => {
          // Mock data
          const props = { ...source.props };
          const result = { text: props.text };

          // Full DOM rendering
          const wrapper = mount(<CardContainer {...props} />);

          // Assertions
          expect(result).toBeDefined();
          expect(wrapper).toHaveProp(result);
        });
      });

      describe('Receiving prop', () => {
        // Configuration
        const text = 'css-style';

        it('should receive the correct prop', () => {
          // Mock data
          const props = { ...source.props, text };
          const result = { text: props.text };

          // Full DOM rendering
          const wrapper = mount(<CardContainer {...props} />);

          // Assertions
          expect(result).toBeDefined();
          expect(wrapper).toHaveProp(result);
        });

        it('should set (override) "text" style', () => {
          // Mock data
          const props = { ...source.props, text };
          const result = `text-${props.text}`;

          // Shallow rendering
          const wrapper = shallow(<CardContainer {...props} />);

          // Assertions
          expect(wrapper).toHaveClassName(result);
        });
      });
    });
  });
});
