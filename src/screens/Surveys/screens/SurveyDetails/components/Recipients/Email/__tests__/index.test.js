// Module dependencies
import { mount, shallow } from 'enzyme';
import React from 'react';

// Mock data
import mock from 'tests/mock';

// Components
import { Email } from '../index';

// Source data
const source = {
  props: {
    data: mock.data.source.surveys.item.recipients.normalized
  }
};

// Unit tests
describe('screens/surveys/details/components/Recipients/Email', () => {
  describe('Default state', () => {
    it('should render without crashing', () => {
      // Mock data
      const props = { ...source.props };

      // Shallow rendering
      const wrapper = shallow(<Email {...props} />);

      // Assertions
      expect(wrapper).toBeDefined();
    });
  });

  describe('Props and conditional rendering', () => {
    describe('.data', () => {
      describe('Receiving prop', () => {
        it('should receive the correct prop', () => {
          // Mock data
          const props = { ...source.props };
          const result = props.data;

          // Full DOM rendering
          const wrapper = mount(<Email {...props} />);

          // Assertions
          expect(result).toBeDefined();
          expect(wrapper.props().data).toEqual(result);
        });
      });
    });
  });

  // TODO: Conditional rendering
});
