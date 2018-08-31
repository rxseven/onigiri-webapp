// Module dependencies
import { mount, shallow } from 'enzyme';
import { Map } from 'immutable';
import React from 'react';
import { Field } from 'redux-form/immutable';

// Constants
import STATE_MODELS from 'constants/models/state';

// Components
import { Button } from 'components/common/Buttons';
import Spinner from 'components/common/Spinner';
import Error from 'components/composite/Error';
import Form from '../index';

// Source data
const source = {
  props: {
    alert: true,
    asynchronous: { ...STATE_MODELS.model.asynchronous },
    cancelButton: <button>Cancel</button>,
    fields: [],
    handleSubmit: jest.fn(),
    options: '',
    pristine: true,
    spinner: true,
    submitButton: 'Submit',
    submitCallback: jest.fn(),
    submitFunction: jest.fn()
  }
};

// Unit tests
describe('components/common/Form/Form', () => {
  describe('Default state', () => {
    it('should render without crashing', () => {
      // Mock data
      const props = { ...source.props };

      // Shallow rendering
      const wrapper = shallow(<Form {...props} />);

      // Assertions
      expect(wrapper).toBeDefined();
    });
  });

  describe('Props and conditional rendering', () => {
    describe('"alert"', () => {
      describe('Default prop', () => {
        it('should have default value for prop', () => {
          // Mock data
          const props = { ...source.props };
          const result = { alert: props.alert };

          // Full DOM rendering
          const wrapper = mount(<Form {...props} />);

          // Assertions
          expect(result).toBeDefined();
          expect(wrapper).toHaveProp(result);
        });

        it('should render an error message when failure occured', () => {
          // Mock data
          const props = {
            ...source.props,
            asynchronous: {
              ...source.props.asynchronous,
              error: {
                message: 'Something went wrong!'
              }
            }
          };
          const result = { alert: props.asynchronous.error };

          // Shallow rendering
          const wrapper = shallow(<Form {...props} />);

          // Assertions
          expect(wrapper.find(Error)).toExist();
          expect(wrapper.find(Error)).toHaveProp(result);
        });
      });

      describe('Receiving prop', () => {
        it('should receive the correct prop', () => {
          // Mock data
          const props = {
            ...source.props,
            alert: false
          };
          const result = { alert: props.alert };

          // Full DOM rendering
          const wrapper = mount(<Form {...props} />);

          // Assertions
          expect(result).toBeDefined();
          expect(wrapper).toHaveProp(result);
        });

        it('should NOT render an error message when failure occured', () => {
          // Mock data
          const props = {
            ...source.props,
            alert: false,
            asynchronous: {
              ...source.props.asynchronous,
              error: {
                message: 'Something went wrong!'
              }
            }
          };

          // Shallow rendering
          const wrapper = shallow(<Form {...props} />);

          // Assertions
          expect(wrapper.find(Error)).not.toExist();
        });
      });
    });

    describe('"asynchronous"', () => {
      describe('Default prop', () => {
        it('should have default value for prop', () => {
          // Mock data
          const props = { ...source.props };
          const result = { asynchronous: props.asynchronous };

          // Full DOM rendering
          const wrapper = mount(<Form {...props} />);

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
            asynchronous: {
              error: null,
              loading: true
            }
          };
          const result = { asynchronous: props.asynchronous };

          // Full DOM rendering
          const wrapper = mount(<Form {...props} />);

          // Assertions
          expect(result).toBeDefined();
          expect(wrapper).toHaveProp(result);
        });
      });
    });

    describe('"cancelButton"', () => {
      describe('Receiving prop', () => {
        it('should receive the correct prop', () => {
          // Mock data
          const props = { ...source.props };
          const result = { cancelButton: props.cancelButton };

          // Full DOM rendering
          const wrapper = mount(<Form {...props} />);

          // Assertions
          expect(result).toBeDefined();
          expect(wrapper).toHaveProp(result);
        });

        it('should contain a cancel button', () => {
          // Mock data
          const props = { ...source.props };
          const result = props.cancelButton;

          // Shallow rendering
          const wrapper = shallow(<Form {...props} />);

          // Assertions
          expect(wrapper).toContainReact(result);
        });
      });
    });

    describe('"fields"', () => {
      describe('Receiving prop', () => {
        it('should receive the correct prop', () => {
          // Mock data
          const props = { ...source.props };
          const result = { fields: props.fields };

          // Full DOM rendering
          const wrapper = mount(<Form {...props} />);

          // Assertions
          expect(result).toBeDefined();
          expect(wrapper).toHaveProp(result);
        });
      });
    });

    describe('"handleSubmit"', () => {
      describe('Receiving prop', () => {
        it('should receive the correct prop', () => {
          // Mock data
          const props = { ...source.props };
          const result = { handleSubmit: props.handleSubmit };

          // Full DOM rendering
          const wrapper = mount(<Form {...props} />);

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
          const wrapper = mount(<Form {...props} />);

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
            const wrapper = mount(<Form {...props} />);

            // Assertions
            expect(result).toBeDefined();
            expect(wrapper).toHaveProp(result);
          });

          it('should set additional CSS classes', () => {
            // Mock data
            const props = { ...source.props, options };
            const result = props.options;

            // Shallow rendering
            const wrapper = shallow(<Form {...props} />);

            // Assertions
            expect(wrapper).toHaveClassName(result);
          });
        });
      });
    });

    describe('"pristine"', () => {
      describe('Default prop', () => {
        it('should have default value for prop', () => {
          // Mock data
          const props = { ...source.props };
          const result = { pristine: props.pristine };

          // Full DOM rendering
          const wrapper = mount(<Form {...props} />);

          // Assertions
          expect(result).toBeDefined();
          expect(wrapper).toHaveProp(result);
        });

        it('should disable a submit button when the form is clean', () => {
          // Mock data
          const props = { ...source.props };

          // Shallow rendering
          const wrapper = shallow(<Form {...props} />);

          // Assertions
          expect(wrapper.find(Button)).toBeDisabled();
        });
      });

      describe('Receiving prop', () => {
        it('should receive the correct prop', () => {
          // Mock data
          const props = {
            ...source.props,
            pristine: false
          };
          const result = { pristine: props.pristine };

          // Full DOM rendering
          const wrapper = mount(<Form {...props} />);

          // Assertions
          expect(result).toBeDefined();
          expect(wrapper).toHaveProp(result);
        });

        it('should NOT disable a submit button when the form is dirty', () => {
          // Mock data
          const props = {
            ...source.props,
            pristine: false
          };

          // Shallow rendering
          const wrapper = shallow(<Form {...props} />);

          // Assertions
          expect(wrapper.find(Button)).not.toBeDisabled();
        });
      });
    });

    describe('"spinner"', () => {
      describe('Default prop', () => {
        it('should have default value for prop', () => {
          // Mock data
          const props = { ...source.props };
          const result = { spinner: props.spinner };

          // Full DOM rendering
          const wrapper = mount(<Form {...props} />);

          // Assertions
          expect(result).toBeDefined();
          expect(wrapper).toHaveProp(result);
        });

        it('should render a spinner when performing an asynchronous action', () => {
          // Mock data
          const props = {
            ...source.props,
            asynchronous: {
              ...source.props.asynchronous,
              loading: true
            }
          };

          // Shallow rendering
          const wrapper = shallow(<Form {...props} />);

          // Assertions
          expect(wrapper.find(Spinner)).toExist();
        });

        it('should disable a submit button when performing an asynchronous action', () => {
          // Mock data
          const props = {
            ...source.props,
            asynchronous: {
              ...source.props.asynchronous,
              loading: true
            }
          };

          // Shallow rendering
          const wrapper = shallow(<Form {...props} />);

          // Assertions
          expect(wrapper.find(Button)).toBeDisabled();
        });
      });

      describe('Receiving prop', () => {
        it('should receive the correct prop', () => {
          // Mock data
          const props = {
            ...source.props,
            spinner: false
          };
          const result = { spinner: props.spinner };

          // Full DOM rendering
          const wrapper = mount(<Form {...props} />);

          // Assertions
          expect(result).toBeDefined();
          expect(wrapper).toHaveProp(result);
        });

        it('should NOT render a spinner when performing an asynchronous action', () => {
          // Mock data
          const props = {
            ...source.props,
            asynchronous: {
              ...source.props.asynchronous,
              loading: true
            },
            spinner: false
          };

          // Shallow rendering
          const wrapper = shallow(<Form {...props} />);

          // Assertions
          expect(wrapper.find(Spinner)).not.toExist();
        });

        it('should NOT disable a submit button when performing an asynchronous action', () => {
          // Mock data
          const props = {
            ...source.props,
            asynchronous: {
              ...source.props.asynchronous,
              loading: true
            },
            pristine: false,
            spinner: false
          };

          // Shallow rendering
          const wrapper = shallow(<Form {...props} />);

          // Assertions
          expect(wrapper.find(Button)).not.toBeDisabled();
        });
      });
    });

    describe('"submitButton"', () => {
      describe('Receiving prop', () => {
        it('should receive the correct prop', () => {
          // Mock data
          const props = { ...source.props };
          const result = { submitButton: props.submitButton };

          // Full DOM rendering
          const wrapper = mount(<Form {...props} />);

          // Assertions
          expect(result).toBeDefined();
          expect(wrapper).toHaveProp(result);
        });

        it('should render the correct text on a submit button', () => {
          // Mock data
          const props = { ...source.props };
          const result = props.submitButton;

          // Shallow rendering
          const wrapper = shallow(<Form {...props} />);

          // Assertions
          expect(wrapper.find(Button).dive()).toIncludeText(result);
        });
      });
    });

    describe('"submitCallback"', () => {
      describe('Receiving prop', () => {
        it('should receive the correct prop', () => {
          // Mock data
          const props = { ...source.props };
          const result = { submitCallback: props.submitCallback };

          // Full DOM rendering
          const wrapper = mount(<Form {...props} />);

          // Assertions
          expect(result).toBeDefined();
          expect(wrapper).toHaveProp(result);
        });
      });
    });

    describe('"submitFunction"', () => {
      describe('Receiving prop', () => {
        it('should receive the correct prop', () => {
          // Mock data
          const props = { ...source.props };
          const result = { submitFunction: props.submitFunction };

          // Full DOM rendering
          const wrapper = mount(<Form {...props} />);

          // Assertions
          expect(result).toBeDefined();
          expect(wrapper).toHaveProp(result);
        });
      });
    });
  });

  describe('Interactions', () => {
    describe('Component methods', () => {
      describe('"onSubmit"', () => {
        describe('Invoking directly from the instance of the component', () => {
          it('should call the method when triggered directly', () => {
            // Mock functions
            const submitCallback = jest.fn();
            const submitFunction = jest.fn();

            // Mock data
            const values = Map({
              email: 'skywalker@rxseven.com',
              password: 'R2D2s'
            });

            const props = {
              ...source.props,
              submitCallback,
              submitFunction
            };

            // Shallow rendering
            const wrapper = shallow(<Form {...props} />);

            // Get the instance of the component being rendered
            const instance = wrapper.instance();

            // Invoke the component method directly
            instance.onSubmit(values);

            // Assertions
            expect(submitFunction).toHaveBeenCalled();
            expect(submitFunction).toHaveBeenCalledWith(values, submitCallback);
          });
        });
      });

      describe('"renderField"', () => {
        describe('Invoking directly from the instance of the component', () => {
          it('should call the method when triggered directly', () => {
            // Mock data
            const fields = [
              { label: 'Email', name: 'email', type: 'text' },
              { label: 'Password', name: 'password', type: 'password' }
            ];

            const props = {
              ...source.props,
              fields
            };

            // Shallow rendering
            const wrapper = shallow(<Form {...props} />);

            // Get the instance of the component being rendered
            const instance = wrapper.instance();

            // Invoke the component method directly
            instance.renderField();

            // Assertions
            expect(wrapper.find(Field)).toExist();
            expect(wrapper.find(Field)).toHaveLength(fields.length);
          });
        });
      });
    });

    describe('Event handlers', () => {
      describe('"onSubmit"', () => {
        describe('Invoking indirectly by simulating a submit event', () => {
          it('should call the event handler when triggered <form> element', () => {
            // Mock functions
            const handleSubmit = jest.fn();

            // Mock data
            const props = {
              ...source.props,
              handleSubmit
            };

            // Shallow rendering
            const wrapper = shallow(<Form {...props} />);

            // Invoke the event handler indirectly by simulating a submit event
            wrapper.find('form').simulate('submit', { preventDefault() {} });

            // Assertions
            expect(handleSubmit).toHaveBeenCalled();
          });
        });

        describe('Invoking indirectly by simulating a click event', () => {
          it('should call the event handler when triggered <Button> component', () => {
            // Mock functions
            const handleSubmit = jest.fn();

            // Mock data
            const props = {
              ...source.props,
              handleSubmit
            };

            // Shallow rendering
            const wrapper = shallow(<Form {...props} />);

            // Invoke the event handler indirectly by simulating a click event
            wrapper.find(Button).simulate('click');

            // Assertions
            expect(handleSubmit).toHaveBeenCalled();
          });
        });
      });
    });
  });
});
