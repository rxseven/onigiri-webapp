// Module dependencies
import { shallow } from 'enzyme';
import React from 'react';

// Components
import withLoadable from '../index';

// Unit tests
describe('HOCs/common/withLoadable', () => {
  describe('Default state', () => {
    it('should render without crashing', () => {
      // Shallow rendering
      const wrapper = shallow(<withLoadable />);

      // Assertions
      expect(wrapper).toBeDefined();
    });
  });

  // TODO: Dynamic imports
});
