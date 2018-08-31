// Module dependencies
import { shallow } from 'enzyme';
import React from 'react';

// Components
import ScrollerContainer from '../index';

// Source data
const source = {
  props: {
    actions: {
      getData: jest.fn(),
      updatePagination: jest.fn()
    },
    children: null,
    state: {
      isEmpty: null,
      isError: null,
      meta: {},
      mode: '',
      pagination: null,
      query: null
    }
  }
};

// Unit tests
describe('components/common/Scroller/ScrollerContainer', () => {
  describe('Default state', () => {
    it('should render without crashing', () => {
      // Mock data
      const props = { ...source.props };

      // Shallow rendering
      const wrapper = shallow(<ScrollerContainer {...props} />);

      // Assertions
      expect(wrapper).toBeDefined();
    });
  });

  // TODO: Props and conditional rendering
});
