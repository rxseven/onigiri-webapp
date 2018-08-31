// Module dependencies
import { mount, shallow } from 'enzyme';
import React from 'react';

// Mock data
import mock from 'tests/mock';

// Components
import Icon from 'components/common/Icon';
import ButtonList from '../index';

// Source data
const source = {
  props: {
    active: false,
    children: mock.data.source.content.children,
    handler: undefined,
    icon: '',
    title: ''
  }
};

// Unit tests
describe('components/common/Buttons/ButtonList', () => {
  describe('Default state', () => {
    it('should render without crashing', () => {
      // Shallow rendering
      const wrapper = shallow(<ButtonList />);

      // Assertions
      expect(wrapper).toBeDefined();
    });
  });

  describe('Props and conditional rendering', () => {
    describe('"active"', () => {
      describe('Receiving prop', () => {
        // Configuration
        const active = true;

        it('should receive the correct prop', () => {
          // Mock data
          const props = { ...source.props, active };
          const result = { active: props.active };

          // Full DOM rendering
          const wrapper = mount(<ButtonList {...props} />);

          // Assertions
          expect(result).toBeDefined();
          expect(wrapper).toHaveProp(result);
        });

        it('should set an "active" class to the <button> element', () => {
          // Mock data
          const style = 'active';
          const props = { ...source.props, active };
          const result = style;

          // Shallow rendering
          const wrapper = shallow(<ButtonList {...props} />);

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
          const wrapper = mount(<ButtonList {...props} />);

          // Assertions
          expect(result).toBeDefined();
          expect(wrapper).toHaveProp(result);
        });

        it('should render the correct children', () => {
          // Mock data
          const props = { ...source.props };
          const result = props.children;

          // Shallow rendering
          const wrapper = shallow(<ButtonList>{props.children}</ButtonList>);

          // Assertions
          expect(wrapper).toContainReact(result);
        });
      });
    });

    describe('"handler"', () => {
      describe('Receiving prop', () => {
        it('should receive the correct prop', () => {
          // Mock data
          const props = {
            ...source.props,
            handler: jest.fn()
          };
          const result = { handler: props.handler };

          // Full DOM rendering
          const wrapper = mount(<ButtonList {...props} />);

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
          const wrapper = mount(<ButtonList {...props} />);

          // Assertions
          expect(result).toBeDefined();
          expect(wrapper).toHaveProp(result);
        });

        it('should NOT render an icon', () => {
          // Shallow rendering
          const wrapper = shallow(<ButtonList />);

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
          const wrapper = mount(<ButtonList {...props} />);

          // Assertions
          expect(result).toBeDefined();
          expect(wrapper).toHaveProp(result);
        });

        it('should render an icon', () => {
          // Mock data
          const props = { ...source.props, icon };

          // Shallow rendering
          const wrapper = shallow(<ButtonList {...props} />);

          // Assertions
          expect(wrapper.find(Icon)).toHaveLength(1);
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
          const wrapper = mount(<ButtonList {...props} />);

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
          const wrapper = mount(<ButtonList {...props} />);

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
          const wrapper = mount(<ButtonList {...props} />);

          // Assertions
          expect(wrapper.find(Icon)).toHaveProp(result);
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
              handler: onClick
            };

            // Shallow rendering
            const wrapper = shallow(<ButtonList {...props} />);

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
              handler: onClick
            };

            // Shallow rendering
            const wrapper = shallow(<ButtonList {...props} />);

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
