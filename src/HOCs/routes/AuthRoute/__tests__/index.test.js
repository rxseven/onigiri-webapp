// Module dependencies
import { shallow } from 'enzyme';
import React from 'react';

// Helper functions
import { mockStore } from 'tests/helpers/mock';

// Components
import Connected, { AuthRoute } from '../index';

// Source data
const source = {
  props: {
    component: <div>Component</div>,
    path: '/',
    state: {
      data: {
        authorization: false
      }
    }
  },
  store: mockStore()
};

// Unit tests
describe('HOCs/routes/AuthRoute', () => {
  describe('Default state', () => {
    it('should render without crashing', () => {
      // Mock data
      const props = { ...source.props };
      const component = <AuthRoute {...props} />;

      // Shallow rendering
      const wrapper = shallow(component);

      // Assertions
      expect(wrapper).toBeDefined();
    });

    it('should connect to the application state', () => {
      // Mock data
      const props = { ...source.props };
      const component = <Connected {...props} store={source.store} />;

      // Shallow rendering
      const wrapper = shallow(component);

      // Assertions
      expect(wrapper).toBeDefined();
    });
  });

  // TODO: Props and conditional rendering
});
