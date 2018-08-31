// Module dependencies
import { shallow } from 'enzyme';
import React from 'react';

// Components
import Component from '../index';

// Source data
const source = {
  props: {
    location: {
      state: {
        id: '5ae46e3c40ea63072f8a1c41',
        recipients: 15,
        title: 'Friday Party Survey'
      }
    }
  }
};

// Unit tests
describe('screens/surveys/success', () => {
  describe('Default state', () => {
    it('should render without crashing', () => {
      // Mock data
      const props = { ...source.props };

      // Shallow rendering
      const wrapper = shallow(<Component {...props} />);

      // Assertions
      expect(wrapper).toBeDefined();
    });
  });

  // TODO: Props and conditional rendering
});
