// Module dependencies
import { mount, shallow } from 'enzyme';
import React from 'react';

// Components
import { Button } from 'components/common/Buttons';
import Spinner from 'components/common/Spinner';
import Loader from '../index';

// Source data
const source = {
  props: {}
};

// Unit tests
describe('components/common/Loader', () => {
  describe('Default state', () => {
    it('should render without crashing', () => {
      // Mock data
      const props = { ...source.props };

      // Shallow rendering
      const wrapper = shallow(<Loader {...props} />);

      // Assertions
      expect(wrapper).toBeDefined();
    });

    it('should render nothing by default', () => {
      // Shallow rendering
      const wrapper = shallow(<Loader />);

      // Assertions
      expect(wrapper).toBeEmptyRender();
    });
  });

  describe('Props and conditional rendering', () => {
    describe('"error"', () => {
      // Configuration
      const error = 'Something went wrong!.';

      describe('Receiving prop', () => {
        it('should receive the correct prop', () => {
          // Mock data
          const props = { ...source.props, error };
          const result = { error: props.error };

          // Full DOM rendering
          const wrapper = mount(<Loader {...props} />);

          // Assertions
          expect(result).toBeDefined();
          expect(wrapper).toHaveProp(result);
        });

        it('should render a warning message along with a button to reload a webpage', () => {
          // Mock data
          const props = { ...source.props, error };
          const result = 'Something went wrong, please reload a webpage.';

          // Full DOM rendering
          const wrapper = mount(<Loader {...props} />);

          // Assertions
          expect(wrapper).toIncludeText(result);
        });
      });
    });

    describe('"pastDelay"', () => {
      describe('Receiving prop', () => {
        // Configuration
        const pastDelay = true;

        it('should receive the correct prop', () => {
          // Mock data
          const props = { ...source.props, pastDelay };
          const result = { pastDelay: props.pastDelay };

          // Full DOM rendering
          const wrapper = mount(<Loader {...props} />);

          // Assertions
          expect(result).toBeDefined();
          expect(wrapper).toHaveProp(result);
        });

        it('should render a loading spinner', () => {
          // Mock data
          const props = { ...source.props, pastDelay };

          // Shallow rendering
          const wrapper = shallow(<Loader {...props} />);

          // Assertions
          expect(wrapper.find(Spinner)).toExist();
        });
      });
    });

    describe('"timedOut"', () => {
      describe('Receiving prop', () => {
        // Configuration
        const timedOut = true;

        it('should receive the correct prop', () => {
          // Mock data
          const props = { ...source.props, timedOut };
          const result = { timedOut: props.timedOut };

          // Full DOM rendering
          const wrapper = mount(<Loader {...props} />);

          // Assertions
          expect(result).toBeDefined();
          expect(wrapper).toHaveProp(result);
        });

        it('should render an info message along with a loading spinner', () => {
          // Mock data
          const props = { ...source.props, timedOut };
          const result = 'Please take a moment';

          // Full DOM rendering
          const wrapper = mount(<Loader {...props} />);

          // Assertions
          expect(wrapper).toIncludeText(result);
          expect(wrapper.find(Spinner)).toExist();
        });
      });
    });
  });

  describe('Interactions', () => {
    describe('When an error occured', () => {
      it('should reload a webpage when triggered a <Button> component', () => {
        // Mock functions
        window.location.reload = jest.fn();

        // Mock data
        const props = {
          ...source.props,
          error: 'Something went wrong!'
        };

        // Full DOM rendering
        const wrapper = mount(<Loader {...props} />);

        // Invoke the event handler indirectly by simulating a click event
        wrapper
          .find(Button)
          .at(0)
          .simulate('click');

        // Assertions
        expect(window.location.reload).toHaveBeenCalled();
      });
    });
  });
});
