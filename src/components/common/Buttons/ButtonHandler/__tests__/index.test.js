// Module dependencies
import { mount, shallow } from 'enzyme';
import React from 'react';

// Mock data
import mock from 'tests/mock';

// Components
import Button from '../../Button';
import ButtonList from '../../ButtonList';
import ButtonHandler from '../index';

// Source data
const source = {
  props: {
    children: mock.data.source.content.children,
    handler: undefined,
    type: '',
    value: { completed: true }
  }
};

// Unit tests
describe('components/common/Buttons/ButtonHandler', () => {
  describe('Default state', () => {
    it('should render without crashing', () => {
      // Shallow rendering
      const wrapper = shallow(<ButtonHandler />);

      // Assertions
      expect(wrapper).toBeDefined();
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
          const wrapper = mount(<ButtonHandler {...props} />);

          // Assertions
          expect(result).toBeDefined();
          expect(wrapper).toHaveProp(result);
        });

        it('should render the correct children', () => {
          // Mock data
          const props = { ...source.props };
          const result = props.children;

          // Shallow rendering
          const wrapper = shallow(<ButtonHandler>{props.children}</ButtonHandler>);

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
            handler: {
              onClick: jest.fn()
            }
          };
          const result = { handler: props.handler };

          // Full DOM rendering
          const wrapper = mount(<ButtonHandler {...props} />);

          // Assertions
          expect(result).toBeDefined();
          expect(wrapper).toHaveProp(result);
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
          const wrapper = mount(<ButtonHandler {...props} />);

          // Assertions
          expect(result).toBeDefined();
          expect(wrapper).toHaveProp(result);
        });

        it('should render <Button> component by default', () => {
          // Shallow rendering
          const wrapper = shallow(<ButtonHandler />);

          // Assertions
          expect(wrapper.find(Button)).toExist();
          expect(wrapper.find(ButtonList)).not.toExist();
        });
      });

      describe('Receiving prop', () => {
        // Configuration
        const type = 'button-list';

        it('should receive the correct prop', () => {
          // Mock data
          const props = { ...source.props, type };
          const result = { type: props.type };

          // Full DOM rendering
          const wrapper = mount(<ButtonHandler {...props} />);

          // Assertions
          expect(result).toBeDefined();
          expect(wrapper).toHaveProp(result);
        });

        it('should render <ButtonList> component', () => {
          // Mock data
          const props = { ...source.props, type };

          // Full DOM rendering
          const wrapper = mount(<ButtonHandler {...props} />);

          // Assertions
          expect(wrapper.find(Button)).not.toExist();
          expect(wrapper.find(ButtonList)).toExist();
        });
      });
    });

    describe('"value"', () => {
      describe('Receiving prop', () => {
        it('should receive the correct prop', () => {
          // Mock data
          const props = { ...source.props };
          const result = { value: props.value };

          // Full DOM rendering
          const wrapper = mount(<ButtonHandler {...props} />);

          // Assertions
          expect(result).toBeDefined();
          expect(wrapper).toHaveProp(result);
        });

        it('should pass the value to "onClick" function when "handleClick" method is triggered', () => {
          // Mock data
          const onClick = jest.fn();
          const props = {
            ...source.props,
            handler: { onClick }
          };

          // Shallow rendering
          const wrapper = shallow(<ButtonHandler {...props} />);

          // Get the instance of the component being rendered
          const instance = wrapper.instance();

          // Invoke a component method directly
          instance.handleClick();

          // Assertions
          expect(onClick).toHaveBeenCalledWith(props.value);
        });
      });
    });
  });

  describe('Interactions', () => {
    describe('Component methods', () => {
      describe('"handleClick"', () => {
        describe('Invoking directly from the instance of the component', () => {
          it('should call the method when triggered directly', () => {
            // Mock data
            const onClick = jest.fn();
            const props = {
              ...source.props,
              handler: { onClick }
            };

            // Shallow rendering
            const wrapper = shallow(<ButtonHandler {...props} />);

            // Get the instance of the component being rendered
            const instance = wrapper.instance();

            // Invoke the component method directly
            instance.handleClick();

            // Assertions
            expect(onClick).toHaveBeenCalled();
          });
        });

        describe('Invoking indirectly by simulating a click event', () => {
          it('should call the method when triggered <Button> component', () => {
            // Mock data
            const onClick = jest.fn();
            const props = {
              ...source.props,
              handler: { onClick }
            };

            // Full DOM rendering
            const wrapper = mount(<ButtonHandler {...props} />);

            // Invoke the component method indirectly by simulating a click event
            wrapper.find(Button).simulate('click');

            // Assertions
            expect(onClick).toHaveBeenCalled();
          });

          it('should call the method when triggered <ButtonList> component', () => {
            // Mock data
            const onClick = jest.fn();
            const props = {
              ...source.props,
              handler: { onClick },
              type: 'button-list'
            };

            // Full DOM rendering
            const wrapper = mount(<ButtonHandler {...props} />);

            // Invoke the component method indirectly by simulating a click event
            wrapper.find(ButtonList).simulate('click');

            // Assertions
            expect(onClick).toHaveBeenCalled();
          });
        });
      });
    });
  });
});
