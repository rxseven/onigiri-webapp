// Module dependencies
import { shallow } from 'enzyme';
import React from 'react';

// Components
import withReferral from '../index';

// Source data
const source = {
  props: {
    component: <div>Component</div>,
    exact: false,
    location: {
      state: {
        referral: false
      }
    },
    redirectTo: '/'
  }
};

// Unit tests
describe('HOCs/routes/withReferral', () => {
  describe('Default state', () => {
    it('should render without crashing', () => {
      // Mock data
      const props = { ...source.props };
      const component = <withReferral {...props} />;

      // Shallow rendering
      const wrapper = shallow(component);

      // Assertions
      expect(wrapper).toBeDefined();
    });
  });

  // TODO: Props and conditional rendering
});
