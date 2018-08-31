// Module dependencies
import { mount, shallow } from 'enzyme';
import React from 'react';

// Components
import Overlay from 'components/common/Overlay';
import Spinner from 'components/common/Spinner';
import UI from '../UI';

// Source data
const source = {
  props: {
    session: {
      loading: {
        verify: false
      }
    }
  }
};

// Unit tests
describe('components/core/Lightbox/UI', () => {
  describe('Default state', () => {
    it('should render without crashing', () => {
      // Mock data
      const props = { ...source.props };

      // Shallow rendering
      const wrapper = shallow(<UI {...props} />);

      // Assertions
      expect(wrapper).toBeDefined();
    });

    it('should render nothing by default', () => {
      // Mock data
      const props = { ...source.props };

      // Shallow rendering
      const wrapper = shallow(<UI {...props} />);

      // Assertions
      expect(wrapper).toBeEmptyRender();
    });
  });

  describe('Props and conditional rendering', () => {
    describe('"verify"', () => {
      describe('Receiving prop', () => {
        // Configuration
        const verify = {
          session: {
            loading: {
              verify: true
            }
          }
        };

        it('should receive the correct prop', () => {
          // Mock data
          const props = {
            ...source.props,
            ...verify
          };
          const result = { session: props.session };

          // Full DOM rendering
          const wrapper = mount(<UI {...props} />);

          // Assertions
          expect(result).toBeDefined();
          expect(wrapper).toHaveProp(result);
        });

        it('should render an <Overlay> component along with a loanding spinner', () => {
          // Mock data
          const props = {
            ...source.props,
            ...verify
          };

          // Shallow rendering
          const wrapper = shallow(<UI {...props} />);

          // Assertions
          expect(wrapper).not.toBeEmptyRender();
          expect(wrapper.find(Overlay)).toExist();
          expect(wrapper.find(Spinner)).toExist();
        });
      });
    });
  });

  // TODO: Conditional rendering
});
