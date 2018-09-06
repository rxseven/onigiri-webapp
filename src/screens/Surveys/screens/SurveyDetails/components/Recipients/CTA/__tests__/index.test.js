// Module dependencies
import { mount, shallow } from 'enzyme';
import React from 'react';

// Components
import CTA from '../index';

// Source data
const source = {
  props: {
    actions: {
      getRecipients: jest.fn()
    },
    options: '',
    status: {
      erorr: null,
      fetched: false,
      loading: false
    }
  }
};

// Unit tests
describe('screens/surveys/details/components/Content/CTA', () => {
  describe('Default state', () => {
    it('should render without crashing', () => {
      // Mock data
      const props = { ...source.props };

      // Shallow rendering
      const wrapper = shallow(<CTA {...props} />);

      // Assertions
      expect(wrapper).toBeDefined();
    });
  });

  describe('Props and conditional rendering', () => {
    describe('"actions"', () => {
      describe('getRecipients()', () => {
        describe('Receiving prop', () => {
          it('should receive the correct prop', () => {
            // Mock data
            const props = { ...source.props };
            const result = { actions: props.actions };

            // Full DOM rendering
            const wrapper = mount(<CTA {...props} />);

            // Assertions
            expect(result).toBeDefined();
            expect(wrapper).toHaveProp(result);
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
          const wrapper = mount(<CTA {...props} />);

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
          const wrapper = mount(<CTA {...props} />);

          // Assertions
          expect(result).toBeDefined();
          expect(wrapper).toHaveProp(result);
        });
      });
    });

    describe('"status"', () => {
      describe('.error', () => {
        describe('Receiving prop', () => {
          it('should receive the correct prop', () => {
            // Mock data
            const props = {
              ...source.props,
              status: {
                error: { message: 'Something went wrong!' }
              }
            };
            const result = props.status.error;

            // Full DOM rendering
            const wrapper = mount(<CTA {...props} />);

            // Assertions
            expect(result).toBeDefined();
            expect(wrapper.props().status.error).toEqual(result);
          });
        });

        // TODO: Conditional rendering
      });

      describe('.fetched', () => {
        describe('Receiving prop', () => {
          it('should receive the correct prop', () => {
            // Mock data
            const props = {
              ...source.props,
              status: {
                fetched: true
              }
            };
            const result = props.status.fetched;

            // Full DOM rendering
            const wrapper = mount(<CTA {...props} />);

            // Assertions
            expect(result).toBeDefined();
            expect(wrapper.props().status.fetched).toEqual(result);
          });
        });

        // TODO: Conditional rendering
      });

      describe('.loading', () => {
        describe('Receiving prop', () => {
          it('should receive the correct prop', () => {
            // Mock data
            const props = {
              ...source.props,
              status: {
                loading: true
              }
            };
            const result = props.status.loading;

            // Full DOM rendering
            const wrapper = mount(<CTA {...props} />);

            // Assertions
            expect(result).toBeDefined();
            expect(wrapper.props().status.loading).toEqual(result);
          });
        });

        // TODO: Conditional rendering
      });
    });
  });
});
