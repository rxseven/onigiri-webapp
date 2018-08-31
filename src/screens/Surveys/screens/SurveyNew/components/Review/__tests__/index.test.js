// Module dependencies
import { shallow } from 'enzyme';
import React from 'react';

// Helper functions
import { mockStore } from 'tests/helpers/mock';

// Components
import Review from '../index';

// Source data
const source = {
  store: mockStore()
};

// Unit tests
describe('screens/Surveys/screens/SurveyNew/components/Review', () => {
  describe('Default state', () => {
    it('should connect to the application state', () => {
      // Shallow rendering
      const wrapper = shallow(<Review store={source.store} />);

      // Assertions
      expect(wrapper).toBeDefined();
    });
  });
});
