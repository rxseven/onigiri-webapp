// Module dependencies
import { mount, shallow } from 'enzyme';
import React from 'react';
import { Link } from 'react-router-dom';

// Helper functions
import { mockRouter } from 'tests/helpers/mock';

// Mock data
import mock from 'tests/mock';

// Components
import Icon from 'components/common/Icon';
import Button from '../index';

// Source data
const source = {
  class: {
    base: 'btn'
  },
  props: {
    block: false,
    button: 'secondary',
    children: mock.data.source.content.children,
    disabled: false,
    handler: () => {},
    icon: '',
    link: '#',
    size: '',
    title: 'Button',
    type: 'button'
  }
};

// Unit tests
describe('components/common/Buttons/Button', () => {
  describe('Default state', () => {
    it('should render without crashing', () => {
      // Shallow rendering
      const wrapper = shallow(<Button />);

      // Assertions
      expect(wrapper).toBeDefined();
    });
  });

  describe('Props and conditional rendering', () => {
    describe('"button"', () => {
      describe('Default prop', () => {
        it('should have default value for prop', () => {
          // Mock data
          const props = { ...source.props };
          const result = { button: props.button };

          // Full DOM rendering
          const wrapper = mount(<Button {...props} />);

          // Assertions
          expect(result).toBeDefined();
          expect(wrapper).toHaveProp(result);
        });

        it('should NOT render a component with "button" style', () => {
          // Mock data
          const style = source.class.base;
          const props = { ...source.props };
          const result = `${style}-${props.button}`;

          // Shallow rendering
          const wrapper = shallow(<Button />);

          // Assertions
          expect(wrapper).toHaveClassName(result);
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
          const wrapper = mount(<Button {...props} />);

          // Assertions
          expect(result).toBeDefined();
          expect(wrapper).toHaveProp(result);
        });

        it('should render a component with "button" style', () => {
          // Mock data
          const style = source.class.base;
          const props = { ...source.props, button };
          const result = `${style}-${props.button}`;

          // Shallow rendering
          const wrapper = shallow(<Button {...props} />);

          // Assertions
          expect(wrapper).toHaveClassName(result);
        });
      });
    });

    describe('"block"', () => {
      describe('Default prop', () => {
        it('should have default value for prop', () => {
          // Mock data
          const props = { ...source.props };
          const result = { block: props.block };

          // Full DOM rendering
          const wrapper = mount(<Button {...props} />);

          // Assertions
          expect(result).toBeDefined();
          expect(wrapper).toHaveProp(result);
        });

        it('should NOT render a component with "block" style', () => {
          // Mock data
          const style = source.class.base;
          const result = `${style}-block`;

          // Shallow rendering
          const wrapper = shallow(<Button />);

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
          const wrapper = mount(<Button {...props} />);

          // Assertions
          expect(result).toBeDefined();
          expect(wrapper).toHaveProp(result);
        });

        it('should render a component with "block" style', () => {
          // Mock data
          const style = source.class.base;
          const props = { ...source.props, block };
          const result = `${style}-block`;

          // Shallow rendering
          const wrapper = shallow(<Button {...props} />);

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
          const wrapper = mount(<Button {...props} />);

          // Assertions
          expect(result).toBeDefined();
          expect(wrapper).toHaveProp(result);
        });

        it('should render the correct children', () => {
          // Mock data
          const props = { ...source.props };
          const result = props.children;

          // Shallow rendering
          const wrapper = shallow(<Button>{props.children}</Button>);

          // Assertions
          expect(wrapper).toContainReact(result);
        });
      });
    });

    describe('"disabled"', () => {
      describe('Default prop', () => {
        it('should have default value for prop', () => {
          // Mock data
          const props = { ...source.props };
          const result = { disabled: props.disabled };

          // Full DOM rendering
          const wrapper = mount(<Button {...props} />);

          // Assertions
          expect(result).toBeDefined();
          expect(wrapper).toHaveProp(result);
        });

        it('should NOT render a component with "disabled" property', () => {
          // Shallow rendering
          const wrapper = shallow(<Button />);

          // Assertions
          expect(wrapper).not.toBeDisabled();
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
          const wrapper = mount(<Button {...props} />);

          // Assertions
          expect(result).toBeDefined();
          expect(wrapper).toHaveProp(result);
        });

        it('should render a component with "disabled" style', () => {
          // Mock data
          const props = { ...source.props, disabled };

          // Shallow rendering
          const wrapper = shallow(<Button {...props} />);

          // Assertions
          expect(wrapper).toBeDisabled();
        });
      });
    });

    describe('"handler"', () => {
      describe('Default prop', () => {
        it('should have default value for prop', () => {
          // Mock data
          const props = { ...source.props };
          const result = { handler: props.handler };

          // Full DOM rendering
          const wrapper = mount(<Button {...props} />);

          // Assertions
          expect(result).toBeDefined();
          expect(wrapper).toHaveProp(result);
        });
      });

      describe('Receiving prop', () => {
        it('should receive the correct prop', () => {
          // Mock data
          const props = {
            ...source.props,
            handler: jest.fn()
          };
          const result = { handler: props.handler };

          // Full DOM rendering
          const wrapper = mount(<Button {...props} />);

          // Assertions
          expect(result).toBeDefined();
          expect(wrapper).toHaveProp(result);
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
          const wrapper = mount(<Button {...props} />);

          // Assertions
          expect(result).toBeDefined();
          expect(wrapper).toHaveProp(result);
        });

        it('should NOT render an icon', () => {
          // Shallow rendering
          const wrapper = shallow(<Button />);

          // Assertions
          expect(wrapper.find(Icon)).toHaveLength(0);
        });
      });

      describe('Receiving prop', () => {
        // Configuration
        const icon = 'box';

        it('should receive the correct prop', () => {
          // Mock data
          const props = { ...source.props, icon };
          const result = { icon: props.icon };

          // Full DOM rendering
          const wrapper = mount(<Button {...props} />);

          // Assertions
          expect(result).toBeDefined();
          expect(wrapper).toHaveProp(result);
        });

        it('should render an icon', () => {
          // Mock data
          const props = { ...source.props, icon };

          // Shallow rendering
          const wrapper = shallow(<Button {...props} />);

          // Assertions
          expect(wrapper.find(Icon)).toHaveLength(1);
        });
      });
    });

    describe('"link"', () => {
      describe('Default prop', () => {
        it('should have default value for prop', () => {
          // Mock data
          const props = { ...source.props };
          const result = { link: props.link };

          // Full DOM rendering
          const wrapper = mount(<Button {...props} />);

          // Assertions
          expect(result).toBeDefined();
          expect(wrapper).toHaveProp(result);
        });
      });

      describe('Receiving prop', () => {
        // Configuration
        const link = 'http://www.rxseven.com';

        it('should receive the correct prop', () => {
          // Mock data
          const props = { ...source.props, link };
          const result = { link: props.link };

          // Full DOM rendering
          const wrapper = mount(<Button {...props} />);

          // Assertions
          expect(result).toBeDefined();
          expect(wrapper).toHaveProp(result);
        });

        it('should specify a link URL to <Link> component', () => {
          // Mock data
          const props = {
            ...source.props,
            link,
            type: 'link'
          };
          const result = { to: props.link };

          // Full DOM rendering
          const wrapper = mount(mockRouter(<Button {...props} />));

          // Assertions
          expect(wrapper.find(Link)).toHaveProp(result);
        });
      });
    });

    describe('"size"', () => {
      describe('Default prop', () => {
        it('should have default value for prop', () => {
          // Mock data
          const props = { ...source.props };
          const result = { size: props.size };

          // Full DOM rendering
          const wrapper = mount(<Button {...props} />);

          // Assertions
          expect(result).toBeDefined();
          expect(wrapper).toHaveProp(result);
        });

        it('should NOT render a component with "size" style', () => {
          // Mock data
          const style = source.class.base;
          const result = `${style}-sm`;

          // Shallow rendering
          const wrapper = shallow(<Button />);

          // Assertions
          expect(wrapper).not.toHaveClassName(result);
        });
      });

      describe('Receiving prop', () => {
        // Configuration
        const size = 'small';

        it('should receive the correct prop', () => {
          // Mock data
          const props = { ...source.props, size };
          const result = { size: props.size };

          // Full DOM rendering
          const wrapper = mount(<Button {...props} />);

          // Assertions
          expect(result).toBeDefined();
          expect(wrapper).toHaveProp(result);
        });

        it('should render a component with "size" style', () => {
          // Mock data
          const style = source.class.base;
          const props = { ...source.props, size };
          const result = `${style}-sm`;

          // Shallow rendering
          const wrapper = shallow(<Button {...props} />);

          // Assertions
          expect(wrapper).toHaveClassName(result);
        });
      });
    });

    describe('"title"', () => {
      describe('Default prop', () => {
        it('should have default value for prop', () => {
          // Mock data
          const props = { ...source.props };
          const result = { title: props.title };

          // Full DOM rendering
          expect(result).toBeDefined();
          const wrapper = mount(<Button {...props} />);

          // Assertions
          expect(result).toBeDefined();
          expect(wrapper).toHaveProp(result);
        });
      });

      describe('Receiving prop', () => {
        // Configuration
        const title = 'Archived';

        it('should receive the correct prop', () => {
          // Mock data
          const props = { ...source.props, title };
          const result = { title: props.title };

          // Full DOM rendering
          const wrapper = mount(<Button {...props} />);

          // Assertions
          expect(result).toBeDefined();
          expect(wrapper).toHaveProp(result);
        });

        it('should render an icon with "title" property', () => {
          // Mock data
          const props = {
            ...source.props,
            icon: 'box',
            title
          };
          const result = { title: props.title };

          // Full DOM rendering
          const wrapper = mount(<Button {...props} />);

          // Assertions
          expect(wrapper.find(Icon)).toHaveProp(result);
        });
      });
    });

    describe('"type"', () => {
      describe('Default prop', () => {
        it('should have default value for prop', () => {
          // Mock data
          const props = { ...source.props };
          const result = { type: props.type };

          // Full DOM rendering
          const wrapper = mount(<Button {...props} />);

          // Assertions
          expect(result).toBeDefined();
          expect(wrapper).toHaveProp(result);
        });

        it('should render <button type="button"> element by default', () => {
          // Mock data
          const props = { ...source.props };
          const result = { type: props.type };

          // Shallow rendering
          const wrapper = shallow(<Button />);

          // Assertions
          expect(wrapper.find('button')).toExist();
          expect(wrapper).toHaveProp(result);
        });
      });

      describe('Receiving prop', () => {
        it('should receive the correct prop', () => {
          // Mock data
          const props = {
            ...source.props,
            type: 'submit'
          };
          const result = { type: props.type };

          // Full DOM rendering
          const wrapper = mount(<Button {...props} />);

          // Assertions
          expect(result).toBeDefined();
          expect(wrapper).toHaveProp(result);
        });

        it('should render <button type="button"> element', () => {
          // Mock data
          const props = {
            ...source.props,
            type: 'button'
          };
          const result = { type: props.type };

          // Shallow rendering
          const wrapper = shallow(<Button {...props} />);

          // Assertions
          expect(wrapper.find('button')).toExist();
          expect(wrapper).toHaveProp(result);
        });

        it('should render <button type="submit"> element', () => {
          // Mock data
          const props = {
            ...source.props,
            type: 'submit'
          };
          const result = { type: props.type };

          // Shallow rendering
          const wrapper = shallow(<Button {...props} />);

          // Assertions
          expect(wrapper.find('button')).toExist();
          expect(wrapper).toHaveProp(result);
        });

        it('should render <Link> component', () => {
          // Mock data
          const props = {
            ...source.props,
            type: 'link'
          };

          // Full DOM rendering
          const wrapper = mount(mockRouter(<Button {...props} />));

          // Assertions
          expect(wrapper.find(Link)).toExist();
        });
      });
    });
  });

  describe('Interactions', () => {
    describe('Event handlers', () => {
      describe('"onClick"', () => {
        describe("Invoking directly from the element's property", () => {
          it('should call the event handler when triggered directly', () => {
            // Mock data
            const onClick = jest.fn();
            const props = {
              ...source.props,
              handler: onClick,
              type: 'button'
            };

            // Shallow rendering
            const wrapper = shallow(<Button {...props} />);

            // Get the event handler of the component being rendered
            const event = wrapper.find('button').prop('onClick');

            // Invoke the event handler directly
            event();

            // Assertions
            expect(onClick).toHaveBeenCalled();
          });
        });

        describe('Invoking indirectly by simulating a click event', () => {
          it('should call the event handler when triggered <button> element', () => {
            // Mock data
            const onClick = jest.fn();
            const props = {
              ...source.props,
              handler: onClick,
              type: 'button'
            };

            // Shallow rendering
            const wrapper = shallow(<Button {...props} />);

            // Invoke the event handler indirectly by simulating a click event
            wrapper.find('button').simulate('click');

            // Assertions
            expect(onClick).toHaveBeenCalled();
          });
        });
      });
    });
  });
});
