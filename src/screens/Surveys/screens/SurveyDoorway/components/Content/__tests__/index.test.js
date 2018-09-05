// Module dependencies
import { mount, shallow } from 'enzyme';
import React from 'react';

// Components
import ExLink from 'components/common/ExLink';
import { Content } from '../index';

// Source data
const source = {
  props: {
    data: {
      landing: {
        URI: ''
      }
    }
  }
};

// Unit tests
describe('screens/surveys/doorway/components/Content', () => {
  describe('Default state', () => {
    it('should render without crashing', () => {
      // Mock data
      const props = { ...source.props };

      // Shallow rendering
      const wrapper = shallow(<Content {...props} />);

      // Assertions
      expect(wrapper).toBeDefined();
    });
  });

  describe('Props and conditional rendering', () => {
    describe('.data', () => {
      describe('.landing', () => {
        // Configuration
        const URI = {
          data: {
            landing: {
              URI: 'http://www.rxseven.com'
            }
          }
        };

        describe('Receiving prop', () => {
          it('should receive the correct prop', () => {
            // Mock data
            const props = {
              ...source.props,
              ...URI
            };
            const result = props.data.landing.URI;

            // Full DOM rendering
            const wrapper = mount(<Content {...props} />);

            // Assertions
            expect(result).toBeDefined();
            expect(wrapper.props().data.landing.URI).toEqual(result);
          });

          it('should render a link button is the URI is defined', () => {
            // Mock data
            const props = {
              ...source.props,
              ...URI
            };

            // Full DOM rendering
            const wrapper = shallow(<Content {...props} />);

            // Assertions
            expect(wrapper.find(ExLink)).toExist();
          });

          it('should NOT render a link button is the URI is not defined', () => {
            // Mock data
            const props = { ...source.props };

            // Full DOM rendering
            const wrapper = shallow(<Content {...props} />);

            // Assertions
            expect(wrapper.find(ExLink)).not.toExist();
          });
        });
      });
    });
  });
});
