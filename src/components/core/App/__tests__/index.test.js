// Module dependencies
import { shallow } from 'enzyme';
import React from 'react';

// Components
import App from '../index';

// Unit tests
describe('components/core/App', () => {
  describe('Default state', () => {
    it('should render without crashing', () => {
      // Shallow rendering
      const wrapper = shallow(<App />);

      // Assertions
      expect(wrapper).toBeDefined();
    });
  });
});
