// Module dependencies
import { mount, shallow } from 'enzyme';
import React from 'react';
import { FadingCircle, ThreeBounce } from 'better-react-spinkit';

// Helper functions
import { cssModule } from 'tests/helpers/assertions';

// Components
import Spinner from '../index';

// Source data
const source = {
  props: {
    loading: false
  }
};

// Unit tests
describe('components/common/Spinner', () => {
  describe('Default state', () => {
    it('should render without crashing', () => {
      // Shallow rendering
      const wrapper = shallow(<Spinner />);

      // Assertions
      expect(wrapper).toBeDefined();
    });
  });

  describe('Props and conditional rendering', () => {
    describe('"loading"', () => {
      describe('Default prop', () => {
        it('should have default value for prop', () => {
          // Mock data
          const props = { ...source.props };
          const result = { loading: props.loading };

          // Full DOM rendering
          const wrapper = mount(<Spinner />);

          // Assertions
          expect(result).toBeDefined();
          expect(wrapper).toHaveProp(result);
        });

        it('should render "fading circle" spinner by default', () => {
          // Shallow rendering
          const wrapper = shallow(<Spinner />);

          // Assertions
          expect(wrapper.find(FadingCircle)).toExist();
        });

        it('should have a wrapper with "circle" class', () => {
          // Mock data
          const style = 'circle';
          const result = style;

          // Shallow rendering
          const wrapper = shallow(<Spinner />);

          // Assertions
          expect(cssModule(wrapper, result)).toBeTruthy();
        });
      });

      describe('Receiving prop', () => {
        // Configuration
        const loading = true;

        it('should receive the correct prop', () => {
          // Mock data
          const props = { ...source.props, loading };
          const result = { loading: props.loading };

          // Full DOM rendering
          const wrapper = mount(<Spinner {...props} />);

          // Assertions
          expect(result).toBeDefined();
          expect(wrapper).toHaveProp(result);
        });

        it('should render "three bounce" spinner', () => {
          // Mock data
          const props = { ...source.props, loading };

          // Shallow rendering
          const wrapper = shallow(<Spinner {...props} />);

          // Assertions
          expect(wrapper.find(ThreeBounce)).toExist();
        });

        it('should have a wrapper with "bounce" class', () => {
          // Mock data
          const style = 'bounce';
          const props = { ...source.props, loading };
          const result = style;

          // Shallow rendering
          const wrapper = shallow(<Spinner {...props} />);

          // Assertions
          expect(cssModule(wrapper, result)).toBeTruthy();
        });
      });
    });
  });
});
