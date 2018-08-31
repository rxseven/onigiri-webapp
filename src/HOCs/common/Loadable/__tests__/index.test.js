// Module dependencies
import { shallow } from 'enzyme';
import React from 'react';

// Components
import Loadable from '../index';

// Unit tests
describe('HOCs/common/Loadable', () => {
  describe('Default state', () => {
    it('should render without crashing', () => {
      // Shallow rendering
      const wrapper = shallow(<Loadable />);

      // Assertions
      expect(wrapper).toBeDefined();
    });
  });

  // TODO: Dynamic imports
});
