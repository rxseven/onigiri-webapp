// Module dependencies
import { mount, shallow } from 'enzyme';
import React from 'react';

// Components
import { Button } from 'components/common/Buttons';
import { FormCTA } from '../index';

// Source data
const source = {
  props: {
    loading: true,
    cancelButton: <button>Cancel</button>,
    pristine: true,
    spinner: true,
    submitButton: 'Submit'
  }
};

// Unit tests
describe('components/common/Form/FormCTA', () => {
  describe('Default state', () => {
    it('should render without crashing', () => {
      // Mock data
      const props = { ...source.props };

      // Shallow rendering
      const wrapper = shallow(<FormCTA {...props} />);

      // Assertions
      expect(wrapper).toBeDefined();
    });
  });

  describe('Props and conditional rendering', () => {
    describe('"loading"', () => {
      describe('Receiving prop', () => {
        it('should receive the correct prop', () => {
          // Mock data
          const props = { ...source.props };
          const result = { loading: props.loading };

          // Full DOM rendering
          const wrapper = mount(<FormCTA {...props} />);

          // Assertions
          expect(result).toBeDefined();
          expect(wrapper).toHaveProp(result);
        });
      });

      // TODO: Conditional rendering
    });

    describe('"cancelButton"', () => {
      describe('Receiving prop', () => {
        it('should receive the correct prop', () => {
          // Mock data
          const props = { ...source.props };
          const result = { cancelButton: props.cancelButton };

          // Full DOM rendering
          const wrapper = mount(<FormCTA {...props} />);

          // Assertions
          expect(result).toBeDefined();
          expect(wrapper).toHaveProp(result);
        });
      });

      // TODO: Conditional rendering
    });

    describe('"pristine"', () => {
      describe('Receiving prop', () => {
        it('should receive the correct prop', () => {
          // Mock data
          const props = { ...source.props };
          const result = { pristine: props.pristine };

          // Full DOM rendering
          const wrapper = mount(<FormCTA {...props} />);

          // Assertions
          expect(result).toBeDefined();
          expect(wrapper).toHaveProp(result);
        });
      });

      it('should disable a submit button when the form is clean', () => {
        // Mock data
        const props = { ...source.props };

        // Shallow rendering
        const wrapper = shallow(<FormCTA {...props} />);

        // Assertions
        expect(wrapper.find(Button)).toBeDisabled();
      });
    });

    describe('"spinner"', () => {
      describe('Receiving prop', () => {
        it('should receive the correct prop', () => {
          // Mock data
          const props = { ...source.props };
          const result = { spinner: props.spinner };

          // Full DOM rendering
          const wrapper = mount(<FormCTA {...props} />);

          // Assertions
          expect(result).toBeDefined();
          expect(wrapper).toHaveProp(result);
        });
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
        const wrapper = shallow(<FormCTA {...props} />);

        // Assertions
        expect(wrapper.find(Button)).toBeDisabled();
      });
    });

    describe('"submitButton"', () => {
      describe('Receiving prop', () => {
        it('should receive the correct prop', () => {
          // Mock data
          const props = { ...source.props };
          const result = { submitButton: props.submitButton };

          // Full DOM rendering
          const wrapper = mount(<FormCTA {...props} />);

          // Assertions
          expect(result).toBeDefined();
          expect(wrapper).toHaveProp(result);
        });
      });

      it('should render the correct text on a submit button', () => {
        // Mock data
        const props = { ...source.props };
        const result = props.submitButton;

        // Shallow rendering
        const wrapper = shallow(<FormCTA {...props} />);

        // Assertions
        expect(wrapper.find(Button).dive()).toIncludeText(result);
      });
    });
  });
});
