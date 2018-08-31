// Module dependencies
import { mount, shallow } from 'enzyme';
import React from 'react';

// Helper functions
import { cssModule } from 'tests/helpers/assertions';

// Mock data
import mock from 'tests/mock';

// Components
import Icon from 'components/common/Icon';
import ExLink from '../index';

// Source data
const source = {
  props: {
    button: '',
    children: mock.data.source.content.children,
    flat: false,
    icon: false,
    options: '',
    rel: 'noopener noreferrer',
    replace: false,
    to: 'http://www.rxseven.com'
  },
  class: {
    base: 'btn'
  }
};

// Unit tests
describe('components/common/ExLink', () => {
  describe('Default state', () => {
    it('should render without crashing', () => {
      // Shallow rendering
      const wrapper = shallow(<ExLink />);

      // Assertions
      expect(wrapper).toBeDefined();
    });

    it('should contain <a> component', () => {
      // Mock data
      const props = { ...source.props };

      // Shallow rendering
      const wrapper = shallow(<ExLink {...props} />);

      // Assertions
      expect(wrapper.find('a')).toExist();
    });

    describe('Props and conditional rendering', () => {
      describe('"button"', () => {
        describe('Default prop', () => {
          it('should have default value for prop', () => {
            // Mock data
            const props = { ...source.props };
            const result = { button: props.button };

            // Full DOM rendering
            const wrapper = mount(<ExLink />);

            // Assertions
            expect(result).toBeDefined();
            expect(wrapper).toHaveProp(result);
          });

          it('should NOT set "button" style by default', () => {
            // Mock data
            const props = { ...source.props };
            const result = source.class.base;

            // Shallow rendering
            const wrapper = shallow(<ExLink {...props} />);

            // Assertions
            expect(wrapper).not.toHaveClassName(result);
          });
        });

        describe('Receiving prop', () => {
          // Configuration
          const button = 'primary';

          it('should receive the correct prop', () => {
            // Mock data
            const props = { ...source.props, button };
            const result = { button: props.button };

            // Full DOM rendering
            const wrapper = mount(<ExLink {...props} />);

            // Assertions
            expect(result).toBeDefined();
            expect(wrapper).toHaveProp(result);
          });

          it('should set (override) "button" style', () => {
            // Mock data
            const props = { ...source.props, button };
            const result = `${source.class.base}-${props.button}`;

            // Shallow rendering
            const wrapper = shallow(<ExLink {...props} />);

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
            const wrapper = mount(<ExLink {...props} />);

            // Assertions
            expect(result).toBeDefined();
            expect(wrapper).toHaveProp(result);
          });

          it('should render the correct children', () => {
            // Mock data
            const props = { ...source.props };
            const result = props.children;

            // Shallow rendering
            const wrapper = shallow(<ExLink>{props.children}</ExLink>);

            // Assertions
            expect(wrapper).toContainReact(result);
          });
        });
      });

      describe('"flat"', () => {
        describe('Default prop', () => {
          it('should have default value for prop', () => {
            // Mock data
            const props = { ...source.props };
            const result = { flat: props.flat };

            // Full DOM rendering
            const wrapper = mount(<ExLink />);

            // Assertions
            expect(result).toBeDefined();
            expect(wrapper).toHaveProp(result);
          });

          it('should NOT set "flat" style by default', () => {
            // Mock data
            const style = 'flat';
            const result = style;

            // Shallow rendering
            const wrapper = shallow(<ExLink />);

            // Assertions
            expect(cssModule(wrapper, result)).toBeFalsy();
          });
        });

        describe('Receiving prop', () => {
          // Configuration
          const flat = true;

          it('should receive the correct prop', () => {
            // Mock data
            const props = { ...source.props, flat };
            const result = { flat: props.flat };

            // Full DOM rendering
            const wrapper = mount(<ExLink {...props} />);

            // Assertions
            expect(result).toBeDefined();
            expect(wrapper).toHaveProp(result);
          });

          it('should set (override) "flat" style', () => {
            // Mock data
            const style = 'flat';
            const props = { ...source.props, flat };
            const result = style;

            // Shallow rendering
            const wrapper = shallow(<ExLink {...props} />);

            // Assertions
            expect(cssModule(wrapper, result)).toBeTruthy();
          });
        });
      });

      describe('"icon"', () => {
        describe('Default prop', () => {
          it('should have default value for prop', () => {
            // Mock data
            const props = { ...source.props };
            const result = { icon: props.icon };

            // Full DOM rendering
            const wrapper = mount(<ExLink />);

            // Assertions
            expect(result).toBeDefined();
            expect(wrapper).toHaveProp(result);
          });

          it('should NOT render an icon by default', () => {
            // Shallow rendering
            const wrapper = shallow(<ExLink />);

            // Assertions
            expect(wrapper.find(Icon)).toHaveLength(0);
          });
        });

        describe('Receiving prop', () => {
          // Configuration
          const icon = true;

          it('should receive the correct prop', () => {
            // Mock data
            const props = { ...source.props, icon };
            const result = { icon: props.icon };

            // Full DOM rendering
            const wrapper = mount(<ExLink {...props} />);

            // Assertions
            expect(result).toBeDefined();
            expect(wrapper).toHaveProp(result);
          });

          it('should render an icon', () => {
            // Mock data
            const props = { ...source.props, icon };

            // Shallow rendering
            const wrapper = shallow(<ExLink {...props} />);

            // Assertions
            expect(wrapper.find(Icon)).toHaveLength(1);
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
            const wrapper = mount(<ExLink />);

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
            const wrapper = mount(<ExLink {...props} />);

            // Assertions
            expect(result).toBeDefined();
            expect(wrapper).toHaveProp(result);
          });

          it('should set additional CSS classes', () => {
            // Mock data
            const props = { ...source.props, options };
            const result = props.options;

            // Shallow rendering
            const wrapper = shallow(<ExLink {...props} />);

            // Assertions
            expect(wrapper).toHaveClassName(result);
          });
        });
      });

      describe('"rel"', () => {
        describe('Default prop', () => {
          it('should have default value for prop', () => {
            // Mock data
            const props = { ...source.props };
            const result = { rel: props.rel };

            // Full DOM rendering
            const wrapper = mount(<ExLink />);

            // Assertions
            expect(result).toBeDefined();
            expect(wrapper).toHaveProp(result);
          });

          it('should render "rel" property with "noopener noreferrer" value by default', () => {
            // Mock data
            const props = { ...source.props };
            const result = { rel: props.rel };

            // Shallow rendering
            const wrapper = shallow(<ExLink {...props} />);

            // Assertions
            expect(wrapper).toHaveProp(result);
          });
        });

        describe('Receiving prop', () => {
          // Configuration
          const rel = 'license';

          it('should receive the correct prop', () => {
            // Mock data
            const props = { ...source.props, rel };
            const result = { rel: props.rel };

            // Full DOM rendering
            const wrapper = mount(<ExLink {...props} />);

            // Assertions
            expect(result).toBeDefined();
            expect(wrapper).toHaveProp(result);
          });

          it('should override "rel" property', () => {
            // Mock data
            const props = { ...source.props, rel };
            const result = { rel: props.rel };

            // Shallow rendering
            const wrapper = shallow(<ExLink {...props} />);

            // Assertions
            expect(wrapper).toHaveProp(result);
          });
        });
      });

      describe('"replace"', () => {
        describe('Default prop', () => {
          it('should have default value for prop', () => {
            // Mock data
            const props = { ...source.props };
            const result = { replace: props.replace };

            // Full DOM rendering
            const wrapper = mount(<ExLink />);

            // Assertions
            expect(result).toBeDefined();
            expect(wrapper).toHaveProp(result);
          });

          it('should render "target" property with "_blank" value by default', () => {
            // Mock data
            const props = { ...source.props };
            const result = { target: '_blank' };

            // Shallow rendering
            const wrapper = shallow(<ExLink {...props} />);

            // Assertions
            expect(wrapper).toHaveProp(result);
          });
        });

        describe('Receiving prop', () => {
          // Configuration
          const replace = '_self';

          it('should receive the correct prop', () => {
            // Mock data
            const props = { ...source.props, replace };
            const result = { replace: props.replace };

            // Full DOM rendering
            const wrapper = mount(<ExLink {...props} />);

            // Assertions
            expect(result).toBeDefined();
            expect(wrapper).toHaveProp(result);
          });

          it('should override "target" property', () => {
            // Mock data
            const props = { ...source.props, replace };
            const result = { target: props.replace };

            // Shallow rendering
            const wrapper = shallow(<ExLink {...props} />);

            // Assertions
            expect(wrapper).toHaveProp(result);
          });
        });
      });

      describe('"to"', () => {
        it('should specify a link URL', () => {
          // Mock data
          const props = { ...source.props };
          const result = { href: props.to };

          // Shallow rendering
          const wrapper = shallow(<ExLink {...props} />);

          // Assertions
          expect(wrapper).toHaveProp(result);
        });
      });
    });
  });
});
