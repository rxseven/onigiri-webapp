// Module dependencies
import { shallow } from 'enzyme';
import React from 'react';

// Components
import MenuLink from '../index';

// Source data
const source = {
  props: {
    children: 'View on GitHub',
    exact: false,
    icon: 'fork',
    title: 'GitHub',
    to: 'https://github.com/rxseven'
  }
};

// Unit tests
describe('components/core/Menu/MenuLink', () => {
  describe('Default state', () => {
    it('should render without crashing', () => {
      // Mock data
      const props = { ...source.props };

      // Shallow rendering
      const wrapper = shallow(<MenuLink {...props} />);

      // Assertions
      expect(wrapper).toBeDefined();
    });
  });

  // TODO: Props and conditional rendering
});
