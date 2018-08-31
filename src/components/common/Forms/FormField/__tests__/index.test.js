// Module dependencies
import { mount, shallow } from 'enzyme';
import React from 'react';

// Components
import Text from 'components/common/Text';
import FormField from '../index';

// Source data
const source = {
  props: {
    helper: '',
    input: {
      name: 'email'
    },
    label: 'Email',
    meta: {
      error: null,
      touched: false,
      warning: null
    },
    type: undefined
  }
};

// Unit tests
describe('components/common/Form/FormField', () => {
  describe('Default state', () => {
    it('should render without crashing', () => {
      // Mock data
      const props = { ...source.props };

      // Shallow rendering
      const wrapper = shallow(<FormField {...props} />);

      // Assertions
      expect(wrapper).toBeDefined();
    });
  });

  describe('Props and conditional rendering', () => {
    describe('"helper"', () => {
      describe('Default prop', () => {
        it('should have default value for prop', () => {
          // Mock data
          const props = { ...source.props };
          const result = { helper: props.helper };

          // Full DOM rendering
          const wrapper = mount(<FormField {...props} />);

          // Assertions
          expect(result).toBeDefined();
          expect(wrapper).toHaveProp(result);
        });

        it('should NOT render a helper text', () => {
          // Mock data
          const props = { ...source.props };

          // Shallow rendering
          const wrapper = shallow(<FormField {...props} />);

          // Assertions
          expect(wrapper.find(Text)).toHaveLength(0);
        });
      });

      describe('Receiving prop', () => {
        // Configuration
        const helper = 'Your current email address';

        it('should receive the correct prop', () => {
          // Mock data
          const props = { ...source.props, helper };
          const result = { helper: props.helper };

          // Full DOM rendering
          const wrapper = mount(<FormField {...props} />);

          // Assertions
          expect(result).toBeDefined();
          expect(wrapper).toHaveProp(result);
        });

        it('should render a helper text', () => {
          // Mock data
          const props = { ...source.props, helper };
          const result = props.helper;

          // Shallow rendering
          const wrapper = shallow(<FormField {...props} />);

          // Assertions
          expect(wrapper.find(Text).dive()).toHaveText(result);
        });
      });
    });

    describe('"input"', () => {
      describe('Receiving prop', () => {
        it('should receive the correct prop', () => {
          // Mock data
          const props = { ...source.props };
          const result = { input: props.input };

          // Full DOM rendering
          const wrapper = mount(<FormField {...props} />);

          // Assertions
          expect(result).toBeDefined();
          expect(wrapper).toHaveProp(result);
        });

        it('should have the correct "id" property', () => {
          // Mock data
          const props = { ...source.props };
          const result = { id: props.input.name };

          // Shallow rendering
          const wrapper = shallow(<FormField {...props} />);

          // Assertions
          expect(wrapper.find('input')).toExist();
          expect(wrapper.find('input')).toHaveProp(result);
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
          const wrapper = mount(<FormField {...props} />);

          // Assertions
          expect(result).toBeDefined();
          expect(wrapper).toHaveProp(result);
        });

        it('should render a field element with the correct "placeholder" property', () => {
          // Mock data
          const props = { ...source.props };
          const result = { placeholder: props.label };

          // Shallow rendering
          const wrapper = shallow(<FormField {...props} />);

          // Assertions
          expect(wrapper.find('input')).toExist();
          expect(wrapper.find('input')).toHaveProp(result);
        });
      });
    });

    describe('"meta"', () => {
      describe('Receiving prop', () => {
        it('should receive the correct prop', () => {
          // Mock data
          const props = {
            ...source.props,
            meta: {
              error: 'Something went wrong!',
              touched: true,
              warning: 'Warning message'
            }
          };
          const result = { meta: props.meta };

          // Full DOM rendering
          const wrapper = mount(<FormField {...props} />);

          // Assertions
          expect(result).toBeDefined();
          expect(wrapper).toHaveProp(result);
        });

        describe('A form field has NOT been touched', () => {
          describe('Single case', () => {
            describe('Error', () => {
              it('should NOT render any feedback', () => {
                // Mock data
                const style = {
                  feedback: 'invalid-feedback',
                  field: 'is-invalid'
                };
                const props = {
                  ...source.props,
                  meta: {
                    error: 'Something went wrong!',
                    touched: false,
                    warning: null
                  },
                  type: 'text'
                };
                const result = {
                  message: props.meta.error,
                  style: {
                    feedback: style.feedback,
                    field: style.field
                  }
                };

                // Shallow rendering
                const wrapper = shallow(<FormField {...props} />);

                // Assertions
                expect(wrapper.find('input')).toExist();
                expect(wrapper.find('input')).not.toHaveClassName(result.style.field);
                expect(wrapper.text()).not.toEqual(result.message);
                expect(wrapper.children().find('div')).not.toHaveClassName(result.style.feedback);
              });
            });

            describe('Warning', () => {
              it('should NOT render any feedback', () => {
                // Mock data
                const style = {
                  feedback: 'warning-feedback',
                  field: 'is-warning'
                };
                const props = {
                  ...source.props,
                  meta: {
                    error: null,
                    touched: false,
                    warning: 'Warning message'
                  },
                  type: 'text'
                };
                const result = {
                  message: props.meta.warning,
                  style: {
                    feedback: style.feedback,
                    field: style.field
                  }
                };

                // Shallow rendering
                const wrapper = shallow(<FormField {...props} />);

                // Assertions
                expect(wrapper.find('input')).toExist();
                expect(wrapper.find('input')).not.toHaveClassName(result.style.field);
                expect(wrapper.text()).not.toEqual(result.message);
                expect(wrapper.children().find('div')).not.toHaveClassName(result.style.feedback);
              });
            });
          });

          describe('Simultaneous case', () => {
            describe('Error', () => {
              it('should NOT render any feedback', () => {
                // Mock data
                const style = {
                  feedback: 'invalid-feedback',
                  field: 'is-invalid'
                };
                const props = {
                  ...source.props,
                  meta: {
                    error: 'Something went wrong!',
                    touched: false,
                    warning: 'Warning message'
                  },
                  type: 'text'
                };
                const result = {
                  message: props.meta.error,
                  style: {
                    feedback: style.feedback,
                    field: style.field
                  }
                };

                // Shallow rendering
                const wrapper = shallow(<FormField {...props} />);

                // Assertions
                expect(wrapper.find('input')).toExist();
                expect(wrapper.find('input')).not.toHaveClassName(result.style.field);
                expect(wrapper.text()).not.toEqual(result.message);
                expect(wrapper.children().find('div')).not.toHaveClassName(result.style.feedback);
              });
            });
          });
        });

        describe('A form field has been touched', () => {
          describe('Single case', () => {
            describe('Error', () => {
              it('should set "is-invalid" class to a field element', () => {
                // Mock data
                const style = 'is-invalid';
                const props = {
                  ...source.props,
                  meta: {
                    error: 'Something went wrong!',
                    touched: true,
                    warning: null
                  },
                  type: 'text'
                };
                const result = style;

                // Shallow rendering
                const wrapper = shallow(<FormField {...props} />);

                // Assertions
                expect(wrapper.find('input')).toExist();
                expect(wrapper.find('input')).toHaveClassName(result);
              });

              it('should render an error message', () => {
                // Mock data
                const props = {
                  ...source.props,
                  meta: {
                    error: 'Something went wrong!',
                    touched: true,
                    warning: null
                  }
                };
                const result = props.meta.error;

                // Shallow rendering
                const wrapper = shallow(<FormField {...props} />);

                // Assertions
                expect(wrapper.text()).toEqual(result);
              });

              it('should set "invalid-feedback" class', () => {
                // Mock data
                const style = 'invalid-feedback';
                const props = {
                  ...source.props,
                  meta: {
                    error: 'Something went wrong!',
                    touched: true,
                    warning: null
                  }
                };
                const result = style;

                // Shallow rendering
                const wrapper = shallow(<FormField {...props} />);

                // Assertions
                expect(wrapper.children().find('div')).toHaveClassName(result);
              });
            });

            describe('Warning', () => {
              it('should set "is-warning" class to a field element', () => {
                // Mock data
                const style = 'is-warning';
                const props = {
                  ...source.props,
                  meta: {
                    error: null,
                    touched: true,
                    warning: 'Warning message'
                  },
                  type: 'text'
                };
                const result = style;

                // Shallow rendering
                const wrapper = shallow(<FormField {...props} />);

                // Assertions
                expect(wrapper.find('input')).toExist();
                expect(wrapper.find('input')).toHaveClassName(result);
              });

              it('should render a warning message', () => {
                // Mock data
                const props = {
                  ...source.props,
                  meta: {
                    error: null,
                    touched: true,
                    warning: 'Warning message'
                  }
                };
                const result = props.meta.warning;

                // Shallow rendering
                const wrapper = shallow(<FormField {...props} />);

                // Assertions
                expect(wrapper.text()).toEqual(result);
              });

              it('should set "warning-feedback" class', () => {
                // Mock data
                const style = 'warning-feedback';
                const props = {
                  ...source.props,
                  meta: {
                    error: null,
                    touched: true,
                    warning: 'Warning message'
                  }
                };
                const result = style;

                // Shallow rendering
                const wrapper = shallow(<FormField {...props} />);

                // Assertions
                expect(wrapper.children().find('div')).toHaveClassName(result);
              });
            });
          });

          describe('Simultaneous case', () => {
            it('should set "is-invalid" class to a field element', () => {
              // Mock data
              const style = 'is-invalid';
              const props = {
                ...source.props,
                meta: {
                  error: 'Something went wrong!',
                  touched: true,
                  warning: 'Warning message'
                },
                type: 'text'
              };
              const result = style;

              // Shallow rendering
              const wrapper = shallow(<FormField {...props} />);

              // Assertions
              expect(wrapper.find('input')).toExist();
              expect(wrapper.find('input')).toHaveClassName(result);
            });

            it('should render an error message', () => {
              // Mock data
              const props = {
                ...source.props,
                meta: {
                  error: 'Something went wrong!',
                  touched: true,
                  warning: 'Warning message'
                }
              };
              const result = props.meta.error;

              // Shallow rendering
              const wrapper = shallow(<FormField {...props} />);

              // Assertions
              expect(wrapper.text()).toEqual(result);
            });
          });
        });
      });
    });

    describe('"type"', () => {
      describe('"type"', () => {
        describe('Default prop', () => {
          // Configuration
          const type = 'text';

          it('should have default value for prop', () => {
            // Mock data
            const props = { ...source.props, type };
            const result = { type: props.type };

            // Full DOM rendering
            const wrapper = mount(<FormField {...props} />);

            // Assertions
            expect(result).toBeDefined();
            expect(wrapper).toHaveProp(result);
          });

          it('should render <input type="text"> element by default', () => {
            // Mock data
            const props = { ...source.props, type };
            const result = { type: props.type };

            // Shallow rendering
            const wrapper = shallow(<FormField {...props} />);

            // Assertions
            expect(wrapper.find('input')).toExist();
            expect(wrapper.find('input')).toHaveProp(result);
          });
        });
      });

      describe('Receiving prop', () => {
        // Configuration
        const type = 'text';

        it('should receive the correct prop', () => {
          // Mock data
          const props = { ...source.props, type };
          const result = { type: props.type };

          // Full DOM rendering
          const wrapper = mount(<FormField {...props} />);

          // Assertions
          expect(result).toBeDefined();
          expect(wrapper).toHaveProp(result);
        });

        it('should render <input type="text"> element', () => {
          // Mock data
          const props = { ...source.props, type };
          const result = { type: props.type };

          // Shallow rendering
          const wrapper = shallow(<FormField {...props} />);

          // Assertions
          expect(wrapper.find('input')).toExist();
          expect(wrapper.find('input')).toHaveProp(result);
        });

        it('should render <input type="password"> element', () => {
          // Mock data
          const props = {
            ...source.props,
            type: 'password'
          };
          const result = { type: props.type };

          // Shallow rendering
          const wrapper = shallow(<FormField {...props} />);

          // Assertions
          expect(wrapper.find('input')).toExist();
          expect(wrapper.find('input')).toHaveProp(result);
        });

        it('should render <textarea> element', () => {
          // Mock data
          const props = {
            ...source.props,
            type: 'textarea'
          };

          // Shallow rendering
          const wrapper = shallow(<FormField {...props} />);

          // Assertions
          expect(wrapper.find('textarea')).toExist();
        });
      });
    });
  });
});
