// Module dependencies
import { mount, shallow } from 'enzyme';
import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

// Constants
import STATE_MODELS from 'constants/models/state';

// Components
import { Button } from 'components/common/Buttons';
import UI from '../UI';

// Source data
const source = {
  payload: {
    loading: {
      asynchronous: {
        post: {
          ...STATE_MODELS.model.asynchronous,
          loading: true
        }
      }
    }
  },
  props: {
    asynchronous: {
      post: STATE_MODELS.model.asynchronous
    },
    callback: jest.fn(),
    checkout: (token, callback) => {}
  }
};

// Unit tests
describe('components/features/Payments/UI', () => {
  describe('Default state', () => {
    it('should render without crashing', () => {
      // Mock data
      const props = { ...source.props };

      // Shallow rendering
      const wrapper = shallow(<UI {...props} />);

      // Assertions
      expect(wrapper).toBeDefined();
    });

    it('should contain <StripeCheckout> component', () => {
      // Mock data
      const props = { ...source.props };

      // Shallow rendering
      const wrapper = shallow(<UI {...props} />);

      // Assertions
      expect(wrapper.find(StripeCheckout)).toExist();
    });
  });

  describe('Props and conditional rendering', () => {
    describe('"asynchronous"', () => {
      describe('Default prop', () => {
        it('should have default value for prop', () => {
          // Mock data
          const props = { ...source.props };
          const result = { asynchronous: props.asynchronous };

          // Full DOM rendering
          const wrapper = mount(<UI {...props} />);

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
            ...source.payload.loading
          };

          const result = { asynchronous: props.asynchronous };

          // Full DOM rendering
          const wrapper = mount(<UI {...props} />);

          // Assertions
          expect(result).toBeDefined();
          expect(wrapper).toHaveProp(result);
        });

        it('should disable <Button> component when performing an asynchronous action', () => {
          // Mock data
          const props = {
            ...source.props,
            ...source.payload.loading
          };

          // Shallow rendering
          const wrapper = shallow(<UI {...props} />);

          // Assertions
          expect(wrapper.find(Button)).toBeDisabled();
        });
      });
    });

    describe('"callback"', () => {
      describe('Receiving prop', () => {
        it('should receive the correct prop', () => {
          // Mock data
          const props = { ...source.props };
          const result = { callback: props.callback };

          // Full DOM rendering
          const wrapper = mount(<UI {...props} />);

          // Assertions
          expect(result).toBeDefined();
          expect(wrapper).toHaveProp(result);
        });
      });
    });

    describe('"checkout"', () => {
      describe('Receiving prop', () => {
        it('should receive the correct prop', () => {
          // Mock data
          const props = { ...source.props };
          const result = { checkout: props.checkout };

          // Full DOM rendering
          const wrapper = mount(<UI {...props} />);

          // Assertions
          expect(result).toBeDefined();
          expect(wrapper).toHaveProp(result);
        });
      });
    });
  });
});
