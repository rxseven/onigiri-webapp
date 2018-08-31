// Module dependencies
import { mount, shallow } from 'enzyme';
import React from 'react';

// Mock data
import mock from 'tests/mock';

// Constants
import STATE_MODELS from 'constants/models/state';

// Components
import { Modal, ModalBody, ModalFooter } from 'components/common/Modal';
import Spinner from 'components/common/Spinner';
import Error from 'components/composite/Error';
import Confirm from '../index';

// Source data
const source = {
  props: {
    alert: true,
    asynchronous: { ...STATE_MODELS.model.asynchronous },
    buttonCancel: 'Cancel',
    buttonConfirm: 'Okay',
    children: mock.data.source.content.children,
    onClose: jest.fn(),
    onConfirm: jest.fn(),
    spinner: true,
    title: 'Delete Survey',
    visibility: false
  }
};

// Unit tests
describe('components/composite/Confirm', () => {
  describe('Default state', () => {
    it('should render without crashing', () => {
      // Mock data
      const props = { ...source.props };

      // Shallow rendering
      const wrapper = shallow(<Confirm {...props} />);

      // Assertions
      expect(wrapper).toBeDefined();
    });
  });

  describe('Props and conditional rendering', () => {
    // Configuration
    const error = {
      asynchronous: {
        ...source.props.asynchronous,
        error: {
          message: 'Something went wrong!'
        }
      }
    };

    const loading = {
      asynchronous: {
        ...source.props.asynchronous,
        loading: true
      }
    };

    describe('"alert"', () => {
      describe('Default prop', () => {
        it('should have default value for prop', () => {
          // Mock data
          const props = { ...source.props };
          const result = { alert: props.alert };

          // Full DOM rendering
          const wrapper = mount(<Confirm {...props} />);

          // Assertions
          expect(result).toBeDefined();
          expect(wrapper).toHaveProp(result);
        });

        it('should render an error message when failure occured', () => {
          // Mock data
          const props = {
            ...source.props,
            ...error
          };
          const result = { alert: props.asynchronous.error };

          // Shallow rendering
          const wrapper = shallow(<Confirm {...props} />);

          // Assertions
          expect(wrapper.find(ModalFooter).find(Error)).toExist();
          expect(wrapper.find(ModalFooter).find(Error)).toHaveProp(result);
        });
      });

      describe('Receiving prop', () => {
        // Configuration
        const alert = false;

        it('should receive the correct prop', () => {
          // Mock data
          const props = { ...source.props, alert };
          const result = { alert: props.alert };

          // Full DOM rendering
          const wrapper = mount(<Confirm {...props} />);

          // Assertions
          expect(wrapper).toHaveProp(result);
        });

        it('should NOT render an error message when failure occured', () => {
          // Mock data
          const props = {
            ...source.props,
            ...error,
            alert
          };

          // Shallow rendering
          const wrapper = shallow(<Confirm {...props} />);

          // Assertions
          expect(wrapper.find(ModalFooter).find(Error)).not.toExist();
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
          const wrapper = mount(<Confirm {...props} />);

          // Assertions
          expect(result).toBeDefined();
          expect(wrapper).toHaveProp(result);
        });
      });

      describe('Receiving prop', () => {
        // Configuration
        const asynchronous = loading;

        it('should receive the correct prop', () => {
          // Mock data
          const props = {
            ...source.props,
            ...asynchronous
          };
          const result = { asynchronous: props.asynchronous };

          // Full DOM rendering
          const wrapper = mount(<Confirm {...props} />);

          // Assertions
          expect(wrapper).toHaveProp(result);
        });

        it('should disable all buttons when performing an asynchronous action', () => {
          // Mock data
          const props = {
            ...source.props,
            ...asynchronous
          };

          // Shallow rendering
          const wrapper = shallow(<Confirm {...props} />);

          // Assertions
          expect(wrapper.find('#confirm-cancel')).toBeDisabled();
          expect(wrapper.find('#confirm-ok')).toBeDisabled();
        });
      });
    });

    describe('"buttonCancel"', () => {
      describe('Receiving prop', () => {
        it('should receive the correct prop', () => {
          // Mock data
          const props = { ...source.props };
          const result = { buttonCancel: props.buttonCancel };

          // Full DOM rendering
          const wrapper = mount(<Confirm {...props} />);

          // Assertions
          expect(wrapper).toHaveProp(result);
        });

        it('should contain a cancel button', () => {
          // Mock data
          const props = { ...source.props };
          const result = props.buttonCancel;

          // Shallow rendering
          const wrapper = shallow(<Confirm {...props} />);

          // Assertions
          expect(wrapper.find('#confirm-cancel').dive()).toHaveText(result);
        });
      });
    });

    describe('"buttonConfirm"', () => {
      describe('Receiving prop', () => {
        it('should receive the correct prop', () => {
          // Mock data
          const props = { ...source.props };
          const result = { buttonConfirm: props.buttonConfirm };

          // Full DOM rendering
          const wrapper = mount(<Confirm {...props} />);

          // Assertions
          expect(wrapper).toHaveProp(result);
        });

        it('should contain a confirmation button', () => {
          // Mock data
          const props = { ...source.props };
          const result = props.buttonConfirm;

          // Shallow rendering
          const wrapper = shallow(<Confirm {...props} />);

          // Assertions
          expect(wrapper.find('#confirm-ok').dive()).toHaveText(result);
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
          const wrapper = mount(<Confirm {...props} />);

          // Assertions
          expect(wrapper).toHaveProp(result);
        });

        it('should render the correct children', () => {
          // Mock data
          const props = { ...source.props };
          const result = props.children;

          // Shallow rendering
          const wrapper = shallow(<Confirm>{props.children}</Confirm>);

          // Assertions
          expect(wrapper.find(ModalBody)).toContainReact(result);
        });
      });
    });

    describe('"onClose"', () => {
      describe('Receiving prop', () => {
        it('should receive the correct prop', () => {
          // Mock data
          const props = { ...source.props };
          const result = { onClose: props.onClose };

          // Full DOM rendering
          const wrapper = mount(<Confirm {...props} />);

          // Assertions
          expect(wrapper).toHaveProp(result);
        });

        it('should render <Modal> component with the correct "onClose" prop', () => {
          // Mock data
          const props = { ...source.props };
          const result = { onClose: props.onClose };

          // Shallow rendering
          const wrapper = shallow(<Confirm {...props} />);

          // Assertions
          expect(wrapper.find(Modal).dive()).not.toHaveProp(result);
        });
      });
    });

    describe('"onConfirm"', () => {
      describe('Receiving prop', () => {
        it('should receive the correct prop', () => {
          // Mock data
          const props = { ...source.props };
          const result = { onConfirm: props.onConfirm };

          // Full DOM rendering
          const wrapper = mount(<Confirm {...props} />);

          // Assertions
          expect(wrapper).toHaveProp(result);
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
          const wrapper = mount(<Confirm {...props} />);

          // Assertions
          expect(result).toBeDefined();
          expect(wrapper).toHaveProp(result);
        });

        it('should render a spinner when performing an asynchronous action', () => {
          // Mock data
          const props = {
            ...source.props,
            ...loading
          };

          // Shallow rendering
          const wrapper = shallow(<Confirm {...props} />);

          // Assertions
          expect(wrapper.find(ModalFooter).find(Spinner)).toExist();
        });
      });

      describe('Receiving prop', () => {
        // Configuration
        const spinner = false;

        it('should receive the correct prop', () => {
          // Mock data
          const props = { ...source.props, spinner };
          const result = { spinner: props.spinner };

          // Full DOM rendering
          const wrapper = mount(<Confirm {...props} />);

          // Assertions
          expect(wrapper).toHaveProp(result);
        });

        it('should NOT render a spinner when performing an asynchronous action', () => {
          // Mock data
          const props = {
            ...source.props,
            ...loading,
            spinner
          };

          // Shallow rendering
          const wrapper = shallow(<Confirm {...props} />);

          // Assertions
          expect(wrapper.find(ModalFooter).find(Spinner)).not.toExist();
        });
      });
    });

    describe('"title"', () => {
      describe('Receiving prop', () => {
        it('should receive the correct prop', () => {
          // Mock data
          const props = { ...source.props };
          const result = { title: props.title };

          // Full DOM rendering
          const wrapper = mount(<Confirm {...props} />);

          // Assertions
          expect(wrapper).toHaveProp(result);
        });

        it('should render <Modal> component with the correct "title" prop', () => {
          // Mock data
          const props = { ...source.props };
          const result = { title: props.title };

          // Shallow rendering
          const wrapper = shallow(<Confirm {...props} />);

          // Assertions
          expect(wrapper.find(Modal).dive()).not.toHaveProp(result);
        });
      });
    });

    describe('"visibility"', () => {
      describe('Receiving prop', () => {
        // Configuration
        const visibility = true;

        it('should receive the correct prop', () => {
          // Mock data
          const props = { ...source.props, visibility };
          const result = { visibility: props.visibility };

          // Full DOM rendering
          const wrapper = mount(<Confirm {...props} />);

          // Assertions
          expect(wrapper).toHaveProp(result);
        });

        it('should render <Modal> component with the correct "visibility" prop', () => {
          // Mock data
          const props = { ...source.props, visibility };
          const result = { visibility: props.visibility };

          // Shallow rendering
          const wrapper = shallow(<Confirm {...props} />);

          // Assertions
          expect(wrapper.find(Modal).dive()).not.toHaveProp(result);
        });
      });
    });
  });

  describe('Interactions', () => {
    describe('Event handlers', () => {
      describe('Cancel button', () => {
        describe('"onClick"', () => {
          describe('Invoking indirectly by simulating a click event', () => {
            it('should call the event handler when triggered <Button> component', () => {
              // Mock data
              const onClose = jest.fn();
              const props = { ...source.props, onClose };

              // Shallow rendering
              const wrapper = shallow(<Confirm {...props} />);

              // Invoke the event handler indirectly by simulating a click event
              wrapper
                .find('#confirm-cancel')
                .dive()
                .simulate('click');

              // Assertions
              expect(onClose).toHaveBeenCalled();
            });
          });
        });
      });

      describe('Confirmation button', () => {
        describe('"onClick"', () => {
          describe('Invoking indirectly by simulating a click event', () => {
            it('should call the event handler when triggered <Button> component', () => {
              // Mock data
              const onConfirm = jest.fn();
              const props = { ...source.props, onConfirm };

              // Shallow rendering
              const wrapper = shallow(<Confirm {...props} />);

              // Invoke the event handler indirectly by simulating a click event
              wrapper
                .find('#confirm-ok')
                .dive()
                .simulate('click');

              // Assertions
              expect(onConfirm).toHaveBeenCalled();
            });
          });
        });
      });
    });
  });
});
